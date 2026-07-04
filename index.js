
let users = [];
  
class BankAccount{
    adminID = 100;
    constructor(accName, amount, accType){
       
        this.name  = accName
        this.accNum;
        this.accBalance = amount
        this.isActive =true
        this.accType = String(accType).toLowerCase()
        this.accTypeValidation()
        this.acumNumber()

        users.push(this)
    }}


BankAccount.prototype. accTypeValidation = function(){
    const valid = ['savings', 'current'];

        if(!valid.includes(this.accType)){
          throw new Error("Invalid account type!");
        }
    }

BankAccount.prototype.freeze = function(adminID){
        if(adminID !== this.adminID) return;
            this.isActive = false
            this.message= `${this.name}, Your account has been frozen for violating our rule`
}
BankAccount.prototype. acumNumber = function(){
       this.accNum = Math.floor(Math.random() * 1000000000)
    }

BankAccount.prototype. deposit = function(amount){
    if(!this.isActive){
         this.message = `Transaction declined.\n${this.name}, Due to your inactive account, you cannot make a transaction.`
         return;
    }
    if(amount <= 0){
       return this.message = `Amount must be greater than 0`
    }
        this.accBalance += amount
      }


BankAccount.prototype.withdraw = function(amount){
   if(!this.isActive){
            this.message = `Transaction declined.\n${this.name}, Due to your inactive account, you cannot make a transaction`
             return;
        }
      if(amount <=0){
           return this.message = `${amount} is not a valid amount`
            
            } else if(this.accBalance >= amount){
               this.accBalance -= amount
               let time = new Date()
            this.message = `${amount} successfully withdrawn from your ${this.accType} account  
Time: ${time}`
} else{
    this.message = `Transaction declined. Insufficient account balance.`
}}

BankAccount.prototype.transfer = function(accName, amount){
   
        if(!this.isActive){
            this.message = `Transaction declined.\n${this.name}, Due to your inactive account, you cannot make a transaction`
             return;
        }
         else if(amount <=0){
          this.message = `Sorry, ${amount} is not a valid amount`;
          return
        }    

        let receipient = users.find(user => user.name === accName)
             if(!receipient.name || !receipient.isActive){
           this.message = `Transaction declined.! Destination not found`
            return ;
        }
           this.withdraw(amount);
            receipient.deposit(amount)
            receipient.message=`Credited successfully ${amount} from ${this.name}`
            let time = new Date()
            this.message = `Successfully transferred ${amount} to ${accName}
    Time: ${time}`
}  
             
             
        
let user1 = new BankAccount('Philip', 2000, 'savings')
let user2 = new BankAccount('Dom', 6000, 'CURRENT')
let user3 = new BankAccount('Joe', 10000, 'current')


// user1.freeze(100)
// user1.deposit(10000)
// user2.deposit(10000)
// user3.deposit(10000)
// user1.withdraw(1500)
// user3.withdraw(1500)
// user1.withdraw(1500)

user2.transfer('Philip', 100)

console.log(users)