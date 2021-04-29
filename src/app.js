// const { vue } = require("laravel-mix");
function vueApp() {
    new Vue({
        el: '#app',
        data: {
            scroll: 0, // Valore scroll pagina in px 
            hamActive: false, // Menu hambuger attivo
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
            ], // Links navigazione header/footer
            linkActive: false, // Link attivo colore acceso
            nextEvents: [
                {
                    name:'GEM FESTIVAL',
                    location: 'MILANO, ITALY',
                    date: '17/08/2020',
                    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.302852444415!2d9.188518115464268!3d45.46370284149783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ae939351df%3A0xd445dec2978d0e3f!2sP.za%20del%20Duomo%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1619614201462!5m2!1sit!2sit',
                    active: false
                },
                {
                    name:'RTL FESTIVAL',
                    location: 'ROMA, ITALY',
                    date: '20/10/2020',
                    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16799.48475083984!2d12.473102626533793!3d41.8980742770497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x724bf077cd875283!2sBasilica%20di%20San%20Pietro!5e0!3m2!1sit!2sit!4v1619617024653!5m2!1sit!2sit',
                    active: false
                },
                {
                    name:'DIS PARTY',
                    location: 'LAS VEGAS, NEVADA, USA',
                    date: '10/09/2021',
                    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9101.17557937825!2d-115.14973825047979!3d36.2455304724691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d7b8fb87bac778c!2sCraig%20Ranch%20Dog%20Park!5e0!3m2!1sit!2sit!4v1619617856491!5m2!1sit!2sit',
                    active: false
                },
                {
                    name:'KINGS DAY',
                    location: 'AMSTERDAM, NETHERLANDS',
                    date: '11/11/2021',
                    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.852290379783!2d4.890912565685745!3d52.373098304858246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c73b4b14ef%3A0x7e86dfc7e2ced272!2sDam%2C%20Amsterdam%2C%20Paesi%20Bassi!5e0!3m2!1sit!2sit!4v1619619683260!5m2!1sit!2sit',
                    active: false
                },
                {
                    name:'CORRIDA GGS',
                    location: 'BARCELONA, SPAIN',
                    date: '10/07/2021',
                    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16929.135687378814!2d2.1610096169375628!3d41.40282781902784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sSagrada%20Fam%C3%ADlia!5e0!3m2!1sit!2sit!4v1619621211797!5m2!1sit!2sit',
                    active: false
                }
            ], // lista objs evento (caratteristiche + map position)
            rightsList: [
                {
                    name: 'Copyright 1997-2021',
                    link: ''
                },
                {
                    name: 'WEBSITE THEME BY',
                    link: 'NOT.MARTINO'
                },
                {
                    name: 'ALL RIGHTS RESERVED',
                    link: ''
                },
                {
                    name: 'POWERED BY',
                    link: 'NOT.MARTINO'
                }
            ], // Lista diritti, links developer
            socialsList: [
                { 
                    class:'facebook-f',
                    name: 'Facebook'
                },
                { 
                    class:'twitter',
                    name: 'Twitter'
                },
                { 
                    class:'instagram',
                    name: 'Instagram'
                },
                { 
                    class:'youtube',
                    name: 'Youtube'
                }
            ], // Links social
        },
        created: function() {
            // Ascoltatore scroll su finestra
            window.addEventListener('scroll', this.scrolledHead);
        },
        methods:{
            // Allo scroll assegno il valore in px
            scrolledHead: function() {
                this.scroll = window.scrollY;
            },
            // Attivo/disattivo hamburger menu
            hamburgerActive: function () {
                this.hamActive = !this.hamActive;
            },
            // Funzione apertura paragrafo evento
            openEvent: function (index) {
                // Se l'evento aperto è uguale a sè stesso lo chiudo
                if (this.nextEvents[index].active == true) {
                    this.nextEvents[index].active = false;
                }
                // Altrimenti se non è gia aperto chiudo gli altri e apro l'evento cliccato
                else{
                    this.nextEvents.forEach(element => {
                        element.active = false;
                    });
                    this.nextEvents[index].active = true;
                }
                console.log(this.nextEvents);
            }
        },
        destroyed: function() {
            window.removeEventListener('scroll', this.scrolledHead);
        }
    });
}

function init() {
    console.log('JS Connected');
    vueApp();
}

document.addEventListener('DOMContentLoaded', init);