import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// import PropTypes from 'prop-types'

export const GifExpertApp = props => {


    const [categories, setCategories] = useState(['One Punch']);//, 'Samurai X', 'Drangon Ball'

    // const handleAdd = () => { setCategories([...categories,'Avatar'] )}
    // const handleAdd = () => { setCategories(['Avatar',...categories] )}
    // const handleAdd = () => { setCategories(e =>[...e, 'HunterXHunter'] )}
    



return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory  setCategories={setCategories}/>
        <hr />
        {/* <button onClick={ handleAdd }>Agregar</button> */}

        <ol>
            {
                categories.map(e => <GifGrid key={e} category={e} />)
            }
        </ol>
    </>
)


        }

