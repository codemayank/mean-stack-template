import angular from 'angular'
import listComponent from './pages/list-component/list.js'

angular.module('app', [listComponent.name]).controller('mainController', [
  function() {
    let vm = this
    vm.appName = 'to-do-list(mayank)'

    function arrange(arr) {
      let temp
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
          }
        }
      }
      return arr
    }
    vm.getNumbers = function() {
      console.log(vm.numbersRaw)
      if (vm.numbersRaw) {
        let arr = vm.numbersRaw.split(' ').map(x => Number(x))
        vm.numbers = arrange(arr)
        console.log(arr)
      }
    }
  }
])
