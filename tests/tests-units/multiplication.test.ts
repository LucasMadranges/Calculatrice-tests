import {describe, expect, it} from "vitest";
import {calculation} from "../../src/utils/calculation";

describe("multiplication", () => {
    it("should be correct multiplication", () => {
        expect(calculation(5, 2, "mul")).toBe(10);
        expect(calculation(5, -2, "mul")).toBe(-10);
        expect(calculation(-5, -2, "mul")).toBe(10);
    });
});  