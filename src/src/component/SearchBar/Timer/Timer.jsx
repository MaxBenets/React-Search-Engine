import s from "./Timer.module.css";

import { useState, useEffect } from "react";

export const Timer = () => {
   const date = new Date();

   let timeNow =
      date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

   if (date.getHours() < 10) {
      timeNow =
         "0" +
         date.getHours() +
         " : " +
         date.getMinutes() +
         " : " +
         date.getSeconds();
   }
   if (date.getMinutes() < 10) {
      timeNow =
         date.getHours() +
         " : " +
         "0" +
         date.getMinutes() +
         " : " +
         date.getSeconds();
   }
   if (date.getSeconds() < 10) {
      timeNow =
         date.getHours() +
         " : " +
         date.getMinutes() +
         " : " +
         "0" +
         date.getSeconds();
   }

   let dateNow =
      date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

   if (date.getDate() < 10) {
      dateNow =
         "0" +
         date.getDate() +
         "." +
         date.getMonth() +
         "." +
         date.getFullYear();
   }
   if (date.getMonth() < 10) {
      dateNow =
         date.getDate() +
         "." +
         "0" +
         date.getMonth() +
         "." +
         date.getFullYear();
   }

   let [time, setTime] = useState(
      date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
   );
   let [Date_, setDate] = useState(
      date.getDate() + " . " + date.getMonth() + " . " + date.getFullYear()
   );

   useEffect(() => {
      setTime(timeNow);
      setDate(dateNow);
   }, [date.getSeconds()]);

   return (
      <>
         <p className={s.time}>{time}</p>
         <p className={s.date}>{Date_}</p>
      </>
   );
};
