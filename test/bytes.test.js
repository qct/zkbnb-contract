const { expect } = require('chai');
const { ethers } = require('hardhat');

// Start test block
describe('BytesTest', function () {
  beforeEach(async function () {
    const BytesTest = await ethers.getContractFactory('BytesTest');
    this.bytesTest = await BytesTest.deploy();
  });

  it('bytes test', async function () {
    const hash = '0x3579B1273F940172FEBE72B0BFB51C15F49F23E558CA7F03DFBA2D97D8287A30'.toLowerCase();
    const hexString = await this.bytesTest.bytes32ToHexString(hash);
    expect(hexString).to.equal(hash);
    const hexString2 = await this.bytesTest.bytes32ToHexStringWithoutPrefix(hash);
    expect(hexString2).to.equal(hash.substring(2));
    const prefix = 'ipfs://f01701220';
    const result = await this.bytesTest.concatStringAndBytes32(prefix, hash);
    expect(result).to.equal(`${prefix}${hash.substring(2)}`);
  });
});