<template>
  <div class="flex min-h-screen">
    <div class="flex">
      <Sidebar />
      <div
        class="flex-col items-center hidden px-10 py-5 space-y-12 text-2xl bg-baltic-sea text-light-gray lg:flex"
      >
        <div class="flex items-center justify-between space-x-10">
          <p class="text-sm uppercase text-light-gray">Explorer</p>
          <div class="flex space-x-1">
            <div class="w-1 h-1 rounded-full bg-light-gray"></div>
            <div class="w-1 h-1 rounded-full bg-light-gray"></div>
            <div class="w-1 h-1 rounded-full bg-light-gray"></div>
          </div>
        </div>
        <Explorer />
      </div>
    </div>

    <div class="flex flex-col justify-between flex-1">
      <Navigation />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>
