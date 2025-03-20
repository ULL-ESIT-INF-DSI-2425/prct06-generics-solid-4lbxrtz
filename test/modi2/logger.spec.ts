import { describe, expect, test, beforeEach, expectTypeOf } from "vitest";
import { Logger, Actions } from "../../src/modi2/logger";

describe("Logger class tests", () => {
  let logger: Logger;

  beforeEach(() => {
    logger = Logger.getInstance();
  });

  describe("Logger functionality", () => {
    test("should add a log entry", () => {
      logger.logAction("user1", Actions.LOGIN);
      expect(logger.getLogs().length).toBe(1);
    });

    test("should store the correct log details", () => {
      logger.logAction("user1", Actions.LOGIN);
      expect(logger.getLogs().length).toBe(2);
      const logs = logger.getLogs();
      expect(logs[0]).toEqual(["user1", Actions.LOGIN, expect.any(Date)]);
    });

    test("should maintain logs across multiple instances", () => {
      const logger2 = Logger.getInstance();
      logger2.logAction("user2", Actions.LOGOUT);
      expect(logger.getLogs().length).toBe(3);
      expect(logger.getLogs()[0][0]).toBe("user1");
      expect(logger.getLogs()[1][0]).toBe("user1");
      expect(logger.getLogs()[2][0]).toBe("user2");
    });

    test("should ensure Singleton behavior", () => {
      const logger2 = Logger.getInstance();
      expect(logger).toBe(logger2);
    });
  });

  describe("Logger filtering methods", () => {
    beforeEach(() => {
      logger.logAction("user1", Actions.LOGIN);
      logger.logAction("user2", Actions.LOGOUT);
      logger.logAction("user1", Actions.UPDATEPROFILE);
    });

    test("should filter logs by user", () => {
      const userLogs = logger.getLogsByUser("user1");
      expect(userLogs.length).toBe(4);
      expect(userLogs.every((log) => log[0] === "user1")).toBe(true);
    });

    test("should filter logs by action", () => {
      const actionLogs = logger.getLogsByActions(Actions.LOGOUT);
      expect(actionLogs.length).toBe(3);
      expect(actionLogs[0][1]).toBe(Actions.LOGOUT);
    });

    test("should filter logs by date range", () => {
      const date1 = new Date(Date.now() - 100000000);
      const date2 = new Date(Date.now() + 100000000);
      const dateLogs = logger.getLogsByDates(date1, date2);
      expect(dateLogs.length).toBe(12);
    });
  });

  describe("Logger structure", () => {
    test("should return true when checking if the methods exist", () => {
      expectTypeOf(logger).toHaveProperty("logAction");
      expectTypeOf(logger).toHaveProperty("getLogs");
      expectTypeOf(logger).toHaveProperty("getLogsByUser");
      expectTypeOf(logger).toHaveProperty("getLogsByActions");
      expectTypeOf(logger).toHaveProperty("getLogsByDates");
    });
  });
});
