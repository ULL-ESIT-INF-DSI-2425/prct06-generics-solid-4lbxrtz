/**
 * Actions that can be logged
 */
export enum Actions {
  LOGIN = 0,
  LOGOUT,
  UPDATEPROFILE,
}

/**
 * class Loger using Singleton pattern
 */
export class Logger {
  private static instance: Logger;
  private logs: [string, Actions, Date][];

  private constructor() {
    this.logs = [];
  }

  /**
   * Get the singleton instance of the class
   * @returns - The unique logger instance
   */
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Logs an action performed by a user in exact time
   * @param user - the user that logs the action
   * @param action - the action that will be logged
   */
  public logAction(user: string, action: Actions): void {
    const timestamp = new Date();
    this.logs.push([user, action, timestamp]);
  }

  /**
   * Get the logs stored so far in the logger instance
   * @returns - the logs stored so far
   */
  public getLogs(): [string, Actions, Date][] {
    return this.logs;
  }

  /**
   * Get the logs performed by the queried user
   * @param user - the user filter
   * @returns - The logs stored performed by the user
   */
  public getLogsByUser(user: string): [string, Actions, Date][] {
    return this.logs.filter((logUser) => logUser[0] === user);
  }

  /**
   * Get the logs that contain the queried action
   * @param action - the action filter
   * @returns - The logs stored that perform the queried action
   */
  public getLogsByActions(action: Actions): [string, Actions, Date][] {
    return this.logs.filter((logAction) => logAction[1] === action);
  }

  /**
   * Get the logs in between the dates
   * @param date1 - first date
   * @param date2 - second date
   * @returns - The logs in between the dates
   */
  public getLogsByDates(date1: Date, date2: Date): [string, Actions, Date][] {
    return this.logs.filter(
      (logDate) => logDate[2] >= date1 && logDate[2] <= date2,
    );
  }
}
