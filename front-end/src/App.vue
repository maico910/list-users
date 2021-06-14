<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/utils/axios'
import { User } from '@/models/User'

export default defineComponent({
  data() {
    return {
      users: [] as User[],
    }
  },

  created() {
    this.fetchUsers()
  },

  methods: {
    async fetchUsers() {
      try {
        const { data } = await axios.get('/users')
        this.users = data
      } catch (error) {
        console.warn(error)
      }
    },
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
