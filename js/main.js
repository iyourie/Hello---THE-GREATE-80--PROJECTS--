//create an array
let arr = []
//create an asyc func to call the api
async function get() {
    //call the api ip-api
    let res = await fetch('http://ip-api.com/json/?fields=status,query')
    let data = await res.json()
    //put user ip in the array
    arr.push(Object.values(data))
    //call the api hello salut
    let resp = await fetch(` https://fourtonfish.com/hellosalut/?ip=${arr[0][1]}`)
    let data2 = await resp.json()

    //when user clicks 'click me' button the h1 says hi in his language depends on his ip + user you logged in
    document.querySelector('button').onclick = () => {
        document.querySelector('h1').innerHTML = `${data2.hello} user you successfully logged in`
    }
}
//call the func
get()

