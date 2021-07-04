<template>
  <div class="message">
    <span v-if="!sender">{{ name }}</span>
    <div style="display: flex" :style="sender ? 'flex-direction: row-reverse;' : ''">
      <Avatar style="margin-top: 0.25rem;" :src="photoUrl" />
      <div class="text" style="width: 75%;" :style="sender ? 'background-color: rgba(6, 95, 70, 1)' : 'background-color: rgba(55, 65, 81, 1)'">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
export default {
  components: { Avatar },
  props: {
    name: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
}
</script>