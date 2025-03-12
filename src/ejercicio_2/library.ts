import { SongCollection } from "./songCollection";
import { Artist } from "./artist";
import { Song } from "./song";

/**
 * Represents a music library that stores artists, albums, and songs.
 */
export class Library {
  private artists: Artist[] = [];

  /**
   * Adds an artist to the library.
   * @param artist - The artist to add.
   */
  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  /**
   * Searches for an artist by name.
   * @param name - The name of the artist to search for.
   * @returns The artist if found, otherwise undefined.
   */
  searchArtist(name: string): Artist | undefined {
    return this.artists.find((artist) => artist.name === name);
  }

  /**
   * Searches for an album by name.
   * @param name - The name of the album to search for.
   * @returns The album if found, otherwise undefined.
   */
  searchAlbum(name: string): SongCollection | undefined {
    for (const artist of this.artists) {
      const album = artist.discography.find((album) => album.name === name);
      if (album) return album;
    }
    return undefined;
  }

  /**
   * Searches for a song by name.
   * @param name - The name of the song to search for.
   * @returns The song if found, otherwise undefined.
   */
  searchSong(name: string): Song | undefined {
    for (const artist of this.artists) {
      for (const album of artist.discography) {
        const song = album.songs.find((song) => song.name === name);
        if (song) return song;
      }
    }
    return undefined;
  }

  /**
   * Displays the library's contents in a table format using `console.table`.
   */
  displayLibrary(): void {
    console.table(
      this.artists.map((artist) => ({
        Name: artist.name,
        MonthlyListeners: artist.monthly_listeners,
        TotalPlays: artist.getTotalPlays(),
        Discography: artist.discography.map((album) => album.name).join(", "),
      })),
    );
  }
}
