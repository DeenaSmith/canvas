import React from 'react';
// import { Container } from 'react-bootstrap'

function Home(props) {
    const {
        categories=[],
        setCurrentCategory,
        currentCategory,
    } = props

    return (
        <>
            <div>
                <label htmlFor='styles'>
                    Choose a style
                </label>
                <select id='styles'>
                    {categories.map((category) =>(
                        <option
                        className={`mx-1 ${currentCategory.name === category.name}`}
                        key={category.name}
                        >
                            <span
                            onClick={() => {
                                setCurrentCategory(category)
                            }}
                            >
                                {(category.name)}
                            </span>
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Home;