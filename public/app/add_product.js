$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 1000;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });
    


$(()=>{
    
    type.forEach(a => {
        $('#inputState').append(`
        <option value="${a}">${a}</option>
    `)
    });
    $('#subtype').click(()=>{
        console.log('subtype clicked')
        if($('#inputState').val()==""){
            window.alert('please select the type')
        }
        else{
            let t=$('#inputState').val();
            let data=type1[`${t}`]
            data.forEach(a => {
                $('#subtype').append(`
        <option value="${a}">${a}</option>
    `)
            });
        }
    })
    // $('#add').click(()=>{
    //     console.log('add clicked')
    //     $.post('/product',{})
    // })
    
})

let type=['electronics','mobile','appliances','men','women','sports','book']
let type1={'electronics':[
    'Smart Wearable Tech',
    'Smart Watches',
    'Smart Glasses (VR)',
    'Smart Bands',
    'Health Care Appliances',
    'Bp Monitors',
    'Weighing Scale',
    'Laptops',
    'Gaming Laptops',
    'Desktop PCs',
    'Gaming & Accessories',
    'Computer Accessories',
    'External Hard Disks',
    'Pendrives',
    'Laptop Skins & Decals',
    'Laptop Bags',
    'Mouse',
    'Computer Peripherals',
    'Printers & Ink Cartridges',
    'Monitors',
    'Tablets',
    'Apple iPads'
    ],'mobile':[
        'Mi',
        'Realme',
        'Samsung',
        'Infinix',
        'OPPO',
        'Apple',
        'Vivo',
        'Honor',
        'Asus',
        'Poco X2',
        'realme Narzo 10',
        'Infinix Hot 9',
        'IQOO 3',
        'iPhone SE',
        'Motorola razr',
        'realme Narzo 10A',
        'Motorola g8 power lite'
        ],'appliances':[
            'Irons',
            'Water Purifiers',
            'Fans',
            'Air Coolers',
            'Inverters',
            'Vacuum Cleaners',
            'Sewing Machines',
            'Voltage Stabilizers',
            'Water Geysers',
            'Immersion Rods',
            'Microwave Ovens',
            'Oven Toaster Grills (OTG)',
            'Juicer/Mixer/Grinder',
            'Electric Kettle',
            'Induction Cooktops',
            'Chimneys',
            'Hand Blenders',
            'Sandwich Makers',
            'Pop Up Toasters',
            'Electric Cookers',
            'Wet Grinders',
            'Food Processors',
            'Coffee Makers',
            'Dishwashers',
            'Healthy Living Appliances',
            'Refrigerators'
            ],'men':[
                'Clothing',
                'Top wear',
                'T-Shirts',
                'Formal Shirts',
                'Casual Shirts',
                'Bottom wear',
                'Jeans',
                'Casual Trousers',
                'Formal Trousers',
                'Track pants',
                'Shorts',
                'Cargos',
                'Three Fourths',
                'Suits, Blazers & Waistcoats',
                'Ties, Socks, Caps & More',
                'Fabrics',
                'Winter Wear',
                'Sweatshirts',
                'Jackets',
                'Sweater',
                'Tracksuits',
                'Ethnic wear',
                'Kurta',
                'Ethnic Sets',
                'Sherwanis',
                'Ethnic Pyjama',
                'Dhoti',
                'Lungi',
                'Innerwear & Loungewear',
                'Briefs & Trunks',
                'Vests',
                'Boxers',
                'Pyjamas and Lounge Pants',
                'Thermals',
                'Night Suits'
                ],'women':[
                    'Women Western & Maternity Wear',
                    'Topwear',
                    'Dresses',
                    'Jeans',
                    'Shorts',
                    'Skirts',
                    'Jeggings & Tights',
                    'Trousers & Capris',
                    'Lingerie & Sleepwear',
                    'Bras',
                    'Panties',
                    'Lingerie Sets',
                    'Night Dresses & Nighties',
                    'Shapewear',
                    'Camisoles & Slips',
                    'Swim & Beachwear',
                    'Party Dresses',
                    'Sports Wear',
                    'Winter Wear',
                    'Ethnic Wear',
                    'Sarees',
                    'Kurtas & Kurtis',
                    'Dress Material',
                    'Lehenga Choli',
                    'Blouse',
                    'Kurta Sets & Salwar Suits',
                    'Gowns',
                    'Dupattas',
                    'Ethnic Bottoms',
                    'Leggings & Churidars',
                    'Palazzos',
                    'Shararas',
                    'Salwars & Patiala',
                    'Dhoti Pants',
                    'Ethnic Trousers',
                    'Saree Shapewear & Petticoats'               
                    ],'sports':[
                        'Sports',
                        'Cricket',
                        'Badminton',
                        'Cycling',
                        'Football',
                        'Skating',
                        'Camping & Hiking',
                        'Swimming',
                        'Exercise Fitness',
                        'Cardio Equipment',
                        'Home Gyms',
                        'Support',
                        'Dumbbells',
                        'Ab Exercisers',
                        'Shakers & Sippers',
                        'Yoga Mat',
                        'Gym Gloves',
                        ],'book':[
                            'Entrance Exams',
                            'Academics',
                            'Literature & Fiction',
                            'Non Fiction',
                            'Young Readers',
                            'Self-Help',
                            'E-Learning',
                            'Preorders',
                            'Indian Languages',
                            'Stationery',
                            'Pens',
                            'Diaries',
                            'Card Holders',
                            'Desk Organizers',
                            'Calculators',
                            'Key Chains'
                            ]}

