<script setup>
import { ref, computed } from 'vue'

import ErrorBlock from '@/components/Form/ErrorBlock.vue'
import MainLayout from '@/layouts/MainLayout.vue'

/*
Reto 1: Validación de formularios

En este formulario de registro, vamos a pedir a los usuarios que nos proporcionen
un nombre, un email y una contraseña (dos veces). Las validaciones serán las siguientes:

  Nombre                Requerido | Máximo 64 letras
  Email                 Requerido | Formato Email
  Contraseña            Requerido | 8 caracteres alfanuméricos, un número y un caracter especial
  Repetir Contraseña    Requerido | Misma contraseña que la anterior

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

const form = {
  username: ref(''),
  email: ref(''),
  password: ref(''),
  confirm: ref(''),
}

const errors = ref({})
const valid = {
  username: computed(() => form.username.value.trim() !== ''),
  email: computed(() => form.email.value.trim() !== '' && form.email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),
  password: computed(() => form.password.value.trim() !== '' && form.password.value.match(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#¡!%¿?&@$^&*-.,]).{8,}$/)),
  confirm: computed(() => form.confirm.value.trim() !== '' && form.confirm.value === form.password.value),
}

const validateField = (field) => {
  delete errors.value[field] // reset

  if (field === 'username' && !valid[field].value) {
    errors.value[field] = 'Username is required.'
  }
  if (field === 'email' && !valid[field].value) {
    errors.value[field] = 'Invalid email address.'
  }
  if (field === 'password' && !valid[field].value) {
    errors.value[field] = 'Invalid password (must be 8 digits, 1 number and a special char).'
  }
  if (field === 'confirm' && !valid[field].value) {
    errors.value[field] = 'Password and confirm must match.'
  }
}

const formIsValid = computed(() => Object.keys(errors.value).length === 0)

const submit = () => {
  /*
  No es necesario integrar ningún cliente http. Simplemente valida que los datos son válidos
  antes de pintar el payload por consola mediante console.log(), Por ejemplo:
  */
  Object.keys(form).map(k => validateField(k))

  if (formIsValid.value) {
    console.log(form)
  }
}
</script>

<template>
  <MainLayout>
    <form
      class="bg-white p-10 rounded-lg shadow-lg min-w-full"
      @submit.prevent="submit"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            id="username"
            v-model="form.username.value"
            name="username"
            type="text"
            placeholder="username"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            @blur="validateField('username')"
          >
          <error-block
            v-if="!valid.username.value"
            :error="errors.username"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            id="email"
            v-model="form.email.value"
            name="email"
            type="text"
            placeholder="@email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            @blur="validateField('email')"
          >
          <error-block
            v-if="!valid.email.value"
            :error="errors.email"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            v-model="form.password.value"
            name="password"
            type="password"
            placeholder="password"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            @blur="validateField('password')"
          >
          <error-block
            v-if="!valid.password.value"
            :error="errors.password"
          />
        </div>

        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="confirm"
          >
            Confirm password
          </label>
          <input
            id="confirm"
            v-model="form.confirm.value"
            name="confirm"
            type="password"
            placeholder="confirm password"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            @blur="validateField('confirm')"
          >
          <error-block
            v-if="!valid.confirm.value"
            :error="errors.confirm"
          />
        </div>
      </div>

      <button
        type="submit"
        class="bg-primary w-full mt-6 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans"
      >
        Register
      </button>
    </form>
  </MainLayout>
</template>
