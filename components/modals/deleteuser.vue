<template>
  <div class="delete-user">
    <div class="delete-user__container">
      <div class="delete-user__header">
        <div class="delete-user__header-close" @click="hidePopup" />
        <span class="delete-user__header-title">Удалить пользователя ?</span>
      </div>
      <div class="delete-user__delete" @click="deleteUser">
        <span class="delete-user__form-submit-text">
          Удалить
        </span>
      </div>
      <div class="delete-user__cancel" @click="hidePopup">
        <span class="delete-user__form-submit-text">
          Отменить
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Deleteuser',
  methods: {
    hidePopup () {
      this.$emit('hidePopup')
    },
    deleteUser () {
      this.$emit('deleteUser')
    }
  }
}
</script>

<style lang="scss">
.delete-user {
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: visibility 0.5s linear, opacity 0.5s;

  .delete-user__container {
    max-width: 450px;
    width: 100%;
    height: 320px;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    box-sizing: border-box;
    border-radius: 10px;

    .delete-user__delete {
      display: flex;
      cursor: pointer;
      width: 280px;
      height: 45px;
      background-color: #FF6D6D;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 45px auto 25px;
    }

    .delete-user__cancel {
      display: flex;
      cursor: pointer;
      width: 280px;
      height: 45px;
      background-color: #868686;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 0 auto;
    }

    .delete-user__form-submit-text {
      height: fit-content;
      margin: 0 auto;
      align-self: center;
    }

    .delete-user__header {
      display: flex;
      flex-direction: column;

      .delete-user__header-title {
        text-transform: uppercase;
        font-size: 26px;
        line-height: 28px;
        color: #1D1F20;
        margin: 40px auto 0;
      }

      .delete-user__header-close {
        background: url("../../assets/icons/close-icon.svg") top left / cover no-repeat;
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin: 15px 25px 0 0;
        align-self: flex-end;
      }
    }
  }
}
</style>
