let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));


for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0){
     document.getElementById("result").innerHTML = ("FizzBuzz");
  } else if (i % 3 === 0){
     document.getElementById("result").innerHTML = ("Fizz");
  } else if (i % 5 === 0) {
     document.getElementById("result").innerHTML = ("Buzz")
  } else {
     document.getElementById("result").innerHTML = ("Not Fizz, Buzz or Fizzbuzz");
 }
}
