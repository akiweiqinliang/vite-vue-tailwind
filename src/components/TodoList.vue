<template>
  <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-4">
    <dt class="text-sm font-medium leading-6 text-gray-900">{{ props.todoDate }}</dt>
    <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
      <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
        <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6" v-for="todo in props.todos" :key="`todo-${todo.id}`">
          <div class="flex w-0 flex-1 items-center">
            <SparklesIcon class="h-5 w-5 flex-shrink-0 text-yellow-200" aria-hidden="true" />
            <div class="ml-4 flex min-w-0 flex-1 gap-2">
              <span class="text-sm">{{ todo.text }}</span>
            </div>
          </div>
          <div class="ml-4 flex-shrink-0 inline-flex items-center">
            <button class="font-medium text-lime-700 hover:text-lime-500 mr-4" @click="emits('deleteTodo', todo)">delete</button>
            <button class="font-medium text-lime-700 hover:text-lime-500" @click="changeState(todo)" :disabled="threeSec">
              <template v-if="todo.done">
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
const props = defineProps(['todoDate', 'todos'])
const emits = defineEmits(['deleteTodo', 'changeTodoState'])
const threeSec = ref(false);
function changeState(todo) {
  threeSec.value = true;
  setTimeout(()=> {
    threeSec.value = false;
  }, 200);
  emits('changeTodoState', todo);
}

</script>

<style scoped>

</style>
