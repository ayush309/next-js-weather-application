import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";

import Spinner from "../components/Spinner";
const imgurl = "/foggy.jpg";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  // var [img, setimg] = useState();

  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(apiurl).then((res) => {
      setWeather(res.data);
      // console.log(res.data);
      // setLoading(false);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Head>
          <title>Weather Application</title>
          <meta name="Weather" content="check weather" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 z-[1]" />
        <Image src={imgurl} layout="fill" className="object-cover" />

        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
          {/* <Image src={imgurl} layout="fill" /> */}
          <form
            onSubmit={fetchWeather}
            className="input-group flex rounded-md shadow-2xl justify-between border items-center w-full m-auto p-3 bg-transparent text-white"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="form-control relative  flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-2xl bg-transparent bg-clip-padding transition ease-in-out m-0 focus:text-white focus:border-blue-600 focus:outline-none"
                type="text"
                placeholder="search a city"
              />
            </div>
            <button
              className="inline-block px-6 py-5 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={fetchWeather}
            >
              search &nbsp;
              {/* <BsSearch size={20} /> */}
            </button>
          </form>
        </div>

        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
