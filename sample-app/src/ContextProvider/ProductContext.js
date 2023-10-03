import { useState,createContext } from 'react';


const Products=
    [{"id":1,
        "name":"John",
        "price":2,
    "cars":["Ford", "BMW", "Fiat"]},
    {"id":2,"name":"John2", "price":3,
    "cars":["Ford1", "BMW1", "Fiat3"]},
    {"id":3,"name":"John4", "price":4,
    "cars":["Ford3", "BMW4", "Fiat6"]}

]
    


export const ProductContext = createContext({
   products:[],
});

export const ProductProvider =({children})=>{
    const [products, setProduct] = useState(Products)
    const value={products}
    //console.log(products)
    
    return<ProductContext.Provider value={value} >{children}</ProductContext.Provider>
};