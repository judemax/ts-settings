export class Test {
  readonly name: string;
  readonly arr: readonly number[];
  readonly strArr: readonly string[];

  constructor(name: string) {
    this.name = name;
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    this.strArr = [
      "long long line with long text and trailing comma",
      "long long line with long text and trailing comma",
      "long long line with long text and trailing comma",
    ];

    const str = "Hello World!" + `!!${this.name}`;

    this.func(...this.arr)
      .then(console.log.bind(console, str))
      .catch(console.error.bind(console, str));
  }

  async func(...args: number[]): Promise<string> {
    return new Promise((resolve) => {
      resolve(args.join(" "));
    });
  }
}
