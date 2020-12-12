<template>
  <div class="new-user">
    <div class="new-user__wrapper">
      <div class="new-user__header">
        <div class="new-user__header-close" @click="hidePopup" />
        <h3 class="new-user__header-title">
          Добавьте пользователя
        </h3>
        <form class="new-user__form" method="post" name="new-user" @submit.prevent="submit">
          <label class="new-user__label">
            <input
              id="userName"
              v-model="userName"
              type="text"
              class="new-user__input"
              placeholder="ФИО"
            >
          </label>
          <label class="new-user__label">
            <input
              id="userMail"
              v-model="userMail"
              type="email"
              class="new-user__input"
              placeholder="Почта"
            >
          </label>
          <label class="new-user__label">
            <input
              id="userPassword"
              v-model="userPassword"
              type="password"
              class="new-user__input"
              placeholder="Пароль"
            >
          </label>
          <label class="new-user__label">
            <input
              id="userPhone"
              v-model="userPhone"
              type="tel"
              class="new-user__input"
              placeholder="Телефон"
            >
          </label>
          <label class="new-user__label-modal">
            <select v-model="userRank" class="new-user__select">
              <option>
                Клиент
              </option>
              <option>
                Партнер
              </option>
              <option>
                Админ
              </option>
            </select>
          </label>
          <button class="new-user__button" type="submit">
            <span />
            <span />
            <span />
            <span />
            Добавить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newusermodal',
  data () {
    return {
      userMail: '',
      userPassword: '',
      userPhone: '',
      userName: '',
      userRank: ''
    }
  },
  methods: {
    hidePopup () {
      this.$emit('hidePopup')
    },
    submit () {
      const getDate = new Date()
      const year = getDate.getFullYear()
      const month = getDate.getMonth()
      const date = getDate.getDate()
      const fullDate = `${date}.${month + 1}.${year}`

      const user = {
        userMail: this.userMail,
        userPassword: this.userPassword,
        userPhone: this.userPhone,
        userName: this.userName,
        userRank: this.userRank,
        id: Date.now(),
        userDate: fullDate,
        userChangeDate: fullDate
      }
      this.$store.dispatch('createUser', user)
      this.$emit('hidePopup')
    }
  }
}
</script>

<style lang="scss">

  .new-user {
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: visibility 0.5s linear, opacity 0.5s;

    .new-user__wrapper {
      max-width: 600px;
      width: 100%;
      height: 560px;
      background-color: #ffffff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: fixed;
      border-radius: 10px;

      .new-user__header {
        display: flex;
        flex-direction: column;

        .new-user__header-close {
          background: url("../../assets/icons/close-icon.svg") top left / cover no-repeat;
          width: 30px;
          height: 30px;
          align-self: flex-end;
          margin: 20px 20px 0 0;
          cursor: pointer;
        }

        .new-user__header-title {
          font-size: 24px;
          width: fit-content;
          margin: 25px auto 0;
          text-transform: uppercase;
          color: #464646;
        }
      }

      .new-user__form {
        max-width: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;

        .new-user__label {
          display: flex;
          margin-top: 30px;
          width: 80%;

          .new-user__input {
            border: none;
            padding-bottom: 10px;
            outline: none;
            display: block;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            width: 100%;
            font-size: 18px;
          }
        }

        .new-user__label-modal {
          width: 70%;
          margin: 35px auto 0;

          .new-user__select {
            width: 100%;
            outline: none;
            border: none;
            box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            height: 40px;
            padding: 0 0 0 10px;
            color: #5f5f5f;
          }
        }

        .new-user__button {
          width: 310px;
          height: 50px;
          margin: 30px 0 0;
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          color: #ffd4b5;
          background-color: rgba(255, 255, 255, 0.1);
          font-size: 21px;
          border: none;
          letter-spacing: 2px;
          cursor: pointer;
          align-self: center;
          text-align: center;

          &:hover {
            background-color: #ffd4b5;
            transition: 0.5s;
            transition-delay: 0.50s;
            color: #282828;
          }

          > span {
            position: absolute;
            display: block;
            background-color: #ffd4b5;
          }

          > span:nth-child(1) {
            left: 0;
            bottom: 0;
            width: 1px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.10s;
          }

          &:hover > span:nth-child(1) {
            transform: scaleY(1);
            transform-origin: bottom;
            transition: transform 0.10s;
          }

          > span:nth-child(2) {
            left: 0;
            top: 0;
            width: 100%;
            height: 1px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.10s;
            transition-delay: 0.10s;
          }

          &:hover > span:nth-child(2) {
            transform: scaleX(1);
            transform-origin: left;
            transition: transform 0.10s;
            transition-delay: 0.10s;
          }

          > span:nth-child(3) {
            right: 0;
            bottom: 0;
            width: 1px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform 0.10s;
            transition-delay: 0.20s;
          }

          &:hover > span:nth-child(3) {
            transform: scaleY(1);
            transform-origin: top;
            transition: transform 0.10s;
            transition-delay: 0.20s;
          }

          > span:nth-child(4) {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.10s;
            transition-delay: 0.30s;
          }

          &:hover > span:nth-child(4) {
            transform: scaleX(1);
            transform-origin: right;
            transition: transform 0.10s;
            transition-delay: 0.30s;
          }
        }
      }
    }
  }
</style>
