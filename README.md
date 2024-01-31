# Code Sharing

## Specification Deliverable

### Elevator Pitch
Have you ever encountered a critical coding error while working on a project? Are you still apprehensive about using unfamiliar programming languages and uncertain about how to effectively learn and apply new languages? Code sharing can be instrumental in addressing these concerns. Users proficient in specific languages or coding can provide valuable feedback. Additionally, users can share their coding challenges, creating a collaborative environment where everyone can enhance their skills collectively by solving problems together.

### Design
![login page](https://github.com/Jiwoong-Kang/Startup/blob/main/Login.png)
![Sharing code](https://github.com/Jiwoong-Kang/Startup/blob/main/Sharing%20Code.png)
![Leave feedback](https://github.com/Jiwoong-Kang/Startup/blob/main/Leave%20feedback.png)

### Key Features
- Secure login over HTTPS
- Ability to share your code
- Get or leave the feedback from everyone
- Ability to create and delete your sharing
- Upload coding problems

### Technologies
- HTML : Uses correct HTML structure for application. Three HTML pages. One for login, one for sharing and one for leaving feedbacks.
- CSS : All styling should be enhanced through the use of proper white space, contrasting colors, and appropriate screen sizes to ensure clarity.
- Javascript :  The application includes functionality for user login, category display, feedback presentation, result display, and backend endpoint calls.
- Service : Backend service with endpoints for:
   - login
   - feedback
   - personal code
- DB/Login : Store users, codes, and feedbacks in database. Register and login users. Credentials securely stored in database. Can't share codes and leave and read feedbacks unless authenticated.
- Websocket : As each user shares their code, it becomes visible to all other users.
- React :  Application ported to use the React web framework.


## HTML deliverable

- For this deliverable I built out the structure of my application using HTML.
- HTML Pages : Four HTML pages for login page, uploading your code, shared code pages and feedback.  
- Links : Upon logging in, you are seamlessly redirected to your code page. Upon code submission, you are seamlessly directed to the shared code page, which in turn provides a convenient link to the feedback page, allowing you to easily identify and address any issues with your code.
- Text : Each submission button will be distinguished by a unique color, enhancing visual clarity and providing a distinct visual identifier for each interactive element.
- Images : I have incorporated images related to computers on the page to provide a visual cue, ensuring that users can easily discern the purpose of this platform.
- DB / Login : Input box and submit botton for login. Feedback page will show your code and other's feedback under the code.
- Websocket : The shared code pages and feedback pages will be accessible to all users upon logging in.
