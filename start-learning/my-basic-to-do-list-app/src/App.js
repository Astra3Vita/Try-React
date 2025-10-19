import React, { useState } from 'react';
import './App.css'; 

function App() { 
  const [tasks, setTasks] = useState([]); // state สำหรับเก็บรายการงาน (tasks)
  const [input, setInput] = useState(''); // state สำหรับเก็บค่าที่พิมพ์ใน input
  const [editIndex, setEditIndex] = useState(null); // state สำหรับเก็บ index ของ task ที่กำลังแก้ไข

  const handleAdd = () => { 
    if (input.trim() === '') return; // if input ว่างเปล่า ไม่ต้องทำอะไร
    if (editIndex !== null) { 
      const updatedTasks = [...tasks]; // สร้างสำเนาของ tasks เดิม
      updatedTasks[editIndex] = input; // edit task ที่ตำแหน่ง editIndex
      setTasks(updatedTasks); // update new task
      setEditIndex(null); // reset editIndex to null
    } else {
      setTasks([...tasks, input]); // add task
    }
    setInput(''); // clear input after add or update
  };

  const handleEdit = (index) => { 
    setInput(tasks[index]); // ใส่ค่าของ task ที่เลือกลงใน input
    setEditIndex(index); // ตั้งค่า editIndex เป็น index ของ task ที่เลือก
  };

  const handleDelete = (index) => { 
    const updatedTasks = tasks.filter((_, i) => i !== index); // delete task ที่ index ตรงกับที่เลือก
    setTasks(updatedTasks); // update new tasks 
    if (editIndex === index) { // ถ้ากำลังแก้ไข task ที่ถูกลบ
      setInput(''); // clear input
      setEditIndex(null); // reset editIndex
    }
  };

  return ( 
    <div className="App"> 
      <h1>📝 To-Do List</h1> {/* heading */}
      <div className="input-group"> 
        <input
          type="text"
          value={input} // ผูกค่ากับ state input
          onChange={(e) => setInput(e.target.value)} // update input when user typing
          placeholder="Enter task" 
        />
        <button className="button-add" onClick={handleAdd}> 
          {editIndex !== null ? 'Update' : 'Add'} {/* เปลี่ยนข้อความปุ่มตามโหมด */}
        </button>
      </div>
      <ul> 
        {tasks.map((task, index) => ( // loop each task
          <li key={index}> {/* show each task */}
            {task} 
            <div className="buttons">
              <button className="button-edit" onClick={() => handleEdit(index)}>Edit</button>
              <button className="button-delete" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
