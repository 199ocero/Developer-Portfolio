<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center">
    <p class="text-light-gray">Hi 👋 , my name is</p>
    <p class="text-4xl font-bold">Jay-Are Ocero</p>
    <p class="text-lg font-semibold text-light-gray">
      Freelance Full Stack Developer and UI/UX Designer
    </p>
    <p class="text-light-gray">
      I am passionate about creating high-quality websites and web/mobile apps
      that benefit everyone else around me. I incorporate fully responsive
      design and realistic look and style to create an amazing user interface
      with an excellent user experience.
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Home',
  },
  mounted() {
    this.$store.commit('SET_TITLE', this.title)
  },
}
</script>
