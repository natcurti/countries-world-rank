export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  independent: boolean;
  unMember: string;
  currencies: object;
  capital: string;
  region: string;
  subregion: string;
  languages: object;
  borders: string[];
  area: number;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
