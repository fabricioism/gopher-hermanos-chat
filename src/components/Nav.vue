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
import { useAuth } from '@/bot'
export default {
  components: { Avatar },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>