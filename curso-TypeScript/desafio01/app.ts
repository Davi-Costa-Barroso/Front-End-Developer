import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PrivilegeAccount } from './class/PrivilegeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Davi', 10)
peopleAccount.deposit(100)
peopleAccount.deposit(10)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())

const compantAccount: CompanyAccount = new CompanyAccount('Caio', 2)
compantAccount.getLoan(3)
console.log(compantAccount.getBalance())

const privilegeAccount: PrivilegeAccount = new PrivilegeAccount("Fernando", 3)
privilegeAccount.deposit(4)
console.log(privilegeAccount.getBalance())