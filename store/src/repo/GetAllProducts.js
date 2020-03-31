const GetAllProducts = async () => {
    const uri = `http://localhost:3001/api/products/`;
    let result;

    await fetch(uri).then(res =>{
        result = res.json();
    });

    return result;
}

export default GetAllProducts;