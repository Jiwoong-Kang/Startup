# Code Sharing

## Specification Deliverable

### Elevator Pitch
Have you ever encountered a critical coding error while working on a project? Are you still apprehensive about using unfamiliar programming languages and uncertain about how to effectively learn and apply new languages? Code sharing can be instrumental in addressing these concerns. Users proficient in specific languages or coding can provide valuable feedback. Additionally, users can share their coding challenges, creating a collaborative environment where everyone can enhance their skills collectively by solving problems together.

### Design


### Key Features
- Secure login over HTTPS
- Ability to share your code
- Get or leave the feedback from everyone
- Ability to create and delete your sharing
- Upload coding problems

### Technologies
- HTML : Uses correct HTML structure for application. Three HTML pages. One for login, one for sharing and one for leaving feedbacks.
- CSS : All styling should be clear by using proper white space, contrast colors and proper screen sizes.
- Javascript :  Provides login, category display, feedback display, display the result and backend endpoint calls.
- Service : Backend service with endpoints for:
   - login
   - feedback
   - personal code
- DB/Login : Store users, codes, and feedbacks in database. Register and login users. Credentials securely stored in database. Can't share codes and leave and read feedbacks unless authenticated.
- Websocket : As each user shares their code, their codes are shoen to all other users.
- React :  Application ported to use the React web framework.
