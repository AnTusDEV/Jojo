import { createStore } from 'vuex'; 
export default createStore({
  state: { 
    cartCount: 0,
  },
  mutations: { 
    incrementCart(state) {
      state.cartCount++;
    },
    decrementCart(state) {
      if (state.cartCount > 0) {
        state.cartCount--;
      }
    },
  }, 
  getters: {
    cartCount: (state) => state.cartCount,
  },
});