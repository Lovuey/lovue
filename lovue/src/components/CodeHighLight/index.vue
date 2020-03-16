<template>
  <div>
    <pre><code :class="'language-'+lang" v-text="code">
      </code></pre>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  name: "CodeHighLight",
  props: ["code", "lang"],
  data() {
    return {};
  },
  mounted() {
    Prism.highlightAll();
  },
  updated() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
pre {
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>