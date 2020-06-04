import Homepage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";

import { username, password, timeout } from "../config";

describe('End to End Test', () => {

    let homePage;
    let topBar;
    let loginPage;
    let feedbackPage;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homePage = new Homepage();  
        topBar = new TopBar();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
    })
    it('Homepage should work', async () => {
        await homePage.visit();
    })

    it('Navbar should be displayed', async () => {
        await homePage.isNavbarDisplayed();
        await topBar.isTopBarDisplayed();
    });

    it('Feedback should work', async () => {
        await feedbackPage.visit();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback(
            "rajiv", 
            "rajiv@rajiv.com", 
            "testSubject",
            "testComment"
            );
    });

    it('Login with wrong credentials', async () => {
        await loginPage.visit();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login("bla", "bla");
    })

    it('Login with correct credentials', async () => {
        await loginPage.visit();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login(username, password);
    })    
})