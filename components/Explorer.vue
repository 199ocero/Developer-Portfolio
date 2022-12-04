<template>
  <div class="space-y-12">
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
