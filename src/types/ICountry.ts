export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;
  status: string;
  currency: string;
  capital: string;
  region: string;
  subregion: string;
  languages: string[];
  area: number;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
