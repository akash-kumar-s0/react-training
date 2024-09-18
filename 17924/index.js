test = async() => {
    const res = await fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user')
    return res.json()
}

test()
    .then((data) => {
        result = data.find((val) => val.id==8)
        if(!result) throw '8 not found'
        console.log(result);
    })
    .catch((error) => console.log('Error : ' + error))