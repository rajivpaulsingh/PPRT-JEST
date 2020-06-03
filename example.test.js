import { jsxEmptyExpression } from "@babel/types";

describe('Google Test', () => {
    it('Should open google homepage', async () => {

        jest.setTimeout(15000)
        //No need to launch page and open newPage(), it is automatically done by jest
        await page.goto('https://www.google.com')
        await page.waitFor(3000)
    })
})