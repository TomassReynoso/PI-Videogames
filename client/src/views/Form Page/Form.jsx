import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Form.css'
import { getGames, postGames } from '../../redux/actions/actions';

const Form = () => {

    const dispatch = useDispatch();
    const getGenres = useSelector((state) => state.genres)

    const [input, setInput] = useState({
        name: "",
        description: "",
        platforms: "",
        released: "",
        rating: "",
        genres: [],
    })

    const [errors, setErrors] = useState({
        name: "El Nombre es requerido",
        description: "La Descripción es requerida",
        platforms: "La Plataforma es requerida",
        released: "La Fecha de lanzamiento es requerida",
        rating: "El Rating es requerido"
    })

    // useEffect(() => {
    //     dispatch(getGenres())
    // }, []);

    const validate = (input, name) => {
        if (name === "name") {
            if (input.name !== "") setErrors({ ...errors, name: "" })
            else setErrors({ ...errors, name: "El Nombre es requerido" })
        }
        if (name === "description") {
            if (input.description !== "") setErrors({ ...errors, description: "" })
            else setErrors({ ...errors, description: "La Descripción es requerida" })
        }
        if (name === "platforms") {
            if (input.platforms !== "") setErrors({ ...errors, platforms: "" })
            else setErrors({ ...errors, platforms: "La Plataforma es requerida" })
        }
        if (name === "released") {
            if (input.released !== "") setErrors({ ...errors, released: "" })
            else setErrors({ ...errors, released: "La Fecha de lanzamiento es requerida" })
        }
        if (name === "rating") {
            if (input.rating !== "") setErrors({ ...errors, rating: "" })
            else setErrors({ ...errors, rating: "El Rating es requerido" })
        }
    }

    const buttonDisabled = () => {
        let disabled = true;
        for (let error in errors) {
            if (errors[error] === "") disabled = false;
            else {
                disabled = true;
                break;
            }
        }
        return disabled;
    }

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        validate({
            ...input,
            [event.target.name]: event.target.value
        }, event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault();                            // No se actualice la página
        dispatch(postGames(input))
            .then(() => {
                dispatch(getGames())
            })
    }

    return (
        <div className='form-cont'>
            <form onSubmit={handleSubmit}>
                {console.log(errors)}
                <div className='form-input'>
                    <label>Name:</label>
                    <input name='name' onChange={handleChange} type="text" />
                    <span>{errors.name}</span>
                </div>
                <div className='form-input'>
                    <label>Description:</label>
                    <input name='description' onChange={handleChange} type="text" />
                    <span>{errors.description}</span>
                </div>
                <div className='form-input'>
                    <label>Platforms:</label>
                    <input name='platforms' onChange={handleChange} type="text" />
                    <span>{errors.platforms}</span>
                </div>
                <div className='form-input'>
                    <label>Released:</label>
                    <input name='released' onChange={handleChange} type="text" />
                    <span>{errors.released}</span>
                </div>
                <div className='form-input'>
                    <label>Rating:</label>
                    <input name='rating' onChange={handleChange} type="text" />
                    <span>{errors.rating}</span>
                </div>
                <input disabled={buttonDisabled()} type="submit" />
            </form>
        </div>
    )
}

export default Form