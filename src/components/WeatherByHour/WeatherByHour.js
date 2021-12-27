import React from 'react'

const WeatherByHour = ({ hour, iconId, temp, sunrise, sunset }) => {

  // FALTA TEMA DE MERIDIANOS

  const nowDate = new Date().toLocaleTimeString().slice(0, 5);
  // const nowDate = '17:30';
  // const nowDate = '05:02';
  // const nowDate = '12:52';
  console.log('nowDate', nowDate);

  function convertDate(hora) {
    const horaNumber = Number(hora) * 1000;
    var climaDate = new Date(horaNumber).toLocaleTimeString().slice(0, 5);
    return climaDate;
  }
  const hourDate = convertDate(hour);console.log('hourDate', hourDate);
  const sunriseDate = convertDate(sunrise);console.log('sunriseDate', sunriseDate);
  const sunsetDate = convertDate(sunset);console.log('sunsetDate', sunsetDate);
  console.log('================================')

  let icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`

  let point = temp.indexOf('.')
  let entireTemp = temp.slice(0, point);

  let response;
  if (nowDate === hourDate) {
    response = `Now ${nowDate}`
  } else if (nowDate === sunriseDate) {
    response = `Sunrise ${sunriseDate}`
  } else if (nowDate === sunsetDate) {
    response = `Sunset ${sunsetDate}`
  } else {
    response = hourDate
  }

  return (
    <div>
      <p>{response}</p>
      <img src={icon} className='icon' alt='icon' />
      <p>{entireTemp}°C</p>
    </div>
  )
}

export default WeatherByHour;
