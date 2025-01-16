import Countries from "../components/Countries";
import SearchCountries from "../components/SearchCountries";

function Homepage() {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="grid grid-rows-[min-content_1fr] gap-y-10 py-10 @container">
        <SearchCountries />
        <Countries />
      </div>
    </section>
  );
}

export default Homepage;
