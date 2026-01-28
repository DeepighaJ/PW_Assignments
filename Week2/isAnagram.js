let s1="listen"
let s2="silent"

let a=s1.split("").sort().join("")
let b=s2.split("").sort().join("")

if(a===b)
{
    console.log("True, The strings are anagrams")
}
else
{
    console.log("False,The strings are not anagrams")
}