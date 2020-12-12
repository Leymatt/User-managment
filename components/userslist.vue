<template>
  <div class="userslist">
    <div class="userslist__navigation">
      <Newusermodal
        v-if="PopupVisible"
        @hidePopup="hidePopup"
      />
      <button
        class="userslist__create"
        @click="showPopup"
      >
        Добавить пользователя
      </button>
      <div class="filter">
        <label class="filter__label-select">
          <select v-model="searchRank" class="filter__select">
            <option v-for="option in options" :key="option.options" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </label>
        <label class="filter__label-find">
          <input v-model="search" class="filter__find" placeholder="Поиск">
        </label>
      </div>
    </div>
    <div v-if="users.length" class="list">
      <div
        v-for="user in searchHandler"
        :key="user.id"
        class="list__item"
      >
        <router-link
          class="list__router"
          tag="button"
          :to="'/userinfo/' + user.id"
        >
          <div class="list__content">
            <div class="list__picture" />
            <div class="list__element-wrapper">
              <p class="list__element">
                {{ user.userName }}
              </p>
            </div>
            <div class="list__element-wrapper">
              <p class="list__element">
                {{ user.userRank }}
              </p>
            </div>
            <div class="list__element-wrapper">
              <p class="list__element">
                {{ user.userPhone }}
              </p>
            </div>
            <div class="list__element-wrapper">
              <p class="list__element">
                {{ user.userMail }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <p v-else class="list__null">
      Нет пользователей !
    </p>
  </div>
</template>

<script>

import Newusermodal from '~/components/modals/newusermodal'
export default {
  name: 'Userslist',
  components: { Newusermodal },
  data () {
    return {
      PopupVisible: false,
      search: '',
      searchRank: '',
      data: [],
      options: [
        { text: 'Все пользователи', value: '' },
        { text: 'Админ', value: 'Админ' },
        { text: 'Партнер', value: 'Партнер' },
        { text: 'Клиент', value: 'Клиент' }
      ]
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    },
    searchHandler () {
      return this.data.filter((card) => {
        return (card.userPhone.includes(this.search) || card.userMail.includes(this.search) || card.userName.includes(this.search)) && card.userRank.includes(this.searchRank)
      })
    }
  },
  created () {
    this.data = this.users
  },
  methods: {
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
  .userslist {
    display: flex;
    flex-direction: column;

    .userslist__navigation {
      max-width: 90%;
      width: 100%;
      margin: 40px auto 0;
      display: flex;
      justify-content: space-between;

      .userslist__create {
        cursor: pointer;
        text-transform: uppercase;
        background: none;
        border: 2px solid #ffd4b5;
        max-width: 248px;
        height: 52px;
        color: white;
        border-radius: 5px;
        background: {
          image: linear-gradient(90deg, #ffd4b5 50%, transparent 50%);
          position: 100%;
          size: 400%;
        }
        transition: background 420ms ease-in-out;

        &:hover {
          background-position: 0;
        }
      }

      .filter {
        display: flex;
        max-width: 60%;
        width: 100%;
        align-items: center;

        > label {
          height: fit-content;
        }

        .filter__label-select {
          width: 200px;

          .filter__select {
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

        .filter__label-find {
          margin-left: 20px;
          width: 100%;
          max-width: 70%;

          .filter__find {
            width: 100%;
            height: 40px;
            border: none;
            border-radius: 10px;
            padding: 0 0 0 15px;
            text-transform: uppercase;
          }
        }
      }
    }

    .list {
      display: grid;
      grid-template-columns: repeat(4, minmax(240px, 380px));
      margin: 51px auto 0;
      grid-column-gap: 30px;
      grid-row-gap: 50px;

      .list__item{
        box-shadow: 0 4px 4px 3px rgba(0, 0, 0, 0.25);
        background-color: white;
        border-radius: 10px;
        box-sizing: border-box;

        .list__router {
          display: flex;
          cursor: pointer;
          background: none;
          outline: none;
          border: none;
          padding: 0;
          width: 100%;
          min-height: 450px;

          .list__content {
            display: flex;
            flex-direction: column;
            max-width: 320px;
            width: 100%;
            margin: 0 auto;
            height: 100%;
            padding-top: 50px;

            .list__picture {
              background: url("../assets/icons/contactIcon.svg") top left / cover no-repeat;
              width: 80px;
              height: 80px;
              align-self: center;
              margin-bottom: 50px;
            }

            .list__element-wrapper {
              display: flex;
              width: 100%;
              text-align: center;
              height: 40px;
              margin-bottom: 20px;

              .list__element {
                height: fit-content;
                margin: 0 auto;
                align-self: center;
                text-transform: uppercase;
                font-size: 18px;
                letter-spacing: 1px;
              }
            }
          }
        }
      }
    }

    .list__null {
      width: fit-content;
      align-self: center;
      margin-top: 250px;
      text-transform: uppercase;
      color: #ffd4b5;
      font-size: 24px;
    }
  }
</style>
