var app = new Vue({
    el: '#app',
    data: {
      message: 'che svolta!',
      sNFeaver: 'img/travolta.png',
      opacity: 'filter',
    },
    methods: {
        reverseTitle: function () {
            this.message = this.message.split('').reverse('').join('');
        },
        filter: function(){
            this.sNFeaver += this.opacity;
        }
    },
  });