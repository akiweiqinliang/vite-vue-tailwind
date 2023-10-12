<template>
  <div>
    <Blog :title="'some books'" :underText="bookText" :showList="booksList"/>
  </div>
</template>

<script setup>
import Blog from "@/components/Blog.vue";
import {onMounted, ref} from 'vue';
import {getBooksAPI} from "@/apis/happy";

let booksList = ref([]);
const bookText = "It\'s three o\'clock. Let\'s drink tea first.";
const getAllData = async ()=> {
  booksList.value = await getBooksAPI();
}
onMounted(() => getAllData());
</script>

<style scoped>

</style>
