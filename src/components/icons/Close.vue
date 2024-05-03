<template>
    <svg
        :height="this.height"
        :stroke="this.color"
        :width="this.width"
        class="lucide lucide-x"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
    </svg>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: "24px"
        },
        height: {
            type: String,
            default: "24px"
        },
        color: {
            type: String,
            default: "black"
        }
    }
}
</script>
