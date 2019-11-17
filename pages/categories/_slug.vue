<template>
  <div class="container" style="margin-top: 2rem;">
    <div class="columns">
      <template v-for="product in products">
        <div :key="product.slug" class="card column is-3">
          <Product :product="product"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Product from '~/components/products/Product'

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    Product
  },
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get(`products?category=${params.slug}`)
    return { products: response.data }
  },
  computed: {
    linkToDetail () {
      return { name: 'products-slug', params: { slug: this.product.slug } }
    }
  }
}
</script>
