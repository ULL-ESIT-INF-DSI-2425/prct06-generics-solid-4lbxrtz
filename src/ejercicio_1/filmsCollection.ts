import { BasicStreamableCollection } from "./basicStreamableCollection";

export type Certification = "APTA" | "7" | "12" | "16" | "18" | "X";

export interface Films {
  name: string;
  director: string;
  releaseDate: Date;
  genre: string;
  certification: Certification;
  language: string;
}

export class FilmsCollection extends BasicStreamableCollection<Films> {
  constructor(items: Films[]) {
    super(items);
  }
  search(searchFilter: string): Films[] {
    return this.items.filter((film) =>
      Object.values(film).some((value) =>
        value.toString().toLowerCase().includes(searchFilter.toLowerCase()),
      ),
    );
  }
}

const myFilms = new FilmsCollection([
  {
    name: "Inception",
    director: "Christopher Nolan",
    releaseDate: new Date("2010-07-16"),
    genre: "Sci-Fi",
    certification: "12",
    language: "English",
  },
  {
    name: "Interstellar",
    director: "Christopher Nolan",
    releaseDate: new Date("2014-11-07"),
    genre: "Sci-Fi",
    certification: "12",
    language: "English",
  },
  {
    name: "Parasite",
    director: "Bong Joon-ho",
    releaseDate: new Date("2019-05-30"),
    genre: "Thriller",
    certification: "16",
    language: "Korean",
  },
]);

console.log(myFilms.search("Nolan"));
console.log(myFilms.search("12"));
console.log(myFilms.search("Korean"));
