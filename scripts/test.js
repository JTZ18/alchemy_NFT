var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider());
var version = web3.version.api;
        
$.getJSON('https://api.etherscan.io/api?module=contract&action=getabi&address=0x4Bbe9A141FBe7D04fC85ddb5dCb277cc278ce01E', function (data) {
    var contractABI = "";
    contractABI = JSON.parse(data.result);
    if (contractABI != ''){
        var MyContract = web3.eth.contract(contractABI);
        var myContractInstance = MyContract.at("0x4Bbe9A141FBe7D04fC85ddb5dCb277cc278ce01E");
        var result = myContractInstance.memberId("0xAfb47EaB7532fDD91aBB5f660Ba225a613689bE1");
        console.log("result1 : " + result);            
        var result = myContractInstance.members(1);
        console.log("result2 : " + result);
    } else {
        console.log("Error" );
    }            
});