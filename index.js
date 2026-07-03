

class BankAccount{
    constructor(accName, amount){
        this.name  = accName
        this.accuNum = 0
        this.acumNumber()
        this.accBalance = 0
        this.withdraw(amount)
        this.deposit(amount)
    }
    acumNumber(){
       this.accuNum += (Math.floor(Math.random() * 100000000000)) 
    }
    withdraw(amount){
       this.accBalance -= amount
    }
     deposit(amount){
         this.accBalance += amount
    }
}


let user1 = new BankAccount('phil', 0)
user1.deposit(5000)
user1.withdraw(3900)
console.log(user1)