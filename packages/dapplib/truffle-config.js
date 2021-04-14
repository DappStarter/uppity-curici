require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name random still essay gloom end army gentle'; 
let testAccounts = [
"0xc86c752ae758e2e8dec8c949eeebd1b67a53a844172d4bb09e80df6ff823856f",
"0xc9bd32a505a2a9baf84aadf4933cdf717ab404a4b05340ce36981a121bc1da89",
"0xbe0b06170a6b7a50386e4d1ebb23ca83b4f2d352b176c7421eb0e1b68861e8e4",
"0xe2f0a2bd4eb05391a0b881a2998caae22de896d275ab082821021e5d9411089c",
"0xffb9f0983b582653aa9d4f6bb9fa16e00285f2075d4eb51b49901d4f618f4441",
"0xb676e9203ffca3e3ef63b8b3757973eaff8e6b5f32f8299b7bc83bda2c8f96fa",
"0x621fa58623efaef413a9159eef4f6500cdd54c4c2329e0229effd410c6905ff3",
"0xce0478d9c425eea6a2ceece73187f1f18e275ee6f1366274bb5ebd47d5d0215a",
"0xa9a809486e0563f6585fd5191ef51a632a00bcb1829d2c58045b76905d616544",
"0x24f4a1ee314a7afd620e5f42f740bb4401a1e0f53d05c36d0ce41d403da404a0"
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
            version: '^0.5.11'
        }
    }
};
