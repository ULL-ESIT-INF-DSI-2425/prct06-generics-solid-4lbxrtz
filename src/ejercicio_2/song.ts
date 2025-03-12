/**
 * Represents a song in the music library.
 */
export class Song {
  /**
   * Creates a new Song instance.
   * @param name - The name of the song.
   * @param duration - The duration of the song in seconds.
   * @param genre - The genre of the song.
   * @param isSingle - Indicates whether the song was released as a single.
   * @param plays - The number of times the song has been played. Defaults to 0.
   */
  constructor(
    public name: string,
    public duration: number,
    public genre: string,
    public isSingle: boolean,
    public plays: number = 0,
  ) {}

  /**
   * Increments the play count of the song by 1.
   */
  play(): void {
    this.plays++;
  }

  /**
   * Checks if the song is popular based on its play count.
   * @returns True if the song has more than 1,000,000 plays, otherwise false.
   */
  isPopular(): boolean {
    return this.plays > 1000000;
  }
}
