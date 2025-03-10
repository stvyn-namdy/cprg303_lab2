import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import TodoList from './ToDoList'
import TodoForm from './ToDoForm'

function App() {
  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to Gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <TodoList tasks={tasks} />
      <TodoForm />
    </SafeAreaView>
  )
}

export default App;