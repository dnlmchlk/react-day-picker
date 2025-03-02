import { EthiopicDate } from "./EthiopicDate.js";
import { daysInMonth } from "./daysInMonth.js";

export function isEthiopicDateValid(date: EthiopicDate): boolean {
  if (date.month < 1) return false;
  if (date.day < 1) return false;
  if (date.month > 13) return false;
  if (date.day > daysInMonth(date.month, date.year)) return false;
  return true;
}
