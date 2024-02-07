# Personal Note
## History of the web
 - Tim Berners-Lee : first developer of HTML, HTTP, URL (structure)
 - Hakno Wium Lie : CSS (Designing)
 - Brendan Eich : Javascript (interactive)
   
## Console
- Navigate your disk
- Run console applications
  
## Commandline for Console

- echo - Output the parameters of the command (printf has the same power, printf can be used like C, such as %s and %d)
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file (# press `q` to exit less)
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up (control +z = stop)
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual
- "|" - Take the output from the command on the left and pipe, or pass, it to the command on the right
- ">" - Redirect output to a file. Overwrites the file if it exists
- ">>" - Redirect output to a file. Appends if the file exists


## Editior
### Visual Studio Code
- Live server
- GitLens
-  :wq 하면 쓰고 나갈 수 있음 (쓸때는 i 사용)

## HTML
- <!DOCTYPE= HTML> 을 제일 위에 쓰면 안전하게 html 로 인식하게 할 수 있다.
- more tool -> developer tool -> edit(locally, only for my monitor) -> 옆에 조그만한 점 세개 누르고 edit 하면 된다.
- if you want to upload the wideo, you need to download that specific video.
- whenever you want to set the default color, you need to use hexidecimal number.

## CSS
- head에 body{background-color:black color= red} p{background-color=white, color=green} 하면 body에 있는 배경은 검은색 글씨는 빨강, paragraph에서는 배경이 흰색 글자는 초록이 된다. 하지만 각 한줄에 더 쓰여졌있다면 제일 먼저 그걸 따라간다. 예시로 <p "color=blue">로 쓰여졌있으면 그 p에서는 글자가 파랑으로 나온다.
- styles.css 형식으로 새로운 파일을 만들어야한다.
- styles.css에 모든 style을 넣고 <link rel="stylesheet" href="styles.css" />를 head에 넣으면 그대로 적용된다.
-  #id를 넣고 {}안에 스타일을 넣으면 그 아이디를 가지고 있는 친구들이 변한다.
-  id 가 class 보다 더 먼저 적용되는 친구라고 생각하면 쉽다.
- style.css 파일을 만들고 html 파일안에 <link href="" rel=>를 헤드부분에 넣어두면 거기서 가져올 수 있다.
- style.css 에서 @import url(여기안에 font 주소를 가져오면 된다.) 그 후 p{} or body{} 등 쓰면 된다. 3.4 파워포인트 6,7 페이지를 살펴보면 예시들이 나와있다.
- fonts google 에 들어가서 마음에 드는 font에 select를 누르고 import 를 누르면 그대로 가져올 수 있다.

## Unicode and UTF-8
- 이 utf를 사용하면 어떤 캐릭터는 그대로 사용할 수 있다. 예시로 한국어는 원래 인식이 안됐지만 이제 유니코드를 이용해서 그대로 나타낼 수 있게 됐다.

## Animation
- p {
 text-align: center;
 font-size: 20vh;

 animation-name: demo;
 animation-duration: 3s;
} 처럼 사용하면 애니메이션을 만들 수 있다.

- @keyframes demo {
 from { //아예 없는 곳에서
   font-size: 0vh;
 }

 95% { // 여기 95퍼가 아니라 원하는 대로 쓸 수 있다. 그냥 여기부터 잠깐 글자가 커진다
    color : purple; // 이렇게 쓰면 처음엔는 보라색이었다가
    font-size: 21vh;
 }

 to {
    color : blue; // 파란색으로 바뀌게 된다.
    font-size: 20vh;
 }
} 로 선언해줘야 애니메이션이 일어난다
- 자세한 내용은 3.4 파워포인트의 15페이지를 보도록 하자

## Responsive Design
- 화면을 줄였을때 특정한 것들만 나오게 하는 것이다.
- <meta> 라고 들어가 있는 것들을 의미한다.
- float : right 로 옛날에는 썻지만 지금은 float: inline-end로 사용한다. 왼쪽은 inline-start로 표현한다. 아랍어같은 거 때문에.

## Grid
- 3.5 파워포인트 11 페이지를 보면 코드가 나와있는데, 이 grid는 children에게만 영향을 미친다.
- .container {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
- 위에 있는 1fr 을 쓰면 한 화면을 저 크기(300픽셀)로 잘 나눈다는 뜻이다

## Flex
- flex: 0 80px; -> 줄일때 항상 80픽셀을 유지한다는 뜻이다. (페이지 18 in 3.5) 0은 건들지 말라는 뜻
- 만약 두군데로 나누고 싶으면 하나는 flex:1 하나는 flex:3으로 나누어 놓으면 1대 3 비율로 항상유지할 수 있게 된다. (이 예시는 3.5의 19페이지 예시코드의 section.controls, section.contents 를 보자.)

## CSS Framework
- 이미 만들어져 있는 디자인을 가져온다고 생각하면 된다.
- head에 <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  />를 넣고
  - body에 <button type="button" class="btn btn-primary">Bootstrap</button>
  - <button type="button">Plain</button> 로 넣으면 그곳의 스타일을 가져올 수 있다.


