<template>
  <div class="xl:flex xl:gap-x-6 xl:items-center justify-center xl:justify-start" :class="this.orientation == 'right' ? 'flex-row-reverse' : ''">

    <div class="w-40 h-40 rounded-full bg-[#767478] relative mb-12 xl:mb-0 mx-auto xl:mx-0">
      <div class="w-36 h-36 rounded-full bg-white/80 blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <p class="font-Galindo text-white text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {{ this.number }}
      </p>
    </div>

    <!-- Triangle -->
    <div class="inline-block w-0 h-0 border-y-[20px]  border-solid border-y-transparent border-white blur-sm hidden xl:block" :class="this.orientation == 'left' ? 'border-l-[40px]' : 'border-r-[40px]'"></div>

    <!-- Text -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      number: {
        type: String,
      },
      orientation: {
        type: String,
      }
    }
  }
</script>