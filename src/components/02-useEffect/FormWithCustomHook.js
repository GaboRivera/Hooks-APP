import React from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })
    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            <hr></hr>
            <h1>useEffect with hook</h1>

            <div>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='******'
                    value={password}
                    onChange={handleInputChange}
                ></input>
            </div>
            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    )
}
