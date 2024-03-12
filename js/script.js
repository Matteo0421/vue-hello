const { createApp } = Vue;

// scrivere tutto il codice dentro a createapp
createApp({

  // scrivere tutte le nostre variabili dentro Data
  data(){
    return{

      messaggio: 'Ciaoooo, primo giorno con Vue.jssss',
      img: './img/01.webp',

      lista : [
        {
          alunno: 'Matteo',
          eta : 20,
          sesso : 'maschio',
        },
        {
          alunno: 'Mart',
          eta : 20,
          sesso : 'femmina',
        },
        {
          alunno: 'Ciro',
          eta : 20,
          sesso : 'maschio',
        },
        {
          alunno: 'Lisa',
          eta : 24,
          sesso : 'femmina',
        }
      ],

      ora: '',

      isOpaca: false,
    }

    
  },

  // si scrivono tutte le funzioni
  methods:{

    orologio(){
      const d = new Date();
      const ora = d.getHours() < 10 ? '0'+ d.getHours() : d.getHours();
      const minuto = d.getMinutes() < 10 ? '0'+ d.getMinutes() : d.getMinutes();
      const secondo = d.getSeconds() < 10 ? '0'+ d.getSeconds() : d.getSeconds();
      this.ora=`${ora} : ${minuto} : ${secondo}`
    },

    aggiornaOra(){
      setInterval(() =>{
        this.orologio()
      },1000)
    },

    opacity(){

    }
  },

  mounted(){
    this.orologio();
    this.aggiornaOra();
  }

}).mount('#app');