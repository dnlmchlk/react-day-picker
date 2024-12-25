import type { DateFnsMonth, DateLib, Locale } from "../classes/DateLib.js";

/**
 * Format the month number for the dropdown option label.
 *
 * @since 9.5.0
 * @defaultValue The localized month name
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatMonthDropdown(
  /** The month to format. */
  month: Date,
  locale: Locale,
  dateLib: DateLib
): string;
/**
 * @deprecated Use `month` as `Date` instead.
 * @since 9.0.0
 */
export function formatMonthDropdown(
  /** The month to format. */
  month: number,
  /** The locale to use for formatting. */
  locale: Locale
): string;
export function formatMonthDropdown(
  month: number | Date,
  locale: Locale,
  dateLib?: DateLib
): string {
  if (!dateLib || typeof month === "number") {
    return locale.localize?.month(month as DateFnsMonth);
  }
  return dateLib.format(month, "LLLL", { locale });
}
