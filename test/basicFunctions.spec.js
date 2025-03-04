"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const basicFunctions_1 = require("../src/basicFunctions");
(0, vitest_1.describe)("add function tests", () => {
    (0, vitest_1.test)("add(1, 8) returns value 9", () => {
        (0, vitest_1.expect)((0, basicFunctions_1.add)(1, 8)).toBe(9);
    });
    (0, vitest_1.test)("add(-1, 8) returns value 7", () => {
        (0, vitest_1.expect)((0, basicFunctions_1.add)(-1, 8)).toBe(7);
    });
});
(0, vitest_1.describe)("sub function tests", () => {
    (0, vitest_1.test)("sub(10, 7) returns value 3", () => {
        (0, vitest_1.expect)((0, basicFunctions_1.sub)(10, 7)).toBe(3);
    });
    (0, vitest_1.test)("sub(-1, 8) returns value -9", () => {
        (0, vitest_1.expect)((0, basicFunctions_1.sub)(-1, 8)).toBe(-9);
    });
    (0, vitest_1.test)("sub(10, 3) returns value 7", () => {
        (0, vitest_1.expect)((0, basicFunctions_1.sub)(10, 3)).toBe(7);
    });
});
(0, vitest_1.describe)("div function tests", () => {
    (0, vitest_1.test)("div(17, 0) throws an error", () => {
        // Expect must be used in this way, if the test consists of
        // checking if an error is thrown by any function
        (0, vitest_1.expect)(() => (0, basicFunctions_1.div)(17, 0)).toThrowError("Zero division");
    });
    (0, vitest_1.test)("div(4, 8) returns value 0.5", () => {
        (0, vitest_1.expect)((0, basicFunctions_1.div)(4, 8)).toBe(0.5);
    });
    (0, vitest_1.test)("div(1, 3) returns value 0.3", () => {
        (0, vitest_1.expect)((0, basicFunctions_1.div)(1, 3)).toBeCloseTo(0.33);
    });
});
