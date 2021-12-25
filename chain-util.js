const { v1: uuidv1 } = require('uuid');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const sha256 = require('crypto-js/sha256');

class ChainUtil {
    static genKeyPair() {
        return ec.genKeyPair();
    }

    static id() {
        return uuidv1();
    }

    static hash(data) {
        return sha256(JSON.stringify(data)).toString();
    }

    static verifySignature(publicKey, signature, dataHash) {
        return ec.keyFromPublic(publicKey, 'hex').verify(dataHash, signature);
    }
}

module.exports = ChainUtil;