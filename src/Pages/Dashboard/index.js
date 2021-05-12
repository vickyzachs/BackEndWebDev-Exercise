import React, { useState, useEffect } from "react";
import firebase from '../../Config/firebase';

const Dashboard = () => {

    const [productName, setProductName] = useState ("");
    const [category, setCategory] = useState ("");
    const [price, setPrice] = useState ("");

    const [product, setProduct] = useState ([]);

    const [button, setButton] = useState("save");
    const [selectProduct, setSelectProduct] = useState ({});

    useEffect(() => {
        firebase
        .database()
        .ref("products")
        .on("value", (res) => {
            if (res.val()) {
                //change to array object
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map(item => {
                    //console.log(item) //testing
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    });
                });
                // console.log(productArr); //testing
                setProduct(productArr);
            }
        });
    }, []);

    const resetForm = () => {
        setProductName ("");
        setCategory ("");
        setPrice ("");
        setButton("Save")
        setSelectProduct("")
    };

    const onSubmit = () => {
        const data = {
            productName: productName,
            category: category,
            price: price,
        };
        if(button=== 'save'){
            firebase.database().ref("products").push(data)
        }else{
            firebase.database().ref(`products/${selectProduct.id}`).set(data);
        }
        
        resetForm();
    };

    const onUpdateData = (item) => {
        setProductName(item.productName)
        setCategory(item.category)
        setPrice(item.price)
        setButton("Update")
        setSelectProduct(item)

    }
    
    const onDeleteData = (item) => {
        firebase.database().ref(`products/${item.id}`).remove();
    }

    return (
            <div clasName="container mt-5">
            <h3>Dashboard</h3>
            <hr />
            <div className="col-6">
            <p>product Name</p>
            <input 
                className="form-control" 
                placeholder="Type your product name" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)}/>
            <p> Category</p>
            <input 
                className="form-control" 
                placeholder="Type the category" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}/>
            <p>Price</p>
            <input 
                className="form-control" 
                placeholder="Type the price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}/>
            <br /> 
            <button className="btn btn-primary" onClick={onSubmit}>{button}</button>
            {
                button === 'Update' && (
                    <button className="btn btn-secondary" onClick={resetForm}>Cancel</button>
                )
            }
            </div>
            <hr />
            <table class="table table-striped table-hover"> 
                <thead>
                    <tr> 
                        <th>product Name</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(item => (
                            <tr key={item.id}> 
                                <td>{item.productName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => onUpdateData(item)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => onDeleteData(item)}>remove</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
    );
};

export default Dashboard;