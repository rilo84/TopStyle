const GetProduct = async (id) => {
    const uri = `http://localhost:3001/api/products/id=${id}`;
    let result;

    await fetch(uri).then(res =>{
        result = res.json();
    });

    return result;
}

export default GetProduct;