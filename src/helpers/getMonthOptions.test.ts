import { type Locale, format } from "date-fns";

import { defaultDateLib } from "../classes/DateLib";
import { DateLib } from "../classes/DateLib";
import { formatMonthDropdown } from "../formatters";

import { getFormatters } from "./getFormatters";
import { getMonthOptions } from "./getMonthOptions";

describe("getMonthOptions", () => {
  const dateLib = new DateLib();
  const formatters = { formatMonthDropdown };

  describe("if navStart is undefined", () => {
    test("return undefined", () => {
      const result = getMonthOptions(
        undefined,
        new Date(),
        formatters,
        dateLib
      );
      expect(result).toBeUndefined();
    });
  });

  describe("if navEnd is undefined", () => {
    test("return undefined if navEnd is undefined", () => {
      const result = getMonthOptions(
        new Date(),
        undefined,
        formatters,
        dateLib
      );
      expect(result).toBeUndefined();
    });
  });

  describe("if navStart and navEnd are in the same year", () => {
    test("return months between navStart and navEnd", () => {
      const navStart = new Date(2023, 0);
      const navEnd = new Date(2023, 5);
      const result = getMonthOptions(navStart, navEnd, formatters, dateLib);
      expect(result).toHaveLength(5);
      expect(result?.map((option) => option.value)).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe("if navStart and navEnd are in different years", () => {
    test("return all months if navStart and navEnd are in different years", () => {
      const navStart = new Date(2023, 0, 1);
      const navEnd = new Date(2024, 0, 1);
      const result = getMonthOptions(navStart, navEnd, formatters, dateLib);
      expect(result).toHaveLength(12);
      expect(result?.map((option) => option.value)).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ]);
    });
  });

  test("format the month labels correctly", () => {
    const navStart = new Date(2023, 0);
    const navEnd = new Date(2023, 2);
    const result = getMonthOptions(navStart, navEnd, formatters, dateLib);
    expect(result?.map((option) => option.label)).toEqual([
      "January",
      "February",
      "March"
    ]);
  });
});

test("return correct dropdown options", () => {
  const startMonth = new Date(2022, 0, 1); // January 2022
  const endMonth = new Date(2022, 11, 31); // December 2022
  const formatters = getFormatters({
    formatMonthDropdown: (month: number, locale?: Locale) =>
      format(new Date(2022, month), "MMMM", { locale })
  });
  const result = getMonthOptions(
    startMonth,
    endMonth,
    formatters,
    defaultDateLib
  );

  expect(result).toEqual([
    { value: 0, label: "January", disabled: false },
    { value: 1, label: "February", disabled: false },
    { value: 2, label: "March", disabled: false },
    { value: 3, label: "April", disabled: false },
    { value: 4, label: "May", disabled: false },
    { value: 5, label: "June", disabled: false },
    { value: 6, label: "July", disabled: false },
    { value: 7, label: "August", disabled: false },
    { value: 8, label: "September", disabled: false },
    { value: 9, label: "October", disabled: false },
    { value: 10, label: "November", disabled: false },
    { value: 11, label: "December", disabled: false }
  ]);
});
