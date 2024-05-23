class EmployeeBonus {
    private bonusAmount: number;

    constructor(bonusAmount: number) {
        this.bonusAmount = bonusAmount;
    }

    public getBonus(): number {
        return this.bonusAmount;
    }

    public setBonus(newBonus: number): void {
        if (newBonus >= 0) {
            this.bonusAmount = newBonus;
        } else {
            console.error('Bonus amount must be positive.');
        }
    }
}

// Usage
const employeeBonus = new EmployeeBonus(100);
console.log(`The employee bonus is: ${employeeBonus.getBonus()} units.`);
