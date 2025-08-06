import { Suspense, use } from "react";
import { getWeatherFromCity } from "../../services/weather.service";
import type { Weather } from "../../@types/weather";
import WeatherDisplay from "../weather-display/weather-display";

//! Typage du composant
type WeatherRequestProps = {
    city: string
}

type WeatherRequestInnerProps = {
    weatherPromise: Promise<Weather>
}

//! Composant
export default function WeatherRequest({ city } : WeatherRequestProps) {
    const promise = getWeatherFromCity(city);

    return (
        <Suspense>
            <WeatherRequestInner weatherPromise={promise} />
        </Suspense>
    )
}

function WeatherRequestInner({ weatherPromise } : WeatherRequestInnerProps) {
    const weather = use(weatherPromise);

    return (
        <>
            <WeatherDisplay data={weather} />
        </>
    )
}