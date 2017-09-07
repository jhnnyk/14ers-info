'use strict'

const FOURTEENERS = [
  {
    name: 'Grays Peak',
    elevation: '14270',
    range: 'Front Range',
    lat: '39.633820',
    lon: '-105.817520'
  },
  {
    name: 'Torreys Peak',
    elevation: '14267',
    range: 'Front Range',
    lat: '39.642742',
    lon: '-105.821259'
  }
]

function getURLParameter () {
  console.log(window.location.search.substring(1))
}

$(getURLParameter)
