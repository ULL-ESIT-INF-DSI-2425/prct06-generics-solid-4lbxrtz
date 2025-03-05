import { describe, test, expect } from "vitest";
import { Album } from "../../src/ejercicio_2/album";
import { Song } from "../../src/ejercicio_2/song";
import { Artist } from "../../src/ejercicio_2/artist";


describe("Artist", () => {
  const song1 = new Song("Bohemian Rhapsody", 354, "Rock", true, 1000000);
  const song2 = new Song("We Will Rock You", 122, "Rock", true, 500000);
  const album = new Album("A Night at the Opera", new Date(1975, 10, 21), [song1, song2]);
  const artist = new Artist("Queen", 20000000);

  test("should create an artist with the correct properties", () => {
    expect(artist.name).toBe("Queen");
    expect(artist.monthly_listeners).toBe(20000000);
    expect(artist.discography).toEqual([]);
  });

  test("should add an album to the artist's discography", () => {
    artist.addAlbum(album);
    expect(artist.discography).toContain(album);
  });

  test("should calculate the total plays across all albums", () => {
    expect(artist.getTotalPlays()).toBe(1000000 + 500000);
  });
});