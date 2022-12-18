    // We import Chai to use its asserting functions here.
    const { expect } = require("chai");


    describe('', function () {
    
    
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
    
      
    
      describe("New Balances", function () {
       
    
        it("Should update balances after transfers", async function () {
          const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);
    
          await hardhatToken.transfer(addr1.address, 100);
    
          await hardhatToken.transfer(addr2.address, 50);
    
          const finalOwnerBalance = await hardhatToken.balanceOf(owner.address);
          expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));
    
          const addr1Balance = await hardhatToken.balanceOf(addr1.address);
          expect(addr1Balance).to.equal(100);
    
          const addr2Balance = await hardhatToken.balanceOf(addr2.address);
          expect(addr2Balance).to.equal(50);
        });
      });
    });
        
    