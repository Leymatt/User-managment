import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    users: JSON.parse(localStorage.getItem('users') || '[]')
  },

  mutations: {
    createUser (state, user) {
      state.users.push(user)

      localStorage.setItem('users', JSON.stringify(state.users))
    },

    updateUser (state, { id, userMail, userPassword, userPhone, userName, userDate, userRank, userChangeDate }) {
      const users = state.users.concat()

      const index = users.findIndex(t => t.id === id)
      const user = users[index]

      users[index] = { ...user, userMail, userPassword, userPhone, userName, userDate, userRank, userChangeDate }

      state.users = users

      localStorage.setItem('users', JSON.stringify(state.users))
    },

    deleteUser (state, id) {
      const users = state.users.concat()
      const index = users.findIndex(t => t.id === id)

      state.users.splice(index, 1)
    }
  },

  actions: {
    createUser ({ commit }, user) {
      commit('createUser', user)
    },

    updateUser ({ commit }, user) {
      commit('updateUser', user)
    },

    deleteUser ({ commit }, user, id) {
      commit('deleteUser', user, id)
    }
  },

  getters: {
    users: s => s.users,
    usersId: s => id => s.users.find(t => t.id === id)
  }
})
export default store
