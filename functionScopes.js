let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}

console.log(y + z); // This results in reference error for y
console.log(x + z); //40