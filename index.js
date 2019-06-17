
 //  merge sorted arrays.

 function findMinAndRemoveSorted(array){

     return array.shift()
 }

 function merge(one, two){
     let lowNum = 0
     let lowest = []
     while(one.length > 0 && two.length > 0){
         if(one[0] < two[0]){
             lowNum = findMinAndRemoveSorted(one)
             lowest.push(lowNum)
         } else {
             lowNum = findMinAndRemoveSorted(two)
             lowest.push(lowNum)
         }

     }
     return lowest.concat(one).concat(two)
 }

// recursively split array until it cannot be reduced anymore, then merge them.
// when the array.length != 0, (base case)



 function mergeSort(array){
     let sorted = []
     let middle = array.length/2
     let first = array.slice(0, middle)
     let second = array.slice(middle, array.length)

     if(array.length < 2){
         return array
     } else {
         return merge(mergeSort(first), mergeSort(second))
     }
 }
