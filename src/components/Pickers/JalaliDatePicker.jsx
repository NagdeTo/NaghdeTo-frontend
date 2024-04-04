import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import fa_IR from "antd/lib/locale/fa_IR";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);

const JalaliDatePicker = () => {
  const [locale] = useState(fa_IR);

  const jalaliDate = dayjs(new Date("2020-11-11"))
    .calendar("jalali")
    .locale("fa");
  return (
    <DatePicker.RangePicker
      placeholder={["شروع", "پایان"]}
      defaultValue={jalaliDate}
      locale={locale}
    ></DatePicker.RangePicker>
  );
};

export default JalaliDatePicker;
