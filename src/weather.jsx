function Weather({ data }){
    if (!data) return <p>Search for a city!</p>;

    return (
    <div>
        <h2>{data.name}</h2>
    <p>Temperature: {data.main.temp}°C</p>
        <p>Condition: {data.weather[0].description}</p>
    <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather icon" />
    </div>
    );
}

export default Weather;