import countries from "world-countries";

export const formattedCountries = countries.map((country) => ({
  code: country.cca2,
  name: country.name.common,
  location: country.latlng,
  region: country.region,
}));

export const findCountryByCode = (name: string) =>
  formattedCountries.find((country) => country.name === name);
