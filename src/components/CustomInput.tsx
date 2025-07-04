import { Control, Controller, FieldError } from 'react-hook-form'

interface Props {
  name: string,
  control: Control<any>,
  label: string,
  type: string,
  error?: FieldError,
  placeholder: string
}

export function CustomInput({ name, control, label, type, error, placeholder }: Props) {
  return (
    <label htmlFor={name} className="form__label">
      {label}
      <Controller
       name={name}
       control={control}
       render={ ({field}) =>
        <input
         type={type}
         required
         {...field}
         placeholder={placeholder}
         className={`contact__input ${name ? 'is__invalid' : ''}`} /> }
      />  
      {error && <p className="erro" >{error.message}</p>}
    </label>
  )
}
