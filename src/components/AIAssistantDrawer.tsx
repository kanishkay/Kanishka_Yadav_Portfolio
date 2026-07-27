import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, RefreshCw, Briefcase, Code, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const SAMPLE_PROMPTS = [
  { icon: Briefcase, label: "Why hire Kanishka for AI Engineering?", prompt: "Why should a hiring manager recruit Kanishka for a Summer 2027 AI Engineering internship?" },
  { icon: Code, label: "Explain AGENTIS Architecture", prompt: "Explain how Kanishka designed the AGENTIS multi-agent clinical trial matching platform with IBM watsonx.ai." },
  { icon: GraduationCap, label: "SJSU Coursework Summary", prompt: "What key computer science & data science courses has Kanishka completed at San José State University?" },
];

export function AIAssistantDrawer({ isOpen, onClose }: AIAssistantDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I'm Kanishka's AI Portfolio Concierge. Ask me anything about Kanishka's AI projects, engineering decisions, SJSU coursework, or paste a job description to evaluate fit!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState<'Recruiter' | 'Hiring Manager' | 'Developer' | 'Student'>('Recruiter');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: query
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          userRole
        }),
      });

      const data = await response.json();
      const assistantReply = data.reply || "Kanishka Yadav is a Data Science student at SJSU building practical AI applications, AGENTIS multi-agent systems, AutoPilot AI, Acron semantic code search, and credit default ML models. Contact Kanishka at 11kanishkay@gmail.com!";

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: assistantReply
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "Kanishka's AI Assistant is temporarily reaching quota limits. In summary: Kanishka Yadav is a Data Science student at San José State University seeking Summer 2027 AI/ML/Backend internships with strong Python, TensorFlow, PyTorch, RAG, and multi-agent AI skills."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal / Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg bg-[#0f0f0f] border-l border-white/10 shadow-2xl flex flex-col text-white"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-black font-bold shadow-md">
                  <Sparkles className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Kanishka&apos;s AI Concierge
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-teal-400 border border-blue-500/20">
                      Gemini 2.5
                    </span>
                  </h3>
                  <p className="text-[11px] text-[#a1a1a1]">
                    Ask questions about Kanishka&apos;s skills, projects, or experience
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Role Filter Selector */}
            <div className="px-4 py-2 bg-black/40 border-b border-white/10 flex items-center justify-between text-xs">
              <span className="text-[#a1a1a1] font-mono">Perspective:</span>
              <div className="flex items-center gap-1">
                {(['Recruiter', 'Hiring Manager', 'Developer'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => setUserRole(role)}
                    className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                      userRole === role
                        ? 'bg-white text-black font-bold'
                        : 'text-[#a1a1a1] hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/20">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-[#151515] text-[#ededed] border border-white/10 rounded-bl-none whitespace-pre-wrap'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-xs text-teal-400 font-mono p-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Generating responses...
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Sample Prompts */}
            {messages.length < 3 && (
              <div className="px-4 py-2 border-t border-white/10 space-y-1.5 bg-black/40">
                <span className="text-[10px] font-mono text-[#717171] uppercase tracking-wider">Suggested Questions:</span>
                <div className="flex flex-col gap-1.5">
                  {SAMPLE_PROMPTS.map((sample, idx) => {
                    const Icon = sample.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSend(sample.prompt)}
                        className="flex items-center gap-2 p-2 rounded-xl bg-[#151515] hover:bg-white/10 border border-white/5 text-left text-xs text-[#a1a1a1] hover:text-white transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span className="truncate">{sample.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input Box */}
            <div className="p-3 border-t border-white/10 bg-black">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question or paste job requirements..."
                  className="flex-1 bg-[#151515] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#717171] focus:outline-none focus:border-white/30"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#e1e1e1] text-black disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
