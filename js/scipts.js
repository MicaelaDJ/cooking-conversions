var gallons = function(liters) {
  return (liters * 3.785);
}

var liters = parseInt(prompt("enter gallons:"));

alert(gallons(liters) + " Liters");
