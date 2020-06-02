1. npm init
2. npm install jest puppeteer jest-puppeteer
3. npm install @babel/core @babel/preset-env babel-jest
4. ./node_modules/.bin/jest --init
5. Comment out 'testEnvironment' in the jest.config.js file
6. Setup preset -   preset: "jest-puppeteer" in the jest.config.js file
7. Setup bail -   bail: "5" in the jest.config.js file to stop running tests after n failures 
8. Create babel.config.js file and add stuff to it
9. Create jest-puppeteer.config.js file and add stuff to it
