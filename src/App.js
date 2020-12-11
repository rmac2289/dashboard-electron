import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { newsKey, weatherKey } from "./config";
import "./global.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${newsKey}`
    )
      .then((res) => res.json())
      .then((news) => setNewsData(news))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    const locId = "5391760";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${locId}&units=imperial&appid=${weatherKey}`
    )
      .then((res) => res.json())
      .then((weather) => setWeatherData(weather))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {weatherData.base && newsData.copyright && (
        <Home weather={weatherData} news={newsData} />
      )}
    </div>
  );
}

export default App;

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${newsKey}`
//   );
//   const newsData = await res.json();

//   const locId = "5391760";
//   const weatherRes = await fetch(
//     `http://api.openweathermap.org/data/2.5/weather?id=${locId}&units=imperial&appid=${weatherKey}`
//   );
//   const weatherData = await weatherRes.json();

//   if (!newsData || !weatherData) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       newsData,
//       weatherData,
//     }, // will be passed to the page component as props
//   };
// }
