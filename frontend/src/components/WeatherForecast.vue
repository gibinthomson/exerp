<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <h1>Weather Information</h1>
    <div v-if="loading">Loading weather data...</div>
    <div v-else-if="dataError">
      Weather data failed to fetch
    </div>
    <div v-else>
      <div v-if="weatherData?.data">
        <table>
          <thead>
            <tr class="bg-gray-200 text-gray-700">
              <th class="px-4 py-2 border-b">Date</th>
              <th class="px-4 py-2 border-b">Max Temperature (°C)</th>
              <th class="px-4 py-2 border-b">Min Temperature (°C)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(date, index) in weatherData?.data.daily.time" :key="index" class="hover:bg-gray-50">
              <td class="px-4 py-2 border-b">{{ date }}</td>
              <td class="px-4 py-2 border-b">{{ weatherData?.data.daily.temperature_2m_max[index] }}</td>
              <td class="px-4 py-2 border-b">{{ weatherData?.data.daily.temperature_2m_min[index] }}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>
