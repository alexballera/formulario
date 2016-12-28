import formularios from './lib/formularios'
// import formularios2 from './lib/formularios2'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    formularios()
    // formularios2()
  }
})()
