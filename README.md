# eth-student-records--dapp
A Blockchain-based Student Records Management System built using Ethereum, Solidity, Web3.js, MetaMask, and Truffle.
This decentralized application (DApp) allows users to securely store and retrieve student records on the Ethereum blockchain. The system ensures transparency, immutability, and tamper-proof academic data storage.

## 🚀 Project Overview

Traditional student record systems rely on centralized databases that can be modified or hacked.  
This DApp stores student records directly on the Ethereum blockchain, making the data:

- ✅ Secure
- ✅ Immutable
- ✅ Transparent
- ✅ Decentralized

Users can:
- Connect their MetaMask wallet
- Add new student records
- Retrieve student details using student ID

## 🛠️ Technologies Used

- **Solidity** – Smart contract development
- **Truffle** – Ethereum development framework
- **Ganache** – Local blockchain for testing
- **Web3.js** – Blockchain interaction
- **MetaMask** – Wallet integration
- **HTML, CSS, JavaScript** – Frontend

---

## 📂 Project Structure
eth-student-records--dapp/
│
├── contracts/
│ └── StudentRecords.sol
│
├── migrations/
│
├── build/
│
├── index.html
├── app.js
├── truffle-config.js


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/prasan474/eth-student-records--dapp.git
cd eth-student-records--dapp

**Install Dependencies**
npm install

3️⃣ Start Ganache

Open Ganache and ensure it runs on:

HTTP://127.0.0.1:7545

**4️⃣ Deploy Smart Contract**
truffle migrate --reset

**5️⃣ Run the Application**
Open index.html in your browser.

Make sure MetaMask is connected to:

Localhost 7545

**🔐 How It Works**

User connects MetaMask wallet.

User enters student details.

Frontend sends transaction using Web3.js.

Smart contract stores data on Ethereum blockchain.

Records can be retrieved anytime using student ID.

**🌍 Future Enhancements**
Role-based access control (Admin-only record creation)
IPFS integration for document storage
React.js frontend
Deployment on Sepolia Testnet
Enhanced UI/UX design
**📜 License**
This project is licensed under the MIT License.
**👨‍💻 Author**
Prasanna

