import React from "react";

import * as jalaliDateLib from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

import { DayPicker as DayPickerComponent } from "./index.js";
import type { DayPickerProps } from "./types/props.js";

export function DayPicker(
  props: Omit<DayPickerProps, "dateLib"> & {
    /**
     * The locale to use in the calendar.
     *
     * @default `faIR`
     */
    locale?: DayPickerProps["locale"];
    /**
     * The direction of the text in the calendar.
     *
     * @default `rtl`
     */
    dir?: DayPickerProps["dir"];
  }
) {
  const date = new Date();
  const today = jalaliDateLib.newDate(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const dateLib = {
    ...jalaliDateLib,
    today: () => today
  };
  debugger;
  return (
    // @ts-expect-error `dateLib` is added by this component
    <DayPickerComponent
      {...props}
      locale={props.locale || faIR}
      dir={props.dir || "rtl"}
      dateLib={dateLib}
    />
  );
}
