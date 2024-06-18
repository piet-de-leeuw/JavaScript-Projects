
/* This function gets the array todo out of the localStorge (saved as a JSONstring), 
and passes it through as an Javascript Object, 
to the var todos, and returns todos. */
function GetTodos()
{
    var todos = new Array;
    var todoString = localStorage.getItem('todo');

    if (todoString !== null)
    {
        todos = JSON.parse(todoString); 
    }

    return todos;
}

function add()
{
    var task = document.getElementById('task').value;
    var todos = GetTodos();

    if (Array.isArray(todos)) {
        todos.push(task);
    } else {
       console.error('myVariable is not an array');
    }

    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    Show();
    
    return false;
}

function Remove(caller)
{
    var todos = GetTodos();
    
    todos.splice(caller.id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    Show();
    return false;
}

function Show()
{
    var todos = GetTodos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++)
    {
        html += '<li>' + todos[i] + '<button class="remove" id="'+ i +'" onClick="Remove(this)">x</button></li>';
    } 
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;
}

document.getElementById('add').addEventListener('click', add);
Show();