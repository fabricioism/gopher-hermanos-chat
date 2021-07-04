<template>
  <nav>
    <div>
      <h1><strong>Los Gophers</strong> Hermanos</h1>

      <div>
        <Avatar :src="user.photoURL" />
      </div>
      
    </div>
  </nav>
</template>

<script>
import Avatar from './Avatar.vue'
import {  useUser } from '@/bot'
export default {
  components: { Avatar },
  setup() {
    const { user } = useUser()
    return { user}
  }
}
</script>