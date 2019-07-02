import React from "react";

const DayMonthYear = ({ date }) => {
  if (date) {
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(2, 4);
    return (
      <div>
        {day} / {month} / {year}
      </div>
    );
  } else return <div />;
};

export default DayMonthYear;
