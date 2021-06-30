import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea(props) {
  const { label, name, ...rest } = props
  return (
    <div className='mb-2'>
      <div>
      <label htmlFor={name}>{label}</label>
      </div>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea
