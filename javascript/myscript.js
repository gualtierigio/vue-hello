var app = new Vue({
    el: '#app',
    data: {
      message: 'che svolta!',
      sNFeaver: 'img/travolta.png'
    },
    methods: {
        reverseTitle: function () {
            this.message = this.message.split('').reverse('').join('');
        },
    }
  });