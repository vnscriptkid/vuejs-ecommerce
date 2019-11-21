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
        <h2 class="subtitle is-2">{{ product.price }}
          <span v-if="!product.in_stock" class="button is-rounded is-danger">
            Out of stock
          </span>
        </h2>

        <!-- product variations selection -->
        <section>
          <form @submit.prevent="addToCart">
            <ProductVariation
              v-for="(variations, type) in product.variations"
              :key="type"
              :type="type"
              :variations="variations"
              v-model="form.variation"
            >
            </ProductVariation>

            <!-- Allow submit only when sth selected -->
            <div class="field" style="margin-top: 1.5rem;">
              <input
                v-model="form.quantity"
                class="input"
                type="number"
                :min="1"
                :max="form.variation.stock_count"
                style="width: 70px; text-align: center;"
                :disabled="!form.variation"
              />
              <button :disabled="!form.variation || !product.in_stock" type="submit" class="button is-success">Add to Cart</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  },
  methods: {
    async addToCart () {
      if (!this.form.variation) {
        return
      }
      await this.storeSingleItem({ id: this.form.variation.id, quantity: Number(this.form.quantity) })

      this.form = {
        variation: '',
        quantity: 1
      }
    },
    ...mapActions({
      storeSingleItem: 'cart/storeSingleItem'
    })
  }
}
</script>
