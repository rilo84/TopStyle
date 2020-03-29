const GetProductCategory = async (category) => {
    const uri = `http://localhost:3001/api/products/cat=${category}`;
    let result;

    await fetch(uri).then(res =>{
        result = res.json();
    });

    return result;
}

export default GetProductCategory;