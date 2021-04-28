// const { vue } = require("laravel-mix");

function headerVue() {
    new Vue({
        el: '#headerVue',
        data: {
            scroll: 0,
            hamActive: false,
            links: [
                {
                    name: 'Home',
                    href: 'index.html',
                    active: true
                },
                {
                    name: 'Meet The Band',
                    href: '#',
                    active: false
                },
                {
                    name: 'Live Dates',
                    href: '#',
                    active: false
                },
                {
                    name: 'Latest News',
                    href: '#',
                    active: false
                },
                {
                    name: 'Albums',
                    href: '#',
                    active: false
                },
                {
                    name: 'Fans',
                    href: '#',
                    active: false
                },
            ],
            linkActive: false,
            linkIndex: -1
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
            }
        },
        destroyed: function() {
            window.removeEventListener('scroll', this.scrolledHead);
        }
    });
}

function init() {
    console.log('JS Connected');
    headerVue();
}

document.addEventListener('DOMContentLoaded', init);