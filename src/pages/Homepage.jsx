import Countries from "../components/Countries";
import Header from "../components/Header";
import SearchCountries from "../components/SearchCountries";

function Homepage() {
  return (
    <div className="grid h-dvh grid-rows-[min-content_1fr]">
      <header className="px-12 py-4">
        <Header />
      </header>
      <main className="flex flex-col gap-8 bg-gray-100 px-12 py-8">
        <SearchCountries />
        <Countries />
      </main>
    </div>
  );
}

export default Homepage;
