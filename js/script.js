const { createApp } = Vue;

// scrivere tutto il codice dentro a createapp
createApp({

  // scrivere tutte le nostre variabili dentro Data
  data(){
    return{

      messaggio: 'Ciaoooo, primo giorno con Vue.jssss',
      img: './img/01.webp',

    }
  },

  // si scrivono tutte le funzioni
  methods:{

    // nomefunzione(){
    //   corpo funzione
    // }
  }

}).mount('#app');