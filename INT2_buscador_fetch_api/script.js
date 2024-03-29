function obtenerDatos() {

  const inputBuscar = document.getElementById('buscar').value;

  const mostrarData = (data) => {

    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
      body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].address.city}</td></tr>`
    }

    document.getElementById('data').innerHTML = body
  }


  if (inputBuscar.length == 0) {

    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())

      .then(data => mostrarData(data))

      .catch(error => console.log(error))

  } else {

    fetch(`https://jsonplaceholder.typicode.com/users?username=${inputBuscar}`)
      .then(response => response.json())
      .then(data => mostrarData(data))
  }
}