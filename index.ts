import Block from "./Block.ts";
import Transaction from "./Transactions.ts";

const transaction1 = new Transaction("Rishav", "Pranit", 100)
console.log("Transaction hash: " + transaction1.hash)

const transaction2 = new Transaction("Rijan", "Pranit", 100)
console.log("Transaction hash: " + transaction2.hash)

const transaction3 = new Transaction("Bibusadh", "Pranit", 100)
console.log("Transaction hash: " + transaction3.hash)


const block1 = new Block("First Block", "000000", [transaction1, transaction2, transaction3])
console.log(block1.hash)
console.log(block1.previousHash)
console.log(block1.transactions)