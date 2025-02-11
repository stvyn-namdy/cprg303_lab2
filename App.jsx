import React from 'react'
import { SafeAreaView } from 'react-native'
import TodoList from './ToDoList'
import TodoForm from './ToDoForm'

function App() {
  return (
    <SafeAreaView>
      <TodoList />
      <TodoForm />
    </SafeAreaView>
  )
}