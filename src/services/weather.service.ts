import type { Weather } from "../@types/weather";

export async function getWeatherFromCity(city: string) : Promise<Weather> {

    //TODO Replace this by real implemention
    //? - Requete vers le endpoint de l'api 'geo'
    //? - Requete vers le endpoint de l'api 'weather'
    //? - Transformer le resultat de la requete

    return {
        weatherDesc: 'peu nuageux',
        weatherIcon: '02d',
        temp: 20.58,
        feelsLike: 20.23, 
        country: 'BE',
        city: 'Bruxelles',
    };
}