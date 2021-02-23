<script>
import { mapState, mapMutations } from "vuex";
export default {
  //   data() {
  //     return {
  //       message: "hello"
  //     };
  //   },
  methods: {
    async sayGoodBye() {
      //   this.message = "good bye";
      const result = await this.$api.getDate();
      this.putGreeting((await result.json()).date);
    },
    ...mapMutations({
      putGreeting: "putGreeting"
    })
  },
  computed: {
    ...mapState({
      message: store => store.message
    })
  }
};
</script>

<template>
  <div>
    {{ message }}
    <button @click="sayGoodBye">good</button>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>
