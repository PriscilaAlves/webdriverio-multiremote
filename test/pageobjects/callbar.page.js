/**
 * sub page containing specific selectors and methods for a specific page
 */
class CallbarPage {
    constructor(browserEntity) {
        this.browser = browserEntity
    }
    /**
     * define selectors using getter methods
     */
    get inputAccount () { return this.browser.$('input[type="text"]')}
    get btnNext () { return this.browser.$('button=Next')}
    get inputUsername () { return this.browser.$('input[type="email"]') }
    get inputPassword () { return this.browser.$('input[type="password"]') }
    get btnSubmit () { return this.browser.$('button[type="submit"]') }
    get phoneNumberInput () { return this.browser.$('input[type="tel"]')}
    get btnDial () { return this.browser.$('.CallAction-CallAction-call')}
    get btnHangup () { return this.browser.$('.CallAction-CallAction-end-call')}
    get btnAccept () { return this.browser.$('.CallAction-CallAction-accept-call') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    setAccount (account) {
        this.inputAccount.setValue(account)
        this.btnNext.click()
    }

    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    dial(number) {
        this.phoneNumberInput.setValue(number);
        this.btnDial.click();
    }

    hangup() {
        this.btnHangup.click()
    }

    accept() {
        this.btnAccept.click()
    }
}

module.exports = CallbarPage;
