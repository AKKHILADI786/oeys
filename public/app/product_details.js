$(() => {
    console.log('new js connected')
    let proId = window.sessionStorage.productId;
    $.get(`/product/p/${proId}`, (data) => {
        console.log(data);
        let p = data;
        $('#content').empty();
        $('#content').append(`
        <div class="containe container">
        <div class="d-flex justify-content-center h-100">
          <div class="car card">
            <div class="card-header">
              <h3>Product Data</h3>
             
            </div>
            <div class="card-body py-5">
              <div class="row">
                <div class="col-5 d-flex justify-content-center">
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
                    
                </div>
                </div>
              </div>
              
            </div>
            <div class="card-footer">
            <div class="col d-flex justify-content-center m-2">
            <div class="btn btn-warning" id="add_to_cart">Add To Cart</div>
            </div>
        
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