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
    
      describe("Deployment by right owner", function () {
      
        it("Should set the right owner", async function () {
    
          expect(await hardhatToken.owner()).to.equal(owner.address);
            });
        });
    });
        
    