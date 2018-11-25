export class Entry {
    id;
    amount;
    createdAt;
    meal;
    food;
    owner;

    constructor(amount, food, date){
        this.amount = amount;
        this.food = food;
        this.createdAt = date;
    }
   
}