function sharing(){
    let show_code = localStorage.getItem("current_code")
    console.log(show_code)
    let show_code_parse = JSON.parse(show_code)
    document.getElementById("outer2_text").innerHTML = show_code_parse.code
    document.getElementById("outer2_text").style.whiteSpace = "pre"
}
function feedback(){
    let show_code = localStorage.getItem("current_code")
    let show_code_parse = JSON.parse(show_code)
    const codeEl = document.querySelector("#message")
    show_code_parse.feedbacks.push(codeEl.value)
    localStorage.setItem("current_code", JSON.stringify(show_code_parse))
    let codes = JSON.parse(localStorage.getItem("code"))
    for (let i = 0; i < codes.length; i++){
        if (codes[i].code === show_code_parse.code){
            codes[i] = show_code_parse
            break
        }
    }
    localStorage.setItem("code", JSON.stringify(codes))
    window.location.href = "sharing.html"

}
sharing()