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
    
      describe("Transactions failure check", function () {
        it("Should fail if sender doesn’t have enough tokens", async function () {
            const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);
      
       
            await expect(
              hardhatToken.connect(addr1).transfer(owner.address, 1)
            ).to.be.revertedWith("Not enough tokens");
      
            expect(await hardhatToken.balanceOf(owner.address)).to.equal(
              initialOwnerBalance
            );
          });
        });
    });
        
    