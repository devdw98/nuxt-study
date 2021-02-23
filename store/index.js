export const state = function() {
  return {
    message: "hello from vuex"
  };
};

export const mutations = {
  putGreeting(state, greeting) {
    state.message = greeting;
  }
};
