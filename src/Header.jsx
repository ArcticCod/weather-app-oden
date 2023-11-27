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
        <form className="form" action="">
          <input
            className="search-bar"
            placeholder="City"
            value={search}
            type="text"
            required="required"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              setCity(search);
            }}
          >
            Submit
          </button>
        </form>
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
