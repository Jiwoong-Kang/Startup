function code(){
    const subjectEl = document.querySelector("#subject")
    const codeEl = document.querySelector("#message")
    const explainEl = document.querySelector("#message2")
    const obj = {
        subject : subjectEl.value,
        code : codeEl.value ,
        explanation : explainEl.value
    };
    let string_code = JSON.stringify(obj)
    localStorage.setItem("code", string_code)
    window.location.href = "main_sharing.html"

}
