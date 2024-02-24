function feedback(){
    window.location.href = "feedback.html"
}

function sharing(){
    let show_code = localStorage.getItem("code")
    console.log(show_code)
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
    
    document.getElementById("outer3_text").innerHTML = show_code_parse.explanation
    document.getElementById("outer3_text").style.whiteSpace = "pre"

    document.getElementById("subject2").innerHTML = show_code_parse.subject
}


sharing()
