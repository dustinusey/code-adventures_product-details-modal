import { useEffect, useState } from "react";
import watchImage1 from "../assets/watches/product-1.webp";

import watchImage2 from "../assets/watches/product-2.webp";
import watchImage3 from "../assets/watches/product-3.webp";
import watchImage4 from "../assets/watches/product-4.webp";

const ProductPurchaseOverview = () => {
  let secondsLeft = 0;
  let minutesLeft = 9;
  let hoursLeft = 11;

  const [seconds, setSeconds] = useState(secondsLeft);
  const [minutes, setMinutes] = useState(minutesLeft);
  const [hours, sethours] = useState(hoursLeft);

  const [timeLeft, setTimeLeft] = useState(`${hours}:${minutes}:${seconds}`);

  useEffect(() => {
    setTimeLeft(`${hours}:${minutes}:${seconds}`);
  }, []);

  // setTimeLeft(`${hours}:${minutes}:${seconds}`);

  const date = new Date();
  date.setDate(date.getDate() + 5);

  const timer = setInterval(() => {
    if (seconds > 0) {
      setSeconds(secondsLeft--);
    } else if (minutes > 0) {
      setSeconds(59);
      setMinutes(minutesLeft--);
    } else if (hours > 0) {
      setMinutes(59);
      setSeconds(59);
      sethours(hoursLeft--);
    } else {
      clearInterval(timer);
    }
  }, 1000);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  const formattedDate = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  }, ${date.getDate()}`;

  return (
    <div className="p-10 bg-[#eee] w-full flex flex-col">
      {/* product title */}
      <p className="text-3xl">
        ZyGlon holographic smartwatch: Navigate with a 3D interactive cityscape,
        with biometric tracking, and experience seamless connectivity with a
        powerful QUantum Processig Unit
      </p>
      {/* product rating */}
      <div className="flex gap-3 mt-3">
        <span>5</span>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <span>14 reviews</span>
      </div>
      {/* product description */}
      <div className="mt-12 flex gap-8">
        <img className="w-[150px] rounded-md" src={watchImage1} />
        <div className="flex flex-col">
          <span className="text-4xl font-bold">$24.95</span>
          <p className="max-w-[375px] text-xl">
            <span className="font-bold">Free</span> deliver{" "}
            <span className="font-bold">{formattedDate}</span> if you order
            within 11 hrs 9 min
          </p>
        </div>
      </div>
      <ul className="mt-5 flex flex-col gap-3">
        <li>
          <p>
            <span className="font-bold">Ships from</span> Amazon
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Sold by</span> ZyGlon
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Returns</span> Returnable until{" "}
            {formattedDate}
            {}
          </p>
        </li>
      </ul>
      {/* similar items */}

      <div className="mt-5">
        <p className="font-bold">Similar items to consider</p>
        <ul className="flex gap-2">
          <li>
            <img className="w-[110px] rounded-md" src={watchImage1} alt="" />
          </li>
          <li>
            <img className="w-[110px] rounded-md" src={watchImage2} alt="" />
          </li>
          <li>
            <img className="w-[110px] rounded-md" src={watchImage3} alt="" />
          </li>
          <li>
            <img className="w-[110px] rounded-md" src={watchImage4} alt="" />
          </li>
        </ul>
      </div>
      {/* ctas  */}
      <div className="mt-auto">
        <button className="w-full bg-[#f8b052] p-4 rounded-md mb-2">
          Add to Cart
        </button>
        <button className="w-full bg-gray-200 p-4 rounded-md">
          Save to a List
        </button>
      </div>
    </div>
  );
};
export default ProductPurchaseOverview;
