import {describe, expect, it} from "vitest";
import {calculation} from "../../src/utils/calculation";

describe("addition", () => {
    it("should be correct addition", () => {
        expect(calculation(2, 5, "sum")).toBe(7);
        expect(calculation(2, -5, "sum")).toBe(-3);
        expect(calculation(-2, -5, "sum")).toBe(-7);
    });
}); 