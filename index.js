
let users = [];

class BankAccount{
    constructor(accName, amount, accType){
        this.name  = accName
        this.accuNum = 0
        this.accBalance = amount
        this.isActive =true
        this.accType = String(accType).toLowerCase()
        this.acumNumber()
        this.withdraw(amount)
        this.deposit(amount)
        this.accTypeValidation()
        // this.freeze(accName)
        this.transfer(accName, amount)


        users.push(this)
    }
    accTypeValidation(){
        if(this.accType === 'savings' || this.accType === 'current'){
            this.alert = `Welcome ${this.name}`
        } else{
            this.Info = `Invalid account type. ${this.name} account creation was not successful.`
            delete this.accuNum
            delete this.accType
            delete this.name
            delete this.isActive
            delete this.accBalance
        }
    }
    acumNumber(){
       this.accuNum += (Math.floor(Math.random() * 1000000000)) 
    }
    withdraw(amount){
       if(this.isActive === true){
        if(this.accBalance >= amount){
        this.accBalance -= amount
       } else{
        this.Info = `Transaction declined. Insufficient account balance.`
       }
       } else{
            this.Info = `Transaction declined.\n${this.name}, Due to your inactive account, you cannot make a withdrawal.`
        }
    }
    transfer(accName, amount){
        users.forEach(user =>{
            if(user.name === accName){
                this.withdraw(amount)
            } else{
                this.Info = `Transaction declined.! Destination not found`
            }
        })
    }
     deposit(amount){
        if(this.isActive === true){
            this.accBalance += amount
        } else{
            this.Info = `Transaction declined.\n${this.name}, Due to your inactive account, you cannot not fund it.`
        }
    }
    freeze(num){
        if(this.name === num){
            this.freeze = true
            this.isActive = false
            this.Info= `${this.name}, Your account has been frozen for violating our rule`
        }
    }
}


let user1 = new BankAccount('phil', 2000, 'savings')
let user2 = new BankAccount('Dom', 6000, 'CURRENT')
let user3 = new BankAccount('Joe', 10000)
// user1.deposit(10000)
// user1.withdraw(500)
// user1.withdraw(500)
user1.transfer('Dm', 2500)
// console.log(user1)
// console.log(user2)
// console.log(user3)


console.log(users)