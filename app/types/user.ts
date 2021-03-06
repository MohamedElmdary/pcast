class User {
  constructor(
    public id: number,
    public name: string,
    public image: { uri: string },
    public listenedTime: [number, number, number],
    public playlists: number,
    public following: number,
  ) {}
}

export { User };
