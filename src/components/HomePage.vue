<template>
  <section class="m-1">
    <div class="navbar bg-gray-200 rounded-lg">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">mY pAgE</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li><a>Item 1</a></li>
          <li><a>Item 1</a></li>
          <li><a href="/signup">Log In</a></li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    }
  },
};
</script>
