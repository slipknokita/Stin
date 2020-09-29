   const todoList = document.getElementById('table');
   const form = document.getElementById('form');
    

    form.addEventListener('submit', e => {
      e.preventDefault();
      const namegame = document.getElementById('name').value;
      const categorygame = document.getElementById('category').value;
      const publishedgame = document.getElementById('published').value;
      
      const data = { name: namegame, category: categorygame,publicado:publishedgame};
      postNewTodo(data);
    })

    

    async function getTodos() {
      const url = 'http://localhost:3000/games';
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
        ${game.category}
        </td>
        <td>
        ${game.publicado}
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
    
      async function postNewTodo({ name, category,publicado}) {
      const url = 'http://localhost:3000/games';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, category,publicado})
      })
      const newData = await response.json();
      console.log(newData);
      debugger
    }

    

    
    
    

    getTodos().then(games => buildTodo(games));
 