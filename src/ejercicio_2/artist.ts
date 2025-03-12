import { SongCollection } from "./songCollection";

/**
 * Represents an artist in the music library.
 */
export class Artist {
  /**
   * Creates a new Artist instance.
   * @param name - The name of the artist.
   * @param monthly_listeners - The number of monthly listeners for the artist.
   * @param discography - The list of albums in the artist's discography. Defaults to an empty array.
   */
  constructor(
    public name: string,
    public monthly_listeners: number,
    public discography: SongCollection[] = [],
  ) {}

  /**
   * Adds an album to the artist's discography.
   * @param album - The album to add.
   */
  addAlbum(album: SongCollection): void {
    this.discography.push(album);
  }

  /**
   * Calculates the total number of plays across all albums in the artist's discography.
   * @returns The total number of plays.
   */
  getTotalPlays(): number {
    return this.discography.reduce(
      (total, album) => total + album.getTotalPlays(),
      0,
    );
  }
}
