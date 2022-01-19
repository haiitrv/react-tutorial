import { Heading } from '@chakra-ui/react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'



function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'wake up'
    },
    {
      id: 2,
      body: 'eat'
    }
  ]

  const [todos, setTodos] = useState(
    () => (JSON.parse(localStorage.getItem('todos')) || [])
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id // return true -> we want to keep the element
    })
    setTodos(newTodos)
  }

  // the 'todo' parameter is taken from the 'AddTodo.js'
  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  const { colorMode, toggleColorMode } = useColorMode()


  return (
    /* 4 = 16px || 10 = 40px */
    <VStack p={10}>
      <Heading
        mb='16'
        mt='16'
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, gray.100, gray.400, gray.700)'
        bgClip='text'
      >Todo List</Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
    </VStack>
  )


}

export default App;
