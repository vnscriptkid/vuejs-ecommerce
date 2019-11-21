export const state = () => ({
  products: [],
  meta: null
})

export const getters = {
  cartItems: state => state.products,
  cartSize: state => state.products.length,
  meta: state => state.meta
}

export const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_META (state, meta) {
    state.meta = meta
  }
}

export const actions = {
  async getCart ({ commit }) {
    const response = await this.$axios.$get('cart')

    commit('SET_PRODUCTS', response.data.products)
    commit('SET_META', response.meta)

    return response
  },
  async removeItem ({ dispatch }, id) {
    await this.$axios.$delete(`cart/${id}`)
    // reload whole cart
    dispatch('getCart')
  },
  async updateItem ({ dispatch }, { id, quantity }) {
    await this.$axios.patch(`cart/${id}`, {
      quantity: Number(quantity)
    })
    // reload whole cart
    dispatch('getCart')
  },
  async storeSingleItem ({ dispatch }, { id, quantity }) {
    await this.$axios.post(`cart`, {
      products: [
        {
          id,
          quantity
        }
      ]
    })
    dispatch('getCart')
  }
}
