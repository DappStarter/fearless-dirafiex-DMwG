require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain minor include arctic olympic skirt'; 
let testAccounts = [
"0xe7ec0c9e838126fd2dc3ea729f8e12dc3439dd884da5c873aeeb599cdfc3c47b",
"0xde714af6a50f1663345509477cf6eb3d65ae77211496bd9fb87d2d3d4483a3ba",
"0x72c9f2fdaeb325022f28dec1a51012236852b187bb2f7edf0e00d9ac757904b4",
"0xb7fb99b61a0c3d238219c569789e247587d1d1e00b4a867a742e7c0b6f695d72",
"0xad5fcfb81d52b3192f56cb83170a986110f9630c8a3f7b6e27cf00d8b086ef58",
"0xdcc4ac3fd2be68184459c66af8041e107654b770b6919b8de60b21d4facdc8f6",
"0x77276922fdac76cf5a9c274678dc66022f3faf594fa694878de064e6b22abe8b",
"0x7c307c58ad4d85afe8195dda652500cab4b8993663711809f3553edffa61508b",
"0xbbb986eb185f23bed43043e0f3c44cd2d9870f81f794e2860ee0eda8c00f014b",
"0x39d7ab9ca899125b1dfe6318f8887f896b101125af5d46c9ed2625d16915c1ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

