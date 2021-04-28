$(()=>{
    let pro=window.sessionStorage.product; // for types of products selected at main window
    console.log(pro)
    $.get(`/product/t/${pro}`,(data)=>{
        console.log(data);
        let a=0;
        if(data.length>0){
        $('#empty_col').empty();
        }
       for(p of data){
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
                   <div class="text-center">${p.name}<br>${p.description.substr(0,100)}...</div>
                   <div class="d-flex align-items-center justify-content-center">
                       <button class="btn btn-outline-warning remove" onclick="getproductid(this)" data-code="${p.id}"><span id="remove_text">Add</span></button>
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

})

function getproductid(aaa){
    console.log($(aaa).data('code'))
    window.sessionStorage.productId=$(aaa).data('code');
    window.open("/pro");
}