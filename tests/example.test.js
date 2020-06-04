import Homepage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
describe('Example', () => {

    let homePage;
    let topBar;
    let loginPage;

    beforeAll(async () => {
        jest.setTimeout(30000);
        homePage = new Homepage();  
        topBar = new TopBar();
        loginPage = new LoginPage();
    })
    it('Homepage should work', async () => {
        await homePage.visit();
    })

    it('Navbar should be displayed', async () => {
        await homePage.isNavbarDisplayed();
        await topBar.isTopBarDisplayed();
    });

    it('Login with wrong credentials', async () => {
        await loginPage.visit();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login("bla", "bla");
    })

    it('Login with correct credentials', async () => {
        await loginPage.visit();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login("username", "password");
    })    
})