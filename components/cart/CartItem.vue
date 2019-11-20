<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>
      <img src="https://via.placeholder.com/150" alt="Placeholder image">
    </td>
    <td>{{ item.product.name }} / {{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input type="number" :value="item.quantity" min="1" :max="item.stock_count">
    </td>
    <td>{{ item.subTotal }}</td>
    <td>
      <button @click="removeItemFromCart" class="button is-danger">Remove</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    async removeItemFromCart () {
      if (confirm(`Are you sure to remove item with id ${this.item.id} from cart`)) {
        try {
          // await this.$store.dispatch('cart/removeItem', this.item.id)
          await this.removeItem(this.item.id)
        } catch (e) {
          console.log(e)
        }
      }
    },
    ...mapActions({
      removeItem: 'cart/removeItem'
    })
  }
}
</script>
