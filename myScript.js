src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js">
    function doIt() {
      string = $("#test").val()
      if (string == ''){
        alert("YOU CANT JUST SHOUT NOTHING, YOU COWARD");
        return;
      }
      var replaced = string.replace(/ /g, '+');
      var output = $.ajax({
        url: "https://yoda.p.mashape.com/yoda?sentence=" + replaced, // The URL to the API. 
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        dataType: 'text',
        success: function(data) {document.getElementById("output").innerHTML = data; },
        beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "yUyYx3ozJVmshXYVYcfln7FYGOHHp1wzb7xjsnopzf0dvjkBzE");
          xhr.setRequestHeader("Accept", "text/plain");// Enter here your Mashape key
          }});}
