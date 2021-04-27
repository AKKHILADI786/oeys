$(() => {
    console.log('new js connected')
    let proId = window.sessionStorage.productId;
    $.get(`/product/p/${proId}`, (data) => {
        console.log(data);
        let p = data;
        $('#content').empty();
        $('#content').append(`
            <div class="row m-3 border border-primary p-3">
        <div class="col-5">
            <img src="${p.image}" alt="images">
        </div>
        <div class="col-7">
            <div class="row">
                <h3>${p.name}</h3>
            </div>
            <div class="row">
                <h4>Price Rs.${p.price}/-</h4>
                <h6>Rating 🌟🌟🌟🌟🌟</h6>

            </div>
            <div class="row">
                <div class="col-10">
                   ${p.description}
                </div>
            </div>
            <div class="row"> 
                <div class="col-6">
                    <div class="btn btn-primary" id="add_to_cart">add product</div>
                </div>
                
            </div>

        </div>
    </div>
            `)

            enablecaart(data);
    })
   
    // console.log('add button clicked')
})

function enablecaart(product_data){
    $('#add_to_cart').click(()=>{
        console.log('add cart clicked')
        $.get('/user/islogin',(data)=>{
            if(data){
                let a=JSON.parse(window.localStorage.shopifyuser);
                let userId=a;
                let productId=product_data.id;
                let dealerId=product_data.dealerId;
                console.log(userId,productId,dealerId)
                $.post('/cart',{
                    userId,
                    productId,
                    dealerId
                },(data)=>{
                    $('#content').load('html/cart.html')
                    console.log('prouct is added')
                })
            }
            else{
                window.alert('please login first')
            }
        })
    })
}