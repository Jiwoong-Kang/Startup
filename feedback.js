function feedback(){
    const codeEl = document.querySelector("#message")
    
    let string_code = JSON.stringify(codeEl.value)
    localStorage.setItem("feedback", string_code)
    window.location.href = "sharing.html"

}