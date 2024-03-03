<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
/*
Reto 2: Vista de Datos del Usuario.

En este ejercicio queremos poner en práctica la creatividad y la capacidad de proponer mejoras
en los diseños por parte del desarrollador. En nuestro día a día trabajaremos con diseños definidos,
pero también vamos a valorar la capacidad de las personas a la hora de proponer estructuración para los datos.

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

const userData = {
  id: 1,
  firstName: 'Terry',
  lastName: 'Medhurst',
  maidenName: 'Smitham',
  age: 50,
  gender: 'male',
  email: 'atuny0@sohu.com',
  phone: '+63 791 675 8914',
  username: 'atuny0',
  password: '9uQFF1Lh',
  birthDate: '2000-12-25',
  image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
  bloodGroup: 'A+',
  height: 189,
  weight: 75.4,
  eyeColor: 'Green',
  hair: {
    color: 'Black',
    type: 'Strands',
  },
  domain: 'slashdot.org',
  ip: '117.29.86.254',
  address: {
    address: '1745 T Street Southeast',
    city: 'Washington',
    coordinates: {
      lat: 38.867033,
      lng: -76.979235,
    },
    postalCode: '20020',
    state: 'DC',
  },
  macAddress: '13:69:BA:56:A3:74',
  university: 'Capitol University',
  bank: {
    cardExpire: '06/22',
    cardNumber: '50380955204220685',
    cardType: 'maestro',
    currency: 'Peso',
    iban: 'NO17 0695 2754 967',
  },
  company: {
    address: {
      address: '629 Debbie Drive',
      city: 'Nashville',
      coordinates: {
        lat: 36.208114,
        lng: -86.58621199999999,
      },
      postalCode: '37076',
      state: 'TN',
    },
    department: 'Marketing',
    name: "Blanda-O'Keefe",
    title: 'Help Desk Operator',
  },
  ein: '20-9487066',
  ssn: '661-64-2976',
}
</script>

<template>
  <MainLayout>
    <body class="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
      <section class="bg-cream-lighter p-4 shadow">
        <div class="md:flex">
          <img
            class="inline h-6 rounded-full border-2 border-white dark:border-gray-800 mr-2"
            :src="userData.image"
            alt=""
          >
          <h2 class="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
            {{ userData.firstName }}
            {{ userData.lastName }}
          </h2>
        </div>
        <form>
          <div class="md:flex mb-8">
            <div class="md:w-1/3">
              <legend class="uppercase tracking-wide text-sm">
                Personal
              </legend>
            </div>

            <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <div class="md:flex mb-4">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Username</label>
                  {{ userData.username }}
                </div>

                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Password</label>
                  {{ userData.password }}
                </div>
              </div>

              <div class="md:flex mb-4">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Birthday</label>
                  <span>
                    {{ userData.birthDate }}
                  </span>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Gender</label>
                  <span>
                    {{ userData.gender || 'ND' }}
                  </span>
                </div>
              </div>

              <div class="md:flex mb-4">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Height</label>
                  <span>
                    {{ userData.height || '-' }}
                  </span>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">weight</label>
                  <span>
                    {{ userData.weight || '-' }}
                  </span>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">eye Color</label>
                  <span>
                    {{ userData.eyeColor || '-' }}
                  </span>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">hair</label>
                  <span>
                    {{ userData.hair.color }} ({{ userData.hair.type }})
                  </span>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">blood group</label>
                  <span>
                    {{ userData.bloodGroup || '-' }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:w-1/3">
              <legend class="uppercase tracking-wide text-sm">
                Address
              </legend>
            </div>

            <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <div class="md:flex mb-4">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Street Address</label>
                  <span>
                    {{ userData.address.address }}
                    {{ userData.address.city }}
                    {{ userData.address.state }}
                    ({{ userData.address.postalCode }})
                  </span>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Location</label>
                  <span>
                    {{ userData.address.coordinates.lat }},
                    {{ userData.address.coordinates.lng }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:w-1/3">
              <legend class="uppercase tracking-wide text-sm">
                Contact
              </legend>
            </div>
            <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <div class="mb-4">
                <label class="block uppercase tracking-wide text-xs font-semibold">Phone</label>
                <span>
                  {{ userData.phone }}
                </span>
              </div>
              <div class="mb-4">
                <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">URL</label>
                {{ userData.domain || '-' }}
              </div>
              <div class="mb-4">
                <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Email</label>
                <a
                  class="text-blue-800 ml-auto"
                  :href="'mailto:' + userData.email"
                >{{ userData.email || '-' }}</a>
              </div>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:w-1/3">
              <legend class="uppercase tracking-wide text-sm">
                Company
              </legend>
            </div>
            <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <div class="md:flex mb-4">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Company name</label>
                  {{ userData.company.name }}
                </div>

                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">position</label>
                  {{ userData.company.title }}
                </div>

                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">position</label>
                  {{ userData.company.department }}
                </div>
              </div>
              <div class="md:flex mb-4">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Street Address</label>
                  <span>
                    {{ userData.company.address.address }}
                    {{ userData.company.address.city }}
                    {{ userData.company.address.state }}
                    ({{ userData.company.address.postalCode }})
                  </span>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-semibold">Location</label>
                  <span>
                    {{ userData.company.address.coordinates.lat }},
                    {{ userData.company.address.coordinates.lng }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:w-1/3">
              <legend class="uppercase tracking-wide text-sm">
                Bank
              </legend>
            </div>
            <div class="">
              <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                <img
                  class="relative object-cover w-full h-full rounded-xl"
                  src="https://i.imgur.com/kGkSg1v.png"
                >

                <div class="w-full px-8 absolute top-8">
                  <div class="flex justify-between">
                    <div class="">
                      <p class="font-light">
                        Name
                      </p><p class="font-medium tracking-widest">
                        {{ userData.firstName }}
                        {{ userData.lastName }}
                      </p>
                    </div>
                    <img
                      class="w-14 h-14"
                      :src="userData.bank.cardType === 'maestro' ? 'https://i.imgur.com/bbPHJVe.png' : 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'"
                    >
                  </div>
                  <div class="pt-1">
                    <p class="font-light">
                      Card Number
                    </p><p class="font-medium tracking-more-wider">
                      {{ userData.bank.cardNumber ? ((userData.bank.cardNumber).match(/\d{4}/g)).join(' ') : 'No card number available' }}
                    </p>
                  </div>
                  <div class="pt-6 pr-6">
                    <div class="flex justify-between">
                      <div class="">
                        <p class="font-light text-xs text-xs">
                          Expiry
                        </p><p class="font-medium tracking-wider text-sm">
                          {{ userData.bank.cardExpire }}
                        </p>
                      </div>

                      <div class="">
                        <p class="font-light text-xs">
                          CVV
                        </p><p class="font-bold tracking-more-wider text-sm">
                          ···
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </body>
  </MainLayout>
</template>
