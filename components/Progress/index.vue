<template>
  <div>
    <div class="flex justify-between text-white mb-2">
      <p class="font-Sura">{{ this.name }}</p>
      <p class="font-RobotoFlex">{{ this.progress }}%</p>
    </div>
    <div class="bg-white rounded-2xl h-3 overflow-hidden">
      <div class="h-full rounded-2xl" :style="'background: linear-gradient(to right, '+ this.color +', '+ this.color +'80); width: ' + this.progress + '%;'" data-aos="fade-right" data-aos-duration="1000"></div>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      name: {
        type: String,
      },
      color: {
        type: String,
      },
      progress: {
        type: String,
      }
    }
  }
</script>