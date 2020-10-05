   const todoList = document.getElementById('table');
   const form = document.getElementById('form');
    

    form.addEventListener('submit', e => {
      e.preventDefault();
      const namegame = document.getElementById('name').value;
      const stylegame = document.getElementById('style').value;
      const categorygame = document.getElementById('category').value;
      const publishedgame = document.getElementById('published').value;
      
      const data = { name: namegame, style: stylegame, category: categorygame,publicado:publishedgame,destacado:'no'};
      postNewTodo(data);
    })

    

    async function getTodos() {
      const url = 'http://localhost:3000/Games';
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    function buildTodo(games) {
      games.map(game => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        ${game.id}
        </td>
        <td>
        ${game.name}
        </td>
        <td>
        ${game.style}
        </td>
        <td>
        ${game.category}
        </td>
        <td>
        ${game.publicado}
        </td>
        <td>
        ${game.destacado}
        </td>
        
        <td>
        <button type="button" class="deleteButton btn text-white">Borrar</button>
        </td>
        <td>
        <button type="button" class=" btn text-white">Editar</button>
        </td>
        <td>
        <button type="button" class=" btn text-white">Destacado</button>
        </td>
      `
        todoList.appendChild(row);
        
      })
    }
    
      async function postNewTodo({ name, style, category,publicado,destacado}) {
      const url = 'http://localhost:3000/Games';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name,style, category,publicado,destacado})
      })
      const newData = await response.json();
      console.log(newData);
      debugger
    }

    

    
    
    

    getTodos().then(games => buildTodo(games));
 