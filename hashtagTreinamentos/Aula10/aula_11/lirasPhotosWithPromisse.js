//user <= {}
//friends => ['joão', 'bruna', 'felipe', 'Lira'];
//photos <= ['egito', 'bahamas', 'maldivas', 'suécia']



function getUser() {
  console.log('Recuperando informações do usuário');
  const promise1 = new Promise ((resolve) => {

    setTimeout(() => {
      resolve({ id: 0, name: 'Daniel', surname: 'Porto' });
      console.log(promise1);
    }, 2000);
  });
  return promise1;
};


function getFriendList(user) {
  console.log(`Recuperando lista de amigos do usuário ${user.name} ${user.surname}`);
  const promise2 = new Promise ((resolve) => {
    setTimeout(() => {
      resolve(['joão', 'bruna', 'felipe', 'Lira']);
      console.log(promise2);
    }, 2000);
  });
  return promise2;
};

function getPhotos(username) {
  console.log(`Recuperando lista de fotos do usuário ${username}`);
  const promise3 = new Promise ((resolve) => {
    setTimeout(() => {resolve(['egito', 'bahamas', 'maldivas', 'suécia']);}, 2000);
  });
  return promise3;
}

/*
CALLBACK HELL

getUser((user) =>
  getFriendList(user, (friends) => {
    getPhotos(friends[3], console.log);
  })
);
*/

getUser()
  .then( user => getFriendList (user))
  .then (friends => getPhotos(friends[3]))
  .then(photos => console.log(photos));


