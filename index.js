class BankAccount{
    constructor(accName, amount){
        this.name  = accName
        this.accuNum = 0
        this.accBalance = amount
        this.freeze =false
        this.acumNumber()
        this.withdraw(amount)
        this.deposit(amount)
        // this.freeze()
        
    }
    acumNumber(){
       this.accuNum += (Math.floor(Math.random() * 1000000000)) 
    }
    withdraw(amount){
       if(this.accBalance >= amount){
        this.accBalance -= amount
       } else{
        this.Info = `Transaction declined. Insufficient account balance.`
       }
    }
     deposit(amount){
        this.accBalance += amount
    }
    freeze(){
        this.freeze = true
    }
}


let user1 = new BankAccount('phil', 2000)
user1.deposit(1000)
user1.withdraw(4000)
// user1.freeze()
console.log(user1)