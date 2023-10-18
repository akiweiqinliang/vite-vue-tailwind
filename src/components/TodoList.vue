<template>
  <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-4" :class="todoFlag?'':'sm:grid-cols-6'">
    <dt class="text-sm font-medium leading-6 text-gray-900">{{ props.todoDate }}</dt>
    <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0" :class="todoFlag?'':'sm:col-span-5'">
      <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
        <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6" v-for="item in props.todos" :key="`todoOrEvent-${item.id}`">
          <div class="flex w-0 flex-1 items-center">
            <SparklesIcon class="h-5 w-5 flex-shrink-0 text-yellow-200" aria-hidden="true" />
            <div class="ml-4 flex min-w-0 flex-1 gap-2">
              <span class="text-sm" v-if="todoFlag">{{ item.text }}</span>
              <div class="ql-snow" v-else>
                <section class="ql-editor break-all" v-html="item.text"></section>
              </div>
            </div>
          </div>
          <div class="ml-4 flex-shrink-0 inline-flex items-center">
            <button class="font-medium text-lime-700 hover:text-lime-500 mr-4" v-if="!todoFlag">edit</button>
            <button class="font-medium text-lime-700 hover:text-lime-500 mr-4" @click="todoFlag?emits('deleteTodo', item):emits('deleteEvent', item)">delete</button>
            <button class="font-medium text-lime-700 hover:text-lime-500" @click="changeState(item)" :disabled="threeSec">
              <template v-if="item.done">
                <CheckIcon class="h-5 w-5 flex-shrink-0 text-lime-500" aria-hidden="true" />
              </template>
              <template v-else>
                ok
              </template>
            </button>
          </div>
        </li>
      </ul>
    </dd>
  </div>

</template>

<script setup>

import {PaperClipIcon, CheckIcon, SparklesIcon} from '@heroicons/vue/20/solid';
import {ref} from "vue";
const props = defineProps(['todoDate', 'todos','todoFlag'])
const emits = defineEmits(['deleteTodo', 'changeTodoState','deleteEvent', 'changeEventState'])
const threeSec = ref(false);
function changeState(item) {
  threeSec.value = true;
  setTimeout(()=> {
    threeSec.value = false;
  }, 200);
  if (props.todoFlag){
    emits('changeTodoState', item);
  }else {
    emits('changeEventState', item);
  }
}

</script>

<style scoped>

</style>
