import PropTypes from "prop-types";
import { ProductTable } from "./components/ProductTable.jsx";
import { useEffect, useState } from 'react';
import { ProductForm } from "./components/ProductForm.jsx";
import { create, findAll, remove, update } from "./Services/ProductServices.js";


// const initProducts= [{
//     id:1,
//     name: 'Monitor Asus 37 pulgadas',
//     description: 'El mejor monitor para juegos',
//     price:1000
// },{
//     id:2,
//     name: 'Iphone16 pro',
//     description: 'El telefono es excelente e incluye apple Intelligence',
//     price:1600
// }
// ];


export const ProductApp=({title='Default'})=>{
    const [products,setProducts] = useState([]);
    const [productSelected,setProductSelected] = useState({
        id:0,
        name:'',
        description:'',
        price:0

    });
    const getProducts=async () => {
        const result = await findAll();
        setProducts(result.data);
        
    }
    useEffect(() => {
        getProducts();
        console.log('cargando la pagina ...')
        
    }, []);

    const handlerAddProduct = async(product) =>{
        if(product.id > 0){
            const response = await update(product);
            // Update existing product
            setProducts(
                products.map(prod=>{
                    if(prod.id === product.id){
                        return {...response.data};
                    }
                    return prod;
                })
            )
        }else{
            // Add new product
            const response = await create(product);
            setProducts([...products,{...response.data}]);
        }

    }
    const handlerProductSelected =(product)=>{
        setProductSelected({...product});
    }
    const handlerDeleteProduct= async(id)=>{
        await remove(id);
        setProducts(products.filter(product => product.id !== id));
    }
    return <div className='container my-4'>
        <h2>{title}</h2>
        <div className="row">
            <div className="col">
                <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
            </div>
            <div className="col">
                {
                (products.length > 0)? <ProductTable products ={products} 
                handlerProductSelected={handlerProductSelected} 
                handlerDeleteProduct={handlerDeleteProduct} ></ProductTable> : 
                <div className="alert alert-warning"> no hay productos en el sistema!</div>
                }
                
            </div>


        </div>
    </div>
}
ProductApp.propTypes = {
    title: PropTypes.string.isRequired
};
