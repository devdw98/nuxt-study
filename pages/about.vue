<script>
import { mapState, mapMutations } from "vuex";
export default {
  //   data() {
  //     return {
  //       message: "hello"
  //     };
  //   },
  methods: {
    sayGoodBye() {
      //   this.message = "good bye";
      this.putGreeting("goodBye2");
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
