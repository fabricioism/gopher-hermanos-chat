<template>
  <div class="container-sm margin-t-5">
    <div class="margin-x-5" >
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :name="userName"
        :photo-url="userPhotoURL"
        :sender="userId === user?.uid"
      >
        {{ text }}
      </Message>
    </div>
  </div>
  <div ref="bottom margin-t-5" />
  <div class="bottom">
    <div class="container-sm">
      <form @submit.prevent="send">
        <input v-model="message" placeholder="Aa" required />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useChat, useUser } from '@/bot'
import SendIcon from './SendIcon.vue'
import Message from './Message.vue'

export default {
  components: { Message, SendIcon },
  setup() {
    const { user } = useUser()
    const { messages, sendMessage } = useChat()
    const bottom = ref(null)
    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: 'smooth' })
        })
      },
      { deep: true }
    )
    const message = ref('')
    const send = async () => {
      await sendMessage(message.value)
      message.value = ''
    }
    return { user,  messages, bottom, message, send }
  }
}
</script>