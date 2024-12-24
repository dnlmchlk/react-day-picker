import type { DateFnsMonth, DateLib, Locale } from "../classes/DateLib.js";

/**
 * Format the month number for the dropdown option label.
 *
 * @defaultValue The localized month name
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatMonthDropdown(
  /** The month number to format. */
  monthNumber: number,
  /** The locale to use for formatting. */
  locale: Locale,
  dateLib?: DateLib
): string {
  if (!dateLib) {
    return locale.localize?.month(monthNumber as DateFnsMonth);
  }
  return dateLib.format(new Date(2000, monthNumber, 1), "LLLL", {
    locale
  });
}
