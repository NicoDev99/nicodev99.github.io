<template>
    <a href="/">
        <img :height="this.height" :width="this.width" alt="Logo" src="/img/logo.png">
    </a>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: "37"
            },
            height: {
                type: String,
                default: "37"
            }
        }
    }
</script>
