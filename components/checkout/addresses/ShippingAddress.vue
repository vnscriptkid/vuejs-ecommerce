<template>
  <article class="message is-dark">
    <!-- header -->
    <div class="message-header">
      <p>Ship To</p>
      <button class="delete" aria-label="delete"></button>
    </div>

    <div class="message-body">
      <!-- address selections -->
      <AddressSelector
        v-if="selecting"
        :addresses="localAddresses"
        :selectedAddress="selectedAddress"
        @select="switchSelectedAddress"
        @cancel="toggleSelecting"
      />

      <AddressCreator
        v-else-if="creating"
        @cancel="toggleCreating"
        @created="addressCreated"
      />

      <!-- default address -->
      <p v-else>
        {{ selectedAddress.name }} <br>
        {{ selectedAddress.address_1 }} <br>
        {{ selectedAddress.city }} <br>
        {{ selectedAddress.postal_code }} <br>
        {{ selectedAddress.country.name }} <br>
      </p>

      <!-- change to selections mode -->
      <div v-if="!selecting  && !creating" class="field is-grouped" style="margin-top: 1.5rem;">
        <p class="control">
          <button @click="toggleSelecting" class="button is-primary">
            Change shipping address
          </button>

          <button @click="toggleCreating" class="button is-primary">
            Add new address
          </button>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import AddressSelector from './AddressSelector'
import AddressCreator from './AddressCreator'

export default {
  components: {
    AddressSelector,
    AddressCreator
  },
  data () {
    return {
      localAddresses: this.addresses,
      selectedAddress: null,
      selecting: false,
      creating: false
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
    },
    toggleCreating () {
      this.creating = !this.creating
    },
    addressCreated (address) {
      this.localAddresses.push(address)
      this.switchSelectedAddress(address)
      this.toggleCreating()
    }
  },
  created () {
    this.switchSelectedAddress(this.defaultAddress)
  }
}
</script>
