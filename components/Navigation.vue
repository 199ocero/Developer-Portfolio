<template>
  <div>
    <nav class="flex flex-row justify-between px-10 py-2 bg-iridium">
      <div class="flex flex-row items-center space-x-3">
        <div class="w-3 h-3 rounded-full bg-mac-red"></div>
        <div class="w-3 h-3 rounded-full bg-mac-yellow"></div>
        <div class="w-3 h-3 rounded-full bg-mac-green"></div>
      </div>

      <!-- Change it the title of your website -->
      <div v-switch="$nuxt.$route.name">
        <p class="text-base text-light-gray" v-case="'index'">
          Home - Developer Portfolio
        </p>
        <p class="text-base text-light-gray" v-case="'about'">
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
      <div class="flex items-center px-10 py-3 space-x-3 bg-dark-gray">
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
