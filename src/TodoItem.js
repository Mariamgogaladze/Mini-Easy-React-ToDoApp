import React, { useState, useEffect } from "react";
import "./App.css";
import completed from "./icon4.png";
import DoneEditingBtn from "./buttons/DoneEditingbutton/DoneEditingBtn";
import DeleteButton from "./buttons/DeleteButton/DeleteButton";
import EditButton from "./buttons/EditButton/EditButton";
import AddButton from "./buttons/Addbutton/AddButton";
import CompletedButton from "./buttons/CompletedButton/CompletedButton";
import FirstInput from "./inputs/FirstInput/FirstInput";
import SearchInput from "./inputs/SearchInput/SearchInput";
import SummaryBtn from "./buttons/SummaryBtn/SummaryBtn";

export default function ToDoListContainer() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [summaryVisible, setSummaryVisible] = useState(false);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      setTodoList([
        ...todoList,
        { task: inputValue, completed: false, editing: false },
      ]);
      setInputValue("");
    }
  };

  const handleDeleteBtnClick = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const handleDoneBtnClick = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = true;
    setTodoList(updatedList);
  };

  const handleEditInputChange = (event, index) => {
    const updatedList = [...todoList];
    updatedList[index].task = event.target.value;
    setTodoList(updatedList);
  };

  const handleEditBtnClick = (index) => {
    const updatedList = [...todoList];
    updatedList[index].editing = true;
    setTodoList(updatedList);
  };

  const handleEditDoneClick = (index) => {
    const updatedList = [...todoList];
    updatedList[index].editing = false;
    setTodoList(updatedList);
  };

  const handleSummaryBtnClick = (event) => {
    setSummaryVisible(true);
    event.stopPropagation();
  };

  const handleCloseBtnClick = () => {
    setSummaryVisible(false);
  };

  const filteredTodoList = todoList.filter((task) =>
    task.task.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const completedTasks = todoList.filter((task) => task.completed).length;
  const uncompletedTasks = todoList.filter((task) => !task.completed).length;
  const totalTasks = todoList.length;

  return (
    <div className="main">
      <div className="container">
        <h1 className="title">To Do List</h1>
        <nav className="navigationBar">
          <SummaryBtn
            completedTasks={completedTasks}
            uncompletedTasks={uncompletedTasks}
            totalTasks={totalTasks}
            handleSummaryBtnClick={handleSummaryBtnClick}
            handleCloseBtnClick={handleCloseBtnClick}
            summaryVisible={summaryVisible}
          />
          <SearchInput
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />
        </nav>
      </div>
      <div className="inputDiv">
        <FirstInput
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
        <AddButton handleAddButtonClick={handleAddButtonClick} />
      </div>
      <div className="sec-main">
        {filteredTodoList.map((task, index) => (
          <div className="todoitem" key={index}>
            <div className="todo-content">
              {!task.editing && !task.completed && (
                <EditButton
                  handleEditBtnClick={handleEditBtnClick}
                  index={index}
                />
              )}
              {task.completed && (
                <img
                  className="completedIcon"
                  src={completed}
                  alt="completed icon"
                />
              )}
              {!task.editing ? (
                <p className="todo-text">{task.task}</p>
              ) : (
                <input
                  className="editinput"
                  type="text"
                  value={task.task}
                  onChange={(event) => handleEditInputChange(event, index)}
                />
              )}
            </div>
            <div className="btnDiv">
              {!task.editing && !task.completed && (
                <CompletedButton
                  handleDoneBtnClick={handleDoneBtnClick}
                  index={index}
                />
              )}
              {!task.editing && (
                <DeleteButton
                  handleDeleteBtnClick={handleDeleteBtnClick}
                  index={index}
                />
              )}
              {task.editing && (
                <DoneEditingBtn
                  handleEditDoneClick={handleEditDoneClick}
                  index={index}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
