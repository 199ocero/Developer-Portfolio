<template>
  <div
    class="items-center px-10 py-5 space-y-12 text-2xl bg-baltic-sea text-light-gray"
  >
    <div class="flex items-center justify-between space-x-10">
      <p class="text-sm uppercase text-light-gray">Explorer</p>
      <div class="flex space-x-1">
        <div class="w-1 h-1 rounded-full bg-light-gray"></div>
        <div class="w-1 h-1 rounded-full bg-light-gray"></div>
        <div class="w-1 h-1 rounded-full bg-light-gray"></div>
      </div>
    </div>
    <div class="space-y-5 text-sm">
      <div class="flex items-center space-x-2 text-bae">
        <i class="text-sm fa-solid fa-chevron-down"></i>
        <p class="text-base uppercase">My Project</p>
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i class="text-orange-300 fa-regular fa-folder-open"></i>
        <nuxt-link
          to="/"
          class="transition ease-in-out hover:text-orange-300"
          :class="{
            'underline decoration-orange-300 text-orange-300':
              $route.name == 'index',
          }"
        >
          home</nuxt-link
        >
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i class="text-orange-300 fa-solid fa-folder"></i>
        <a href="#">about</a>
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i class="text-orange-300 fa-solid fa-folder"></i>
        <a href="#">projects</a>
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i class="text-orange-300 fa-solid fa-folder"></i>
        <a href="#">experience</a>
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i class="text-orange-300 fa-solid fa-folder"></i>
        <a href="#">contact</a>
      </div>
    </div>
  </div>
</template>
