// const { vue } = require("laravel-mix");

function headerVue() {
    new Vue({
        el: '#headerVue',
        data: {
            scroll: 0,
            hamActive: false
        },
        created: function() {
            window.addEventListener('scroll', this.scrolledHead);
        },
        computed:{

        },
        methods:{
            scrolledHead: function() {
                this.scroll = window.scrollY;
            },
            hamburgerActive: function () {
                this.hamActive = !this.hamActive;
                if (this.hamActive) {
                    console.log('Clicked');
                }else{
                    console.log('DISABLE');
                }
            }
        },
        destroyed: function() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    });
}

function init() {
    console.log('JS Connected');
    headerVue();
}

document.addEventListener('DOMContentLoaded', init);