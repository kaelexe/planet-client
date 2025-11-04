import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { formatDate, currentDateInfo } from "../../utils/date-time.util";

/**
 *
 * Just like a real clock,
 * it ticks out the current time,,
 *
 * also displays the current day and date
 *
 */
const DateTimeDisplay: React.FC = () => {
  const { Text } = Typography;
  const [currentTime, setCurrentTime] = useState(currentDateInfo().now);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentDateInfo().now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Text>{formatDate(currentTime.toString()).completeDateTime}</Text>;
};

export default DateTimeDisplay;
