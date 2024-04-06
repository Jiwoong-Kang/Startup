export class PageState {
    static Login = new PageState('unknown');
    static Deleting = new PageState('deleting');
    static Code = new PageState('code');
    static Account = new PageState('account');
    static Feedback = new PageState('feedback');
    static Mainsharing = new PageState('mainsharing');
    static Mypage = new PageState('mypage');

  
    constructor(name) {
      this.name = name;
    }
  }
  