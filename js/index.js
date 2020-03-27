var contractABI = null;
var contractAddress = null;
$.ajax({
  url: "./build/contracts/AssetTracker.json",
  async: false,
  dataType: "json",
  success: function(json) {
    assignVariable(json);
  }
});
function assignVariable(data) {
  contractABI = data.abi;
  contractAddress = data.networks[5777].address;
}

console.log(contractABI);
console.log(contractAddress);

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProviders("http://127.0.0.1:7545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var fromAddress = "0x3af4F14aeA5cE651F73EeED5587B085454171745";

const AssetTrackerContract = new web3.eth.Contract(
  contractABI,
  contractAddress,
  { from: fromAddress }
);
