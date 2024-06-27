<template>
    <div>
        <div class="flex justify-between text-white mb-2">
            <p class="font-Sura">{{ this.name }}</p>
            <p class="font-RobotoFlex">{{ this.progress }}%</p>
        </div>
        <div class="bg-white rounded-2xl h-3 overflow-hidden">
            <div class="h-3 rounded-2xl" :style="'background: linear-gradient(to right, '+ this.firstColor +', '+ this.endColor +'80); width: ' + this.progress + '%;'" data-aos="fade-right" data-aos-duration="1000"></div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            name: {
                type: String,
            },
            firstColor: {
                type: String,
            },
            endColor: {
                type: String,
            },
            progress: {
                type: String,
            }
        }
    }
</script>