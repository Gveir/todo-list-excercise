import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
    </div>
  );
};

export default TaskCard;
