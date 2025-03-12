import { Song } from "./song";
import { SongCollection } from "./songCollection";

/**
 * Represents an Album, which contains multiple different songs.
 */
export class Album extends SongCollection {
  constructor(name: string, published_date: Date, songs: Song[] = []) {
    super(name, published_date, songs);
  }

  /**
   * Adds a new song to the album.
   * @param song - The song to add.
   */
  addSong(song: Song): void {
    this.songs.push(song);
  }
}
