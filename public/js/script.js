$(()=>{
    $('#login').click(()=>{
        console.log('btn clicked')

        $('#content').empty()
        $('#footer_box').empty()



        $('#content').load('html/cart.html')
    })



})
console.log('js connected')