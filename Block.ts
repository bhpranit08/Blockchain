import Transaction from "./Transactions.ts";
import crypto from "crypto"

class Block {
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    public transactions: Array<Transaction>;
    public distance = 120

    constructor(data: string, previousHash: string = '', transactions: Array<Transaction>) {
        this.data = data
        this.previousHash = previousHash
        this.timestamp = Date.now()
        this.hash = this.calculateHash()
        this.transactions = transactions
        this.distance = 120
    }

    calculateHash(): string {
        return crypto.createHash('sha256').update(this.previousHash + this.timestamp + this.timestamp + JSON.stringify(this.data) + this.distance + JSON.stringify(this.transactions)).digest('hex')
    }
}

export default Block