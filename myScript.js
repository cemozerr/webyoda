function doIt(callback) {
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
       alert(data)
       var xz = '' + data;
       alert(xz)
       var array = xz.split('.');
       alert(array)
       callback(array);
       
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
  doIt(type);
});
