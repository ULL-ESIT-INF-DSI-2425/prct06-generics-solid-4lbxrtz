import { Song } from "./song";

/**
 * Represents a collection of songs, which can be an Album or a Single.
 */
export abstract class SongCollection {
  constructor(
    public name: string,
    public published_date: Date,
    protected songs: Song[] = [],
  ) {}

  /**
   * Gets the number of songs.
   * @returns The number of songs in the collection.
   */
  getNumberOfSongs(): number {
    return this.songs.length;
  }

  /**
   * Calculates the total duration of the songs in the collection.
   * @returns The total duration in seconds.
   */
  getTotalDuration(): number {
    return this.songs.reduce((total, song) => total + song.duration, 0);
  }

  /**
   * Calculates the total number of plays across all songs.
   * @returns The total number of plays.
   */
  getTotalPlays(): number {
    return this.songs.reduce((total, song) => total + song.plays, 0);
  }

  /**
   * Gets the list of songs in the collection.
   * @returns The list of songs.
   */
  getSongs(): Song[] {
    return [...this.songs]; // Return a copy to prevent external modification
  }
  
  /**
   * Adds a song to the collection.
   * @param song - The song to add.
   */
  abstract addSong(song: Song): void;
}
