import { describe, expect, test } from "vitest";
import { Album } from "../../src/ejercicio_2/album";
import { Song } from "../../src/ejercicio_2/song";

// Sample songs
const song1 = new Song("Shape of You", 354, "Pop", true, 100000);
const song2 = new Song("Castle on the Hill", 290, "Pop", true, 85000);

describe("Album class tests", () => {
  test("Creating an album should store the correct details", () => {
    const album = new Album("Divide", new Date("2017-03-03"), [song1, song2]);
    expect(album.getNumberOfSongs()).toBe(2);
    expect(album.getTotalDuration()).toBe(song1.duration + song2.duration);
    expect(album.getTotalPlays()).toBe(song1.plays + song2.plays);
  });

  test("Adding a song to an album should increase song count", () => {
    const album = new Album("Divide", new Date("2017-03-03"), [song1]);
    album.addSong(song2);
    expect(album.getNumberOfSongs()).toBe(2);
    expect(album.getSongs()).toContain(song2);
  });
});
