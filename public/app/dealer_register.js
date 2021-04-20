$(()=>{
    $('#loginn').click(()=>{
        console.log('login clicked')
        $('#content').load('html/dealer_login.html')
    })
})