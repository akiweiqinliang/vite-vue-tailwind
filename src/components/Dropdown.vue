<template>
  <Menu as="div" class="relative ml-3">
    <MenuButton class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
      Quick select
      <ChevronDownIcon class="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
    </MenuButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" style="    max-height: 152px;
    overflow-y: scroll;">
        <MenuItem v-slot="{ active }" v-show="!props.isModal">
          <a @click="emits('selectWebsite', {type: 'all'})" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">All</a>
        </MenuItem>
        <MenuItem v-slot="{ active }" v-for="type in typeList" :key="`type-${type}`">
          <a @click="emits('selectWebsite', {type: type})" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{  type }}</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script setup>
import {ChevronDownIcon} from "@heroicons/vue/20/solid";
import {inject, onMounted, ref} from "vue";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import {getAllTypeAPI} from "@/apis/collection";
let active = ref(true)
const emits = defineEmits(['selectWebsite']);
const typeList = inject('typeList')
const props = defineProps(['isModal'])
</script>
