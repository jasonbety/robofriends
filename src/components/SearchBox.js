import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba bg-lightest-blue b--green'
                type='search'
                placeholder='search box'
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;