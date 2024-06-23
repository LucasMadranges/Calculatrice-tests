import {describe, it, expect} from "vitest";
import {calculation} from "../../src/utils/calculation";

describe("substraction", () => {
    it("should be correct subtraction", () => {
        expect(calculation(5, 2, "sub")).toBe(3); 
    });
}) 