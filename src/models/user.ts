export enum GenderEnum {
    unknown = 0,
    male = 1 ,
    female = 2
}
export class User {
    uid: string;
    email?: string | null;
    photoURL?: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    todayDrink?: number;
    lastDay?: number;
    gender?: GenderEnum;
    weight?: number;
    dailySport: boolean;
    drinkAmount: number;
    constructor() {
        this.drinkAmount = 700;
    }
}
