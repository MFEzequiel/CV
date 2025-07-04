import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { cl } from '../util/loggers'
import { CustomInput } from "./CustomInput"

const scheme = z.object({
  email: z.string().email('Correo Invalido').min(1, 'El correo es obligatorio')
})

type formValue = z.infer<typeof scheme>

export function Contacto () {
  const { control, handleSubmit, formState: {errors} } = useForm<formValue>({
    resolver: zodResolver(scheme)
  })

  const onSubmit: SubmitHandler<formValue> = () => {
    cl('submin')
  }

  return (
    <section id="contact" className='main__section contact'>
      <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
        <CustomInput name="email" control={control} label="email" type="email" error={errors.email} placeholder={'example@gmail.com'} />
        <label htmlFor="message" className="form__label">
          Mensaje
          <textarea name="message" cols={30} rows={10} className="contact__input" placeholder="Mensaje" ></textarea>
        </label>
        <button className="contact__button" type="submit">Enviar</button>
      </form>
      <address className="contact__address">
      </address>
    </section>
  )
}
