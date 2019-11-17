<template>
  <div class="container" style="margin-top: 2rem;">
    <div class="columns">
      <div class="column">
        <img src="https://via.placeholder.com/500" alt="name">
      </div>
      <div class="column">
        <h2 class="subtitle is-1">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <hr>
        <h2 class="subtitle is-2">{{ product.price }}</h2>
        <section>
          <ProductVariation
            v-for="(variations, type) in product.variations"
            :key="type"
            :type="type"
            :variations="variations"
          >
          </ProductVariation>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ProductVariation from '~/components/products/ProductVariation'

export default {
  data () {
    return {
      product: null
    }
  },
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get(`products/${params.slug}`)
    return { product: response.data }
  },
  components: {
    ProductVariation
  }
}
</script>
