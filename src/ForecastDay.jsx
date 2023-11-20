export default function ForecastDay({ degreeIsCelsius, forecastObject }) {
  const dataTime = forecastObject.date_epoch * 1000;
  const local = new Date().getTimezoneOffset() * 1000 * 60;
  const time = dataTime + local;
  const weekday = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const d = new Date(time);

  return (
    <>
      {forecastObject && (
        <div className="daily">
          <div>{weekday[d.getDay()]}</div>
          {degreeIsCelsius ? (
            <div className="daily-temps">
              <div>High of&nbsp;{forecastObject.day.avgtemp_c}°&nbsp;C </div>
              <div>
                Min:&nbsp;
                {forecastObject.day.mintemp_c}°&nbsp;C{" "}
              </div>
            </div>
          ) : (
            <div className="daily-temps">
              <div>High of&nbsp;{forecastObject.day.avgtemp_f}°&nbsp;F </div>
              <div>
                Min:&nbsp;
                {forecastObject.day.mintemp_f}°&nbsp;F{" "}
              </div>
            </div>
          )}
          <div className="image-icon">
            <img src={`https:${forecastObject.day.condition.icon}`} alt="" />
          </div>
          <div className="condition-detail">
            {forecastObject.day.condition.text}
          </div>
        </div>
      )}
    </>
  );
}
