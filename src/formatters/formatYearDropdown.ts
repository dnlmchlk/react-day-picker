import type { DateLib } from "../classes/DateLib.js";

/**
 * Format the years for the dropdown option label.
 *
 * @defaultValue `year.toString()`
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatYearDropdown(year: number, dateLib?: DateLib): string {
  if (!dateLib) return year.toString();
  return dateLib.format(new Date(year, 0, 1), "yyyy");
}

/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */
export const formatYearCaption = formatYearDropdown;
