const currency = document.getElementById('inp');
   
const txt = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click',priceCurrency)

 async function priceCurrency()
{
    try{
        let res = await fetch(`https://api.binance.com/api/v1/ticker/price?symbol=${currency.value}USDT`)
        if(res.ok){
            let post = await res.json();
            console.log(post);
            txt.innerHTML = `symbol : ${post.symbol}   price : ${post.price}`;
        }else{
            throw Error(res.status)
        }
    }catch(err){
        console.log(err.message);
    }
    
}