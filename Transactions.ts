import crypto from "crypto"

class Transaction {
    public hash: string
    public fromAddress: string
    public toAddress: string
    public amount: number
    public timestamp: number

    constructor(fromAddress: string, toAddress: string, amount: number) {
        this.fromAddress = fromAddress,
        this.toAddress = toAddress
        this.amount = amount
        this.timestamp = Date.now()
        this.hash = this.calculateHash()
    }

    calculateHash(): string {
        return crypto.createHash('sha256').update(this.fromAddress + this.toAddress + this.amount + this.timestamp).digest('hex')
    }
}

export default Transaction