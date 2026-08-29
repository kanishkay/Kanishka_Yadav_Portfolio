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
  { icon: Briefcase, label: "Why recruit Kanishka for AI Engineering?", prompt: "Why should a hiring team recruit Kanishka for an AI Engineering or software role?" },
  { icon: Code, label: "Explain AGENTIS Architecture", prompt: "Explain how Kanishka designed the AGENTIS multi-agent clinical trial matching platform with IBM watsonx.ai." },
  { icon: GraduationCap, label: "SJSU Coursework Summary", prompt: "What key computer science & data science courses has Kanishka completed at San José State University?" },
];

export function AIAssistantDrawer({ isOpen, onClose }: AIAssistantDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello. I'm Kanishka's portfolio AI assistant. Ask any questions regarding Kanishka's machine learning systems, project architectures, coursework at SJSU, or role alignment."
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState<'Recruiter' | 'Hiring Manager' | 'Developer'>('Recruiter');
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
          content: "Kanishka Yadav is a Data Science student at San José State University seeking Summer 2027 AI/ML/Backend roles with strong Python, TensorFlow, PyTorch, RAG, and multi-agent AI systems experience."
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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal / Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#09090b] border-l border-zinc-800 shadow-2xl flex flex-col text-zinc-100"
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 text-blue-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                    Portfolio AI Concierge
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                      Gemini 2.5
                    </span>
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-normal">
                    Ask questions about skills, projects, or background
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Role Filter Selector */}
            <div className="px-4 py-2 bg-zinc-950/40 border-b border-zinc-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 text-[11px]">Perspective:</span>
              <div className="flex items-center gap-1">
                {(['Recruiter', 'Hiring Manager', 'Developer'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => setUserRole(role)}
                    className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                      userRole === role
                        ? 'bg-zinc-200 text-zinc-950 font-semibold'
                        : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-md bg-zinc-800/80 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-zinc-700/60">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none font-normal'
                        : 'bg-zinc-900/70 text-zinc-200 border border-zinc-800 rounded-bl-none whitespace-pre-wrap font-normal'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-6 h-6 rounded-md bg-zinc-800 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5 border border-zinc-700">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-xs text-blue-400 font-mono p-1">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  Generating response...
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Sample Prompts */}
            {messages.length < 3 && (
              <div className="px-3.5 py-2 border-t border-zinc-800 space-y-1 bg-zinc-950/40">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Suggested Questions:</span>
                <div className="flex flex-col gap-1">
                  {SAMPLE_PROMPTS.map((sample, idx) => {
                    const Icon = sample.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSend(sample.prompt)}
                        className="flex items-center gap-2 p-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/60 text-left text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                      >
                        <Icon className="w-3 h-3 text-blue-400 shrink-0" />
                        <span className="truncate">{sample.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input Box */}
            <div className="p-3 border-t border-zinc-800 bg-zinc-950">
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
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

