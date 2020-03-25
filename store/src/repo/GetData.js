const GetData = async () => {
    
    const uri = 'http://localhost:3001/api/products/cat=Jacka';
    let result;

    await fetch(uri).then(res =>{
        result = res.json();
    });

    return result;
}

export default GetData;