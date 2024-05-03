<template>
    <div class="flex items-center gap-x-4">

        <div data-aos="fade-left">
            <div class="flex items-center relative">
                <div class="blur-[2px] order-1">
                    <div class="w-5 h-5 bg-white star"></div>
                </div>
                <div class="bg-gradient-to-r from-white to-white/0 w-28 h-1 rounded-full order-2 -translate-x-3"></div>
            </div>
        </div>

        <slot></slot>

        <div data-aos="fade-right">
            <div class="flex items-center relative">
                <div class="blur-[2px] order-2">
                    <div class="w-5 h-5 bg-white star"></div>
                </div>
                <div class="bg-gradient-to-l from-white to-white/0 w-28 h-1 rounded-full order-1 translate-x-3"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .star {
        clip-path: polygon(50% 0%, 61.55% 33.67%, 97.35% 33.95%, 69.1% 55.94%, 79.9% 90.08%, 50.25% 70%, 21.12% 90.82%, 31.06% 56.42%, 2.26% 35.15%, 38.04% 33.97%);
    }

</style>