<template>
  <div class="flex min-h-screen">
    <div class="flex">
      <Sidebar />
      <Explorer />
    </div>

    <div class="flex flex-1 flex-col justify-between">
      <div>
        <Navigation />
        <Nuxt />
      </div>

      <Footer />
    </div>
  </div>
</template>
