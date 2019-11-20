export const state = () => ({
  products: []
})

export const getters = {
  cartItems: state => state.products,
  cartSize: state => state.products.length
}

export const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  }
}

export const actions = {
  async getCart ({ commit }) {
    const response = await this.$axios.$get('cart')

    commit('SET_PRODUCTS', response.data.products)

    return response
  },
  async removeItem ({ dispatch }, id) {
    await this.$axios.$delete(`cart/${id}`)
    // reload whole cart
    dispatch('getCart')
  }
}
