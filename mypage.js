function getting_title(){
    let title = localStorage.getItem("code")
    let title_parse = JSON.parse(title)
    document.getElementById("title").innerHTML = title_parse.subject
    document.getElementById("title").addEventListener("click", function(){
        window.location.href = "sharing.html";
      });
    
}

getting_title()