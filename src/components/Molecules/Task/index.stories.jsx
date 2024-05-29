import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    onTaskComplete: () => {
      console.log("task completed");
    },

    onTaskNameChange: (value) => {
      console.log("task changed:" + value);
    },
    taskName: "taskname",
    defaultIsEditing: true,
  },
};
