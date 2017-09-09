'use strict'

const FOURTEENERS = [
  {
    name: 'Grays Peak',
    slug: 'grays_peak',
    elevation: '14270',
    range: 'Front Range',
    lat: '39.633820',
    lon: '-105.817520'
  },
  {
    name: 'Torreys Peak',
    slug: 'torreys_peak',
    elevation: '14267',
    range: 'Front Range',
    lat: '39.642742',
    lon: '-105.821259'
  }
]

const WEATHERBITAPI = {
  key: '4bf91204a99b46e29d407607f333f61c'
}

const FLICKRAPI = {
  key: '3ea173e4864e55e1235e2d14e1d1c738',
  secret: '2ef006fc397c6b82'
}


let URLparam = ''

function getURLParameter () {
  URLparam = window.location.search.substring(1)
}

function selectPage(slug) {
  let mountain = FOURTEENERS.find(mtn => {
    return mtn.slug === slug
  })
  
  if (mountain) {
    showMountainPage(mountain)
  } else {
    showHomePage()
  }
}

function showMountainPage(mountain) {
  displayMountainPageHeader(mountain)
  getCurrentWeatherFromAPI(mountain)
  getWeatherForecastFromAPI(mountain)
}

function getCurrentWeatherFromAPI(mountain) {
  const weatherParams = {
    key: WEATHERBITAPI.key,
    units: 'I',
    lat: mountain.lat,
    lon: mountain.lon
  }

  $.getJSON('https://api.weatherbit.io/v2.0/current', weatherParams, displayCurrentWeather)
}

function getWeatherForecastFromAPI(mountain) {
  const weatherParams = {
    key: WEATHERBITAPI.key,
    units: 'I',
    lat: mountain.lat,
    lon: mountain.lon
  }

  $.getJSON('https://api.weatherbit.io/v2.0/forecast/3hourly', weatherParams, displayWeatherForecast)
}

function displayMountainPageHeader(mountain) {
  $('.js-header-content').html(`
    <h2>${mountain.name}</h2>
    <p>
      ${mountain.range}<br>
      Elevation: ${mountain.elevation} ft.
    </p>
  `)
}

function displayCurrentWeather(data) {
  const currentWeather = data.data[0]
  $('.js-current-weather').html(`
    <h3>Current Weather</h3>
    <img src="images/icons/${currentWeather.weather.icon}.png" alt="${currentWeather.weather.description}"><br>
    ${currentWeather.weather.description}<br>
    Temp: ${currentWeather.temp} (feels like ${currentWeather.app_temp})
  `)
}

function displayWeatherForecast(data) {
  console.log(data)
  let forecastHTML = '<h3>Weather Forecast</h3>'
  data.data.forEach(hourly => {
    let date = new Date(hourly.datetime.split(':')[0])
    date.setUTCHours(hourly.datetime.split(':')[1])
    forecastHTML += `
      <div class="hourly-weather">
        ${moment(date).format("ddd ha")}<br>
        <img src="images/icons/${hourly.weather.icon}.png" alt="${hourly.weather.description}"><br>
        ${hourly.temp}ºF ${hourly.weather.description}<br>
        Wind: ${hourly.wind_cdir} @ ${hourly.wind_spd}mph
      </div>`
  })

  $('.js-weather-forecast').html(forecastHTML)
}

function showHomePage() {
  $('.js-content').html(`
    <h2>Home page</h2>
  `)
}

function run14ers() {
  getURLParameter()
  selectPage(URLparam)
}

$(run14ers)
