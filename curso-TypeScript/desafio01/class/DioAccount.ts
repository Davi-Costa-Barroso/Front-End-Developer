export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }
  getStatus = (): boolean =>{
    return this.status
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  deposit = (deposito: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.balance += deposito)
    }
  }

  withdraw = (saque: number): void => {
    if (this.validateStatus()) {
      if (saque <= this.balance) {
        this.setBalance(this.balance - saque)
      }
    }
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
