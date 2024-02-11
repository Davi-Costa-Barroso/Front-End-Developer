const conta = {
    email: 'test@gmail.com',
    name: 'Davi Barroso',
    password: '123456',
    balance: 2000,
    id: '1'
}
export const api = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(conta)
    }, 3000)
})