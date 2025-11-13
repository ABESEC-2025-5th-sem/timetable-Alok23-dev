import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // ADD TASK
  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, { text: task, completed: false }]);
    setTask("");
  };

  // DELETE TASK
  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  // TOGGLE COMPLETE
  const toggleComplete = (index) => {
    const newList = [...list];
    newList[index].completed = !newList[index].completed;
    setList(newList);
  };

  // START EDIT
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(list[index].text);
  };

  // SAVE EDIT
  const saveEdit = () => {
    const newList = [...list];
    newList[editIndex].text = editText;
    setList(newList);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {/* TASK LIST */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {/* Completed Toggle */}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(index)}
            />

            {/* View Mode */}
            {editIndex !== index ? (
              <>
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>

                <button onClick={() => startEdit(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            ) : (
              /* Edit Mode */
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            )}
          </li>
        ))}

        {list.length === 0 && <p>No tasks yet.</p>}
      </ul>
    </div>
  );
}