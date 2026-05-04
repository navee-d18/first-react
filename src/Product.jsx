import './Product.css';
import Price from './Price';

function Product({title , idx}){
    let oldPrice = [100, 200, 300, 400];
    let newPrice = [80, 150, 250, 350];
    let description = [["High-quality mechanical keyboard", "Durable and responsive keys"], ["Ergonomic wireless mouse", "Comfortable grip and precise tracking"], ["Powerful laptop for work and play", "High-performance processor and graphics"], ["Immersive sound experience", "Surround sound for enhanced audio"]];
    return (
        <div className="product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;