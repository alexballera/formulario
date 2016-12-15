import addForm from './lib/addForm'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    addForm()
  }
})()
