function upload(){
    window.location.href = "code.html"
}
function getting_title(){
    let title = localStorage.getItem("code")
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("title").innerHTML = show_code_parse.subject
    document.getElementById("title").addEventListener("click", function(){
        // 클릭하면 원하는 페이지로 이동
        window.location.href = "sharing.html";
      });
    
}

getting_title()