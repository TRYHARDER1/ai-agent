<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';
import ChatInterface from '../components/ChatInterface.vue';
import { api } from '../services/api';

const chatInterface = ref<InstanceType<typeof ChatInterface> | null>(null);
let eventSource: EventSource | null = null;

const handleSendMessage = (message: string) => {
  // Close any existing connection
  if (eventSource) {
    eventSource.close();
  }

  // Create a new connection to the SSE endpoint
  eventSource = api.connectToSuperAgent(message);
  
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
  <div class="super-agent-view">
    <ChatInterface
      ref="chatInterface"
      title="AI 超级智能体"
      @send-message="handleSendMessage"
    />
  </div>
</template>

<style scoped>
.super-agent-view {
  padding: 1rem;
}
</style> 