var name = "Rebecca", yearBorn = 1987;
function aboutPerson(name1, yearBorn2){
  var age = 2018 - yearBorn;
  console.log("hello, " + name1 + "You are " + age);
  return age;
}
var howOld = aboutPerson(name, yearBorn);
console.log(howOld + " is still young")