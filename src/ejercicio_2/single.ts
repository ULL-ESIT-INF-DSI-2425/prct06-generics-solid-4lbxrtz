import { Song } from "./song";
import { SongCollection } from "./songCollection";

/**
 * Represents a Single, which contains only one song or multiple versions of the same song.
 */
export class Single extends SongCollection {
  constructor(name: string, published_date: Date, songs: Song[]) {
    if (songs.length === 0) {
      throw new Error("A single must have at least one song.");
    }
    super(name, published_date, songs);
  }

  /**
   * Adds a new version of the same song to the single.
   * @param song - The song to add.
   */
  addSong(song: Song): void {
    if (song.name !== this.songs[0].name) {
      throw new Error("A single can only contain versions of the same song.");
    }
    this.songs.push(song);
  }
}
