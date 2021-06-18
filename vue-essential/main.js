const app = Vue.createApp({
    data () {
        return {
            brand: 'Wittupuu',
            coffee: 'Espresso',
            message: 'Espresso is awesome!',
            img: './resource/espresso1.jpg',
            imgSize: {
                width: '350px',
                height: '400px',
            },
            onStock: true,
            selectedIndex: 0,
            coffeeList: [
                {
                    id: 001,
                    product: 'Espresso',
                    image: './resource/espresso1.jpg'
                },
                {
                    id: 002,
                    product: 'Espresso Macchiato',
                    image: './resource/espresso2.jpg'
                },
                {
                    id: 003,
                    product: 'Espresso Con Panna',
                    image: './resource/espresso3.jpg'
                }
            ],
            qty: 0,
        }
    },
    methods: {
        handleOrder() {
            //Link data() qty variable
            this.qty ++;
        },
        handleCancle() {
            this.qty = 0;
        },
        updateIndex(index) {
            this.selectedIndex = index;
        },
    },
    computed: { //Like a method but return new values
        title() {
            return `${this.brand} ${this.coffee}`
        },
        image() {
            return this.coffeeList[this.selectedIndex].image
        } 
        
    }
})