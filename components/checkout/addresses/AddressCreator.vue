<template>
  <form @submit.prevent="create">
    <div class="field">
      <label for=""><strong>Name</strong></label>
      <div class="control">
        <input v-model="form.name" type="text" class="input">
      </div>
    </div>

    <div class="field">
      <label for=""><strong>Address 1</strong></label>
      <div class="control">
        <input v-model="form.address_1" type="text" class="input" required>
      </div>
    </div>

    <div class="columns">
      <div class="column is-two-thirds">
        <div class="field">
          <label for=""><strong>City</strong></label>
          <div class="control">
            <input v-model="form.city" type="text" class="input" required>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label for=""><strong>Postal code</strong></label>
          <div class="control">
            <input v-model="form.postal_code" type="text" class="input" required>
          </div>
        </div>
      </div>

      <div class="column" style="overflow: auto;">
        <CountryDropdown v-model="form.country_id" :countries="countries" />
      </div>
    </div>

    <button class="button is-success">Add address</button>
    <a @click="$emit('cancel')" class="button is-warning" href="#">Cancel</a>
  </form>
</template>

<script>
import CountryDropdown from './CountryDropdown'

export default {
  data () {
    return {
      countries: [],
      form: {
        name: '',
        address_1: '',
        city: '',
        postal_code: '',
        country_id: ''
      }
    }
  },
  components: {
    CountryDropdown
  },
  methods: {
    async getCountries () {
      const response = await this.$axios.$get(`countries`)
      return response.data
    },
    async create () {
      const response = await this.$axios.$post(`addresses`, { ...this.form, default: true })
      this.$emit('created', response.data)
    }
  },
  async mounted () {
    this.countries = await this.getCountries()
  }
}
</script>
