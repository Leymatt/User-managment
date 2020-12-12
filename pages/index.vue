<template>
  <div class="container">
    <Header />
    <Userslist />
  </div>
</template>

<script>
import Header from '~/components/header'
import Userslist from '~/components/userslist'
export default {
  components: { Userslist, Header }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  outline: none;
}

.container {
  background-color: #415265;
  min-height: 100vh;
}
</style>
