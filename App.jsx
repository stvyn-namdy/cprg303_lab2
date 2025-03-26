import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import TodoList from './ToDoList'
import TodoForm from './ToDoForm'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    //Prevent adding empty tasks
    if (taskText.trim() === '') return;

    //Prevent adding duplicate taskss
    if (!tasks.includes(taskText.trim())) {
      setTasks([...tasks, taskText.trim()]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TodoList tasks={tasks} />
      <TodoForm addTask={addTask} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
})

export default App;