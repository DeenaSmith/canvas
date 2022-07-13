import React from "react";
import Photolist from "./Photos";

function Gallery(props) {
    const { currentCategory } = props
    return (
        <>
        <section>
            <h1>{(currentCategory.name)}</h1>
            <Photolist category={currentCategory.name}
            />
        </section>
        </>
    )
}

export default Gallery;