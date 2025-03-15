import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Paperclip, Mic, Image, MoreVertical, ChevronLeft, X, RefreshCw } from 'lucide-react';

// Define a clear interface for message objects
interface MessageFileInfo {
  name: string;
  type: string;
  size: string;
}

interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: Date;
  fileInfo?: MessageFileInfo; // Make fileInfo optional with ?
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Scroll to bottom of chat whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate API call to AI service
    setTimeout(() => {
      // In a real app, you would call your AI API here
      const botResponse: Message = {
        id: messages.length + 2,
        content: generateMockResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      // In a real app, you would handle file upload to server
      // For now, just acknowledge the file
      const fileMessage: Message = {
        id: messages.length + 1,
        content: `Attached file: ${file.name}`,
        sender: "user",
        timestamp: new Date(),
        fileInfo: {
          name: file.name,
          type: file.type,
          size: `${(file.size / 1024).toFixed(2)} KB`
        }
      };
      
      setMessages(prev => [...prev, fileMessage]);
      
      // Mock bot response about the file
      setIsLoading(true);
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          content: `I've received your file "${file.name}". Would you like me to analyze it?`,
          sender: "bot",
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const formatTimestamp = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Mock response generator - in a real app, this would be your AI API call
  const generateMockResponse = (query: string): string => {
    const responses = [
      "That's an interesting question! Let me think about that for a moment...",
      "Based on my knowledge, I can tell you that...",
      "There are several ways to approach this. First, consider...",
      "This is a complex topic. The key points to understand are...",
      "I'd be happy to help with that. Here's what I know:"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return `${randomResponse} ${query.length > 20 ? 'Your question was quite detailed, which helps me provide a more accurate response.' : 'Could you provide more details so I can give you a more specific answer?'}`;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white p-2 rounded-full">
                <Bot size={20} />
              </div>
              <h1 className="ml-2 text-lg font-semibold">AI Assistant</h1>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-blue-500 ml-2' : 'bg-gray-300 mr-2'
                }`}>
                  {message.sender === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-600" />}
                </div>
                <div>
                  <div 
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-blue-500 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                    }`}
                  >
                    {message.fileInfo ? (
                      <div className="flex items-center p-2 bg-gray-100 rounded mb-2">
                        <Paperclip size={16} className="text-gray-500 mr-2" />
                        <div className="text-sm">
                          <div className="font-medium">{message.fileInfo.name}</div>
                          <div className="text-gray-500">{message.fileInfo.size}</div>
                        </div>
                      </div>
                    ) : null}
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {formatTimestamp(message.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                  <Bot size={16} className="text-gray-600" />
                </div>
                <div className="bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-200 px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2">
            <button 
              type="button" 
              onClick={handleFileUpload}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
            >
              <Paperclip size={20} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileInputChange}
            />
            <button 
              type="button" 
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
            >
              <Image size={20} />
            </button>
            <button 
              type="button" 
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
            >
              <Mic size={20} />
            </button>
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              className="flex-1 mx-2 py-2 px-3 outline-none"
            />
            <button 
              type="submit" 
              disabled={!inputMessage.trim()}
              className={`p-2 rounded-full ${inputMessage.trim() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}
            >
              <Send size={20} />
            </button>
          </div>
          <div className="text-xs text-center text-gray-500 mt-2">
            I'm an AI assistant. My responses are generated to help you. Please verify important information.
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPage;