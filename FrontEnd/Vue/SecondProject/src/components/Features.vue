<template>
    <div class="feature-comp">
        <img>
        <span>
            <p class="bold">{{ title }}</p>
            <p>{{ desc }}</p>
        </span>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            }
        }
    }
</script>
<style>
    .feature-comp {
        display: flex;
        align-items: start;
        height: 50px;
    }
</style>