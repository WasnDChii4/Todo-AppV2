import React, { useState } from "react";
import {FaPlus, FaTrash, FaCheck} from "react-icons/fa";

export default function Todo()  {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Learning Todo App V2', time: '08:00', date: '29/09/2025', completed: false}
  ])
  const [newTodo, setNewTodo] = useState('')

  // Function for add todo
  const addTodo = () => {
    if(newTodo.trim() == '')
    return;
    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const dateString = currentDate.toLocaleDateString();

    setTodos ([
      {
        text: newTodo,
        id: Date.now(),
        time: timeString,
        date: dateString,
        completed: false
      },
      ...todos
    ])
    setNewTodo('')
  }

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Toggle Complete
  const completeTodo = (id) => {
    setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo));
  }

  return (
    <div className="bg-black/30 text-white place-self-center w-11/12 max-w-md flex flex-col p-3 md:p-7 rounded-xl backdrop-blur-xl border border-black/20 shadow-lg shadow-gray ">
      <div className="bg-gradient-to-r from-gray-600/80 to-gray-800/80 p-4 rounded-xl backdrop-blur-lg mb-6">
        <h1 className="font-bold text-2xl font-quintessential">Todo List V2</h1>
      </div>

      {/* Add Task Section */}
      <div className="mb-6">
        <h1 className="text-lg font-semibold font-dynapuff mb-6">Add Task</h1>
        <div className="flex rounded-lg overflow-hidden">
          <input value={newTodo} className="flex-1 p-4 py-3 backdrop-blur-sm focus:outline-none border-r border-black/30"
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new task..." type="text" 
            onKeyPress={(e) => e.key === 'Enter' && addTodo()} 
          />
          <button className="bg-gray-600/80 hover:bg-gray-700/80 px-4 py-3 backdrop-blur-sm transition flex items-center justify-center" onClick={addTodo}>
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Todo Items */}
      <div className="space-y-3">
        {
          todos.map((todo) => (
            <div key={todo.id} className="p-4 rounded-xl bg-white/80 backdrop-blur-xl border border-black/30">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <button className={`${todo.completed ? 'bg-gray-600/80' : 'bg-black/50'} mt-1 p-2 rounded-lg backdrop-blur-sm border border-black/30`} onClick={() => completeTodo(todo.id)}>
                    {todo.completed && <FaCheck size={12} />}
                  </button>
                  <div>
                    <p className={`font-medium ${todo.completed ? 'line-through text-gray-600' : 'text-black'} font-chicle text-2xl`}>
                      {todo.text}
                    </p>
                    <p className="text-xs text-gray-600/80 mt-1">{todo.time} | {todo.date}</p>
                  </div>
                </div>
                <button className="bg-white/50 hover:bg-white/70 backdrop-blur-sm border border-white/30 text-gray-600/80 hover:text-gray-800/80 transition p-2 rounded-lg" onClick={() => deleteTodo(todo.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        }
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="">
        <path fill="#555555" fill-opacity="1" d="M0,96L6.2,122.7C12.3,149,25,203,37,234.7C49.2,267,62,277,74,250.7C86.2,224,98,160,111,138.7C123.1,117,135,139,148,170.7C160,203,172,245,185,229.3C196.9,213,209,139,222,112C233.8,85,246,107,258,149.3C270.8,192,283,256,295,240C307.7,224,320,128,332,80C344.6,32,357,32,369,32C381.5,32,394,32,406,32C418.5,32,431,32,443,74.7C455.4,117,468,203,480,202.7C492.3,203,505,117,517,106.7C529.2,96,542,160,554,202.7C566.2,245,578,267,591,229.3C603.1,192,615,96,628,85.3C640,75,652,149,665,154.7C676.9,160,689,96,702,74.7C713.8,53,726,75,738,101.3C750.8,128,763,160,775,149.3C787.7,139,800,85,812,96C824.6,107,837,181,849,186.7C861.5,192,874,128,886,112C898.5,96,911,128,923,154.7C935.4,181,948,203,960,213.3C972.3,224,985,224,997,186.7C1009.2,149,1022,75,1034,42.7C1046.2,11,1058,21,1071,48C1083.1,75,1095,117,1108,149.3C1120,181,1132,203,1145,213.3C1156.9,224,1169,224,1182,192C1193.8,160,1206,96,1218,74.7C1230.8,53,1243,75,1255,90.7C1267.7,107,1280,117,1292,133.3C1304.6,149,1317,171,1329,197.3C1341.5,224,1354,256,1366,261.3C1378.5,267,1391,245,1403,229.3C1415.4,213,1428,203,1434,197.3L1440,192L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z" />
      </svg> */}
    </div>
  )
}