<template>
  <div class="container" style="margin-top: 2rem; margin-bottom: 2rem;">
    <h1 class="title is-1" style="text-align: center;">Cart Overview</h1>
    <CartOverview />
  </div>
</template>

<script>
import CartOverview from '~/components/cart/CartOverview'

export default {
  components: {
    CartOverview
  }
}
</script>
