export class Result {
  private code: number;
  private data: any;
  private timestamp: Date;

  constructor(code: number, data: any) {
    this.code = code;
    this.data = data;
    this.timestamp = new Date();
  }
  static success(data: any) {
    return new Result(200, data);
  }
  static fail(code: number, data: string) {
    return new Result(code, data);
  }
}
