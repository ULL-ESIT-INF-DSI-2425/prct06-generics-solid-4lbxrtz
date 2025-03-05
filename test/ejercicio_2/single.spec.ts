import { describe, test, expect } from "vitest";
import { Song } from "../../src/ejercicio_2/song";
import { Single } from "../../src/ejercicio_2/single";

const song1 = new Song("Shape of You", 354, "Pop", true, 100000);
const song2 = new Song("Castle on the Hill", 290, "Pop", true, 85000);
const song3 = new Song("Shape of You", 420, "Pop", true, 100000);

describe("Single class tests", () => {
  test("Creating a single should store only one song initially", () => {
    const single = new Single("Shape of You", new Date("2017-01-06"), [song1]);
    expect(single.getNumberOfSongs()).toBe(1);
    expect(single.getTotalDuration()).toBe(song1.duration);
    expect(single.getTotalPlays()).toBe(song1.plays);
  });

  test("Adding a valid version of the same song should work", () => {
    const single = new Single("Shape of You", new Date("2017-01-06"), [song1]);
    single.addSong(song3);
    expect(single.getNumberOfSongs()).toBe(2);
    expect(single.getSongs()).toContain(song3);
  });

  test("Adding a different song to a single should throw an error", () => {
    const single = new Single("Shape of You", new Date("2017-01-06"), [song1]);
    expect(() => single.addSong(song2)).toThrowError(
      "A single can only contain versions of the same song.",
    );
  });

  test("Creating a single without songs should throw an error", () => {
    expect(
      () => new Single("Empty Single", new Date("2023-01-01"), []),
    ).toThrowError("A single must have at least one song.");
  });
});
