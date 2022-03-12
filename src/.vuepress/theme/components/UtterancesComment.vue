<template>
  <div ref="comment" class="ut-comment-wrapper"></div>
</template>
<script>
export default {
  name: "UtterancesComment",
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        if (this.$refs.comment) {
          this.$refs.comment.innerHTML = "";
        }
        setTimeout(() => {
          this.load();
        }, 500);
      }
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
        const darkMode = typeof localStorage === 'undefined' ? false : localStorage.getItem("dark-theme") === "true";

        // script tag 생성
        const utterances = document.createElement('script');
        utterances.type = 'text/javascript';
        utterances.async = true;
        utterances.crossorigin = 'anonymous';
        utterances.src = 'https://utteranc.es/client.js';
        
        utterances.setAttribute('issue-term', 'pathname');
        utterances.setAttribute('theme', darkMode ? 'github-dark' : 'github-light');
        utterances.setAttribute('repo',`subicura/devops`);

        // script tag 삽입
        this.$refs.comment.appendChild(utterances);
    },
  }
}
</script>

<style lang="stylus">
.ut-comment-wrapper
  max-width: 920px
  margin: 0 auto
  padding: 1.5rem 2rem
  margin 0 auto
  z-index 1
  @media (max-width: $MQNarrow)
    padding 1.5rem
  @media (max-width: $MQMobileNarrow)
    padding 1rem
</style>

