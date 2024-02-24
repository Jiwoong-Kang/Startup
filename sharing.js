function feedback2(){
    window.location.href = "feedback.html"
}

function sharing(){
    let show_code = localStorage.getItem("code")
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("subject2").innerHTML = show_code_parse.subject
    
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"

    document.getElementById("outer3_text").innerHTML = show_code_parse.explanation
    document.getElementById("outer3_text").style.whiteSpace = "pre"


    let show_feedback = localStorage.getItem("feedback")

    document.getElementById("feedback2").innerHTML = show_feedback
    document.getElementById("feedback2").style.whiteSpace = "pre"


}


sharing()
