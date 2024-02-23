function code(){
    const codeEl = document.querySelector("#message")
    const explainEl = document.querySelector("#message2")
    const obj = {
        code : codeEl.value ,
        explanation : explainEl.value
    };
    let string_code = JSON.stringify(obj)
    localStorage.setItem("code", string_code)
    window.location.href = "sharing.html"

}
