<template>
  <div :key="product.slug" class="card" style="max-width: 300px">
    <div class="card-image">
      <figure class="image is-4by3">
        <nuxt-link :to="linkToDetail">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </nuxt-link>
      </figure>
    </div>
    <div class="card-content">
      <nuxt-link :to="linkToDetail">
        <p class="title is-4">{{ product.name }}</p>
      </nuxt-link>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    linkToDetail () {
      return { name: 'products-slug', params: { slug: this.product.slug } }
    }
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  }
}
</script>
