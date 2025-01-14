import { useParams } from "react-router-dom";
import { useCountries } from "../context/CountryContext";

function CountryPage() {
  const { name } = useParams();
  const { countries } = useCountries();
  const searchedCountry = countries.find(
    (country) => country.name.common === name,
  );

  return <div>{name}</div>;
}

export default CountryPage;
