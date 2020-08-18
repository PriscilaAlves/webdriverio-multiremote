const CallbarPage = require('../pageobjects/callbar.page');
const ENV = require('../constants/env')

describe('Callbar', () => {
    it('should login with valid credentials and make call',  () => {
        browserA.url(ENV.CALLBAR_A_ADDRESS)
        browserB.url(ENV.CALLBAR_B_ADDRESS)

        const CallbarPageA = new CallbarPage(browserA)
        const CallbarPageB = new CallbarPage(browserB)

        CallbarPageA.setAccount(ENV.ACCOUNT_A_NAME)
        CallbarPageB.setAccount(ENV.ACCOUNT_B_NAME)

        browserA.switchWindow(ENV.TALKDESK_LOGIN_A_ADDRESS)
        browserB.switchWindow(ENV.TALKDESK_LOGIN_B_ADDRESS)

        CallbarPageA.login(ENV.USERNAME_A, ENV.PASSWORD_A)
        CallbarPageB.login(ENV.USERNAME_B, ENV.PASSWORD_B)

        browserA.switchWindow(ENV.CALLBAR_A_ADDRESS)
        browserB.switchWindow(ENV.CALLBAR_B_ADDRESS)

        CallbarPageA.dial(ENV.DIAL_PHONE_NUMBER)

        CallbarPageB.accept()
        browser.pause(5000)

        CallbarPageA.hangup()
        browser.pause(1000)
    });
});
