<template>
  <div>
    <nav class="bg-iridium py-2 flex flex-row justify-between px-10">
      <div class="flex flex-row space-x-3 items-center">
        <div class="w-3 h-3 rounded-full bg-mac-red"></div>
        <div class="w-3 h-3 rounded-full bg-mac-yellow"></div>
        <div class="w-3 h-3 rounded-full bg-mac-green"></div>
      </div>

      <!-- Change it the title of your website -->
      <div v-switch="$nuxt.$route.name">
        <p class="text-light-gray text-base" v-case="'index'">
          Home - Developer Portfolio
        </p>
        <p class="text-light-gray text-base" v-case="'about'">
          About - Developer Portfolio
        </p>
      </div>
      <!-- You can add your social accounts here -->
      <div class="flex flex-row space-x-5 text-light-gray">
        <a
          href="https://gitlab.com/ocero-freelance-projects"
          class="transition ease-in-out hover:text-mac-yellow"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a
          href="https://www.behance.net/freelance-ocero"
          class="transition ease-in-out hover:text-mac-yellow"
        >
          <i class="fa-brands fa-behance"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/jay-are-ocero-891b63208/"
          class="transition ease-in-out hover:text-mac-yellow"
        >
          <i class="fa-brands fa-linkedin-in"></i
        ></a>
        <a
          href="https://www.facebook.com/jaocero/"
          class="transition ease-in-out hover:text-mac-yellow"
        >
          <i class="fa-brands fa-facebook-f"></i
        ></a>
      </div>
    </nav>
    <div class="flex bg-baltic-sea">
      <div class="flex space-x-3 items-center py-3 bg-dark-gray px-10">
        <img src="~assets/icons/vue.svg" alt="Vue icon" class="w-5 h-auto" />
        <p>index.vue</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VSwitch from 'v-switch-case'

Vue.use(VSwitch)
export default {}
</script>
