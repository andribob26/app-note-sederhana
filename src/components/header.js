import React from 'react'

const Header = ({ searchNote }) => {
    const searchHandler = (e)=>{
        let value= e.target.value
        searchNote(value)
    }
    return (
        <header>
            <h1>Notes</h1>
            <div className='search'>
                <label htmlFor='search' className='icon-search'>
                    <svg
                        className='svg-icon search-icon'
                        aria-labelledby='title desc'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 19.9 19.7'
                    >
                        <title id='title'>Search Icon</title>
                        <desc id='desc'>A magnifying glass icon.</desc>
                        <g className='search-path' fill='none' stroke='#848F91'>
                            <path strokeLinecap='square' d='M18.5 18.3l-5.4-5.4' />
                            <circle cx='8' cy='8' r='7' />
                        </g>
                    </svg>
                </label>
                <input onChange={searchHandler} id='search' type='text' placeholder='Cari catatan...' />
            </div>
        </header>
    )
}

export default Header
