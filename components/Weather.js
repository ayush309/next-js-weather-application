import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  // let info = data.weather[0].main;
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width="100"
            height="100"
          />
          {/* <p className="font-bold text-2xl">{data.weather[0].description}</p> */}

          <p className="text-2xl font-serif font-bold">
            {data.weather[0].main}
          </p>
        </div>
        <p className="text-8xl mt-2">{data.main.temp.toFixed(0)}°C</p>
      </div>
      <div className="bg-white/20 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bottom-[300px] relative p-20 rounded-md">
        <p className="text-2xl text-center pb-10 font-serif font-extrabold">
          Weather in - <span className="text-blue-900">{data.name}</span>
        </p>

        <div className="flex justify-between text-center ">
          <div>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}
            </p>
            <p className="text-xl">Feels like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} mph
            </p>
            <p className="text-xl">wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
