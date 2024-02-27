function sharing(){
    let show_code = localStorage.getItem("current_code")
    console.log(show_code)
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
}
function feedback(){
    let show_code = localStorage.getItem("code")
    let show_code_parse = JSON.parse(show_code)
    const codeEl = document.querySelector("#message")
    show_code_parse.feedbacks.push(codeEl.value)
    localStorage.setItem("code", JSON.stringify(show_code_parse))
    window.location.href = "sharing.html"

}
sharing()