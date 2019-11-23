<template>
  <div class="container">
    <h1 class="title">Checkout</h1>
    <div class="columns">
      <div class="column is-three-quarters">
        <article class="message is-dark">
          <div class="message-header">
            <p>Ship To</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
        <article class="message is-dark">
          <div class="message-header">
            <p>Payment</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
        <article class="message is-dark">
          <div class="message-header">
            <p>Shipping</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
        <article class="message is-dark" v-if="cartSize">
          <div class="message-header">
            <p>Cart Summary</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            <CartOverview>
              <template slot="footRows">
                <tr>
                  <td colspan="4"></td>
                  <td><strong>Shipping</strong></td>
                  <td><strong>300</strong></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <td><strong>Total</strong></td>
                  <td><strong>{{ meta.subTotal }}</strong></td>
                  <td></td>
                </tr>
              </template>
            </CartOverview>
          </div>
        </article>
      </div>
      <div class="column is-one-quarters">
        <button :disabled="cartSize === 0" class="button is-success is-fullwidth">Checkout</button>
      </div>
    </div>
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
      cartSize: 'cart/cartSize',
      meta: 'cart/meta'
    })
  }
}
</script>
