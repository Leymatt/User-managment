<template>
  <div class="user-info">
    <Header />
    <Userprofile />
  </div>
</template>

<script>
import Header from '~/components/header'
import Userprofile from '~/components/userprofile'
export default {
  name: 'Userinfo',
  components: { Userprofile, Header }
}
</script>

<style scoped>
  .user-info {
    background-color: #415265;
    height: 100vh;
  }
</style>
