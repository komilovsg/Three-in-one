import React, { useState, useEffect } from 'react'
import { FaTrashAlt, FaCheck, FaEdit, FaSave, FaTimes, CgAddR } from 'react-icons/fa';

export default function ToDoList ({todo, setTodo}) {

  const [edit, setEdit] = useState(false)
  const [editedItem, setEditedItem] = useState({})
  const [checkedItem, setCheckedItem] = useState({})

  // ОБРАБОТЧИКИ СОБЫТИЙ

  function deletedTodo (id) {
    let newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo)
  }



// ////////////////FUNCTION///////////////Функция Чекед (Галочка)
  function statusTodo (id) {
    if (checkedItem.id === id) {
      setCheckedItem({})
    } else {
    let newTodo = todo.map(item => {
      if (item.id === id) {
        return {...item, status: !item.status}
      }
      return item
    })
    setCheckedItem(newTodo.find(item => item.id === id))
    setTodo(newTodo)
  }
}

  function editTodo (item) {
    setEditedItem(item)
    setEdit(true)
  }

  function saveEditedTodo () {
    let newTodo = todo.map(item => {
      if (item.id === editedItem.id) {
        return editedItem
      }
      return item
    })
    setTodo(newTodo)
    setEditedItem({})
    setEdit(false)
  }

  function cancelEdit () {
    setEditedItem({})
    setEdit(false)
  }

  function handleEditKeyDown(event) {
    if (event.keyCode === 13){
      event.preventDefault();
      saveEditedTodo();
    }
  }

  // TODO ЭФФЕКТЫ

  useEffect(() => {
    if (editedItem.id) {
      document.getElementById(`input-${editedItem.id}`).focus()
    }
  }, [edit])

  // TODO РЕНДЕРИНГ

  return (
    <div className='flex justify-center items-center'>
      <div className='text-center border-2 w-full container mx-32 py-10 shadow-2xl rounded-lg'>

        {todo.map( (item) => (
          <div key={item.id} className='flex justify-center items-center gap-1 mt-2 hover:scale-105 transition-all'>

            {edit && editedItem.id === item.id ? (
              
              <>
                <input
                  id={`input-${item.id}`}
                  type='text'
                  value={editedItem.title}
                  onChange={e => setEditedItem({...editedItem, title: e.target.value})}
                  className='border-2 border-black w-1/2 px-2 rounded-l-md text-2xl text-left hover:border-red-700'
                  onKeyDown={handleEditKeyDown} //Add press "Enter"
                />
                <input
                  type='date'
                  value={editedItem.date}
                  onChange={e => setEditedItem({...editedItem, date: e.target.value})}
                  className='border-2 border-black w-1/7 px-4 text-2xl text-left hover:border-red-700'
                  onKeyDown={handleEditKeyDown} //Add press "Enter"
                />
                <button
                  onClick={() => saveEditedTodo()}
                  className='border-2 border-black px-2 h-9 ml-1 bg-green-800 text-white text-2xl hover:border-red-700'
                ><FaSave></FaSave></button>
                <button
                  onClick={() => cancelEdit()}
                  className='border-2 border-black px-2 h-9 ml-1 bg-yellow-600 text-white rounded-r-md text-2xl hover:border-red-700'
                ><FaTimes></FaTimes></button>
              </>
            ) : (
              <>
                <div className={`border-2 border-black w-1/2 px-2 rounded-l-md text-2xl text-left hover:border-red-700 ${item.status ? 'line-through' : ''}`}>
                  {item.title}
                  </div>
                <div className='border-2 border-black w-1/7 px-4  text-2xl text-left hover:border-red-700'>{item.date}</div>
                
                <button
                  className='border-2 border-black px-2 ml-1 h-8 bg-red-800 text-white text-2xl hover:border-blue-700'
                  onClick={() => deletedTodo(item.id)}
                ><FaTrashAlt></FaTrashAlt></button>
                <button
                  className='border-2 border-black px-2 ml-1 h-8 bg-blue-800 text-white  text-2xl hover:border-red-700'
                  onClick={() => statusTodo(item.id)}
                ><FaCheck></FaCheck></button>
                <button
                  className='border-2 border-black px-2 ml-1 h-8 bg-yellow-600 text-white rounded-r-md text-2xl hover:border-red-700'
                  onClick={() => editTodo(item)}
                ><FaEdit></FaEdit></button>
              </>
            )}

          </div>
        ))}

      </div>
    </div>
  )
}
