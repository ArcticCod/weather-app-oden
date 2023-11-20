export default function Details({ detailsData }) {
  return (
    <div className="details-container">
      <div className="details">
        <p className="details-title">Wind</p>
        <p className="detail-data">{detailsData && detailsData.wind} mph</p>
      </div>
      <div className="details">
        <p className="details-title">Humidity</p>
        <p className="detail-data">{detailsData && detailsData.humidity} %</p>
      </div>
      <div className="details">
        <p className="details-title">UV Index</p>
        <p className="detail-data">{detailsData && detailsData.uv} </p>
      </div>
      <div className="details">
        <p className="details-title">Visibility</p>
        <p className="detail-data">
          {detailsData && detailsData.vis_miles} Miles{" "}
        </p>
      </div>
      <div className="details">
        <p className="details-title">Cloud Cover</p>
        <p className="detail-data">{detailsData && detailsData.cloud} %</p>
      </div>
      <div className="details">
        <p className="details-title">Precipitation</p>
        <p className="detail-data">{detailsData && detailsData.precip} in</p>
      </div>
    </div>
  );
}

// weatherdata.current.wind_mph
// .uv
// .humidity
// .vis_miles
// .cloud

// forecast.forecastday.0.day.daily_chance_of_rain
