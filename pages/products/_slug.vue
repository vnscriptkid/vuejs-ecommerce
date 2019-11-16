<template>
  <div class="container" style="margin-top: 2rem;">
    <div class="columns">
      <div class="column">
        <img src="https://via.placeholder.com/500" alt="name">
      </div>
      <div class="column">
        <h2 class="subtitle is-1">{{ product.name }}</h2>
        <p>Description: {{ product.description }}</p>
        <h2 class="subtitle is-2">Price: ${{ product.price }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: null
    }
  },
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get(`products/${params.slug}`)
    return { product: response.data }
  }
}
</script>
