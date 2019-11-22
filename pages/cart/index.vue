<template>
  <div class="container" style="margin-top: 2rem; margin-bottom: 2rem;">
    <h1 class="title is-1" style="text-align: center;">Cart Overview</h1>
    <template v-if="cartSize">
      <CartOverview/>
      <nuxt-link :to="{name: 'checkout'}" class="button is-success is-fullwidth" :disabled="!meta || meta.empty">Checkout</nuxt-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartOverview from '~/components/cart/CartOverview'

export default {
  components: {
    CartOverview
  },
  computed: {
    ...mapGetters({
      meta: 'cart/meta',
      cartSize: 'cart/cartSize'
    })
  }
}
</script>
