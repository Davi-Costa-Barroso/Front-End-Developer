import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (emprestimo: number): void => {
    if (this.getStatus()) {
      this.deposit(this.getBalance() + emprestimo);
    }
  }
}