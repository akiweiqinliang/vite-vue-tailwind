<template>
  <div class="bg-white py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">

    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ listState? 'Todo List': 'Event List' }}</h2>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Full-time
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Remote
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Today {{ new Date().toDateString() }}
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:ml-4 lg:mt-0">
      <span class="hidden sm:block">
        <button @click="listState = !listState" type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <PencilIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          {{ listState? 'Edit Event': 'Edit Todo' }}
        </button>
      </span>

        <span class="ml-3 hidden sm:block">
        <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <LinkIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          View
        </button>
      </span>

        <span class="sm:ml-3">
        <button v-show="listState" type="button" @click="saveTodo" class="inline-flex items-center rounded-md bg-gradient-to-r from-from-a-yellow to-to-a-green px-3 py-2 text-sm font-semibold text-black shadow-sm hover:shadow-xl">
          <CheckIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Publish
        </button>
        <button v-show="!listState" type="button" @click="saveEvent" class="inline-flex items-center rounded-md bg-gradient-to-r from-from-a-yellow to-to-a-green px-3 py-2 text-sm font-semibold text-black shadow-sm hover:shadow-xl">
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
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Edit Event</a>
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
        v-show="listState"
        id="OrderNotes"
        class="w-full resize-none border-none align-top focus:ring-0 sm:text-sm focus-visible:outline-0 p-3"
        rows="3"
        placeholder="Enter any additional order notes..."
        v-model="editTodo"
    ></textarea>
        <div v-show="!listState">
          <div ref="editorContainer" @click="quillInstance.focus()">
          </div>
        </div>
        <div class="flex items-center justify-end gap-2 bg-white p-3">
          <button
              type="button"
              class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
              @click="editTodo = ''"
          >
            Clear
          </button>

        </div>
      </div>
    </div>
    <div v-for="(dayTodos, index) in todosMap" :key="`dashboard-todo-${index}`" v-show="listState">
      <TodoList :todo-date="dayTodos[0]" :todos="dayTodos[1]" :todo-flag="true" @deleteTodo="deleteTodo" @changeTodoState="changeTodoState"/>
    </div>
    <div v-for="(dayEvent, index) in eventsMap" :key="`dashboard-event-${index}`" v-show="!listState">
      <TodoList :todo-date="dayEvent[0]" :todos="dayEvent[1]" :todo-flag="false" @deleteEvent="deleteEvent" @changeEventState="changeEventState"/>
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
import {
  changeEventStateAPI,
  changeTodoStateAPI, deleteEventAPI,
  deleteTodoAPI,
  getEventsAPI,
  getTodosAPI,
  saveEventAPI,
  saveTodoAPI
} from "@/apis/dashboard";
import Quill from "quill";
import 'quill/dist/quill.core.css'; // 导入 Quill 的核心样式
import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css'; // 导入 Quill 的 bubble 样式（可选）
import '@/assets/css/customEditor.css';

const editorContainer = ref(null)
let quillInstance;
onMounted(() => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'blockquote', 'code-block', 'image', { 'align': [] }, { 'header': 1 }, { 'header': 2 }, { 'list': 'ordered'}, { 'list': 'bullet' }, { 'color': [] }, { 'background': [] }],        // toggled buttons
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] },'clean'],
  ];
  quillInstance = new Quill(editorContainer.value, {
    // Quill 配置项
    modules: { toolbar: toolbarOptions },
    placeholder: 'Start recording event...',
    theme: 'snow',
  })

  getAllData();
})


const todosMap = ref([])
const eventsMap = ref([])
const listState = ref(true)
const editTodo = ref("")
const editEvent = ref("")
const getAllData = async ()=> {
  todosMap.value = await getTodosAPI();
  eventsMap.value = await getEventsAPI();
}
function saveTodo() {
  if (editTodo.value.trim() === ""){
    editTodo.value = "";
    return;
  }
  saveTodoAPI(editTodo.value).then(() => {
    getAllData()
  })
  editTodo.value = '';
}
function deleteTodo(todo) {
  deleteTodoAPI(todo).then(() => {
    getAllData();
  })
}
function changeTodoState(todo) {
  changeTodoStateAPI(todo).then(() => {
    getAllData();
  })
}
function saveEvent() {
  editEvent.value = quillInstance.root.innerHTML;
  if (quillInstance.getText().trim() === ''){
    quillInstance.root.innerHTML = "";
    editEvent.value = "";
    return;
  }
  saveEventAPI(editEvent.value).then(() => {
    getAllData();
  })
  quillInstance.root.innerHTML = "";
  editEvent.value = "";
}
function deleteEvent(event) {
  deleteEventAPI(event).then(() => {
    getAllData();
  })
}
function changeEventState(event) {
  changeEventStateAPI(event).then(() => {
    getAllData();
  })
}
</script>

