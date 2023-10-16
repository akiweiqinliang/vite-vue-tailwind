<template>
  <TransitionRoot as="template" :show="state">
    <Dialog as="div" class="relative z-10" @close="state = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-lime-50 sm:mx-0 sm:h-10 sm:w-10">
                    <PlusIcon class="h-6 w-6 text-lime-900" aria-hidden="true" />
<!--                    <img src="../assets/treeLogo.png">-->
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">website</DialogTitle>
                    <div class="mt-2">
                      <form action="" class="space-y-4 grid">
                        <div class="col-span-6">
                          <label
                              for="webUrl"
                              class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
                          >
                            <input
                                v-model="websiteData.url"
                                type="text"
                                id="webUrl"
                                placeholder="Name"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            <span
                                class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                  link
                </span>
                          </label>
                        </div>
                        <div class="col-span-6">
                          <label
                              for="webName"
                              class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
                          >
                            <input
                                v-model="websiteData.name"
                                type="text"
                                id="webName"
                                placeholder="Name"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            <span
                                class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                  name
                </span>
                          </label>
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                          <label
                              for="webType"
                              class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
                          >
                            <input
                                v-model="websiteData.type"
                                type="text"
                                id="webType"
                                placeholder="Type"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            <span
                                class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                  type
                </span>
                          </label>
                        </div>
                        <div class="col-span-6 sm:col-span-2 flex justify-end items-end">
                          <Dropdown @selectWebsite="chooseType" />
                        </div>
                        <div class="col-span-6">
                          <label
                              for="webAbout"
                              class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
                          >
                            <span class=" absolute top-2 -translate-y-1/2  text-sm text-gray-700 peer-focus:text-xs">describe</span>
                            <textarea
                                v-model="websiteData.about"
                                type="text"
                                id="webAbout"
                                placeholder="Type"
                                rows="6"
                                class="mt-2 peer w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-800 transition sm:ml-3 sm:w-auto" @click="addWebsite">Add website</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="state = false" ref="cancelButtonRef">Cancel</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import Dropdown from "@/components/Dropdown.vue";
import {addWebsiteAPI} from "@/apis/collection";

const state = ref(false)
const emits = defineEmits(['addNewWebsite'])
let websiteData = ref({
  url: '',
  name: '',
  type: '',
  about: '',
})
function chooseType(obj) {
  websiteData.value.type = obj.type;
}
const open = ()=> {
  state.value = true;
}
const close = ()=> {
  state.value = false;
}

function addWebsite() {
  close();
  emits('addNewWebsite', websiteData.value);
}
defineExpose({
  open,
  close
})
</script>
