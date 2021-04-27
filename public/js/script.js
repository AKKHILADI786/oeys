$(()=>{
    $('#profile').click(()=>{
       console.log($('h2').data('aa'))
        $('#content').empty()
        $('#footer_box').empty()
        $('#content').load('html/payment.html')
    })



    $.get('/user/islogin',(data)=>{
        console.log('islogin clicked')
        if(data){
            
            $('#user_login').empty()
            $('#user_login').append(`
                </div><button class="btn btn-outline-primary " id="logout">Logout</button>
            `)
            activelogout();
        }
    })
    $('#cart').click(()=>{
        console.log('cart clicked')
        $('#footer_box').empty()

        $.get('/user/islogin',(data)=>{
            if(!data){
                window.alert('Please login first')
                $('#content').load('html/login.html')
            }
            else{
                $('#content').load('html/cart.html')
            }
        })
    })
    $('#login').click(()=>{
        console.log('btn clicked')

        $('#content').empty()
        $('#footer_box').empty()



        $('#content').load('html/login.html')
    })
    $('#dealer_login').click(()=>{
        
        console.log('btn clicked')
        $('#content').empty()
        $('#footer_box').empty()



        $('#content').load('html/dealer_login.html')
    })
    $('#dealer_register').click(()=>{
        console.log('btn clicked')
        $('#content').empty()
        $('#footer_box').empty()



        $('#content').load('html/dealer_register.html')
    })




})

function getinner(data){
    // for get the type of data
    window.sessionStorage.product=data.innerText;
    $('#content').empty()
    // $('#footer_box').empty()
    $('#content').load('html/products.html')
    
}

console.log('js connected')

async function activelogout(){
    $('#logout').click(()=>{
        console.log('logout clicked')
        $.get('/user/logout',()=>{
            window.alert('logout sucessfully')
            location.reload('index.html')
        })
    })
}