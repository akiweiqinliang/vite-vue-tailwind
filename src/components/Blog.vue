<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ props.title }}</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">{{ props.underText }}</p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in props.showList" :key="`happy-${post.id}`" class="flex max-w-xl flex-col items-start justify-between w-full">
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {{ post.name }}
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.introduction }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img src="../assets/treeLogo.png" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                  <span class="absolute inset-0" />
                  {{ post.author }}
              </p>
              <p class="text-gray-600">{{ post.type }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'underText', 'showList'])
</script>
