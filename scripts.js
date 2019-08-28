//forEach loops
$(document).ready(function() {
  var blanks = [person1,person2,animal,exclamation,verb, noun]
  $("#blanks form").submit(function(event) {
    blanksl.forEach(function(blank){
      var userInput =$("input#"+blank).val();
       $("."+blank).text(userInput);
      //going through each form input from each class and taking out its user input
      //and assigning it as a value of a var userInput

    }
  });
});
var blanks = [person1,person2,animal,exclamation,verb, noun]
$("#blanks form").submit(function(event) {
var result = ($input#+blank).val();
$("." +blank).text (result)

}
//tried to change it to .map not sure if it make sense




  //mapping loop
  var number =[1,2,3,4,5];
  var doubledNumber=numbers.map(function(number) {
    return number * 2;
  })
  //.map will create an array with the results of that function, so doublednumbers is equal to
  //an array with each number multiplied by 2

//forEach
var numbers =[1,2,3,4,5]
  var doubledNumbers=[];
  numbers.forEach(function(number){
  var doubledNumbers.push(number*2)
//same but you don't have to create an empty array and push the result in there
  })
