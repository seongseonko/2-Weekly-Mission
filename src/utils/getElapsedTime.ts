import TIME_MILISECONDS from "../static/TIME_MILISECONDS";

const getElapsedTime = ({ createdAt }: { createdAt: string }) => {
  const now = new Date();
  const elapsedTime = now.getTime() - new Date(createdAt).getTime();
  const { minute, hour, day, month, year } = TIME_MILISECONDS;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)} year ago`;
  }
  if (year <= elapsedTime) {
    return `1 year ago`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)} month ago`;
  }
  if (month <= elapsedTime) {
    return `1 month ago`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }
  if (day <= elapsedTime) {
    return `1 day ago`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }
  if (hour <= elapsedTime) {
    return `1 hour ago`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }
  return `1 minute ago`;
};

export default getElapsedTime;
