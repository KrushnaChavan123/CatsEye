import React, { useState, useEffect } from 'react';

function DateTimeComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const formatDateTime = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hour = date.getHours() % 12 || 12;
    const minute = date.getMinutes();
    const period = date.getHours() >= 12 ? 'pm' : 'am';

    const formattedDate = `${day}${getSuffix(day)} ${month} ${year}`;
    const formattedTime = `[${hour}:${minute.toString().padStart(2, '0')}${period}]`;

    return formattedDate + ' ' + formattedTime;
  };

  const getSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return (
    <div className="DateTimeContainer">
      <h1>ReactJs Admin Dashboard</h1>
      <p>{formatDateTime(currentTime)}</p>
    </div>
  );
}

export default DateTimeComponent;
