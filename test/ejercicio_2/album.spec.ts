import { describe, expect, test } from "vitest";
import { Song } from "../../src/ejercicio_2/song";
import { Album } from "../../src/ejercicio_2/album";

describe("Album", () => {
  const song1 = new Song("Bohemian Rhapsody", 354, "Rock", true, 1000000);
  const song2 = new Song("We Will Rock You", 122, "Rock", true, 500000);
  const album = new Album("A Night at the Opera", new Date(1975, 10, 21));

  test("should create an album with the correct properties", () => {
    expect(album.name).toBe("A Night at the Opera");
    expect(album.published_date).toEqual(new Date(1975, 10, 21));
    expect(album.songs).toEqual([]);
  });

  test("should add a song to the album", () => {
    album.addSong(song1);
    expect(album.songs).toContain(song1);
  });

  test("should return the correct number of songs", () => {
    album.addSong(song2);
    expect(album.getNumberOfSongs()).toBe(2);
  });

  test("should calculate the total duration of the album", () => {
    expect(album.getTotalDuration()).toBe(354 + 122);
  });

  test("should calculate the total plays of the album", () => {
    expect(album.getTotalPlays()).toBe(1000000 + 500000);
  });
});