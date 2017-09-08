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
  $('.js-content').html(`
    <h2>${mountain.name}</h2>
    <p>
      ${mountain.range}<br>
      Elevation: ${mountain.elevation} ft.
    </p>
  `)
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
