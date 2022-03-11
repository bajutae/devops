<template>
  <div v-bind:class="className">
    <div class="msg-wrapper">
      <div class="avatar" v-bind:style="avatarStyle" />
      <div class="msg-info">
        <div class="user">
          {{ user }}
        </div>
        <div class="msg">
          {{ msg }}
        </div>
      </div>
      <div class="msg-empty" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ["avatar", "msg", "isMe", "user"],
    data () {
      return {
        avatarStyle: `background: url('/devops/imgs/${this.avatar}.png') no-repeat center center; background-size: cover;`,
        user: this.user,
        className: this.isMe === "true" ? "kakao-msg is-me" : "kakao-msg",
        msg: this.msg
      }
    }
  }
</script>
