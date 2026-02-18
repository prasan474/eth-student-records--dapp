let web3;
let account;
let contract;

const contractAddress = "0x42Ab7f60ECd0bdb5E80bc75A712DF28DDedBF89b";

const abi = [
  {
    "inputs": [],
    "name": "justCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pay",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

async function connect() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    const accounts = await ethereum.request({
      method: "eth_requestAccounts"
    });
    account = accounts[0];

    contract = new web3.eth.Contract(abi, contractAddress);

    document.getElementById("acc").innerText =
      "Connected: " + account;
  } else {
    alert("MetaMask not installed");
  }
}

// 👋 HI interaction (just function call)
async function sayHi() {
  await contract.methods.justCall().send({
    from: account
  });

  document.getElementById("status").innerText =
    "👋 Hii! Nice to meet you";
}

// 😄 HELLOOO interaction (ETH + function)
async function sayHello() {
  await contract.methods.pay().send({
    from: account,
    value: web3.utils.toWei("0.1", "ether")
  });

  document.getElementById("status").innerText =
    "😄 Helloooo! Have a great day";
}
