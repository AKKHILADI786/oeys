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
                    <div class="btn btn-primary" id="add_cart">add product</div>
                </div>
                
            </div>

        </div>
    </div>
            `)
    })
    // console.log('add button clicked')
})