import products from './products.png'
function ProductsPage() {
    return (
        <div>
            <h1>Our Products</h1>
            <ul>
                <li>Web Development Framework</li>
                <li>Mobile App Framework</li>
                <li>UI/UX Design Kit</li>
                <li>SEO Tool</li>
            </ul>
            <img src={products} alt="products" width={400}/>
        </div>
    );
}
export default ProductsPage