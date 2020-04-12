<template>
    <div id="home">
        <Content v-bind:lists="lists"></Content>
    </div>
</template>

<script>
import Content from "../components/Content.vue";
import listContent from "../const/content.js";

export default {
    name: "App",
    components: {
        Content
    },
    data: function() {
        return {
            lists: listContent.lists
        };
    }
};
</script>

<style>
</style>