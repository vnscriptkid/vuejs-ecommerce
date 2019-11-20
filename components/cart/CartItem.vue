<template>
  <tr>
    <td>
      <img src="https://via.placeholder.com/150" alt="Placeholder image">
    </td>
    <td>{{ item.product.name }} / {{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input type="number" :value="item.quantity" min="1" :max="item.stock_count">
    </td>
    <td>{{ item.subTotal }}</td>
    <td>
      <button class="button is-danger">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>
