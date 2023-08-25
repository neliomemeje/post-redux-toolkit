import { parseISO, formatDistanceToNow } from "date-fns";

import React from "react";

const TimeAgo = ({ timeStamp }) => {
  let time = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    time = `${timePeriod} ago`;
  }
  return (
    <span>
      &nbsp; <i>{time}</i>
    </span>
  );
};

export default TimeAgo;
