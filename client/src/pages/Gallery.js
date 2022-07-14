import React from "react";
import Photolist from "./Photos";

function Gallery(props) {
    const { currentCategory } = props
    return (
        <>
        <section>
            <Photolist category={currentCategory.name} />
        </section>
        </>
    )
}

export default Gallery;