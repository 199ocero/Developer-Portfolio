<template>
  <div class="space-y-12">
    <div class="space-y-5 text-sm">
      <div class="flex items-center space-x-2 text-bae">
        <i class="text-sm fa-solid fa-chevron-down"></i>
        <p class="text-base uppercase">My Project</p>
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i
          class="text-orange-300 fa-regular fa-folder"
          :class="{
            'text-orange-300 fa-regular fa-folder-open': $route.name == 'index',
          }"
        ></i>
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
        <i
          class="text-orange-300 fa-regular fa-folder"
          :class="{
            'text-orange-300 fa-regular fa-folder-open': $route.name == 'about',
          }"
        ></i>
        <nuxt-link
          to="/about"
          class="transition ease-in-out hover:text-orange-300"
          :class="{
            'underline decoration-orange-300 text-orange-300':
              $route.name == 'about',
          }"
        >
          about</nuxt-link
        >
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i
          class="text-orange-300 fa-regular fa-folder"
          :class="{
            'text-orange-300 fa-regular fa-folder-open':
              $route.name == 'projects',
          }"
        ></i>
        <nuxt-link
          to="/projects"
          class="transition ease-in-out hover:text-orange-300"
          :class="{
            'underline decoration-orange-300 text-orange-300':
              $route.name == 'projects',
          }"
        >
          projects</nuxt-link
        >
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i
          class="text-orange-300 fa-regular fa-folder"
          :class="{
            'text-orange-300 fa-regular fa-folder-open':
              $route.name == 'experience',
          }"
        ></i>
        <nuxt-link
          to="/experience"
          class="transition ease-in-out hover:text-orange-300"
          :class="{
            'underline decoration-orange-300 text-orange-300':
              $route.name == 'experience',
          }"
        >
          experience</nuxt-link
        >
      </div>
      <div class="flex items-center ml-5 space-x-2">
        <i class="fa-solid fa-chevron-right"></i>
        <i
          class="text-orange-300 fa-regular fa-folder"
          :class="{
            'text-orange-300 fa-regular fa-folder-open':
              $route.name == 'contact',
          }"
        ></i>
        <nuxt-link
          to="/contact"
          class="transition ease-in-out hover:text-orange-300"
          :class="{
            'underline decoration-orange-300 text-orange-300':
              $route.name == 'contact',
          }"
        >
          contact</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
