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
  // console.log("Month:", months[month]);
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

export const dateFormat2 = (timestamp) => {
  const now = new Date(timestamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = now.getFullYear();
  const month = months[now.getMonth()];
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  return `${date} ${month} ${year} ${hour}:${min}:${sec}`;
}

export const dateFormat3 = (timestamp) => {
  return new Date(timestamp).toUTCString();
}