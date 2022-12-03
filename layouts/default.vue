<template>
  <div class="flex min-h-screen">
    <div class="flex">
      <Sidebar />
      <Explorer />
    </div>

    <div class="flex flex-1 flex-col justify-between">
      <Navigation />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>
