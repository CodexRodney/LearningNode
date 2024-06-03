<template>
    <div class="symptoms">
        <img src=""/>
        <p> {{ title }}</p>
        <p> {{ desc }} </p>
    </div>
</template>
<script>
    export default {
        props: {
            imgSrc: {
                type: String,
                default: "people"
            },
            title: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true,
            },
        }
    }
</script>
<style>
    .symptoms {
        width: 8%;
        padding: 8px;
        margin: auto;
    }
</style>