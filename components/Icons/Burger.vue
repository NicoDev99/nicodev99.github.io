<template>
  <svg
      :height="this.height"
      :width="this.width"
      class="lucide lucide-menu"
      fill="none"
      :stroke="this.color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
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
