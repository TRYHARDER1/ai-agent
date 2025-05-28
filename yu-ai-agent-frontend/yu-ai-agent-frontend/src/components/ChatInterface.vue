<script setup lang="ts">
import { ref, onMounted, defineEmits, watch } from 'vue';
import ChatMessage from './ChatMessage.vue';

interface Message {
  text: string;
  isUser: boolean;
}

const props = defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: 'send-message', message: string): void;
}>();

const messages = ref<Message[]>([]);
const inputMessage = ref('');
const chatContainer = ref<HTMLElement | null>(null);

const addMessage = (text: string, isUser: boolean) => {
  messages.value.push({
    text,
    isUser,
  });
  scrollToBottom();
};

const sendMessage = () => {
  if (inputMessage.value.trim()) {
    const message = inputMessage.value;
    addMessage(message, true);
    emit('send-message', message);
    inputMessage.value = '';
  }
};

const scrollToBottom = () => {
  setTimeout(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  }, 50);
};

watch(messages, () => {
  scrollToBottom();
}, { deep: true });

defineExpose({
  addMessage,
});
</script>

<template>
  <div class="chat-interface">
    <div class="chat-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="chat-container" ref="chatContainer">
      <div v-if="messages.length === 0" class="empty-state">
        <p>发送一条消息开始聊天吧！</p>
      </div>
      <ChatMessage
        v-for="(message, index) in messages"
        :key="index"
        :message="message.text"
        :isUser="message.isUser"
      />
    </div>
    <div class="chat-input">
      <input
        type="text"
        v-model="inputMessage"
        placeholder="输入消息..."
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage" :disabled="!inputMessage.trim()">发送</button>
    </div>
  </div>
</template>

<style scoped>
.chat-interface {
  height: calc(100vh - 200px);
  min-height: 500px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-header {
  background-color: #42b983;
  color: white;
  padding: 1rem;
  text-align: center;
}

.chat-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.chat-container {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #f9f9f9;
}

.empty-state {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #999;
}

.chat-input {
  display: flex;
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid #eee;
}

.chat-input input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 0.5rem;
  font-size: 1rem;
}

.chat-input button {
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.chat-input button:hover:not(:disabled) {
  background-color: #3aa876;
}

.chat-input button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style> 