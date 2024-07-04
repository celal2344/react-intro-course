import React from 'react'

function Product(props) {
    return (
        <>
            <div>
                <div>Product Name: {props.productName}</div>
                <div>Price: {props.price}tl</div>
            </div>
        </>
    )
}

export default Product