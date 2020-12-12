<template>
  <div class="header">
    <div class="header__content">
      <router-link to="/">
        <div class="header__logo" />
      </router-link>
      <h1 class="header__title">
        Users management
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  .header {
    display: flex;
    height: 115px;
    background-color: #333333;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;

    .header__content {
      display: flex;
      align-self: center;
      margin-left: 40px;
      @media (max-width: 390px) {
        margin-left: 20px;
      }

      .header__logo {
        background: url("../assets/icons/koala.png") top left / cover no-repeat;
        width: 50px;
        height: 50px;
        margin-right: 15px;
        align-self: center;
        cursor: pointer;
      }

      .header__title {
        font-size: 28px;
        text-transform: uppercase;
        color: #ffd4b5;
        height: fit-content;
        align-self: center;
        @media(max-width: 390px) {
          font-size: 22px;
        }
      }
    }
  }
</style>
