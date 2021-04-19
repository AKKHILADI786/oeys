$(()=>{
    $('#login').click(()=>{
        console.log('btn clicked')

        $('#content').empty()
        $('#footer_box').empty()



        $('#content').load('html/add_product.html')
    })



})
console.log('js connected')