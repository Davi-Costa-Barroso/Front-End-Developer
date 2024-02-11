import { DioAccount } from "./DioAccount"

export class PrivilegeAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (deposito: number): void => {
      this.setBalance(this.getBalance() + deposito + 10)
  }
}