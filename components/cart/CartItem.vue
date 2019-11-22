<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>
      <img src="https://via.placeholder.com/150" alt="Placeholder image">
    </td>
    <td>{{ item.product.name }} / {{ item.name }} {{ item.type ? `/ ${item.type}` : '' }} </td>
    <td>{{ item.price }}</td>
    <td>
      <input type="number" v-model="quantity" :min="item.stock_count ? 1 : 0" :max="item.stock_count">
      <div v-if="quantityChanged">
        <button @click="updateQuantity">Update</button>
        <button @click="cancelUpdate">Cancel</button>
      </div>
    </td>
    <td>{{ item.total }}</td>
    <td>
      <button @click="removeItemFromCart" class="button is-danger">Remove</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      quantity: this.item.quantity,
      originalQuantity: this.item.quantity,
      quantityChanged: false
    }
  },
  watch: {
    quantity (newQuantity, oldQuantity) {
      this.quantityChanged = true
    },
    async item (newItem, oldItem) {
      if (newItem.quantity !== oldItem.quantity) {
        this.quantity = newItem.quantity
        await this.wait()
        this.quantityChanged = false
      }
    }
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    wait () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 0)
      })
    },
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
    cancelUpdate () {
      this.quantity = this.originalQuantity
      setTimeout(() => {
        this.quantityChanged = false
      }, 0)
    },
    ...mapActions({
      removeItem: 'cart/removeItem',
      updateItem: 'cart/updateItem'
    }),
    async updateQuantity () {
      if (parseInt(this.quantity) === parseInt(this.originalQuantity)) {
        return
      }
      try {
        await this.updateItem({ id: this.item.id, quantity: Number(this.quantity) })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
