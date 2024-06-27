<template>
    <li class="text-white font-RhodiumLibre">
        <a :href="this.link" class="text-md font-normal">// {{ this.name }}</a>
        <sup class="pl-1.5 font-normal">{{ this.number }}</sup>
    </li>
</template>

<script>
    export default {
        props: {
            name: String,
            link: String,
            number: String
        }
    }
</script>