import { addDays } from "./addDays.js";

/**
 * Adds weeks to an Ethiopic date
 *
 * @param {Date} date - The original date
 * @param {number} amount - The number of weeks to add
 * @returns {Date} The new date
 */
//TODO: We can use the addWeeks from Date-fns
export function addWeeks(date: Date, amount: number): Date {
  return addDays(date, amount * 7);
}
