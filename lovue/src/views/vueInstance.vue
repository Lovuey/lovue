<template>
    <div id="vueInstance">
        <p class="title">{{ title }}</p>
    </div>
</template>

<script>
    export default {
        name: 'VueInstance',
        components: {
            
        },
        data: function () {
            return {
                title: 'Vue实例'
            }
        }
    }
</script>

<style>
    #vueInstance {
        background-color: #fff;
    }
    .title {
        font-size: 20px;
        font-weight: 700;
    }
</style>