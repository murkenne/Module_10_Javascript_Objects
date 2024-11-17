// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

Account.prototype.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: ${this.deposit}, New balance: ${this.balance}.`)
    } else {
        console.log("Deposit must be more than 0")
    }
};

// Method to withdraw funds from the account
Account.prototype.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) { // Ensure withdrawal amount is positive and does not exceed balance
        this.balance -= amount; // Decrease the balance by the withdrawal amount
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be positive.");
    }
};

// Example Usage

// Task 1: Creating an Account object
const account1 = new Account(101, 500, "John Doe"); 

// Task 2: Depositing funds
account1.deposit(20000); // Deposits $200

// Task 2: Withdrawing funds
account1.withdraw(100); // Withdraws $100
account1.withdraw(700); // Attempt to withdraw more than the available balance
account1.withdraw(-50); // Attempt to withdraw a negative amount