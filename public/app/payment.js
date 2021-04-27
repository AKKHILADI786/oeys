$(()=>{
    console.log(cart_product_items)
    console.log(window.localStorage.shopifyuser)

    $('#place_order').click(()=>{
        for(p of cart_product_items){
            $.post('/order',{
                userId:window.localStorage.shopifyuser,
                productId:p.productId,
                dealerId:p.dealerId
            })
        }
        $.post('/cart/u',{
            userId:window.localStorage.shopifyuser
        })
        window.alert('Your order is placed sucessfully')
        location.reload('index.html')
        
    })
})