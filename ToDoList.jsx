/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';


function TodoList({ tasks }) {
  return (
      <ScrollView style={styles.container}>
        {tasks.map((task, index) => (
          <Pressable key={index} style={styles.taskWrapper}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
  },
  taskWrapper: {
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 18,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2 
  },
  task: {
    padding: 15,
    borderBottomWidth: 4,
    borderColor: '#4a90e2',
  },
  taskText: {
    fontsize: 16,
    color: '#333'
  },
  completed: {
    backgroundColor: '#e0e0e0',
  }
});

export default TodoList;
