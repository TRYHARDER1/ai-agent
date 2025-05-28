<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ChatInterface from '../components/ChatInterface.vue';
import { api } from '../services/api';

const chatInterface = ref<InstanceType<typeof ChatInterface> | null>(null);
let eventSource: EventSource | null = null;
const chatId = ref<string>('');

onMounted(() => {
  // Generate a unique chat ID when component mounts
  chatId.value = api.generateChatId();
});

const handleSendMessage = (message: string) => {
  // Close any existing connection
  if (eventSource) {
    eventSource.close();
  }

  // Create a new connection to the SSE endpoint
  eventSource = api.connectToLoveMaster(message, chatId.value);
  
  eventSource.onmessage = (event) => {
    if (event.data && chatInterface.value) {
      chatInterface.value.addMessage(event.data, false);
    }
  };
  
  eventSource.onerror = () => {
    console.error('SSE Connection error');
    if (eventSource) {
      eventSource.close();
    }
  };
};

onBeforeUnmount(() => {
  // Clean up the connection when component unmounts
  if (eventSource) {
    eventSource.close();
  }
});
</script>

<template>
  <div class="love-master-view">
    <ChatInterface
      ref="chatInterface"
      title="AI 恋爱大师"
      @send-message="handleSendMessage"
    />
    <div class="chat-info">
      <p>聊天室ID: {{ chatId }}</p>
    </div>
  </div>
</template>

<style scoped>
.love-master-view {
  padding: 1rem;
}

.chat-info {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #666;
}
</style> 