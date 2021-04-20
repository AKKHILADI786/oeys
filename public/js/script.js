$(()=>{

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

    $('#login').click(()=>{
        console.log('btn clicked')

        $('#content').empty()
        $('#footer_box').empty()



        $('#content').load('html/login.html')
    })



})
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