
$(()=>{
    $('#register').click(()=>{
        console.log('registed clicked')
        $('#content').load('html/Register.html')
    })
    $('.social').click(()=>{
        $('#content').load('html/Register.html')
        window.alert('Please Register')
    })
    $('#logg').click(()=>{
        let username=$('#username').val();
        let password=$('#password').val();
        $.post('/user/login',{
            username,password
        },(data)=>{
           
            if(data.Error){
                window.alert(`${data.Error}`)
            }
            else{
                window.alert('login Successfully')
                
                $('#user_login').empty()
                $('#content').load('html/cart.html')
                $('#user_login').append(`
                </div><button class="btn btn-outline-primary " id="logout">Logout</button>
                `)
                activelogout();
            }
        })
        console.log('loggg clicked')
    })


})

