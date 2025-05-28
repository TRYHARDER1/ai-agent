import axios from 'axios';

const BASE_URL = 'http://localhost:8123/api';

export const api = {
  /**
   * Connects to the AI Love Master service using SSE
   * @param message User message
   * @param chatId Unique chat ID
   * @returns EventSource connection
   */
  connectToLoveMaster(message: string, chatId: string): EventSource {
    const url = new URL(`${BASE_URL}/ai/love_app/chat/sse`);
    url.searchParams.append('message', message);
    url.searchParams.append('chatId', chatId);
    
    return new EventSource(url.toString());
  },

  /**
   * Connects to the AI Super Agent service using SSE
   * @param message User message
   * @returns EventSource connection
   */
  connectToSuperAgent(message: string): EventSource {
    const url = new URL(`${BASE_URL}/ai/manus/chat`);
    url.searchParams.append('message', message);
    
    return new EventSource(url.toString());
  },

  /**
   * Generate a unique chat ID for new conversations
   * @returns Unique chat ID
   */
  generateChatId(): string {
    return 'chat_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  }
}; 