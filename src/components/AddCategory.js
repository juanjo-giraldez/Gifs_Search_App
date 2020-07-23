import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {



    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setCategories(e => [ inputValue,...e])
            setInputValue('');
        };

    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Buscador de Gifs"
            />
        </form>

    )

}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}