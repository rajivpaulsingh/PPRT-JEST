import Homepage from "../pages/HomePage";
import { jsxEmptyExpression } from "@babel/types";

describe('Example', () => {

    let homePage;

    beforeAll(async () => {
        jest.setTimeout(30000);
        homePage = new Homepage();  
    })
    it('Homepage should work', async () => {
        await homePage.visit();
    })

    it('Navbar should be displayed', async () => {
        await homePage.isNavbarDisplayed();
    });
})