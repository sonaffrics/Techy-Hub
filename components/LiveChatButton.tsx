import React, { useState } from 'react';

interface LiveChatButtonProps {
  phoneNumber: string; // Used for a fallback call to action
}

const LiveChatButton: React.FC<LiveChatButtonProps> = ({ phoneNumber }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    // In a real application, you'd integrate with a live chat SDK here
    // e.g., if (window.MyChatSDK) window.MyChatSDK.toggleChat();
    console.log(`Live chat ${isChatOpen ? 'closed' : 'opened'}`);
  };

  const handleCallSupport = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
      {isChatOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 w-64 md:w-80 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-mb-text">Live Support Chat</h3>
            <button onClick={handleChatToggle} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Our support agents are ready to assist you.
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:ring-mb-primary focus:border-mb-primary text-sm"
            rows={3}
            placeholder="Type your message..."
          ></textarea>
          <button
            className="w-full bg-mb-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 text-sm"
            onClick={() => console.log('Message sent!')}
          >
            Send Message
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
            For urgent issues, call us at <a href={`tel:${phoneNumber}`} className="text-mb-primary hover:underline">{phoneNumber}</a>
          </p>
        </div>
      )}

      {/* Main Chat/Call Button */}
      <div className="flex flex-col md:flex-row-reverse items-center space-y-3 md:space-y-0 md:space-x-3 md:space-x-reverse">
        {/* Call button - always visible */}
        <button
          onClick={handleCallSupport}
          className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          aria-label="Call Support"
          title={`Call Support: ${phoneNumber}`}
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </button>

        {/* Live Chat Button */}
        <button
          onClick={handleChatToggle}
          className={`p-3 ${isChatOpen ? 'bg-mb-secondary' : 'bg-mb-primary'} text-white rounded-full shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-mb-primary focus:ring-offset-2 transition-transform transform hover:scale-105`}
          aria-label="Toggle Live Chat"
          title="Live Chat Support"
        >
          {isChatOpen ? (
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default LiveChatButton;