# Simple Todolist Smart Contract

This project is a simple TodoList smart contract written in Solidity. It allows users to create, update, complete, and remove tasks. Each user has their own list of tasks stored on the blockchain.

## How to Use

### Prerequisites
- Node.js
- npm (Node Package Manager)
- Hardhat

### Step-by-Step Guide

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Compile the smart contract**
   ```sh
   npx hardhat compile
   ```

4. **Deploy the smart contract**
   ```sh
   npx hardhat run scripts/deploy.ts --network <network-name>
   ```
   Replace `<network-name>` with the name of the network you want to deploy to (e.g., `localhost` for local development).

5. **Interact with the smart contract**
   You can interact with the deployed smart contract using Hardhat console or by writing scripts. Here are some example commands:

   - **Create a task**
     ```js
     const todoList = await ethers.getContractAt("TodoList", "<deployed-contract-address>");
     await todoList.createTask("My first task");
     ```

   - **Get all tasks**
     ```js
     const tasks = await todoList.getTasks();
     console.log(tasks);
     ```

   - **Update a task**
     ```js
     await todoList.updateTask(1, "Updated task description");
     ```

   - **Complete a task**
     ```js
     await todoList.completeTask(1);
     ```

   - **Remove a task**
     ```js
     await todoList.removeTask(1);
     ```

6. **Run tests**
   To ensure everything is working correctly, you can run the provided tests:
   ```sh
   npx hardhat test
   ```

That's it! You now have a fully functional TodoList smart contract deployed and ready to use.
