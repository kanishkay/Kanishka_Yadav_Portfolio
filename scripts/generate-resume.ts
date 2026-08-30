import fs from 'fs';
import path from 'path';

// Generate a valid PDF with Kanishka Yadav's resume text
function generateResumePdf() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Create a clean, compliant PDF 1.4 document
  const pdfContent = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
      /F3 6 0 R
    >>
  >>
  /Contents 7 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Oblique
>>
endobj
7 0 obj
<<
  /Length 8 0 R
>>
stream
BT
/F1 20 Tf
54 740 Td
(Kanishka Yadav) Tj
ET
BT
/F2 9.5 Tf
54 722 Td
((925) 404-9305  |  11kanishkay@gmail.com  |  linkedin.com/in/kanishkayadvv  |  github.com/kanishkay  |  San Jose, CA) Tj
ET
BT
/F1 11 Tf
54 695 Td
(EDUCATION) Tj
ET
BT
/F1 10 Tf
54 678 Td
(San Jose State University) Tj
/F2 9.5 Tf
200 0 Td
(San Jose, CA) Tj
/F2 9.5 Tf
-200 -14 Td
(B.S. Data Science, GPA: 3.72) Tj
/F2 9.5 Tf
200 0 Td
(Expected May 2027) Tj
/F1 10 Tf
-200 -16 Td
(Cornell University | Machine Learning Foundations e-Certificate) Tj
/F2 9.5 Tf
300 0 Td
(May 2026 - Aug. 2026) Tj
ET
BT
/F1 11 Tf
54 620 Td
(EXPERIENCE) Tj
ET
BT
/F1 10 Tf
54 602 Td
(7-Eleven) Tj
/F2 9.5 Tf
350 0 Td
(Irving, TX) Tj
/F3 9.5 Tf
-350 -13 Td
(Break Through Tech AI Studio Fellow) Tj
/F2 9.5 Tf
350 0 Td
(Aug. 2026 - Present) Tj
/F2 9 Tf
-350 -14 Td
(- Selected for a Break Through Tech AI Studio team partnering with 7-Eleven on an industry-sponsored AI challenge.) Tj
/F1 10 Tf
0 -18 Td
(SAP America, Inc.) Tj
/F2 9.5 Tf
350 0 Td
(Palo Alto, CA) Tj
/F3 9.5 Tf
-350 -13 Td
(AI Software Developer Intern) Tj
/F2 9.5 Tf
350 0 Td
(Jun. 2026 - Aug. 2026) Tj
/F2 9 Tf
-350 -14 Td
(- Built an AI-powered Python CLI converting natural language into structured JIRA tickets across 6 workstreams.) Tj
/F2 9 Tf
0 -12 Td
(  Managed 700+ tickets with zero rate-limit failures through custom throttling and retry logic.) Tj
/F2 9 Tf
0 -12 Td
(- Reworked system prompt and tool definitions, cutting token usage per invocation by roughly 70%.) Tj
/F2 9 Tf
0 -12 Td
(- Developed Ansible playbook to reconcile NetBox and vCenter host status for maintenance-mode edge cases.) Tj
/F1 10 Tf
0 -18 Td
(AGENTIS) Tj
/F2 9.5 Tf
350 0 Td
(San Jose, CA) Tj
/F3 9.5 Tf
-350 -13 Td
(Co-Founder & AI Engineer) Tj
/F2 9.5 Tf
350 0 Td
(Feb. 2026 - Aug. 2026) Tj
/F2 9 Tf
-350 -14 Td
(- Co-founded a clinical trial-matching platform integrating IBM watsonx.ai and ClinicalTrials.gov API.) Tj
/F2 9 Tf
0 -12 Td
(- Built Python backend workflows to retrieve trial data, evaluate patient eligibility, and rank candidate trials.) Tj
/F2 9 Tf
0 -12 Td
(- Designed modular validation components transforming raw external API data into interpretable recommendations.) Tj
ET
BT
/F1 11 Tf
54 370 Td
(PROJECTS) Tj
ET
BT
/F1 10 Tf
54 352 Td
(AutoPilot AI  |  Next.js, React, TypeScript, NVIDIA Nemotron, Holo, Docker) Tj
/F2 9 Tf
0 -13 Td
(- Built a multi-agent automotive service advisor coordinating diagnosis, parts sourcing, and repair planning.) Tj
/F2 9 Tf
0 -12 Td
(- Integrated NVIDIA Nemotron with a computer-use agent to retrieve replacement-part data and generate repair plans.) Tj
/F2 9 Tf
0 -12 Td
(- Engineered schema validation, deterministic fallbacks, and human-in-the-loop approval controls.) Tj
/F1 10 Tf
0 -16 Td
(Acron  |  Python, Flask, SQLite, sqlite-vec, SentenceTransformers, OpenRouter) Tj
/F2 9 Tf
0 -13 Td
(- Built a Python code intelligence system that indexes GitHub repos and supports natural-language exploration.) Tj
/F2 9 Tf
0 -12 Td
(- Developed an indexing pipeline to parse source files, generate embeddings, and persist metadata in SQLite.) Tj
/F2 9 Tf
0 -12 Td
(- Designed relational SQLite schema with sqlite-vec vector indexes for fast source-level retrieval.) Tj
/F1 10 Tf
0 -16 Td
(ContextMeter  |  React, TypeScript, Express, Gemini, Docker) Tj
/F2 9 Tf
0 -13 Td
(- Built a full-stack platform for evaluating and optimizing AI agent context before model inference.) Tj
/F2 9 Tf
0 -12 Td
(- Developed React/TypeScript interfaces and Express backend services for processing evaluations.) Tj
/F2 9 Tf
0 -12 Td
(- Implemented deterministic, heuristic, and AI-assisted validation workflows for reproducibility.) Tj
ET
BT
/F1 11 Tf
54 185 Td
(TECHNICAL SKILLS) Tj
ET
BT
/F1 9.5 Tf
54 168 Td
(Languages: ) Tj
/F2 9.5 Tf
65 0 Td
(Python, Java, C++, JavaScript, TypeScript, SQL, HTML, R) Tj
/F1 9.5 Tf
-65 -13 Td
(AI/ML: ) Tj
/F2 9.5 Tf
65 0 Td
(TensorFlow, LangChain, IBM watsonx.ai, NVIDIA Nemotron, SentenceTransformers, RAG, embeddings) Tj
/F1 9.5 Tf
-65 -13 Td
(Systems & Backend: ) Tj
/F2 9.5 Tf
65 0 Td
(FastAPI, Flask, Node.js, Express, REST APIs, Linux) Tj
/F1 9.5 Tf
-65 -13 Td
(Frontend: ) Tj
/F2 9.5 Tf
65 0 Td
(React, Next.js, Streamlit) Tj
/F1 9.5 Tf
-65 -13 Td
(Tools: ) Tj
/F2 9.5 Tf
65 0 Td
(Docker, Kubernetes, IBM Cloud, Git, GitHub, Ansible, PostgreSQL, MySQL, SQLite) Tj
ET
endstream
endobj
8 0 obj
3200
endobj
xref
0 9
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000282 00000 n 
0000000363 00000 n 
0000000439 00000 n 
0000000523 00000 n 
0000003780 00000 n 
trailer
<<
  /Size 9
  /Root 1 0 R
>>
startxref
3805
%%EOF
`;

  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfContent.trim());
  console.log('Created /public/resume.pdf successfully');
}

generateResumePdf();
