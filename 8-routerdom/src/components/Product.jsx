import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, name, price } = product
    console.log(product)
    const navigate = useNavigate();
    return (
        <div>
            {
                product && (
                    <div>
                        <h3>{name}</h3>
                        <p>{price}</p>
                        <button onClick={() => navigate("/product-details/" + id)}>detay</button>
                    </div>
                )
            }
        </div>
    )
}

export default Product