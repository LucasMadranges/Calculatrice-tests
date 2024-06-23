import {expect, test} from "@playwright/test";

test.describe("Division", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/");
    });

    test("Division: 5 / 2 = 2.5", async ({page}) => {
        await page.click("button:has-text('5')");
        await page.click("button:has-text('/')");
        await page.click("button:has-text('2')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("2.5");
    });

    test("Division: 5 / -2 = -2.5", async ({page}) => {
        await page.click("button:has-text('5')");
        await page.click("button:has-text('/')");
        await page.click("button:has-text('-')");
        await page.click("button:has-text('2')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("-2.5");
    });

    test("Division: -5 / -2 = 2.5", async ({page}) => {
        await page.click("button:has-text('-')");
        await page.click("button:has-text('5')");
        await page.click("button:has-text('/')");
        await page.click("button:has-text('-')");
        await page.click("button:has-text('2')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("2.5");
    });

    test("Division: 5 / 0 = Error", async ({page}) => {
        await page.click("button:has-text('5')");
        await page.click("button:has-text('/')");
        await page.click("button:has-text('0')");
        await page.click("button:has-text('=')");

        const result = await page.$eval("#displayed", (el: any) => el.value);
        expect(result).toBe("Error");
    });
});