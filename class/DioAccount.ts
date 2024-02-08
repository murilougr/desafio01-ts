export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance += valor
      console.log(`Inserção de ${valor} feito com sucesso! Saldo atual é de ${this.balance}`)
    } 
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus() && valor <= this.balance){
      this.balance -= valor
      console.log(`Valor sacado ${valor}! Saldo atual é de ${this.balance}`)
    } else {
      console.log('Saldo Insuficiente')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
