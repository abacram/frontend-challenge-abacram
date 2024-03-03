<script setup>
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import { computed, ref } from 'vue'

import MainLayout from '@/layouts/MainLayout.vue'
/*
Reto 3: Calendario de Eventos.

En este ejercicio vamos a lidiar con errores tanto de javascript como de maquetación. Tu papel es
arreglar estos errores y que la página, que actualmente no renderiza, cargue bien el contenido.
Además, vamos a añadir una funcionalidad al calendario: Queremos ver qué eventos hay cada día.
Como siempre, el diseño y la creatividad quedan del lado de tu lado, ¡Suerte!

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

const eventsData = [
  {
    id: 1,
    eventTime: '2024-03-09T08:00:00',
    type: 'concert',
  },
  {
    id: 2,
    eventTime: '2024-03-09T09:00:00',
    type: 'meetup',
  },
  {
    id: 3,
    eventTime: '2024-03-12T13:00:00',
    type: 'meetup',
  },
  {
    id: 4,
    eventTime: '2024-04-15T15:30:00',
    type: 'concert',
  },
  {
    id: 5,
    eventTime: '2024-04-19T10:00:00',
    type: 'cinema',
  },
  {
    id: 6,
    eventTime: '2024-04-21T19:00:00',
    type: 'concert',
  },
  {
    id: 7,
    eventTime: '2024-04-24T22:00:00',
    type: 'meetup',
  },
  {
    id: 8,
    eventTime: '2024-04-25T20:00:00',
    type: 'meetup',
  },
  {
    id: 9,
    eventTime: '2024-04-29T10:00:00',
    type: 'cinema',
  },
]

const getEventsFor = (date) => {
  return (eventsData.filter(eventData => dayjs(date).format('YYYYMMDD') === dayjs(eventData.eventTime).format('YYYYMMDD')))
}

dayjs.extend(isToday)

const viewDate = ref(dayjs())

const daystoPrepend = computed(() => {
  const startOfMonth = viewDate.value.startOf('month')
  const startOfFirstWeek = startOfMonth.startOf('week')
  const daysToFirstDay = startOfMonth.diff(startOfFirstWeek, 'day')

  return Array.from(new Array(daysToFirstDay).keys())
})

const days = computed(() => {
  const ranges = []
  const startOfRange = viewDate.value.startOf('month').add(-1, 'day')
  const endOfRange = viewDate.value.endOf('month').add(-1, 'day')

  let currentDate = startOfRange

  while (currentDate.isBefore(endOfRange) || currentDate.isSame(endOfRange)) {
    currentDate = currentDate.add(1, 'day')
    ranges.push(currentDate)
  }
  return ranges
})

const shiftMonth = function (amount) {
  viewDate.value = viewDate.value.add(amount, 'month')
}
const reset = function () {
  viewDate.value = dayjs()
}

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center">
      <div class="w-full flex space-x-2 items-center justify-center">
        <button
          class="bg-primary text-white rounded-xl px-4 py-2"
          @click="shiftMonth('-1')"
        >
          Previous
        </button>
        <span class="text-3xl">{{ viewDate.format('MMMM YYYY') }}</span>
        <button
          class="bg-primary text-white rounded-xl px-4 py-2"
          @click="shiftMonth('1')"
        >
          Next
        </button>
      </div>
      <button
        class="w-fit text-primary border-b rounded-xl px-4 py-2"
        @click="reset()"
      >
        Today
      </button>
    </div>
    <div class="grid grid-cols-7 gap-1">
      <div
        v-for="weekDay in weekDays"
        :key="weekDay"
        class="text-center"
      >
        <div>{{ weekDay }}</div>
      </div>
    </div>
    <div class="grid grid-cols-7">
      <div
        v-for="prepend in daystoPrepend"
        :key="prepend"
      />
      <div
        v-for="day in days"
        :key="day"
        class="border border-slate-200 flex flex-col h-32"
      >
        <div
          :class="[day.isToday() ? 'bg-red-300' : '']"
          class="text-center"
        >
          <div>{{ day.format('D') }}</div>
          <div
            v-for="event in getEventsFor(day)"
            :key="event.id"
          >
            <span
              :class="event.type === 'cinema' ? 'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300' : event.type === 'concert' ? 'bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300' : 'bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300'"
            >
              {{ dayjs(event.eventTime).format('HH:mm') }} -
              {{ event.type }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
