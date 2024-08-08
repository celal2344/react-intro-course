import { useParams } from 'react-router-dom'
import { products } from '../data/products.json'
import Product from '../components/Product'
function ProductDetails() {
    const { id } = useParams()
    return (
        <div>
            {
                products && products.map(product => {
                    if (product.id === parseInt(id)) {
                        return <Product key={product.id} product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails