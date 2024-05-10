import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import api from '../../api';


const GetOneProduct = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        api.get("/products/1").then((response) => {
            setProduct(response.data);
        }).finally(console.log("termino"));
    }, []);


    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                    </tr>
            </tbody>
        </Table>
    );
}

export default GetOneProduct