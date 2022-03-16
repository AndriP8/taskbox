import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../lib/store";
import TaskList from "./TaskList";

const InboxScreen = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.taskbox);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
};

export default InboxScreen;
