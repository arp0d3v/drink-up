export class BeverageModel {
    constructor(
       public name: string,
       public imageName: string,
       public size: number,
       public waterPercent?: number,
    ) {
    }
}
