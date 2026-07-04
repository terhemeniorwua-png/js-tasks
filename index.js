


let users = [];
  
class BankAccount{
    adminID = 100;
    constructor(accName, amount, accType){
       
        this.name  = accName
        this.accNum = 0
        this.accBalance = amount
        this.isActive =true
        this.accType = String(accType).toLowerCase()
        this.accTypeValidation()
        this.acumNumber()
        // this.deposit(amount)
        
        
        // this.withdraw(amount)


        users.push(this)
    }
   
    
    
  
    // freeze(adminID){
    //     if(adminID === this.adminID){
    //         this.isActive = false
    //         delete this.alert
    //         this.Info= `${this.name}, Your account has been frozen for violating our rule`
    //     } else{
    //         `Invalid account name!`
    //     }
    }

    
// }

BankAccount.prototype. accTypeValidation = function(){
        if(this.accType === 'savings' || this.accType === 'current'){
            this.alert = `Welcome ${this.name}`
        } else{
            this.Info = `Invalid account type. ${this.name} account creation was not successful.`
            delete this.accType
            delete this.name
            delete this.isActive
            delete this.accBalance
            delete this.adminID
            delete this.accNum
        }
    }
BankAccount.prototype. acumNumber = function(){
       this.accNum += (Math.floor(Math.random() * 1000000000)) 
    }
    BankAccount.prototype. deposit = function(amount){
       this.isActive === true? (this.accBalance += amount)
       :this.Info = `Transaction declined.\n${this.name}, Due to your inactive account, you cannot not fund it.`
      }
BankAccount.prototype.withdraw = function(amount){
   if(this.isActive === true){
        if(this.accBalance >= amount){
               this.accBalance -= amount
            let time = new Date()
            this.Info = `${amount} successfully withdrawn from your ${this.accType} account  
Time: ${time}`
        }   else if(this.accBalance < amount){
            this.Info = `Transaction declined. Insufficient account balance.`
            }
    } else{
        return`Transaction declined.\n${this.name}, 
        Due to your inactive account, you cannot make a withdrawal.`
    }
}
BankAccount.prototype.transfer = function(accName, amount){
    users.find(user => {
        if(user.name === accName && user.isActive === true && this.isActive === true){
            this.withdraw(amount);
            user.deposit(amount)
            let time = new Date()
            this.Info = `Successfully transferred ${amount} to ${accName}
         Time: ${time}`
            }


        else{
           this.Info = `Transaction declined.! Destination not found`
         }   
         }
           )
        
}








let user1 = new BankAccount('Philip', 2000, 'savings')
let user2 = new BankAccount('Dom', 6000, 'CURRENT')
let user3 = new BankAccount('Joe', 10000)
// user1.deposit(10000)
// user2.deposit(10000)
// user3.deposit(10000)
// user2.withdraw(2000)
// user3.withdraw(1500)
// user1.withdraw(1500)
// user2.isActive = false;

user2.transfer('Philip', 10)
console.log(user1)
// user1.freeze(100)
console.log(user2)
console.log(user3)


// console.log(users)