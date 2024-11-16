import React from "react";

import { DayPicker } from "react-day-picker";

/**
 * Test case for issue #2549
 *
 * @see https://github.com/gpbl/react-day-picker/issues/2549
 */
export function TestCase2549() {
  const from = new Date(2023, 0);
  const to = new Date(2023, 2);
  return <DayPicker startMonth={from} endMonth={to} captionLayout="dropdown" />;
}
