import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import FormButton from './FormButton'
import { yupResolver } from '@hookform/resolvers/yup'
import BasicTextFields from './BasicTextFields'

const Form = ({ children = React.ReactNode, className, schema, onSubmit }) => {
  const methods = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: 'onSubmit',
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.input = BasicTextFields
Form.button = FormButton

export default Form
