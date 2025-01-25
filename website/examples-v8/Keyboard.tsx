import { useState } from "react";

import type { DayPickerSingleProps } from "./react-day-picker-v8";
import { DayPicker } from "./react-day-picker-v8";

export function Keyboard(props: DayPickerSingleProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  return (
    <DayPicker
      {...props}
      selected={selected}
      onSelect={setSelected}
      mode="single"
      today={new Date(2022, 5, 10)}
    />
  );
}
