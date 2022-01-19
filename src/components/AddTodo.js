import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';


function AddTodo({ addTodo }) {

    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault()
        if (!content) {
            toast({
                title: 'You must enter something...!',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return
        }
        const todo = {
            id: nanoid(),
            body: content
        }
        addTodo(todo)
        setContent('')
    }



    const [content, setContent] = useState('')
    return <form onSubmit={handleSubmit}>
        <HStack mt='8' mb='56'>
            <Input
                variant='flushed'
                placeholder='add here...'
                mr='4'
                value={content}
                onChange={(e) => setContent(e.target.value)} />
            <Button
                bgGradient='black'
                px='8'
                type='submit'>
                Add Task
            </Button>
        </HStack>
    </form>
}

export default AddTodo;
