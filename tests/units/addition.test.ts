import {describe, it, expect} from "vitest";
import {calculation} from "../../src/utils/calculation";

describe("addition", () => {
    it("should be correct addition", () => {
        expect(calculation(2, 5, "sum")).toBe(7);
    });
}) 