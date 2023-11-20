import Header from "./Header";

export default function Layout({
  search,
  setSearch,
  setCity,
  setDegreeIsCelsius,
  degreeIsCelsius,
  children,
}) {
  return (
    <>
      <div className="wrapper">
        <Header
          search={search}
          setSearch={setSearch}
          setCity={setCity}
          setDegreeIsCelsius={setDegreeIsCelsius}
          degreeIsCelsius={degreeIsCelsius}
        />
        {children}
      </div>
    </>
  );
}
