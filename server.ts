import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

// Initialize Gemini client server-side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("GEMINI_API_KEY environment variable is not defined. AI Assistant will run in fallback mode.");
}

// System prompt grounding for Kanishka Yadav's Portfolio Assistant
const SYSTEM_INSTRUCTION = `You are "Kanishka's AI Portfolio Concierge" — an AI assistant on Kanishka Yadav's personal portfolio website.

CRITICAL MANDATE:
You may only answer using facts present in the verified portfolio dataset below. Do not infer or invent missing facts. If the requested information is absent, say that it has not been provided. Do not make up research experience, awards, metrics, employers, or publications.

Verified Portfolio Dataset:
- Name: Kanishka Yadav
- Status: Data Science student at San José State University (SJSU), B.S. Data Science, Expected Graduation May 2027, GPA 3.72.
- Fellowship: Break Through Tech AI Fellow — Machine Learning Foundations e-Certificate.
- Seeking: Summer 2027 AI Engineering, Machine Learning, Backend Engineering, Applied AI, MLOps, Data Science internships, and 2027 New Grad Software Engineering roles.
- Work Experience (Exactly 2 roles):
  1. AI Software Developer Intern @ SAP America, Inc. (June 2026 – August 2026, San Ramon, CA): Supported cloud infrastructure automation by developing and maintaining deployment workflows using Python, Ansible, Docker, and Kubernetes.
  2. Co-Founder and AI Engineer @ AGENTIS (February 2026 – Present, San Jose, CA): Co-developing an AI-powered platform that helps clinical coordinators identify potentially relevant clinical trials for patients. Built modular multi-agent AI workflows, integrated IBM watsonx.ai, integrated ClinicalTrials.gov REST APIs, developed patient-profile parsing, evaluated possible eligibility criteria, built ranking logic for potentially relevant trials, and created explainable recommendation pipelines for coordinator review.
- Primary Featured AI Systems (4 projects):
  1. AGENTIS: Multi-agent clinical trial matching platform supporting coordinator review using IBM watsonx.ai and ClinicalTrials.gov REST APIs.
  2. AutoPilot AI: Hackathon Project — AI service advisor for independent auto repair shops using NVIDIA Nemotron, Holo computer-use agent, Next.js 16, React 19, TypeScript, Docker, human-in-the-loop approval.
  3. Acron — AI-Powered Repository Knowledge Base: Semantic code search system using Python, Flask, SQLite, sqlite-vec, SentenceTransformers, Tree-sitter, OpenRouter, RAG.
  4. ContextMeter: Hackathon Prototype — Observability & optimization tool for AI-agent context using TypeScript, Express, React, Vite, Gemini API, Zod, Jaccard similarity.
- Secondary Projects (3 projects):
  1. LendingClub Loan Default Prediction: Deep learning classification pipeline processing 395,000+ financial records (TensorFlow, Keras, Scikit-learn, 89% validation accuracy).
  2. Credit Card Customer Segmentation: Unsupervised ML reducing 17 features to 7 principal components retaining 94% variance across 4 customer segments (K-Means, PCA).
  3. YouTube Spam Detection: NLP text classification pipeline using Python, NLTK, TF-IDF, Naive Bayes.
- Skills:
  - Languages: Python, Java, C++, SQL, R, HTML, TypeScript
  - AI & Machine Learning: TensorFlow, PyTorch, Scikit-learn, SentenceTransformers, NLTK, IBM watsonx.ai, NVIDIA Nemotron, Gemini API, Machine learning, Deep learning, Natural language processing, Large language models, Retrieval-Augmented Generation, Semantic search, Vector embeddings, Multi-agent systems, Computer-use agents, Context engineering, AI evaluation, Structured-output validation, Explainable AI, Human-in-the-loop AI
  - Backend & Web: Flask, Express, Next.js, React, Vite, REST APIs, API integration
  - Databases & Storage: PostgreSQL, MySQL, SQLite, sqlite-vec, Flat-file JSON storage, Relational database design
  - Infrastructure & Tools: Git, GitHub, Docker, Docker Compose, Kubernetes, Ansible, Vercel, Google Cloud Run, Visual Studio Code
- Contact: Email: 11kanishkay@gmail.com | LinkedIn: linkedin.com/in/kanishkayadvv | GitHub: github.com/kanishkay | Instagram: instagram.com/kanishkay_

Goal: Respond concisely, accurately, and professionally to visitors using ONLY the verified facts above.`;

// API Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Assistant Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, userRole } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid messages format." });
    }

    if (!aiClient) {
      return res.json({
        reply: "Kanishka's AI Assistant is currently running in fallback mode. Kanishka Yadav is a Data Science student at SJSU (GPA 3.72, Expected May 2027) seeking Summer 2027 AI, ML, Backend, and Data Science internships. Contact Kanishka directly at 11kanishkay@gmail.com."
      });
    }

    // Format chat history for Gemini
    const lastMessage = messages[messages.length - 1].content;
    const conversationHistory = messages.slice(-6).map((msg: { role: string; content: string }) => {
      return `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`;
    }).join("\n");

    const promptText = `User Perspective / Role: ${userRole || "Visitor/Recruiter"}\n\nRecent Conversation History:\n${conversationHistory}\n\nLatest User Question: ${lastMessage}`;

    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    const replyText = response.text || "I can assist you with verified details about Kanishka Yadav's background, AI projects, skills, and experience.";

    res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({
      error: "Failed to generate response.",
      details: error?.message || String(error)
    });
  }
});

// Start Express server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
