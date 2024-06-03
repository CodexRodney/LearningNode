<template>
    <div class="stats-comp">
        <div class="top-part">
            <img />
            <p class="big-font">{{ stats }}</p>
        </div>
        <p><b>{{ keyword }}</b> {{ desc }}</p>
        <a>Find out more >> </a>
    </div>
</template>
<script>
    export default {
        props: {
            stats: {
                required: true,
            },
            keyword: {
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true
            }
        }
    }
</script>
<style>
    .top_part{
        display: flex;
        padding: 0px;
    }
    
    .big-font {
        font-size: 32px;
    }

    .stats-comp {
        padding: 8px;
        width: 10%;
    }
</style>