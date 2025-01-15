import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL_SINGLE } from "../utils/variable";

function CountryPage() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");
  const [languages, setLanguages] = useState([]);
  const [currency, setCurrency] = useState("");
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch(`${API_URL_SINGLE}${name}`);
        const data = await res.json();
        console.log(data);
        // Extract languages, currency, native name, and borders
        const lang = Object.values(data[0].languages);
        const cur = Object.values(data[0].currencies)[0].name;
        // const native = Object.values(data[0].name.native)[0].common;
        const borders = data[0].borders || [];

        // Set state
        setCountry(data[0]);
        setLanguages(lang);
        setCurrency(cur);
        // setNativeName(native);
        setBorderCountries(borders);
      } catch (error) {
        setError("Failed to get the country data");
      }
    }
    getCountry();
  }, [name]);

  if (!country)
    return (
      <div className="flex h-dvh items-center justify-center">Loading....</div>
    );

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <section className="dark:text-white">
      <div className="mx-auto grid h-dvh w-full max-w-7xl grid-cols-2 grid-rows-[min-content_20rem] gap-x-10 gap-y-12 px-8 py-6 pb-12">
        <Link
          to="/"
          role="button"
          className="col-start-1 col-end-2 flex items-center gap-2 self-start justify-self-start rounded-xl bg-white px-10 py-2 shadow-lg dark:bg-gray-700 dark:text-white"
        >
          <span>&larr;</span>
          <span>Back</span>
        </Link>
        <figure className="col-start-1 col-end-2 border-8 border-gray-300">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="block h-full w-full object-cover"
          />
        </figure>
        <div className="col-start-2 col-end-3 grid grid-cols-2 grid-rows-[repeat(3,min-content)] gap-x-8 gap-y-8 self-center justify-self-center">
          <h1 className="col-span-full text-2xl font-semibold">
            {country.name.common}
          </h1>
          <div>
            <p>
              <span className="font-semibold">Population: </span>
              <span>{country.population}</span>
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              <span>{country.region}</span>
            </p>
            <p>
              <span className="font-semibold">Sub-Region: </span>
              <span>{country.subregion}</span>
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              <span>{country.capital}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Top-level-domain: </span>
              <span>{country.tld[0]}</span>
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              <span>{languages.join(", ")}</span>
            </p>
            <p>
              <span className="font-semibold">Currency: </span>
              <span>{currency}</span>
            </p>
          </div>
          <p className="col-span-2">
            <span className="font-semibold">Border Countries: </span>

            {borderCountries.length > 0 ? borderCountries.join(", ") : "None"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CountryPage;
