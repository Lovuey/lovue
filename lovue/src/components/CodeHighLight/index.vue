<template>
  <div>
    <pre>
      <code :class="'language-'+lang" v-text="code"></code>
    </pre>
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
  mounted() {
    Prism.highlightAll();
  },
  computed:{
    codeClass:function(){
      return 'language-'+this.lang
    }
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