import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import api from '../../api';


const AddNewProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.post("/products",
        {body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            })
        }
        ).then((response) => {
            setProducts(response.data);
        }).finally(console.log("termino"));
    }, []);


    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                {products?.map(product => (
                    <tr key={product.id}>
                        <td>{product.category}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default AddNewProduct