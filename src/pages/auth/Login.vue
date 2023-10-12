<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
          class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
            alt="Night"
            src="../../assets/loginPic.jpg"
            class="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <div class="flex items-center">
            <a class="inline-block mr-1.5" href="/">
              <span class="sr-only">Home</span>
              <img src="../../assets/treeLogo.png" class="h-12 w-12">
            </a>

            <h6 class="mt-0 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to aki's website
            </h6>
          </div>

          <p class="mt-4 leading-relaxed text-white/90">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
            dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
        </div>
      </section>

      <main
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <a
                class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
            >
              <span class="sr-only">Home</span>
              <img src="../../assets/treeLogo.png" class="h-12 w-12">
            </a>

            <h1
                class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Welcome to aki's website
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>

          <form v-show="auth" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                  for="UserName"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
              >
                <input
                    v-model="registerData.userName"
                    type="text"
                    id="UserName"
                    placeholder="Name"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Name
                </span>
              </label>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                  for="UserNumber"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
              >
                <input
                    v-model="registerData.phoneNumber"
                    type="text"
                    id="UserNumber"
                    placeholder="Phone Number"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Phone Number
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <label
                  for="UserEmail"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
              >
                <input
                    v-model="registerData.email"
                    type="email"
                    id="UserEmail"
                    placeholder="Email"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Email
                </span>
              </label>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                  for="UserPassword"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
              >
                <input
                    v-model="registerData.password"
                    type="password"
                    id="UserPassword"
                    placeholder="Password"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Password
                </span>
              </label>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                  for="UserPasswordConfirmation"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
              >
                <input
                    v-model="registerData.passwordConf"
                    type="password"
                    id="UserPasswordConfirmation"
                    placeholder="Password Confirmation"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Password Confirmation
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                  type="button"
                  @click="register"
                  class="inline-block shrink-0 rounded-md border border-lime-600 px-12 py-3 text-sm font-medium text-lime-600 transition hover:bg-transparent hover:bg-lime-900 hover:border-lime-900 hover:text-white focus:outline-none"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <a class="text-gray-700 underline cursor-pointer" @click="auth=!auth">Log in</a>.
              </p>
            </div>
          </form>
          <form v-show="!auth" action="#" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <label
                  for="LoginUserName"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
              >
                <input
                    v-model="loginData.userName"
                    type="text"
                    id="LoginUserName"
                    placeholder="Name"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Name
                </span>
              </label>
            </div>
            <div class="col-span-6">
              <label
                  for="LoginUserPassword"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-lime-600"
              >
                <input
                    v-model="loginData.password"
                    type="password"
                    id="LoginUserPassword"
                    placeholder="Password"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Password
                </span>
              </label>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                  type="button"
                  @click="login"
                  class="inline-block shrink-0 rounded-md border border-lime-600 px-12 py-3 text-sm font-medium text-lime-600 transition hover:bg-transparent hover:bg-lime-900 hover:border-lime-900 hover:text-white focus:outline-none"
              >
                Login
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Create a new account？
                <a class="text-gray-700 underline cursor-pointer" @click="auth=!auth">register</a>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>
<script setup>
import {ref} from "vue";
import {loginAPI, registerAPI} from "@/apis/auths";
import {pageCode} from "@/enums/pageCode";
import {useRouter} from "vue-router";

const router = useRouter();
let auth = ref(true)
let registerData = ref({
  userName: '',
  password: '',
  email: '',
  phoneNumber: '',
  passwordConf: '',
})
let loginData = ref({
  userName: '',
  password: '',
})
async function register() {
  const result = await registerAPI(registerData.value);
  if (result.code !== 200){
    alert(result.msg);
  }else if (result.code === 200){
    registerData.value = {
      userName: '',
      password: '',
      email: '',
      phoneNumber: '',
      passwordConf: '',
    }
    await router.push({name: pageCode.HOME});
  }
}
async function login() {
  const result = await loginAPI(loginData.value);
  if (result.code !== 200){
    alert(result.msg);
  }else if (result.code === 200){
    sessionStorage.setItem('user', loginData.value.userName);
    loginData.value = {
      userName: '',
      password: '',
    }
    await router.push({name: pageCode.HOME});
  }
}
</script>
