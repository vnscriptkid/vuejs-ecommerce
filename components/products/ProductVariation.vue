<template>
  <div>
    <label class="label">{{ type }}</label>
    <div class="control">
      <div class="select is-fullwidth">
        <select :value="selectedValue" @change="changed($event, type)">
          <option value="">Select Options</option>
          <option
            v-for="variation in variations"
            :key="variation.id"
            :value="variation.id"
            :disabled="!variation.in_stock"
            >
              {{ variation.name }}
              <!-- show price -->
              <template v-if="variation.price_varies">({{ variation.price }})</template>
              <!-- out of stock -->
              <template v-if="!variation.in_stock">(out of stock)</template>
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedValue () {
      if (!this.value) {
        return ''
      }
      return this.findVariation(this.value.id) ? this.value.id : ''
    }
  },
  props: {
    type: {
      required: true,
      type: String
    },
    variations: {
      required: true,
      type: Array
    },
    value: {
      required: false,
      default: ''
    }
  },
  methods: {
    changed (event, type) {
      const variation = this.findVariation(parseInt(event.target.value))
      this.$emit('selectVariation', variation || '')
    },
    findVariation (id) {
      return this.variations.find(variation => id === variation.id)
    }
  },
  model: {
    event: 'selectVariation' // default: input
  }
}
</script>
