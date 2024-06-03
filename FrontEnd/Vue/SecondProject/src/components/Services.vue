<template>
    <div class="serv-comp">
        <div class="circle"></div>
        <p class="bold">{{ title }}</p>
        <div class="serv-udl"></div>
        <p>{{ desc }}</p>
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
    .serv-comp{
        width: 20%;
        text-align: center;
    }

    .circle {
        border: 1px solid black;
        border-radius: 50%;
        height: 90px;
        width: 90px;
        margin: auto;
    }

    .serv-udl {
    height: 5px;
    width: 50px;
    background-color: #3fbbc0;
    padding: 0;
    margin: auto;
  }

</style>