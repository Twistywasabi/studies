//user <= {}
//friends => ['joão', 'bruna', 'felipe', 'Lira'];
//photos <= ['egito', 'bahamas', 'maldivas', 'suécia']

function getUser(callback) {
  console.log('Recuperando informações do usuário');
  setTimeout(() => {
    callback({ id: 0, name: 'Daniel', surname: 'Porto' });
  }, 2000);
}

function getFriendList(user, callback) {
  console.log(
    `Recuperando lista de amigos do usuário ${user.name} ${user.surname}`
  );
  setTimeout(() => {
    callback(['joão', 'bruna', 'felipe', 'Lira']);
  }, 2000);
}

function getPhotos(username, callback) {
  console.log(`Recuperando lista de fotos do usuário ${username}`);
  setTimeout(() => {
    callback(['egito', 'bahamas', 'maldivas', 'suécia']);
  }, 2000);
}

//CALLBACK HELL

getUser((user) =>
  getFriendList(user, (friends) => {
    getPhotos(friends[3], console.log);
  })
);
