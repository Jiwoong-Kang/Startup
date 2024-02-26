function upload(){
    window.location.href = "code.html"
}
function getting_title(){
    let title = localStorage.getItem("code")
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("title").innerHTML = show_code_parse.subject
    
}

getting_title()