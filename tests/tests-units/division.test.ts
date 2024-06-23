import {describe, expect, it} from "vitest";
import {calculation} from "../../src/utils/calculation";

describe("division", () => {
    it("should be correct division", () => {
        expect(calculation(5, 2, "div")).toBe(2.5);
        expect(calculation(5, -2, "div")).toBe(-2.5);
        expect(calculation(-5, -2, "div")).toBe(2.5);
    });

    it("should be an incorrect division", () => {
        expect(calculation(5, 0, "div")).toBe("Error");
    });
}); 