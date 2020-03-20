<template>
  <div v-show="code">
    <pre><code :class="codeClass" v-text="code">
      </code></pre>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  name: "CodeHighLight",
  props: {
    code: { type: String, required: true },
    lang: { type: String, default: "javascript" }
  },
  data() {
    return {};
  },
  computed:{
    codeClass:function(){
      return 'language-'+this.lang
    }
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