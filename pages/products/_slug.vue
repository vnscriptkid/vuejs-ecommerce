<template>
  <div class="container" style="margin-top: 2rem;">
    <div class="columns">

      <!-- left image -->
      <div class="column">
        <img src="https://via.placeholder.com/500" alt="name">
      </div>

      <!-- right col -->
      <div class="column">

        <!-- detail -->
        <h2 class="subtitle is-1">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <hr>
        <h2 class="subtitle is-2">{{ product.price }}</h2>

        <!-- product variations selection -->
        <section>
          <form action="#">
            <ProductVariation
              v-for="(variations, type) in product.variations"
              :key="type"
              :type="type"
              :variations="variations"
              v-model="form.variation"
            >
            </ProductVariation>

            <!-- Allow submit only when sth selected -->
            <div :v-if="form.variation" class="field" style="margin-top: 1.5rem;">
              <button type="submit" class="button is-success">Add to Cart</button>
            </div>
          </form>
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
      product: null,
      form: {
        variation: '',
        quantity: 1
      }
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
