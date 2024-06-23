import {describe, expect, it} from "vitest";
import {calculation} from "../../src/utils/calculation";

describe("substraction", () => {
    it("should be correct subtraction", () => {
        expect(calculation(5, 2, "sub")).toBe(3);
        expect(calculation(5, -2, "sub")).toBe(7);
        expect(calculation(-5, -2, "sub")).toBe(-3);
    });
});  