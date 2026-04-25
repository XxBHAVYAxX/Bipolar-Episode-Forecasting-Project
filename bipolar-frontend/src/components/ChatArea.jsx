import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, MessageSquare, Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatArea = ({ user }) => {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: 'Hello! I am your Bipolar AI assistant. How can I help you today? You can ask me about your data, forecasts, or general mental health queries.' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleListening = () => {
    if (isListening) {
      if (window.recognitionInstance) {
        window.recognitionInstance.stop();
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition. Please try Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    window.recognitionInstance = recognition;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      
      if (finalTranscript) {
        setInput(prev => prev ? prev + ' ' + finalTranscript : finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        role: 'ai', 
        text: "I'm an AI prototype. This chat interface is ready to be connected to a real LLM backend. How else can I help?" 
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ padding: "24px", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <div style={{
          width: "48px", height: "48px", borderRadius: "16px",
          background: "linear-gradient(135deg, #10b981, #34d399)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 20px -5px rgba(16,185,129,0.3)"
        }}>
          <MessageSquare style={{ width: "24px", height: "24px", color: "white" }} />
        </div>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "white", margin: 0, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
            AI Assistant Chat
          </h1>
          <p style={{ color: "#8b90a5", margin: "4px 0 0 0", fontSize: "15px" }}>
            Ask questions about your data or get support
          </p>
        </div>
      </div>

      <div style={{ 
        display: "flex", flexDirection: "column", height: "calc(100vh - 160px)", 
        maxWidth: "1000px", margin: "0 auto", backgroundColor: "#1e2235", 
        borderRadius: "16px", overflow: "hidden", border: "1px solid #2a2f47", 
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)" 
      }}>
        {/* Header */}
        <div style={{ 
          padding: "20px 24px", borderBottom: "1px solid #2a2f47", 
          backgroundColor: "rgba(30,34,53,0.8)", backdropFilter: "blur(10px)", 
          display: "flex", alignItems: "center", gap: "12px" 
        }}>
          <div style={{ 
            width: "40px", height: "40px", borderRadius: "12px", 
            background: "linear-gradient(135deg, #8b5cf6, #a855f7)", 
            display: "flex", alignItems: "center", justifyContent: "center" 
          }}>
            <Bot style={{ width: "24px", height: "24px", color: "white" }} />
          </div>
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "white", margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>Bipolar AI Companion</h2>
            <p style={{ fontSize: "13px", color: "#8b90a5", margin: 0 }}>Online and ready to assist</p>
          </div>
        </div>

        {/* Messages Area */}
        <div style={{ 
          flex: 1, overflowY: "auto", padding: "24px", 
          display: "flex", flexDirection: "column", gap: "20px" 
        }}>
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{
                  display: "flex",
                  flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                  gap: "12px",
                  alignItems: "flex-end"
                }}
              >
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  backgroundColor: msg.role === 'user' ? "#3b82f6" : "#2a2f47",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0
                }}>
                  {msg.role === 'user' ? 
                    <User style={{ width: "18px", height: "18px", color: "white" }} /> : 
                    <Bot style={{ width: "18px", height: "18px", color: "#a855f7" }} />
                  }
                </div>
                <div style={{
                  maxWidth: "70%",
                  padding: "12px 16px",
                  borderRadius: "16px",
                  backgroundColor: msg.role === 'user' ? "#8b5cf6" : "#2a2f47",
                  color: "white",
                  fontSize: "15px",
                  lineHeight: "1.5",
                  borderBottomRightRadius: msg.role === 'user' ? "4px" : "16px",
                  borderBottomLeftRadius: msg.role === 'ai' ? "4px" : "16px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}
            >
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                backgroundColor: "#2a2f47", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Bot style={{ width: "18px", height: "18px", color: "#a855f7" }} />
              </div>
              <div style={{
                padding: "16px", borderRadius: "16px", backgroundColor: "#2a2f47",
                borderBottomLeftRadius: "4px", display: "flex", gap: "6px", alignItems: "center"
              }}>
                <style>
                  {`
                    @keyframes spin { 100% { transform: rotate(360deg); } }
                  `}
                </style>
                <Loader2 style={{ width: "16px", height: "16px", color: "#a855f7", animation: "spin 1s linear infinite" }} />
                <span style={{ color: "#8b90a5", fontSize: "13px" }}>AI is typing...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: "20px 24px", borderTop: "1px solid #2a2f47", backgroundColor: "rgba(30,34,53,0.9)" }}>
          <div style={{ 
            display: "flex", gap: "12px", alignItems: "center", 
            backgroundColor: "#151826", padding: "8px 8px 8px 16px", 
            borderRadius: "24px", border: "1px solid #2a2f47", 
            transition: "border-color 0.2s" 
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message here..."
              style={{
                flex: 1, backgroundColor: "transparent", border: "none", color: "white",
                fontSize: "15px", outline: "none", padding: "8px 0"
              }}
            />
            <button
              onClick={toggleListening}
              style={{
                backgroundColor: isListening ? "rgba(239, 68, 68, 0.2)" : "transparent",
                color: isListening ? "#ef4444" : "#8b90a5", 
                border: "none", width: "40px", height: "40px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", 
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {isListening ? <MicOff style={{ width: "20px", height: "20px" }} /> : <Mic style={{ width: "20px", height: "20px" }} />}
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              style={{
                backgroundColor: input.trim() && !isTyping ? "#8b5cf6" : "#2a2f47",
                color: "white", border: "none", width: "40px", height: "40px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", 
                cursor: input.trim() && !isTyping ? "pointer" : "not-allowed",
                transition: "all 0.2s", transform: input.trim() && !isTyping ? "scale(1)" : "scale(0.95)"
              }}
            >
              <Send style={{ width: "18px", height: "18px", marginLeft: "2px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
