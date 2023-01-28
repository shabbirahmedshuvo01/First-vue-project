<template>
  <section class="mx-20">
    <section class="h-full gradient-form bg-white md:h-screen">
      <div class="container py-12 px-6 h-full">
        <div
          class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
        >
          <div class="xl:w-10/12">
            <div class="block bg-gray-200 shadow-lg rounded-lg">
              <div class="lg:flex lg:flex-wrap g-0">
                <div class="lg:w-6/12 px-4 md:px-0">
                  <div class="md:p-12 md:mx-6">
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                        We are The Lotus Team
                      </h4>
                    </div>
                    <section>
                      <p class="mb-4">Please Create to your account</p>
                      <div class="mb-4">
                        <input
                          type="text"
                          name="name"
                          id=""
                          v-model="name"
                          placeholder="Your Name"
                          required
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          type="email"
                          name="email"
                          id=""
                          v-model="email"
                          placeholder="Email address"
                          required
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          type="password"
                          name="password"
                          id=""
                          v-model="password"
                          placeholder="Password"
                          required
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                      <div class="text-center pt-1 mb-12 pb-1">
                        <!-- <input
                                                        className='btn btn-success mt-2' type="submit" value="register" /> -->

                        <button
                          class="btn btn-success mt-2"
                          v-on:click="signUp"
                        >
                          submit
                        </button>

                        <br />
                        <a class="text-gray-500 mt-5" href="#!"
                          >Forgot password?</a
                        >
                      </div>
                      <div class="">
                        <p class="mb-0 mr-2">
                          Don't have an account?
                          <span
                            ><a class="text-blue-600" href="/">Log In</a></span
                          >
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.warn("signup", this.name, this.email, this.password);
      let result = await axios.post(" http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        alert("done");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style>
.logo {
  width: 100px;
}
</style>
