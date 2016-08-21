
function askQuestion(){
   var inputText = $(".input").val();
   if (inputText == ''){
     alert("YOU CANT JUST SHOUT NOTHING, YOU COWARD");
     return;
   }
   var replaced = inputText.replace(/ /g, '+');
   var firstOutput = $.ajax({
     url: "https://webknox-question-answering.p.mashape.com/questions/answers?answerLookup=false&answerSearch=false&question=" + replaced, // The URL to the API. 
     type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
     dataType: 'json',
     success: function(data) {
      var obj = JSON.parse(data)
      var reply = data[0].answer;
      alert(reply);
      alert(typeof reply);
      yodaIt(reply);
     },
     beforeSend: function(xhr) {
       xhr.setRequestHeader("X-Mashape-Authorization", "yUyYx3ozJVmshXYVYcfln7FYGOHHp1wzb7xjsnopzf0dvjkBzE");
       xhr.setRequestHeader("Accept", "application/json");// Enter here your Mashape key
       }
   });
   
}
function yodaIt(string) {
   var replaced2 = string.replace(/ /g, '+');
   var secondOutput = $.ajax({
     url: "https://yoda.p.mashape.com/yoda?sentence=" + replaced2, // The URL to the API. 
     type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
     dataType: 'text',
     success: function(data) {
       var myArray = []
       var xz = '' + data;
       myArray.push(xz)
       type(myArray);
       
     },
     beforeSend: function(xhr) {
       xhr.setRequestHeader("X-Mashape-Authorization", "yUyYx3ozJVmshXYVYcfln7FYGOHHp1wzb7xjsnopzf0dvjkBzE");
       xhr.setRequestHeader("Accept", "text/plain");// Enter here your Mashape key
       }
   });
 }
function type(text){
  $("#output")
  .data('typed', null)
  .typed({
    strings:text,
    typespeed:0
})}
$(document).delegate('.button', 'click', function(){
  askQuestion();
});
