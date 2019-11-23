<template>
  <article class="message is-dark">
    <!-- header -->
    <div class="message-header">
      <p>Ship To</p>
      <button class="delete" aria-label="delete"></button>
    </div>

    <div class="message-body">
      <!-- default address -->
      <p v-if="!selecting">
        {{ selectedAddress.name }} <br>
        {{ selectedAddress.address_1 }} <br>
        {{ selectedAddress.city }} <br>
        {{ selectedAddress.postal_code }} <br>
        {{ selectedAddress.country.name }} <br>
      </p>

      <!-- address selections -->
      <AddressSelector
        v-else
        :addresses="localAddresses"
        :selectedAddress="selectedAddress"
        @select="switchSelectedAddress"
      />

      <!-- change to selections mode -->
      <div v-if="!selecting" class="field is-grouped" style="margin-top: 1.5rem;">
        <p class="control">
          <button @click="toggleSelecting" class="button is-primary">
            Change shipping address
          </button>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import AddressSelector from './AddressSelector'

export default {
  components: {
    AddressSelector
  },
  data () {
    return {
      localAddresses: this.addresses,
      selectedAddress: null,
      selecting: false
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
    switchSelectedAddress (address) {
      this.selectedAddress = address
      this.selecting = false
    },
    toggleSelecting () {
      this.selecting = !this.selecting
    }
  },
  created () {
    this.switchSelectedAddress(this.defaultAddress)
  }
}
</script>
