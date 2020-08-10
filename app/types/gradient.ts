class Gradient {
  constructor(
    public colors: [string, string],
    public start: { x: number; y: number },
    public end: { x: number; y: number },
  ) {}
}

export { Gradient };
