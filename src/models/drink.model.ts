import { BeverageModel } from 'models';
export class DrinkModel extends BeverageModel {
    constructor(
        public name: string,
        public imageName: string,
        public size: number,
        public date: string,
        public time: string,
        public dayCode: number,
        public drinkId: number
    ) {
        super(name, imageName, size);
    }
}
