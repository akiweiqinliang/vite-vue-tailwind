<template>
  <div>
    <div ref="toolbar">
    </div>
    <div class="editorContainer" ref="editorContainer" @click="quillInstance.focus()">
    </div>
  </div>
</template>
<script setup>
import Quill from "quill";
import {onMounted, ref} from "vue";
import 'quill/dist/quill.core.css'; // 导入 Quill 的核心样式
import 'quill/dist/quill.bubble.css'; // 导入 Quill 的 bubble 样式（可选）
import 'quill/dist/quill.snow.css';

const editorContainer = ref(null)
const toolbar = ref(null)
let quillInstance;

onMounted(() => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', { 'align': [] }, { 'header': 1 }, { 'header': 2 }, { 'list': 'ordered'}, { 'list': 'bullet' }, { 'color': [] }, { 'background': [] }],        // toggled buttons
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] },'clean'],
  ];

  quillInstance = new Quill(editorContainer.value, {
    // Quill 配置项
    modules: { toolbar: toolbarOptions },
    placeholder: 'Start recording event...',
    theme: 'snow',
  })
})

</script>
<style scoped>
.editorContainer{
  /*height: 100px;*/
  height: auto;
  min-height: 160px;
  border: none;
}
.editorContainer:hover{
  cursor: text;
}
</style>
