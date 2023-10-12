<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-14">
    <div class="px-4 sm:px-0">
      <h3 class="text-base text-xl font-semibold leading-7 text-gray-900 flex items-center">
        <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-900 inline-block mr-1.5" aria-hidden="true" />
        {{ props.title }}
      </h3>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0" v-for="item in props.showList" :key="`website-${item.id}`">
          <dt class="mt-1 text-sm font-medium leading-6 text-gray-900" >{{ item.name }}</dt>
          <dd class="mt-1 text-xs font-medium leading-6 text-gray-500">{{ item.about }}</dd>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 hover:underline overflow-ellipsis overflow-x-auto">
            <a :href="item.url" target="_blank">{{ item.url }}</a>
          </dd>
          <dd class="mt-1 text-xs font-medium leading-7 text-gray-500 text-end">
            <a :href="item.url" target="_blank" class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-black shadow-xl bg-gradient-to-r from-from-a-yellow to-to-a-green transition hover:-rotate-2 hover:scale-110">take a look</a>
          </dd>
        </div>

      </dl>
    </div>
  </div>
</template>

<script setup>
import {PaperClipIcon} from '@heroicons/vue/20/solid';
import {computed, nextTick, onMounted, ref, watch} from "vue";
// import {getCollectedWebsitesAPI} from "@/apis/collection";
// import {nextTick, onMounted, ref} from 'vue';

const props = defineProps(['showList', 'title']);
// watch(props.websitesList, (value)=>{
//   console.log(value)
// })
// props.websitesList = computed({
//   get(value) {
//     return value;
//   },
//   set(value) {
//     props.websitesList = value;
//   }
// })


</script>
