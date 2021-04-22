
$(()=>{
    $('#register').click(()=>{
        console.log('registed clicked')
        $('#content').load('html/dealer_register.html')
    })
    $('.social').click(()=>{
        $('#content').load('html/dealer_register.html')
        window.alert('Please Register')
    })
    $('#logg').click(()=>{
        let username=$('#username').val();
        let password=$('#password').val();
        $.post('/dealer/login',{
            username,password
        },(data)=>{
           
            if(data.Error){
                window.alert(`${data.Error}`)
            }
            else{
                window.alert('login Successfully')
                
                $('#user_login').empty()
                $('#content').load('html/dealer_profile.html')
                $('#user_login').append(`
                </div><button class="btn btn-outline-primary " id="logout">Logout</button>
                `)
                window.sessionStorage.user=username;
                activelogout();
            }
        })
        console.log('loggg clicked')
    })


})

