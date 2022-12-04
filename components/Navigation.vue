<template>
  <div>
    <nav
      class="flex flex-row items-center justify-between px-10 py-2 bg-iridium"
    >
      <div class="flex-row items-center hidden space-x-3 sm:flex">
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
        <p class="text-base text-light-gray" v-case="'projects'">
          Projects - Developer Portfolio
        </p>
        <p class="text-base text-light-gray" v-case="'experience'">
          Experience - Developer Portfolio
        </p>
        <p class="text-base text-light-gray" v-case="'contact'">
          Contact - Developer Portfolio
        </p>
      </div>
      <a
        href="#"
        class="relative flex flex-col justify-center w-5 h-8 lg:hidden"
        @click.prevent="mobileNavOpen = !mobileNavOpen"
      >
        <span
          class="w-5 h-0.5 mb-1 rounded bg-light-gray"
          :class="{
            'transition ease-in-out rotate-45 absolute right-0': mobileNavOpen,
            'transition ease-in-out': !mobileNavOpen,
          }"
        ></span>
        <span
          class="w-5 h-0.5 mb-1 rounded bg-light-gray"
          :class="{
            hidden: mobileNavOpen,
          }"
        ></span>
        <span
          class="w-5 h-0.5 mb-1 rounded bg-light-gray"
          :class="{
            'transition ease-in-out -rotate-45 absolute right-0': mobileNavOpen,
            'transition ease-in-out': !mobileNavOpen,
          }"
        ></span>
      </a>
      <a
        href="mailto: freelanceocero@gmail.com"
        class="hidden transition ease-in-out lg:block text-light-gray hover:text-mac-yellow"
        >freelanceocero@gmail.com</a
      >
    </nav>
    <div
      class="flex w-full bg-iridium text-light-gray"
      :class="{
        'hidden lg:flex': !mobileNavOpen,
      }"
    >
      <div
        @click.prevent="mobileNavOpen = !mobileNavOpen"
        class="flex flex-col px-10 py-5 space-y-5 lg:hidden"
      >
        <Explorer />
      </div>
    </div>
    <div class="flex bg-baltic-sea">
      <div class="flex items-center px-10 py-3 space-x-3 bg-dark-gray">
        <img src="~assets/icons/vue.svg" alt="Vue icon" class="w-5 h-auto" />
        <p>{{ $nuxt.$route.name }}.vue</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VSwitch from 'v-switch-case'

Vue.use(VSwitch)
export default {
  data() {
    return {
      mobileNavOpen: false,
    }
  },
}
</script>
