<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :height="this.height"
      :width="this.width"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="this.color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-chevron-down">
    <path d="m6 9 6 6 6-6"/>
  </svg>
</template>


<script>
  export default {
    props: {
      width: {
        type: String,
        default: "24"
      },
      height: {
        type: String,
        default: "24"
      },
      color: {
        type: String,
        default: "black"
      }
    }
  }
</script>
