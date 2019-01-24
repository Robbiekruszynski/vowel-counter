function vowelRep(userInput) {
  var newRep=userInput.toLowerCase();
  var newOutput =0;

  for (var i = 0; i < userInput.length; i++) {
    if (newRep[i] === "a" || newRep[i] === "e" || newRep[i] === "i" || newRep[i] === "o" || newRep[i] ==="u" || newRep[i] === "y") {
      newOutput += 1;
    } else {
    }
  }
  return newOutput;
}
// console.log(newOutput);
$(document).ready(function(){
  $('form#counter').submit(function(event){
    event.preventDefault();
    var userInput = $("input#userInput").val();

    $("#output").text(vowelRep(userInput));
  });
});
