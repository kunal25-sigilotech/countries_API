import { Link } from "react-router-dom";
import { useCountries } from "../context/CountryContext";

function Countries() {
  const { isLoading, filteredByName, error } = useCountries();

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  if (isLoading)
    return (
      <div>
        <p>Loading countries...</p>
      </div>
    );

  return (
    <div className="mx-auto w-full max-w-7xl px-12">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(0,17rem))] gap-x-8 gap-y-12">
        {filteredByName.map((el, i) => (
          <li
            key={i}
            className="grid grid-rows-[12rem_min-content] rounded-lg bg-white shadow-md"
          >
            <figure className="">
              <img
                src={el.flags.png}
                alt={el.name.common}
                loading="lazy"
                className="block h-full w-full rounded-t-md object-cover"
              />
            </figure>
            <div className="flex flex-col gap-2 p-8">
              <Link className="mb-6" to={`/${el.name.common}`}>
                <span>{el.name.common}</span>
              </Link>
              <p>Population: {el.population}</p>
              <p>Region: {el.region}</p>
              <p>Capital: {el.capital}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
