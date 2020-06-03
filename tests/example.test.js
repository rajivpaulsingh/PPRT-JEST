import Homepage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
describe('Example', () => {

    let homePage;
    let topBar;

    beforeAll(async () => {
        jest.setTimeout(30000);
        homePage = new Homepage();  
        topBar = new TopBar();
    })
    it('Homepage should work', async () => {
        await homePage.visit();
    })

    it('Navbar should be displayed', async () => {
        await homePage.isNavbarDisplayed();
        await topBar.isTopBarDisplayed();
    });
})