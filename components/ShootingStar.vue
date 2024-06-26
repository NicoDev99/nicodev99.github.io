<template>
  <div data-aos="fade-down-right">
    <div class="flex items-center relative rotate-[30deg]">
      <div class="blur-[2px] order-2 -rotate-[30deg]">
        <div class="w-5 h-5 bg-white star"></div>
      </div>
      <div class="bg-gradient-to-l from-white to-white/0 w-64 h-1 rounded-full order-1 translate-x-3"></div>
    </div>
  </div>
</template>

<style scoped>

.star {
  clip-path: polygon(50% 0%, 61.55% 33.67%, 97.35% 33.95%, 69.1% 55.94%, 79.9% 90.08%, 50.25% 70%, 21.12% 90.82%, 31.06% 56.42%, 2.26% 35.15%, 38.04% 33.97%);
}

</style>

