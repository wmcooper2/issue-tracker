export const simpleLog = (props) => {
  console.log(props);
};

export const monthName = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = new Date(time).getMonth();
  return months[month];
};

export const dateFormat = (time) => {
  const year = new Date(time).getFullYear();
  // const month = new Date(time).getMonth();
  const month = monthName(time);
  const day = new Date(time).getDay();
  const hour = new Date(time).getHours();
  const minute = new Date(time).getMinutes();
  const second = new Date(time).getSeconds();
  return `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
};
