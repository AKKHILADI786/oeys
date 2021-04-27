$(()=>{
    let a=JSON.parse(window.localStorage.shopifyuser)
    $.get(`/cart/${a}`,(data)=>{
        let total_price=0;
        let c=0;
        for(p of data){
            c++;
            console.log(p)
            let price=parseInt(p.product.price);
            total_price+=price;

            $('#cart-item').append(`
        <div class="row items" id="cart_item_${p.product.id}">
                        <div
                            class="col-md-1 border text-center  d-flex align-items-center justify-content-center border-primary">
                            ${c}
                        </div>
                        <div class="col-md-2 border d-flex align-items-center justify-content-center  border-primary">
                            <div class="p-1">
                                <img src="${p.product.image}" class="cart_image float-center" alt="">
                            </div>
                        </div>
                        <div class="col-md-3 border  d-flex align-items-center justify-content-center  border-primary">
                            <div>
                                <div class="text-center">${p.product.name}</div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <button class="btn btn-outline-warning remove" onclick=delele(${p.product.id})><span id="remove_text">Remove</span></button>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-2 border  d-flex align-items-center justify-content-center border-primary">
                            <input type="number" id="Quantity" value="1">
                        </div>
                        <div
                            class="col-md-2 border text-center border-primary justify-content-center d-flex align-items-center">
                            ${p.product.price} /-
                        </div>
                        <div
                            class="col-md-2 border text-center  d-flex justify-content-center align-items-center border-primary">
                            ${p.product.price} /-
                        </div>
                    </div>
        `)
        }
        $('#subtotal').text(`${total_price}`)
        let tax=total_price*0.1;
        $('#tax').text(`${tax}`)
        let total_p=tax+total_price;
        $('#total').text(`${total_p}`)



        
    })
})

function delele(name){
    console.log(name)
    $(`#cart_item_${name}`).empty()
    $.post('/cart/d',{
        productId:name
    },(data)=>{
        console.log(data,'is deleted')
    })
}
$('#continue_shoping').click(()=>{
    location.reload('index.html')
})