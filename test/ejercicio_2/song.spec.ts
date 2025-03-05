import { describe, test, expect } from "vitest";
import { Song } from "../../src/ejercicio_2/song"; // Adjust the import path

describe("Song", () => {
  test("should create a song with the correct properties", () => {
    const song = new Song("Bohemian Rhapsody", 354, "Rock", true, 1000000);
    expect(song.name).toBe("Bohemian Rhapsody");
    expect(song.duration).toBe(354);
    expect(song.genre).toBe("Rock");
    expect(song.isSingle).toBe(true);
    expect(song.plays).toBe(1000000);
  });

  test("should increment plays when the song is played", () => {
    const song = new Song("We Will Rock You", 122, "Rock", true, 500000);
    song.play();
    expect(song.plays).toBe(500001);
  });

  test("should return true if the song is popular", () => {
    const song = new Song("Shape of You", 233, "Pop", true, 2000000);
    expect(song.isPopular()).toBe(true);
  });

  test("should return false if the song is not popular", () => {
    const song = new Song("We Will Rock You", 122, "Rock", true, 500000);
    expect(song.isPopular()).toBe(false);
  });
});