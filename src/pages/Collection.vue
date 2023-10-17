<template>
  <div>
    <header class="bg-gray-50 pt-24">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="flex items-center justify-end gap-4">
          <div class="flex items-center gap-4">
            <div class="relative">
              <label class="sr-only" for="search"> Search </label>
              <input
                  v-model.trim="searchWebsiteText"
                  class="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56 focus-visible:outline-lime-700 hover:text-lime-900"
                  id="search"
                  type="text"
                  placeholder="Search website..."
              />
              <button
                  @click="selectWebsiteByName"
                  type="button"
                  class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span class="sr-only">Search</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <a
                href="#"
                class="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <span class="sr-only">Notifications</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
          </div>

          <span
              aria-hidden="true"
              class="block h-6 w-px rounded-full bg-gray-200"
          ></span>

          <a href="#" class="block shrink-0">
            <span class="sr-only">Profile</span>
            <img
                alt="Man"
                src="../assets/catAvatar.jpg"
                class="h-10 w-10 rounded-full object-cover"
            />
          </a>
        </div>
        <div class="mt-8 flex items-end">
          <div class="flex-1">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome back, {{ username }}!
            </h1>

            <p class="mt-1.5 text-sm text-gray-500">
              Here is your favorites list, review the past and learn the new. 🚀
            </p>
          </div>
          <button type="button" @click="openAddWebsiteModal" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">add</button>
          <Dropdown @selectWebsite="selectType" />
        </div>
      </div>
    </header>
    <div v-for="(list, index) in allCollectedList" :key="`collection-${index}`" v-if="selectedWebsiteList.length === 0">
      <List :show-list="list[1]" :title="list[0]" v-show="showWebsiteType === list[0] || showWebsiteType === 'all'" />
    </div>
    <div v-for="(list, index) in selectedWebsiteList" :key="`search-${index}`" v-else>
      <List :show-list="list[1]" :title="list[0]" v-show="showWebsiteType === list[0] || showWebsiteType === 'all'" />
    </div>
    <Modals ref="addWebsiteFlag" @addNewWebsite="addNewWebsite" />
  </div>
</template>

<script setup>
import List from "@/components/List.vue";
import {
  addWebsiteAPI,
  getAllCollectionAPI, getAllTypeAPI,
  getCollectionByTypeAPI, selectWebsiteByNameAPI,
} from "@/apis/collection";
import {getCurrentInstance, nextTick, onMounted, provide, ref, watch} from 'vue';
import Dropdown from "@/components/Dropdown.vue";
import Modals from "@/components/Modals.vue";

let allCollectedList = ref({})
let showWebsiteType = ref('all')
let username = ref(sessionStorage.getItem('user'))
let typeList = ref([])
const addWebsiteFlag = ref(null)
const searchWebsiteText = ref('')
let selectedWebsiteList = ref([])

provide('typeList', typeList)
onMounted(() => getWebsites())
const getWebsites = async ()=> {
  allCollectedList.value = await getAllCollectionAPI()
  typeList.value = await getAllTypeAPI();
  console.log(allCollectedList)
}
function openAddWebsiteModal() {
    addWebsiteFlag.value.open();
}
function selectType(obj) {
  showWebsiteType.value = obj.type;
}
function addNewWebsite(data) {
  addWebsiteAPI(data).then(() => {
    getWebsites();
  })
}
async function selectWebsiteByName() {
  if (searchWebsiteText.value === '') {
    return
  }
  selectedWebsiteList.value = await selectWebsiteByNameAPI(searchWebsiteText.value, false);
  console.log(selectedWebsiteList.value)
}
watch(searchWebsiteText, (value) => {
  if (value === ''){
    selectedWebsiteList.value = []
  }
})
</script>

<style scoped>

</style>
