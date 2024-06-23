import {expect, test} from "@playwright/test";

test.describe("Addition", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/");
    });

    test("Addition: 2 + 5 = 7", async ({page}) => {
        await page.click("button:has-text('2')");
        await page.click("button:has-text('+')");
        await page.click("button:has-text('5')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("7");
    });

    test("Addition: 2 + -5 = 7", async ({page}) => {
        await page.click("button:has-text('2')");
        await page.click("button:has-text('+')");
        await page.click("button:has-text('-')");
        await page.click("button:has-text('5')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("-3");
    });

    test("Addition: -2 + -5 = 7", async ({page}) => {
        await page.click("button:has-text('-')");
        await page.click("button:has-text('2')");
        await page.click("button:has-text('+')");
        await page.click("button:has-text('-')");
        await page.click("button:has-text('5')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("-7");
    });
});