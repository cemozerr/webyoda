$(function() {
  //your code...
 function doIt(type) {
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
       var xz = '' + data;
       var array = xz.split('.');
       type(array);
     },
     beforeSend: function(xhr) {
       xhr.setRequestHeader("X-Mashape-Authorization", "yUyYx3ozJVmshXYVYcfln7FYGOHHp1wzb7xjsnopzf0dvjkBzE");
       xhr.setRequestHeader("Accept", "text/plain");// Enter here your Mashape key
       }
   });
 }
function type(array){
  $("#output").typed({
    strings:array,
    typespeed:0
})}
$(".button").click(function(){
  doIt(function(){
    type();});
});
});
