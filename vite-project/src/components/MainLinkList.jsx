import logo from "../../../images/landing/logo.svg";
import { MainCardImg, MainCardContent } from "./Maincard";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function countAgo(value) {
  const date = new Date(value);
  const today = new Date();

  const timeDiff = today.getTime() - date.getTime();

  const minute = timeDiff / 1000 / 60;
  const hour = timeDiff / 1000 / 60 / 60;
  const day = timeDiff / 1000 / 60 / 60 / 24;
  const month = timeDiff / 1000 / 60 / 60 / 24 / 30;
  const year = timeDiff / 1000 / 60 / 60 / 24 / 30 / 12;

  if (year >= 1) {
    return year < 2 ? "1 year ago" : `${Math.floor(year)} years ago`;
  } else if (month >= 1) {
    return month < 2 ? "1 month ago" : `${Math.floor(month)} months ago`;
  } else if (day >= 1) {
    return day < 2 ? "1 day ago" : `${Math.floor(day)} days ago`;
  } else if (hour >= 1) {
    return hour < 2 ? "1 hour ago" : `${Math.floor(hour)} hours ago`;
  } else {
    return minute < 2 ? "1 minute ago" : `${Math.floor(minute)} minutes ago`;
  }
}

function MainLinkList({ item, target, rel }) {
  const { createdAt, url, title, description, imageSource } = item;

  return (
    <>
      <a href={url} target={target} rel={rel}>
        {imageSource ? (
          <MainCardImg
            className="card-img-selected"
            src={imageSource}
            alt={title}
          />
        ) : (
          <MainCardImg
            className="card-img-default"
            src={logo}
            alt="기본 이미지"
          />
        )}
        <MainCardContent
          className="container"
          ago={countAgo(createdAt)}
          des={description}
          date={formatDate(createdAt)}
        />
      </a>
    </>
  );
}

export default MainLinkList;