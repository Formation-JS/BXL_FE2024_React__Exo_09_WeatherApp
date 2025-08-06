import type { JSX } from "react";

export type WeatherDataProps = {
    data: {
        city: string;
        country: string;
        temp: number;
        feelsLike: number;
        weatherDesc: string;
        weatherIcon: string;
    };
};

export default function WeatherDisplay({ data }: WeatherDataProps): JSX.Element {

    return (
        <div>
            <p>{data.city} ({data.country})</p>
            <div><img src={data.weatherIcon} alt="wheatherIcon" /></div>
            <p>Temp : {data.temp} °C</p>
            <p>{data.weatherDesc}</p>
        </div>
    );
} 