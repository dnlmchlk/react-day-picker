import type { DateFnsMonth, DateLib, Locale } from "../classes/DateLib.js";

/**
 * Format the month number for the dropdown option label.
 *
 * @defaultValue The localized month name
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatMonthDropdown(
  /** The month to format. */
  month: number | Date,
  /** The locale to use for formatting. */
  locale: Locale,
  dateLib?: DateLib
): string {
  if (!dateLib || typeof month === "number") {
    return locale.localize?.month(month as DateFnsMonth);
  }
  return dateLib.format(month, "LLLL", {
    locale
  });
}
