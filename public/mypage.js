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
          const timeTdEl = document.createElement('td');

          positionTdEl.textContent = i + 1;
          titleTdEl.textContent = title.subject;
          titleTdEl.addEventListener("click", function(){
            localStorage.setItem("current_code",JSON.stringify(title));
            window.location.href = "sharing.html";
          }); 
          timeTdEl.textContent = title.time;

          const rowEl = document.createElement('tr');
          rowEl.appendChild(positionTdEl);
          rowEl.appendChild(titleTdEl);
          rowEl.appendChild(timeTdEl);

          tableBodyEl.appendChild(rowEl);
      }
  }else{
          tableBodyEl.innerHTML = '<tr><td colSpan=3>Be the first to upload</td></tr>';
      }
  }
  

getting_title()