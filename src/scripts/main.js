import formularios from './lib/formularios'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    formularios()
  }
})()
