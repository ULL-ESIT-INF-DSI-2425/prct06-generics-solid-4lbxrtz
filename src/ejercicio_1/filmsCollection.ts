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
