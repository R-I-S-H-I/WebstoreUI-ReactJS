import React from 'react'
import ProductList from './ProductList'
import products from './products.js';

const Results = () =>{
    return(
        <div>
            <h2 className="subheading">Results</h2>
            <section className="results">
                {products.map((product)=>{
                    return(
                        <ProductList key={product.prodName} {...product}/>
                    )
                })}
            </section>
        </div>
    );
}

export default Results