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
    name: 'Mt. Lincoln',
    slug: 'mt_lincoln',
    elevation: '14,286',
    range: 'Mosquito Range',
    lat: '39.351391',
    lon: '-106.111404'
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
  },
  {
    name: 'Mt. Cameron',
    slug: 'mt_cameron',
    elevation: '14,238',
    range: 'Mosquito Range',
    lat: '39.346844',
    lon: '-106.118576'
  },
  {
    name: 'Mt. Bross',
    slug: 'mt_bross',
    elevation: '14,172',
    range: 'Mosquito Range',
    lat: '39.335060',
    lon: '-106.107376'
  },
  {
    name: 'Mt. Democrat',
    slug: 'mt_democrat',
    elevation: '14,148',
    range: 'Mosquito Range',
    lat: '39.339542',
    lon: '-106.139946'
  },
  {
    name: 'Mt. Sherman',
    slug: 'mt_sherman',
    elevation: '14,036',
    range: 'Mosquito Range',
    lat: '39.225006',
    lon: '-106.169945'
  },
  {
    name: 'Mt. Massive',
    slug: 'mt_massive',
    elevation: '14,421',
    range: 'Sawatch Range',
    lat: '39.187298',
    lon: '-106.475548'
  },
  {
    name: 'Mt. Harvard',
    slug: 'mt_harvard',
    elevation: '14,420',
    range: 'Sawatch Range',
    lat: '38.924328',
    lon: '-106.320618'
  },
  {
    name: 'Mt. Columbia',
    slug: 'mt_columbia',
    elevation: '14,073',
    range: 'Sawatch Range',
    lat: '38.903957',
    lon: '-106.297485'
  },
  {
    name: 'La Plata Peak',
    slug: 'la_plata_peak',
    elevation: '14,336',
    range: 'Sawatch Range',
    lat: '39.029251',
    lon: '-106.473145'
  },
  {
    name: 'Mt. Antero',
    slug: 'mt_antero',
    elevation: '14,269',
    range: 'Sawatch Range',
    lat: '38.674088',
    lon: '-106.246201'
  },
  {
    name: 'Mt. Shavano',
    slug: 'mt_shavano',
    elevation: '14,229',
    range: 'Sawatch Range',
    lat: '38.619083',
    lon: '-106.239296'
  },
  {
    name: 'Tabeguache Peak',
    slug: 'tabeguache_peak',
    elevation: '14,155',
    range: 'Sawatch Range',
    lat: '38.625622',
    lon: '-106.250710'
  },
  {
    name: 'Mt. Belford',
    slug: 'mt_belford',
    elevation: '14,197',
    range: 'Sawatch Range',
    lat: '38.960575',
    lon: '-106.360832'
  },
  {
    name: 'Mt. Oxford',
    slug: 'mt_oxford',
    elevation: '14,153',
    range: 'Sawatch Range',
    lat: '38.964680',
    lon: '-106.338432'
  },
  {
    name: 'Mt. Princeton',
    slug: 'mt_princeton',
    elevation: '14,197',
    range: 'Sawatch Range',
    lat: '38.749062',
    lon: '-106.242432'
  },
  {
    name: 'Mt. Yale',
    slug: 'mt_yale',
    elevation: '14,196',
    range: 'Sawatch Range',
    lat: '38.844051',
    lon: '-106.313965'
  },
  {
    name: 'Missouri Mountain',
    slug: 'missouri_mountain',
    elevation: '14,067',
    range: 'Sawatch Range',
    lat: '38.947559',
    lon: '-106.378471'
  },
  {
    name: 'Mt. of the Holy Cross',
    slug: 'mt_holy_cross',
    elevation: '14,005',
    range: 'Sawatch Range',
    lat: '39.466713',
    lon: '-106.481766'
  },
  {
    name: 'Huron Peak',
    slug: 'huron_peak',
    elevation: '14,003',
    range: 'Sawatch Range',
    lat: '38.945423',
    lon: '-106.438126'
  },
  {
    name: 'Castle Peak',
    slug: 'castle_peak',
    elevation: '14,265',
    range: 'Elk Mountains',
    lat: '39.009647',
    lon: '-106.86144'
  },
  {
    name: 'Conundrum Peak',
    slug: 'conundrum_peak',
    elevation: '14,060',
    range: 'Elk Mountains',
    lat: '39.01563',
    lon: '-106.86294'
  },
  {
    name: 'Maroon Peak',
    slug: 'maroon_peak',
    elevation: '14,156',
    range: 'Elk Mountains',
    lat: '39.070713',
    lon: '-106.989113'
  },
  {
    name: 'North Maroon Peak',
    slug: 'north_maroon_peak',
    elevation: '14,014',
    range: 'Elk Mountains',
    lat: '39.076077',
    lon: '-106.987267'
  },
  {
    name: 'Capitol Peak',
    slug: 'capitol_peak',
    elevation: '14,130',
    range: 'Elk Mountains',
    lat: '39.150166',
    lon: '-107.083221'
  },
  {
    name: 'Snowmass Mountain',
    slug: 'snowmass_mountain',
    elevation: '14,092',
    range: 'Elk Mountains',
    lat: '39.118809',
    lon: '-107.066528'
  },
  {
    name: 'Pyramid Peak',
    slug: 'pyramid_peak',
    elevation: '14,018',
    range: 'Elk Mountains',
    lat: '39.071545',
    lon: '-106.950188'
  },
  {
    name: 'Uncompahgre Peak',
    slug: 'uncompahgre_peak',
    elevation: '14,309',
    range: 'San Juan Mountains',
    lat: '38.071507',
    lon: '-107.462166'
  },
  {
    name: 'Mt. Wilson',
    slug: 'mt_wilson',
    elevation: '14,246',
    range: 'San Juan Mountains',
    lat: '37.839310',
    lon: '-107.991570'
  },
  {
    name: 'El Diente Peak',
    slug: 'el_diente_peak',
    elevation: '14,159',
    range: 'San Juan Mountains',
    lat: '37.839275',
    lon: '-108.005219'
  },
  {
    name: 'Wilson Peak',
    slug: 'wilson_peak',
    elevation: '14,017',
    range: 'San Juan Mountains',
    lat: '37.859913',
    lon: '-107.984795'
  },
  {
    name: 'Mt. Sneffels',
    slug: 'mt_sneffels',
    elevation: '14,150',
    range: 'San Juan Mountains',
    lat: '38.003605',
    lon: '-107.792229'
  },
  {
    name: 'Mt. Eolus',
    slug: 'mt_eolus',
    elevation: '14,083',
    range: 'San Juan Mountains',
    lat: '37.621948',
    lon: '-107.622498'
  },
  {
    name: 'Windom Peak',
    slug: 'windom_peak',
    elevation: '14,082',
    range: 'San Juan Mountains',
    lat: '37.621235',
    lon: '-107.591774'
  },
  {
    name: 'Sunlight Peak',
    slug: 'sunlight_peak',
    elevation: '14,059',
    range: 'San Juan Mountains',
    lat: '37.627285',
    lon: '-107.595894'
  },
  {
    name: 'North Eolus',
    slug: 'north_eolus',
    elevation: '14,039',
    range: 'San Juan Mountains',
    lat: '37.625416',
    lon: '-107.620995'
  },
  {
    name: 'Handies Peak',
    slug: 'handies_peak',
    elevation: '14,048',
    range: 'San Juan Mountains',
    lat: '37.913021',
    lon: '-107.504478'
  },
  {
    name: 'Redcloud Peak',
    slug: 'redcloud_peak',
    elevation: '14,034',
    range: 'San Juan Mountains',
    lat: '37.940880',
    lon: '-107.421654'
  },
  {
    name: 'Sunshine Peak',
    slug: 'sunshine_peak',
    elevation: '14,001',
    range: 'San Juan Mountains',
    lat: '37.922604',
    lon: '-107.425606'
  },
  {
    name: 'Wetterhorn Peak',
    slug: 'wetterhorn_peak',
    elevation: '14,015',
    range: 'San Juan Mountains',
    lat: '38.060593',
    lon: '-107.510834'
  },
  {
    name: 'San Luis Peak',
    slug: 'san_luis_peak',
    elevation: '14,014',
    range: 'San Juan Mountains',
    lat: '37.986897',
    lon: '-106.931389'
  },
  {
    name: 'Blanca Peak',
    slug: 'blanca_peak',
    elevation: '14,345',
    range: 'Sangre de Cristo Range',
    lat: '37.577473',
    lon: '-105.485443'
  },
  {
    name: 'Ellingwood Point',
    slug: 'ellingwood_point',
    elevation: '14,042',
    range: 'Sangre de Cristo Range',
    lat: '37.582508',
    lon: '-105.492569'
  },
  {
    name: 'Little Bear Peak',
    slug: 'little_bear_peak',
    elevation: '14,037',
    range: 'Sangre de Cristo Range',
    lat: '37.566624',
    lon: '-105.497162'
  },
  {
    name: 'Crestone Peak',
    slug: 'crestone_peak',
    elevation: '14,294',
    range: 'Sangre de Cristo Range',
    lat: '37.966972',
    lon: '-105.585304'
  },
  {
    name: 'Crestone Needle',
    slug: 'crestone_needle',
    elevation: '14,197',
    range: 'Sangre de Cristo Range',
    lat: '37.964737',
    lon: '-105.576683'
  },
  {
    name: 'Kit Carson Peak',
    slug: 'kit_carson_peak',
    elevation: '14,165',
    range: 'Sangre de Cristo Range',
    lat: '37.979759',
    lon: '-105.602562'
  },
  {
    name: 'Challenger Point',
    slug: 'challenger_point',
    elevation: '14,081',
    range: 'Sangre de Cristo Range',
    lat: '37.980267',
    lon: '-105.606766'
  },
  {
    name: 'Humboldt Peak',
    slug: 'humboldt_peak',
    elevation: '14,064',
    range: 'Sangre de Cristo Range',
    lat: '37.976105',
    lon: '-105.555351'
  },
  {
    name: 'Culebra Peak',
    slug: 'culebra_peak',
    elevation: '14,047',
    range: 'Sangre de Cristo Range',
    lat: '37.122173',
    lon: '-105.185593'
  },
  {
    name: 'Mt. Lindsey',
    slug: 'mt_lindsey',
    elevation: '14,042',
    range: 'Sangre de Cristo Range',
    lat: '37.583801',
    lon: '-105.444763'
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

function selectPage (slug) {
  let mountain = FOURTEENERS.find(mtn => {
    return mtn.slug === slug
  })

  if (mountain) {
    showMountainPage(mountain)
  } else {
    showHomePage()
  }
}

function showMountainPage (mountain) {
  displayMountainPageHeader(mountain)
  getCurrentWeatherFromAPI(mountain)
  getDetailedForecastFromAPI(mountain)
  getExtendedForecastFromAPI(mountain)
  getPhotosFromAPI(mountain)
}

function getCurrentWeatherFromAPI (mountain) {
  const weatherParams = {
    key: WEATHERBITAPI.key,
    units: 'I',
    lat: mountain.lat,
    lon: mountain.lon
  }

  $.getJSON('https://api.weatherbit.io/v2.0/current', weatherParams, displayCurrentWeather)
}

function getDetailedForecastFromAPI (mountain) {
  const weatherParams = {
    key: WEATHERBITAPI.key,
    units: 'I',
    lat: mountain.lat,
    lon: mountain.lon
  }

  $.getJSON('https://api.weatherbit.io/v2.0/forecast/3hourly', weatherParams, displayDetailedForecast)
}

function getExtendedForecastFromAPI (mountain) {
  const weatherParams = {
    key: WEATHERBITAPI.key,
    units: 'I',
    lat: mountain.lat,
    lon: mountain.lon
  }

  $.getJSON('https://api.weatherbit.io/v2.0/forecast/daily', weatherParams, displayExtendedForecast)
}

function getPhotosFromAPI (mountain) {
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

function displayMountainPageHeader (mountain) {
  $('.js-header-content').html(`
    <h2>${mountain.name}</h2>
    <p>
      ${mountain.range}<br>
      Elevation: ${mountain.elevation} ft.
    </p>
  `)

  $('h1').before('<a href="index.html">&larr; back to Home</a>')
}

function displayCurrentWeather (data) {
  const currentWeather = data.data[0]
  $('.js-current-weather').html(`
    <h3>Current Weather</h3>
    <img src="images/icons/${currentWeather.weather.icon}.png" alt="${currentWeather.weather.description}">
    <p>
      ${currentWeather.weather.description}<br>
      Temp: ${currentWeather.temp}ºF (feels like ${currentWeather.app_temp}ºF)<br>
      Wind: ${currentWeather.wind_cdir} at ${currentWeather.wind_spd}mph
    </p>
  `)
}

function displayDetailedForecast (data) {
  let detailedForecastHTML = '<div class="weather-container">'
  data.data.forEach(hourly => {
    let date = new Date(hourly.datetime.split(':')[0])
    date.setUTCHours(hourly.datetime.split(':')[1])
    detailedForecastHTML += `
      <div class="weather-box">
        ${moment(date).format('ddd ha')}<br>
        <img src="images/icons/${hourly.weather.icon}.png" alt="${hourly.weather.description}"><br>
        ${hourly.temp}ºF ${hourly.weather.description}<br>
        Wind: ${hourly.wind_cdir} @ ${hourly.wind_spd}mph
      </div>`
  })
  detailedForecastHTML += '</div>'

  $('.js-detailed-forecast').append(detailedForecastHTML).show()
}

function displayExtendedForecast (data) {
  let extendedForecastHTML = '<div class="weather-container">'
  data.data.forEach(day => {
    let date = new Date(day.datetime)
    extendedForecastHTML += `
      <div class="weather-box">
        ${moment(date).format('dddd')}<br>
        ${moment(date).format('MMM D')}<br>
        <img src="images/icons/${day.weather.icon}.png" alt="${day.weather.description}"><br>
        ${day.weather.description}<br>
        Hi: ${day.max_temp}ºF<br>
        Low: ${day.min_temp}ºF
      </div>`
  })
  extendedForecastHTML += '</div>'

  $('.js-extended-forecast').append(extendedForecastHTML).show()
}

function displayPhotos (data) {
  let photosHTML = ``

  data.photos.photo.forEach(photo => {
    photosHTML += `<a href="https://www.flickr.com/photos/${photo.owner}/${photo.id}" target="_blank"><img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg" alt="${photo.title}"></a>`
  })

  $('.js-photos').html(photosHTML)
}

// collect list of mountain ranges to display mountains by range on the homepage
function collectMtnRanges () {
  FOURTEENERS.forEach(mtn => {
    if (!MTNRANGES.includes(mtn.range)) {
      MTNRANGES.push(mtn.range)
    }
  })
}

// create the HTML to display the list of mountains (by range) on the homepage
function makeMtnList () {
  let mtnListHTML = `<ul>`
  MTNRANGES.forEach(range => {
    mtnListHTML += `<li><h3><div class="arrow right"></div>${range}</h3><ul>`
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

function showHomePage () {
  collectMtnRanges()
  let navHTML = makeMtnList()
  $('nav').html(navHTML)
}

function run14ers () {
  getURLParameter()
  selectPage(URLparam)
}

// show-hide extended weather forecast
$('.js-extended-forecast button').click(function () {
  if ($(this).text() === 'show') {
    $(this).text('hide')
  } else {
    $(this).text('show')
  }
  $(this).toggleClass('selected')
  $('.js-extended-forecast .weather-container').slideToggle()
})

// show-hide detailed weather forecast
$('.js-detailed-forecast button').click(function () {
  if ($(this).text() === 'show') {
    $(this).text('hide')
  } else {
    $(this).text('show')
  }
  $(this).toggleClass('selected')
  $('.js-detailed-forecast .weather-container').slideToggle()
})

// show-hide peak lists
$('nav').on('click', 'h3', function () {
  $(this).children('.arrow').toggleClass('down')
  $(this).siblings('ul').slideToggle()
})

$(run14ers)
