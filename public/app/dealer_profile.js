
let userid;
$(()=>{

    console.log(sessionStorage.user)
    getid(sessionStorage.user);

    // console.log(userid)
    $('#add_product').click(()=>{
        $('#content').load('html/add_product.html')
    })
})


async function getid(username){
    $.get(`/dealer/${username}`,(data)=>{
        console.log(data);
        userid=data[0].id;
        console.log(userid)
        $.get(`/product/${userid}`,(product)=>{
            let a=0;
            for(p of product){
                a++;
               $('#product_items').append(`
               <div class="row items">
                        <div
                            class="col-md-1 border text-center  d-flex align-items-center justify-content-center border-primary">
                            ${a}
                        </div>
                        <div class="col-md-2 border d-flex align-items-center justify-content-center  border-primary">
                            <div class="p-1">
                                <img src="${p.image}" class="cart_image float-center" alt="">
                            </div>
                        </div>
                        <div class="col-md-5 border  d-flex align-items-center justify-content-center  border-primary">
                            <div>
                                <div class="text-center">${p.name.substr(0,40)}</div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <button class="btn btn-outline-warning remove"><span id="remove_text">Remove</span></button>
                                </div>
                            </div>

                        </div>
                        
                        <div
                            class="col-md-2 border text-center border-primary justify-content-center d-flex align-items-center">
                            ${p.quantity}
                        </div>
                        <div
                            class="col-md-2 border text-center border-primary justify-content-center d-flex align-items-center">
                            Rs.${p.price} /-
                        </div>
                    </div>
               `) 
            }
        })
        return data;
    })
}