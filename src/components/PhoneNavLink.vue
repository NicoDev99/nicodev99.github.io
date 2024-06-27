<template>
    <li class="text-white font-Roboto mb-9">
        <a :href="this.link" class="text-2xl sm:text-4xl font-normal uppercase underlineAnimation">{{ this.name }}</a>
        <sup class="pl-1.5 font-normal">{{ this.number }}</sup>
    </li>
</template>

<script>
    export default {
        props: {
            name: String,
            link: String,
        }
    }
</script>

<style scoped>
    .underlineAnimation {
        display: inline-block;
        padding-bottom:5px;
        background-image: linear-gradient(#fff 0 0);
        background-position: 0 100%;
        background-size: 0% 2px;
        background-repeat: no-repeat;
        transition:
            background-size 0.3s,
            background-position 0s 0.3s;
    }

    .underlineAnimation:hover {
        background-position: 100% 100%;
        background-size: 100% 2px;
    }
</style>