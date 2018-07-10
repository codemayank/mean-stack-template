import angular from 'angular'
import listComponent from './list.component'

const listModule = angular
  .module('listModule', [])
  .component('listComponent', listComponent)

export default listModule
