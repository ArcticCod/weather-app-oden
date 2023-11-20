function Header({
  search,
  setSearch,
  setCity,
  setDegreeIsCelsius,
  degreeIsCelsius,
}) {
  return (
    <div className="header">
      <h2 className="logo">Weather</h2>
      <div className="search">
        <input
          className="search-bar"
          placeholder="City"
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="submit" onClick={() => setCity(search)}>
          Submit
        </button>
      </div>
      <div className="settings">
        <button
          className="toggle"
          onClick={() => {
            degreeIsCelsius === true
              ? setDegreeIsCelsius(false)
              : setDegreeIsCelsius(true);
            if (degreeIsCelsius) {
              console.log("celsius");
            } else {
              console.log("fahrenheit");
            }
          }}
        >
          Toggle °C/°F
        </button>
      </div>
    </div>
  );
}

export default Header;
