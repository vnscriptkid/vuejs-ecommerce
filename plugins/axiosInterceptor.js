export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    console.log(error.response)
  })
}
