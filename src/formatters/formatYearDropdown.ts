import type { DateLib } from "../classes/DateLib.js";

/**
 * Format the years for the dropdown option label.
 *
 * @defaultValue `year.toString()`
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatYearDropdown(
  year: number | Date,
  dateLib?: DateLib
): string {
  if (!dateLib || typeof year === "number") return year.toString();
  return dateLib.format(year, "yyyy");
}

/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */
export const formatYearCaption = formatYearDropdown;
