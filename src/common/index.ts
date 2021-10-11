export class HttpResponse {
    //public return: Status;
    public data: any;
    constructor(data: any){
      //this.return = status;
      this.data = data;
    }
  }
  
  export function inputToBitmap(input: string): number[][] {
      const rows: string[] = input.split(',');
      const bitmap: number[][] = rows.map((row) =>
          row.split('').map((pixel) => parseInt(pixel, 10)),
      );
      console.log("PIXEL", bitmap)
      return bitmap;
  }
  
  export function outputToBitmap(result: number[][]): string {
      console.log(result)
      return result.map((x) => x.join(' ')).join('\n');
  }