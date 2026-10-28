"use client";

/**@format */

import { useState } from "react";

import DatePicker from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { CalendarDays } from "lucide-react";

export function DatePickerFirst() {
  const [firstDate, setFirstDate] = useState<any>(null);

  return (
    <div className="relative flex flex-col gap-y-1 w-full">
      <p className="text-base text-gray-800">از تاریخ</p>
      <DatePicker
        inputClass="w-full rounded-md border border-gray-300 pr-[22%] py-2 text-sm cursor-pointer"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={firstDate}
        onChange={setFirstDate}
        placeholder="انتخاب تاریخ"
        type="input-icon"
      />
      <CalendarDays className="absolute top-[55%] right-[8%] size-5 text-gray-600" />
    </div>
  );
}
