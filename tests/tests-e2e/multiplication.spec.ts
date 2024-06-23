import {expect, test} from "@playwright/test";

test.describe("Multiplication", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/");
    });

    test("Multiplication: 5 * 2 = 10", async ({page}) => {
        await page.click("button:has-text('5')");
        await page.click("button:has-text('*')");
        await page.click("button:has-text('2')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("10");
    });

    test("Multiplication: 5 * -2 = -10", async ({page}) => {
        await page.click("button:has-text('5')");
        await page.click("button:has-text('*')");
        await page.click("button:has-text('-')");
        await page.click("button:has-text('2')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("-10");
    });

    test("Multiplication: -5 * -2 = -10", async ({page}) => {
        await page.click("button:has-text('-')");
        await page.click("button:has-text('5')");
        await page.click("button:has-text('*')");
        await page.click("button:has-text('-')");
        await page.click("button:has-text('2')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("10");
    });
});