$(() => {

    $('#loginn').click(()=>{
        console.log('login clicked')
        $('#content').load('html/login.html')
    })

    $('#signin').click(() => {
        let password = $('#password').val();
        let p1 = $('#password1').val();
        if (password != p1) {
            window.alert('Password Not match');
        }
        else {
            let name = $('#first').val() + ' ' + $('#last').val();
            let email = $('#email').val();
            let username = $('#username').val();
            let phone = $('#phone').val();
            let address = $('#Address').val() + ' ' + $('#Address2').val();
            let city = $('#City').val();
            let state = $('#State').val();
            let pincode = $('#Zip').val();
            $.get(`/user/${username}`,(data)=>{
                if(!(Object.keys(data).length === 0)){
                    window.alert('This username alredy exits')
                }
                else{
                    $.post('/user',{
                        name,email,password,phone,address,pincode,city,state,username
                    },(data)=>{
                        console.log(data)
                        window.alert(`The account for ${data.username} is created`)
                    })
                }
            })
            
        }


        console.log('signin clicked')
    })

    
})
