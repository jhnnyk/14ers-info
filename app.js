'use strict'

const FOURTEENERS = [
  {
    name: 'Grays Peak',
    slug: 'grays_peak',
    elevation: '14,270',
    range: 'Front Range',
    lat: '39.633820',
    lon: '-105.817520'
  },
  {
    name: 'Torreys Peak',
    slug: 'torreys_peak',
    elevation: '14,267',
    range: 'Front Range',
    lat: '39.642742',
    lon: '-105.821259'
  },
  {
    name: 'Mt. Evans',
    slug: 'mt_evans',
    elevation: '14,264',
    range: 'Front Range',
    lat: '39.588360',
    lon: '-105.643333'
  },
  {
    name: 'Quandary Peak',
    slug: 'quandary_peak',
    elevation: '14,265',
    range: 'Tenmile Range',
    lat: '39.397236',
    lon: '-106.106430'
  },
  {
    name: 'Mt. Elbert',
    slug: 'mt_elbert',
    elevation: '14,433',
    range: 'Sawatch Range',
    lat: '39.118075',
    lon: '-106.445417'
  },
  {
    name: 'Longs Peak',
    slug: 'longs_peak',
    elevation: '14,255',
    range: 'Front Range',
    lat: '40.254902',
    lon: '-105.615738'
  },
  {
    name: 'Pikes Peak',
    slug: 'pikes_peak',
    elevation: '14,110',
    range: 'Front Range',
    lat: '38.840542',
    lon: '-105.044357'
  },
  {
    name: 'Mt. Bierstadt',
    slug: 'mt_bierstadt',
    elevation: '14,060',
    range: 'Front Range',
    lat: '39.582638',
    lon: '-105.668610'
  }
]

const MTNRANGES = []

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
  getDetailedForecastFromAPI(mountain)
  getExtendedForecastFromAPI(mountain)
  getPhotosFromAPI(mountain)
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

function getDetailedForecastFromAPI(mountain) {
  const weatherParams = {
    key: WEATHERBITAPI.key,
    units: 'I',
    lat: mountain.lat,
    lon: mountain.lon
  }

  $.getJSON('https://api.weatherbit.io/v2.0/forecast/3hourly', weatherParams, displayDetailedForecast)
}

function getExtendedForecastFromAPI(mountain) {
  const weatherParams = {
    key: WEATHERBITAPI.key,
    units: 'I',
    lat: mountain.lat,
    lon: mountain.lon
  }

  $.getJSON('https://api.weatherbit.io/v2.0/forecast/daily', weatherParams, displayExtendedForecast)  
}

function getPhotosFromAPI(mountain) {
  const photoParams = {
    method: 'flickr.photos.search',
    api_key: FLICKRAPI.key,
    text: mountain.name,
    format: 'json',
    nojsoncallback: '1',
    sort: 'relevance',
    per_page: '20'
  }

  $.getJSON('https://api.flickr.com/services/rest/', photoParams, displayPhotos)
}

function displayMountainPageHeader(mountain) {
  $('.js-header-content').html(`
    <h2>${mountain.name}</h2>
    <p>
      ${mountain.range}<br>
      Elevation: ${mountain.elevation} ft.
    </p>
  `)

  $('h1').before('<a href="index.html">&larr; back to Home</a>')
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

function displayDetailedForecast(data) {
  let detailedForecastHTML = '<h3>Detailed Forecast</h3>'
  data.data.forEach(hourly => {
    let date = new Date(hourly.datetime.split(':')[0])
    date.setUTCHours(hourly.datetime.split(':')[1])
    detailedForecastHTML += `
      <div class="weather-box">
        ${moment(date).format("ddd ha")}<br>
        <img src="images/icons/${hourly.weather.icon}.png" alt="${hourly.weather.description}"><br>
        ${hourly.temp}ºF ${hourly.weather.description}<br>
        Wind: ${hourly.wind_cdir} @ ${hourly.wind_spd}mph
      </div>`
  })

  $('.js-detailed-forecast').html(detailedForecastHTML)
}

function displayExtendedForecast(data) {
  let extendedForecastHTML = '<h3>Extended Forecast</h3>'
  data.data.forEach(day => {
    let date = new Date(day.datetime)
    extendedForecastHTML += `
      <div class="weather-box">
        ${moment(date).format("dddd")}<br>
        ${moment(date).format("MMM D")}<br>
        <img src="images/icons/${day.weather.icon}.png" alt="${day.weather.description}"><br>
        ${day.weather.description}<br>
        Hi: ${day.max_temp}ºF<br>
        Low: ${day.min_temp}ºF
      </div>`
  })

  $('.js-extended-forecast').html(extendedForecastHTML)
}

function displayPhotos(data) {
  console.log(data.photos)
  let photosHTML = `<h3>Photos</h3>`

  data.photos.photo.forEach(photo => {
    photosHTML += `<a href="https://www.flickr.com/photos/${photo.owner}/${photo.id}"><img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg" alt="${photo.title}"></a>`
  })

  $('.js-photos').html(photosHTML)
}

function collectMtnRanges() {
  FOURTEENERS.forEach(mtn => {
    if (!MTNRANGES.includes(mtn.range)) {
      MTNRANGES.push(mtn.range)
    }
  })
}

function makeMtnList() {
  let mtnListHTML = `<ul>`
  MTNRANGES.forEach(range => {
    mtnListHTML += `<li>${range}<ul>`
    FOURTEENERS.forEach(mtn => {
      if (mtn.range === range) {
        mtnListHTML += `<li><a href="?${mtn.slug}">${mtn.name}</a></li>`
      }
    })
    mtnListHTML += `</ul></li>`
  })
  mtnListHTML += `</ul>`

  return mtnListHTML
}

function showHomePage() {
  collectMtnRanges()
  let homePageHTML = makeMtnList()
  $('.js-header-content').html(homePageHTML)
}

function run14ers() {
  getURLParameter()
  selectPage(URLparam)
}

$(run14ers)
