  var botui = new BotUI('hello-world');

    botui.message.add({
      loading: true
    }).then(function (index) {
        botui.message.update(index, {
          content: 'Hello World from bot!',
          loading: false
        }).then(function () {
          botui.message.add({
            delay: 2000,
            loading: true,
            content: 'Delayed Hello World'
          });
        });
    });

    botui.message.add({
      human: true,
      content: 'Hello World from human!'
    }).then(function () {
      botui.action.text({
        action: {
          button: {
            icon: 'check',
            label: 'Submit'
          }
        }
      });
    });
