<template>
  <div id="vueInstance">
        <!-- header -->
        <article-header :article="article"></article-header>
        <!-- body -->
        <div class="post-body">
            <div v-for="(node, index) in article.nodes" :key="index">
                <p v-if="node.type === 'text'" class="text">{{ node.con }}</p>
                <codehigh-light v-else-if="node.type === 'code'"
                    :code='node.con'
                    :lang='node.lang'
                    :dataLine = "node.stressLine">{{ node.con }}
                </codehigh-light>
                <div v-else-if="node.type === 'example'">
                    <h3 class="code-show-title">代码显示结果：</h3>
                    <div class="code-exam-show">
                        <example1 v-if="node.con === 'example1'"></example1>
                        <example2 v-if="node.con === 'example2'"></example2>
                    </div>
                </div>
                <h2 v-else-if="node.type === 'h1'">{{ node.con }}</h2>
            </div>
        </div>
        <!-- footer -->
        <article-footer :article="article"></article-footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>