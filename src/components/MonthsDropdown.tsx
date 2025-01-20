import React from "react";

import { useDayPicker } from "../useDayPicker.js";

import type { DropdownProps } from "./Dropdown.js";

/**
 * Render the dropdown to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function MonthsDropdown(props: DropdownProps) {
  const { components } = useDayPicker();
  return <components.Dropdown {...props} />;
}
