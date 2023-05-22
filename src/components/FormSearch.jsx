
import React, { useState } from 'react';
import searchIcon from '../search.svg';

const FormSearch = (props) => {
    const [search, setSearch] = useState('');

    return (
        <>
            <h1>Film Flex</h1>
            <div className='search'>
                <input
                type='text'
                placeholder='Search a movie'
                onChange={(e) => { setSearch(e.target.value) }}
                value={search}
                />
                <img
                src={searchIcon}
                onClick={() => props.getMovie(search) }
                />
            </div>
        </>
    )
}

export default FormSearch;