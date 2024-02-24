function sharing(){
    let show_code = localStorage.getItem("code")
    console.log(show_code)
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
}
function feedback(){
    const codeEl = document.querySelector("#message")
    
    let string_code = JSON.stringify(codeEl.value)
    localStorage.setItem("feedback", string_code)
    window.location.href = "sharing.html"

}
sharing()