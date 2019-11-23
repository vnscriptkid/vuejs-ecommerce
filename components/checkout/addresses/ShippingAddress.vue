<template>
  <article class="message is-dark">
    <div class="message-header">
      <p>Ship To</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      <!-- {{ localAddresses }} -->
      <!-- {{ defaultAddress }} -->
      {{ selectedAddress }}
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      localAddresses: this.addresses,
      selectedAddress: null
    }
  },
  props: {
    addresses: {
      required: true,
      type: Array
    }
  },
  computed: {
    defaultAddress () {
      return this.localAddresses.find(address => address.default)
    }
  },
  methods: {
    selectAddress (address) {
      this.selectedAddress = address
    }
  },
  created () {
    this.selectAddress(this.defaultAddress)
  }
}
</script>
