import * as crypto from 'crypto'

class CryptoUtils {
    static generateKeyPair() {
        const keypair =  crypto.generateKeyPairSync('rsa' as any, {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            }
        });

        return keypair
    }
}

export default CryptoUtils