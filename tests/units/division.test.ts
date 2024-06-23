import {describe, it, expect} from "vitest";
import {calculation} from "../../src/utils/calculation";

describe("division", () => {
    it("should be correct division", () => {
        expect(calculation(5, 2, "div")).toBe(2.5); 
    });
}) 