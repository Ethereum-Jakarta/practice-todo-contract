import { expect } from "chai";
import { ethers } from "hardhat";
import { TodoList } from "../typechain-types";

describe("TodoList Contract", function () {
  let todoList: TodoList;

  beforeEach(async function () {
    const TodoListFactory = await ethers.getContractFactory("TodoList");
    todoList = (await TodoListFactory.deploy()) as TodoList;
    await todoList.waitForDeployment();
  });

  it("should create a task", async function () {
    await todoList.createTask("My first task");
    const tasks = await todoList.getTasks();
    expect(tasks.length).to.equal(1);
    expect(tasks[0].task).to.equal("My first task");
    expect(tasks[0].completed).to.be.false;
  });

  it("should update a task", async function () {
    await todoList.createTask("My first task");
    await todoList.updateTask(0, "Updated task description");
    const task = await todoList.getTask(0);
    expect(task.task).to.equal("Updated task description");
  });

  it("should complete a task", async function () {
    await todoList.createTask("My first task");
    await todoList.completeTask(0);
    const task = await todoList.getTask(0);
    expect(task.completed).to.be.true;
  });

  it("should remove a task", async function () {
    await todoList.createTask("My first task");
    await todoList.removeTask(0);
    const tasks = await todoList.getTasks();
    expect(tasks.length).to.equal(0);
  });

  it("should get all tasks", async function () {
    await todoList.createTask("Task 1");
    await todoList.createTask("Task 2");
    const tasks = await todoList.getTasks();
    expect(tasks.length).to.equal(2);
    expect(tasks[0].task).to.equal("Task 1");
    expect(tasks[1].task).to.equal("Task 2");
  });
});
