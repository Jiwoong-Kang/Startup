function upload(){
    window.location.href = "code.html"
}
function getting_title(){
    let titles = [];
    const titlesText = localStorage.getItem("code");
    if (titlesText){
        titles = JSON.parse(titlesText);
    }
    const tableBodyEl = document.querySelector("#title");

    if (titles.length){
        for (const [i, title] of titles.entries()){
            const positionTdEl = document.createElement('td');
            const titleTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            titleTdEl.textContent = title.subject;
            titleTdEl.addEventListener("click", function(){
                    window.location.href = "sharing.html";
                  }); // need to fix
            dateTdEl.textContent = title.time;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(titleTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    }else{
            tableBodyEl.innerHTML = '<tr><td colSpan=3>Be the first to upload</td></tr>';
        }
    }
    

getting_title()