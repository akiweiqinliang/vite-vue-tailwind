<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8 backdrop-blur" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto scale-125" src="../../assets/treeLogo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link v-for="item in navigation" :to="{ name: item.name }" class="text-sm font-semibold leading-6 text-gray-900">
          <div>
            {{ item.name }}
          </div>
        </router-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <router-link :to="{ name : pageCode.LOGIN}" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></router-link>
      </div>
    </nav>

    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto scale-125" src="../../assets/treeLogo.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6" >
              <router-link v-for="item in navigation" :to="{name: item.name}" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">{{ item.name }}</router-link>
            </div>
            <div class="py-6">
              <router-link :to="{ name : pageCode.LOGIN }" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import {pageCode} from "@/enums/pageCode";

const navigation = [
  { name: pageCode.HOME,},
  { name: pageCode.ABOUT },
  { name: pageCode.COLLECTION },
  { name: pageCode.DASHBOARD },
  { name: pageCode.HAPPY },
]

let mobileMenuOpen = ref(false)
</script>

<style scoped>

</style>
