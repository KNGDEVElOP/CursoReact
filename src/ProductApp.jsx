import PropTypes from "prop-types";
import { ProductTable } from "./components/ProductTable.jsx";
import { useEffect, useState } from 'react';
import { ProductForm } from "./components/ProductForm.jsx";


const initProducts= [{
    id:1,
    name: 'Monitor Asus 37 pulgadas',
    description: 'El mejor monitor para juegos',
    price:1000
},{
    id:2,
    name: 'Iphone16 pro',
    description: 'El telefono es excelente e incluye apple Intelligence',
    price:1600
}
];
export const ProductApp=({title='Default'})=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        setProducts(initProducts);
        console.log('Cargando la pagina')
    },[]);

    const handlerAddProduct =(product) =>{
        setProducts([...products,{...product,id:Date.now()}]);
    }
    return <div className='container my-4'>
        <h2>{title}</h2>
        <div className="row">
            <div className="col">
                <ProductForm handlerAdd={handlerAddProduct} />
            </div>
            <div className="col">
                <ProductTable products ={products}></ProductTable>
            </div>


        </div>
    </div>
}
ProductApp.propTypes = {
    title: PropTypes.string.isRequired
};



