<template>
  <div class="field">
    <label><strong>Countries</strong></label>
    <div class="select">
      <select :value="selectedValue" @change="changed($event)" required>
        <option value="">Options</option>
        <option
          v-for="country in countries"
          :key="country.id"
          :value="country.id"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedValue: this.value
    }
  },
  props: {
    countries: {
      required: true,
      type: Array
    }
  },
  methods: {
    changed (event) {
      this.$emit('input', parseInt(event.target.value))
    }
  }
}
</script>
