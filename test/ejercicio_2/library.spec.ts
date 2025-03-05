import { describe, test, expect } from "vitest";
import { Album } from "../../src/ejercicio_2/album";
import { Artist } from "../../src/ejercicio_2/artist";
import { Song } from "../../src/ejercicio_2/song";
import { Library } from "../../src/ejercicio_2/library";


describe("Library", () => {
  const song1 = new Song("Bohemian Rhapsody", 354, "Rock", true, 1000000);
  const song2 = new Song("We Will Rock You", 122, "Rock", true, 500000);
  const album1 = new Album("A Night at the Opera", new Date(1975, 10, 21), [song1, song2]);
  const artist1 = new Artist("Queen", 20000000, [album1]);

  const song3 = new Song("Shape of You", 233, "Pop", true, 2000000);
  const album2 = new Album("Divide", new Date(2017, 2, 3), [song3]);
  const artist2 = new Artist("Ed Sheeran", 50000000, [album2]);

  const library = new Library();

  test("should add an artist to the library", () => {
    library.addArtist(artist1);
    expect(library.searchArtist("Queen")).toBe(artist1);
  });

  test("should search for an artist by name", () => {
    library.addArtist(artist2);
    expect(library.searchArtist("Ed Sheeran")).toBe(artist2);
  });

  test("should search for an album by name", () => {
    expect(library.searchAlbum("Divide")).toBe(album2);
  });

  test("should search for a song by name", () => {
    expect(library.searchSong("Shape of You")).toBe(song3);
  });

  test("should return undefined if an artist, album, or song is not found", () => {
    expect(library.searchArtist("Unknown Artist")).toBeUndefined();
    expect(library.searchAlbum("Unknown Album")).toBeUndefined();
    expect(library.searchSong("Unknown Song")).toBeUndefined();
  });
});