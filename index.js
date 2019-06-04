function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(array1, array2){
  let sorted = []

  while (array1.length > 0 && array2.length > 0){
    if (array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(array1))
    } else {
      sorted.push(findMinAndRemoveSorted(array2))
    }
  }

  return array1.length === 0 ? sorted.concat(array2) : sorted.concat(array1)
}

function mergeSort(array) {
  const mid = array.length/2
  const firstHalf = array.slice(0, mid)
  const secondHalf = array.slice(mid, array.length)

  if (array.length > 1){
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  } else {
    return array
  }
}
