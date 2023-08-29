'use client'

import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

function AddPeople() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Box>
      <Box>Add People</Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel>Firstname</FormLabel>
          <Input
            id="firstname"
            placeholder="Enter a firstname"
            {...register('firstname', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>
            {errors.firstname && errors.firstname.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Lastname</FormLabel>
          <Input
            id="lastname"
            placeholder="Enter a lastname"
            {...register('lastname')}
          />
          <FormErrorMessage>
            {errors.lastname && errors.lastname.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} isLoading={isSubmitting} type="submit">
          Add
        </Button>
      </form>
    </Box>
  )
}

export default AddPeople
