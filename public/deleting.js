async function sharing(){
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
        
    document.getElementById("subject2").innerHTML = show_code_parse.subject
    
    document.getElementById("new_outer2").innerHTML = show_code_parse.code
    document.getElementById("new_outer2").style.whiteSpace = "pre"

    document.getElementById("new_outer3").innerHTML = show_code_parse.explanation
    
}

sharing()