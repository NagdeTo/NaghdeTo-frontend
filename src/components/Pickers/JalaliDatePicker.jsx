import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import fa_IR from "antd/lib/locale/fa_IR";
import jalaliday from "jalaliday";
import { SwapLeftOutlined } from "@ant-design/icons";
dayjs.extend(jalaliday);

const JalaliDatePicker = (props) => {
  const{setValue} = props
  const [locale] = useState(fa_IR);

  const jalaliDate = dayjs(new Date("2020-11-11"))
    .calendar("jalali")
    .locale("fa");
  return (
    <DatePicker.RangePicker
    onChange={e=>console.log(e)}
      separator={<SwapLeftOutlined />}
      placeholder={["شروع", "پایان"]}
      defaultValue={jalaliDate}
      locale={locale}
    ></DatePicker.RangePicker>
  );
};

export default JalaliDatePicker;
