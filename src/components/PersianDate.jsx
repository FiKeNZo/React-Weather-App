import moment from "moment-jalaali";
import { useEffect, useState } from "react";

const weekDays = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

const yearMonth = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const PersianDate = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const m = moment();
    const finalDate = `${weekDays[m.day()]} ${m.jDate()} ${
      yearMonth[m.jMonth()]
    } ماه ${m.jYear()}`;
    setDate(finalDate);

    const updateTime = () => {
      setTime(moment().format("HH:mm"));
    };

    updateTime();

    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let interval;

    const syncTimeout = setTimeout(() => {
      updateTime();
      interval = setInterval(updateTime, 60000);
    }, delay);

    return () => {
      clearTimeout(syncTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <span className="mb-3 d-block text-center">{date}</span>
      <span className="d-block text-center">ساعت {time}</span>
    </>
  );
};

export default PersianDate;
