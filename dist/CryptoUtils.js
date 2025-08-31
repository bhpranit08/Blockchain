import * as crypto from 'crypto';
class CryptoUtils {
    static generateKeyPair() {
        const keypair = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            }
        });
        return keypair;
    }
}
console.log(CryptoUtils.generateKeyPair());
