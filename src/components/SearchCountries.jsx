import { useCallback, useEffect, useMemo, useState } from "react";
import { useCountries } from "../context/CountryContext";

export default function SearchCountries() {
  const { dispatch, countries } = useCountries();
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const memoizedCountries = useMemo(() => countries, [countries]);

  const filterCountries = useCallback(() => {
    const modifiedQuery = query.trim().toLowerCase();
    let filteredCountries = memoizedCountries;

    if (selectedRegion) {
      filteredCountries = filteredCountries.filter(
        (country) => country.region === selectedRegion,
      );
    }

    if (modifiedQuery) {
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(modifiedQuery),
      );
    }

    dispatch({
      type: "SET_FILTERED_BY_NAME",
      payload: filteredCountries,
    });
  }, [query, selectedRegion, dispatch, memoizedCountries]);

  const handleRegionChange = useCallback(
    (region) => {
      setSelectedRegion(region);
      setQuery("");
    },
    [setSelectedRegion, setQuery],
  );

  useEffect(() => {
    filterCountries();
  }, [query, selectedRegion, filterCountries]);

  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-12">
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full max-w-[40%] rounded-lg p-4 shadow-lg"
        aria-label="Search countries by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        onChange={(e) => handleRegionChange(e.target.value)}
        className="rounded-lg border-2 p-2 shadow-lg outline-blue-500 focus-within:outline-1"
        aria-label="Filter countries by region"
      >
        <option value="">Select Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
