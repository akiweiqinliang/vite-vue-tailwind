<template>
  <div class="bg-white py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">

    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Todo List</h2>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Full-time
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Remote
          </div>
<!--          <div class="mt-2 flex items-center text-sm text-gray-500">-->
<!--            <CurrencyDollarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />-->
<!--            $120k &ndash; $140k-->
<!--          </div>-->
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Today {{ new Date().toDateString() }}
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:ml-4 lg:mt-0">
      <span class="hidden sm:block">
        <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <PencilIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Edit More
        </button>
      </span>

        <span class="ml-3 hidden sm:block">
        <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <LinkIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          View
        </button>
      </span>

        <span class="sm:ml-3">
        <button type="button" @click="saveTodo" class="inline-flex items-center rounded-md bg-gradient-to-r from-from-a-yellow to-to-a-green px-3 py-2 text-sm font-semibold text-black shadow-sm hover:shadow-xl">
          <CheckIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Publish
        </button>
      </span>

        <!-- Dropdown -->
        <Menu as="div" class="relative ml-3 sm:hidden">
          <MenuButton class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon class="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </MenuButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Edit</a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">View</a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <div>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm mt-8">
    <textarea
        id="OrderNotes"
        class="w-full resize-none border-none align-top focus:ring-0 sm:text-sm focus-visible:outline-0 p-3"
        rows="3"
        placeholder="Enter any additional order notes..."
        v-model="editText"
    ></textarea>

        <div class="flex items-center justify-end gap-2 bg-white p-3">
          <button
              type="button"
              class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
              @click="editText = ''"
          >
            Clear
          </button>

        </div>
      </div>
    </div>
    <div v-for="(dayTodos, index) in todosMap" :key="`dashboard-${index}`">
      <TodoList :todo-date="dayTodos[0]" :todos="dayTodos[1]" @refreshData="handleRefresh"/>
    </div>
  </div>
</template>

<script setup>
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import TodoList from "@/components/TodoList.vue";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {getTodosAPI, saveTodoAPI} from "@/apis/dashboard";

const todosMap = ref([]);
const getAllData = async ()=> {
  todosMap.value = await getTodosAPI();
}
onMounted(() => getAllData());

const editText = ref("");
function saveTodo() {
  if (editText.value.trim() === ""){
    editText.value = "";
    return;
  }
  saveTodoAPI(editText.value);
  handleRefresh();
  editText.value = '';
}
function handleRefresh() {
  setTimeout(getAllData, 0);
}
</script>
