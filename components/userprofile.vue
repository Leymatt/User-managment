<template>
  <div class="user-profile">
    <deleteuser v-if="PopupVisible" @hidePopup="hidePopup" @deleteUser="deleteUser" />
    <div v-if="user" class="user-profile__wrapper">
      <form class="user-profile__content" @submit.prevent="submit">
        <div class="user-profile__header-info">
          <div class="user-profile__logo" />
          <label class="user-profile__label-header">
            <select v-model="userRank" class="user-profile__select">
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
        </div>
        <div class="user-profile__main-info">
          <label class="user-profile__label-main">
            <input id="userName" v-model="userName" type="text" placeholder="ФИО" class="user-profile__input">
          </label>
          <label class="user-profile__label-main">
            <input id="userMil" v-model="userMail" type="email" placeholder="Почта" class="user-profile__input">
          </label>
          <label class="user-profile__label-main">
            <input id="userPhone" v-model="userPhone" type="tel" placeholder="Телефон" class="user-profile__input">
          </label>
          <label class="user-profile__label-main">
            <input id="userPassword" v-model="userPassword" type="text" placeholder="Пароль" class="user-profile__input">
          </label>
        </div>
        <div class="user-profile__management">
          <div class="user-profile__date">
            <p class="user-profile__period">
              Создание: {{ userDate }}
            </p>
            <p class="user-profile__period">
              Последнее изменение: {{ userChangeDate }}
            </p>
          </div>
          <div class="user-profile__buttons">
            <button class="user-profile__button" type="submit">
              Сохранить
            </button>
            <button class="user-profile__button" type="button" @click="showPopup">
              Удалить
            </button>
          </div>
        </div>
      </form>
    </div>
    <p v-else class="user-profile__null">
      Пользователь не найден !
    </p>
  </div>
</template>

<script>
import Deleteuser from '~/components/modals/deleteuser'
export default {
  name: 'Userprofile',
  components: { Deleteuser },
  data () {
    return {
      userMail: '',
      userPassword: '',
      userPhone: '',
      userName: '',
      userDate: '',
      userChangeDate: '',
      userRank: '',
      PopupVisible: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.usersId(+this.$route.params.id)
    }
  },
  mounted () {
    this.userMail = this.user.userMail
    this.userPassword = this.user.userPassword
    this.userPhone = this.user.userPhone
    this.userName = this.user.userName
    this.userDate = this.user.userDate
    this.userRank = this.user.userRank
    this.userChangeDate = this.user.userChangeDate
  },
  methods: {
    submit () {
      const getDate = new Date()
      const year = getDate.getFullYear()
      const month = getDate.getMonth()
      const date = getDate.getDate()
      const fullDate = `${date}.${month + 1}.${year}`

      this.$store.dispatch('updateUser', {
        id: this.user.id,
        userMail: this.userMail,
        userPassword: this.userPassword,
        userPhone: this.userPhone,
        userName: this.userName,
        userDate: this.userDate,
        userRank: this.userRank,
        userChangeDate: fullDate
      })
      this.$router.push('/')
    },
    deleteUser () {
      this.$store.dispatch('deleteUser', this.user.id)
      this.$router.push('/')
    },
    showPopup () {
      this.PopupVisible = true
    },
    hidePopup () {
      this.PopupVisible = false
    }
  }
}
</script>

<style lang="scss">
  .user-profile {
    display: flex;
    flex-direction: column;
    background-color: #415265;

    .user-profile__wrapper {
      max-width: 60%;
      width: 100%;
      height: 700px;
      background-color: white;
      border-radius: 20px;
      margin: 50px auto 50px;

      .user-profile__content {
        max-width: 80%;
        margin: 60px auto 0;

        .user-profile__header-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: fit-content;
          margin: 0 auto;

          .user-profile__logo {
            background: url("../assets/icons/contactIcon.svg")top left / cover no-repeat;
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }

          .user-profile__label-header {
            width: 200px;
            margin: 35px 0 0;

            .user-profile__select {
              width: 100%;
              outline: none;
              border: none;
              box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
              border-radius: 10px;
              height: 35px;
              padding: 0 0 0 10px;
              color: #5f5f5f;
            }
          }
        }

        .user-profile__main-info {
          display: flex;
          flex-direction: column;
          margin: 50px auto 0;
          width: 90%;

          .user-profile__label-main {
            border-bottom: 1px solid #ababab;
            margin-bottom: 25px;

            &:nth-child(4) {
              margin: 0;
            }

            .user-profile__input {
              width: 100%;
              outline: none;
              height: 30px;
              border: none;
              padding-left: 15px;
              text-transform: uppercase;
              font-size: 16px;
              font-weight: 600;
              color: #5f5f5f;
            }
          }
        }

        .user-profile__management {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 90%;
          margin: 50px auto 0;
          height: 100px;

          .user-profile__date {
            height: fit-content;

            .user-profile__period {
              text-transform: uppercase;
              color: #5f5f5f;
            }
          }

          .user-profile__buttons {
            display: flex;
            width: 100%;
            max-width: 410px;
            justify-content: space-between;
            height: 50px;
            align-self: flex-end;

            .user-profile__button {
              max-width: 190px;
              width: 100%;
              background-color: #44b344;
              border: none;
              border-radius: 5px;
              color: white;
              text-transform: uppercase;
              outline: none;
              cursor: pointer;

              &:nth-child(2) {
                background-color: #b72a46;
              }
            }
          }
        }
      }
    }
  }
  .user-profile__null {
    width: fit-content;
    align-self: center;
    margin-top: 250px;
    text-transform: uppercase;
    color: #ffd4b5;
    font-size: 24px;
  }
</style>
