let s = "fly me to the moon "

let arr = s.trim().split(" ")

console.log(arr)

let num = arr[arr.length-1].length

console.log("The Last word is",arr[arr.length-1], "with length", num)