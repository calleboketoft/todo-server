module.exports = (app) => {
  var Todo = app.models.Todo

  function createTodos() {
    Todo.create([
      {
        'title': 'Laptop',
        'done': false
      },
      {
        'title': 'Notepad',
        'done': false
      },
      {
        'title': 'Pen',
        'done': false
      },
      {
        'title': 'Charger',
        'done': false
      },
      {
        'title': 'Towel',
        'done': false
      },
      {
        'title': 'Bed sheet',
        'done': false
      },
      {
        'title': 'Cushion',
        'done': false
      },
      {
        'title': 'Tooth brush',
        'done': false
      }
    ], (err, todos) => {
      if (err) return console.log(err)
      console.log('Populated todos:')
    })
  }

  createTodos()
}