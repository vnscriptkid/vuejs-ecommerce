<template>
  <div>
    <table class="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <CartItem
          v-for="item in cartItems"
          :item="item"
          :key="item.id"
        />
        <tr>
          <td colspan="4"></td>
          <td><strong>Sub Total</strong></td>
          <td><strong>{{ meta.subTotal }}</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem'

export default {
  computed: {
    ...mapGetters({
      cartItems: 'cart/cartItems',
      meta: 'cart/meta'
    })
  },
  components: {
    CartItem
  }
}
</script>
