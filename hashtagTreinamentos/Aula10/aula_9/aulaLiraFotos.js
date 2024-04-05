//user <= {}
//friends => ['joão', 'bruna', 'felipe', 'lira'];
//photos <= {'egito','bahama','maldivas', 'suecia'}

function getUser(callbackFunction) {
    setTimeout(() => {
        console.log('recuperando informações do usuário')
        callbackFunction ({ id: 0, name: 'Daniel', surname: 'Porto'})
    }, 2000);
}

function getFriendList(user, callback) {
    console.log(`Recuperando lista de amigos do usuário ${user.name} ${user.surname}`)
    setTimeout(() => {
        callback(['joão', 'bruna', 'felipe', 'lira'])
    }, 2000);
}

function getPhotos(username, callback){
    console.log('Recuperando lista de fotos do usuário' + username);
    setTimeout(() => {callback(['egito','bahama','maldivas', 'suecia'])});
}

getUser((user) => getFriendList(user, (friends) => {
    getPhotos(friends[3], console.log);
}));

