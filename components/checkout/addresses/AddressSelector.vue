<template>
  <div>
    <table class="table is-fullwidth is-hoverable is-dark">
      <tbody>
        <tr v-for="address in addresses" :key="address.id">
          <td :class="isSelected(address) ? 'has-text-weight-bold' : ''">
            {{ address.id }}
            {{ address.name }} <br>
            {{ address.address_1 }} <br>
            {{ address.city }} <br>
            {{ address.postal_code }} <br>
            {{ address.country.name }} <br>
          </td>
          <td>
            <button @click="$emit('select', address)" v-if="!isSelected(address)" class="button is-success">Ship To</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    addresses: {
      required: true,
      type: Array
    },
    selectedAddress: {
      optional: true,
      type: Object
    }
  },
  methods: {
    isSelected (address) {
      return address.id === this.selectedAddress.id
    }
  }
}
</script>
