<template>
  <QuillEditor
      theme="snow"
      :toolbar="toolbarOptions"
      ref="quillEditor"
      placeholder="Start recording event..."
      style="border: none; min-height: 160px;"
  />
</template>
<script setup>
import {ref} from "vue";
const toolbarOptions = ref([
  ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', { 'align': [] }, { 'header': 1 }, { 'header': 2 }, { 'list': 'ordered'}, { 'list': 'bullet' }, { 'color': [] }, { 'background': [] }],        // toggled buttons
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] },'clean'],
]);
</script>
<style scoped>
.editorContainer{
  /*height: 100px;*/
  height: auto;
  min-height: 160px;
  border: none;
}
</style>
