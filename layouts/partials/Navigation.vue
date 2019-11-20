<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <img src="http://bulma.io/images/bulma-logo.png" width="112" height="28">
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <template v-for="category in categoryList">
            <li v-if="!category.subCategories.length" :key="category.slug" class="navbar-item">
              <nuxt-link :to="{name: 'categories-slug', params: {slug: category.slug}}">
                {{ category.name }}
              </nuxt-link>
            </li>
            <div v-else :key="category.slug" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">{{ category.name }}</a>
              <div class="navbar-dropdown">
                <template v-for="subCategory in category.subCategories">
                  <li :key="subCategory.slug" class="navbar-item">
                    <nuxt-link :to="{name: 'categories-slug', params: {slug:category.slug}}">
                      {{ subCategory.name }}
                    </nuxt-link>
                  </li>
                </template>
              </div>
            </div>
          </template>
        </div>

        <!-- right nav -->
        <div class="navbar-end">
          <!-- in case logged out -->
          <div class="navbar-item">
            <template v-if="!$auth.loggedIn">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <nuxt-link :to="{name: 'auth-signin'}" class="button is-light">Log in</nuxt-link>
              </div>
            </template>
          </div>

          <!-- in case loged in -->
          <template v-if="$auth.loggedIn">
            <div class="navbar-item">
              <nuxt-link :to="{name: 'cart'}">Cart ({{ cartSize }})</nuxt-link>
            </div>
            <div class="navbar-item">
              <a href="#">Orders</a>
            </div>
            <div class="navbar-item">
              Hello, {{ $auth.user.name }}
            </div>
          </template>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      categoryList: 'categories',
      cartSize: 'cart/cartSize'
    })
  }
}
</script>
