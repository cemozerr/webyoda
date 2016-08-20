$(function() {
  //your code...
 function doIt() {
   var string = $(".input").val();
   if (string == ''){
     alert("YOU CANT JUST SHOUT NOTHING, YOU COWARD");
     return;
   }
   var replaced = string.replace(/ /g, '+');
   var output = $.ajax({
     url: "https://yoda.p.mashape.com/yoda?sentence=" + replaced, // The URL to the API. 
     type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
     dataType: 'text',
     success: function(data) {
       $("#output").typed({
         strings:data,
         typespeed:0
       }); },
     beforeSend: function(xhr) {
       xhr.setRequestHeader("X-Mashape-Authorization", "yUyYx3ozJVmshXYVYcfln7FYGOHHp1wzb7xjsnopzf0dvjkBzE");
       xhr.setRequestHeader("Accept", "text/plain");// Enter here your Mashape key
       }});}
$(".button").click(function(){
  doIt();
});
});
