<script setup lang="ts">
defineProps<{
  message: string;
  isUser: boolean;
}>();
</script>

<template>
  <div class="chat-message" :class="{ 'user-message': isUser, 'ai-message': !isUser }">
    <div class="avatar">
      <div class="avatar-icon">{{ isUser ? '👤' : '🤖' }}</div>
    </div>
    <div class="message-content">
      <div class="message-text">{{ message }}</div>
    </div>
  </div>
</template>

<style scoped>
.chat-message {
  display: flex;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.user-message {
  flex-direction: row-reverse;
  text-align: right;
}

.ai-message {
  text-align: left;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-message .avatar {
  background-color: #42b983;
}

.ai-message .avatar {
  background-color: #64a9f3;
}

.avatar-icon {
  font-size: 1.2rem;
}

.message-content {
  max-width: 70%;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  word-break: break-word;
}

.user-message .message-content {
  background-color: #dcf8eb;
  margin-right: 0.5rem;
}

.ai-message .message-content {
  background-color: #e8f4fe;
  margin-left: 0.5rem;
}

.message-text {
  font-size: 0.95rem;
  line-height: 1.4;
  white-space: pre-wrap;
}
</style> 