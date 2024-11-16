import { defaultLocale, type DateLib } from "../classes/DateLib.js";
import { DropdownOption } from "../components/Dropdown.js";
import type { Formatters } from "../types/index.js";

/** Return the months to show in the dropdown. */
export function getMonthOptions(
  navStart: Date | undefined,
  navEnd: Date | undefined,
  formatters: Pick<Formatters, "formatMonthDropdown">,
  dateLib: DateLib
): DropdownOption[] | undefined {
  if (!navStart) return undefined;
  if (!navEnd) return undefined;

  const { addMonths, isBefore } = dateLib;

  const months: number[] = [];
  let month = navStart;

  // if nav start and nav end are in the same year, return the months between
  // the two dates
  if (navStart.getFullYear() === navEnd.getFullYear()) {
    while (months.length < 12 && isBefore(month, addMonths(navEnd, 1))) {
      months.push(month.getMonth());
      month = addMonths(month, 1);
    }
  } else {
    // return all the months in a year
    while (months.length < 12) {
      months.push(month.getMonth());
      month = addMonths(month, 1);
    }
  }
  const sortedMonths = months.sort((a, b) => {
    return a - b;
  });
  const options = sortedMonths.map((value) => {
    const label = formatters.formatMonthDropdown(
      value,
      dateLib.options.locale ?? defaultLocale
    );
    return { value, label, disabled: false };
  });

  return options;
}
