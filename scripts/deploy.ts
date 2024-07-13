import { ethers } from "hardhat";

async function main() {
  const TodoList = await ethers.getContractFactory("TodoList");
  const todoList = await TodoList.deploy();
  const address = await todoList.getAddress();

  await todoList.waitForDeployment();

  console.log("TodoList deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
