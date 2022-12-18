    // We import Chai to use its asserting functions here.
    const { expect } = require("chai");


    describe("", function () {
    
    
      let Token;
      let hardhatToken;
      let owner;
      let addr1;
      let addr2;
      let addrs;
    
      beforeEach(async function () {
    
        Token = await ethers.getContractFactory("Transactions");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    
    
        hardhatToken = await Token.deploy();
      });
    
      describe("Owner balance check", function () {
      
        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await hardhatToken.balanceOf(owner.address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
          });
        });
    });
        
    