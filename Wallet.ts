import crypto from "crypto"

class Wallet {
    public address: string
    public publicKey: string
    public privateKey: string
    public name: string

    constructor(name: string) {
        const { publicKey, privateKey } = this.generateKeyPair()
        this.address = this.createAddress(publicKey)
        this.publicKey = publicKey
        this.privateKey = privateKey
        this.name = name
    }

    createAddress(publicKey: string) : string {
        const address_hash = crypto.createHash('sha256').update(publicKey).digest('hex')
        return address_hash.substring(0, 16)
    }

    generateKeyPair() : { publicKey: string, privateKey: string } {
        return crypto.generateKeyPairSync('rsa' as any, {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            }
        })
    }
}

export default Wallet