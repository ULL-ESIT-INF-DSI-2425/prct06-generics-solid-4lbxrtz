import { describe, expect, test } from "vitest";
import { Films, FilmsCollection } from "../../src/ejercicio_1/filmsCollection";

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

describe("FilmsCollection Tests", () => {
  test("addItem should add a new film to the collection", () => {
    const newFilm: Films = {
      name: "The Dark Knight",
      director: "Christopher Nolan",
      releaseDate: new Date("2008-07-18"),
      genre: "Action",
      certification: "12",
      language: "English",
    };

    myFilms.addItem(newFilm);
    expect(myFilms.getNumberOfItems()).toBe(4);
    expect(myFilms.search("The Dark Knight").length).toBe(1);
  });

  describe("search function tests", () => {
    test('search("Nolan") should return films directed by Christopher Nolan', () => {
      expect(myFilms.search("Nolan").length).toBe(3);
    });

    test('search("12") should return films with certification "12"', () => {
      expect(myFilms.search("12").length).toBe(3);
    });

    test('search("Sci-Fi") should return only Sci-Fi films', () => {
      expect(myFilms.search("Sci-Fi").length).toBe(2);
    });

    test('search("Korean") should return films in Korean language', () => {
      expect(myFilms.search("Korean").length).toBe(1);
      expect(myFilms.search("Korean")[0].name).toBe("Parasite");
    });

    test('search("Non-Existent") should return an empty array', () => {
      expect(myFilms.search("Non-Existent")).toEqual([]);
    });
  });

  test("getNumberOfItems should return the correct number of films", () => {
    expect(myFilms.getNumberOfItems()).toBe(4);
  });
});
