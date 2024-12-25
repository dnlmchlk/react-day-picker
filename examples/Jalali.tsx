import React from "react";

import { DayPicker, dateLib } from "react-day-picker/jalali";

export function Jalali() {
  const [selected, setSelected] = React.useState(new Date());
  return (
    <DayPicker
      mode="single"
      selected={selected}
      required
      onSelect={setSelected}
      footer={`Selected: ${dateLib.format(selected, "yyyy/MM/dd")}`}
    />
  );
}
