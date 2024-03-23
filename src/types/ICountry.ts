export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;
  unMember: string;
  currencies: {
    currency: {
      name: string;
      symbol: string;
    };
  };
  capital: string;
  region: string;
  subregion: string;
  languages: {
    primaryLanguage: string;
    secondaryLanguage: string;
  };
  area: number;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
