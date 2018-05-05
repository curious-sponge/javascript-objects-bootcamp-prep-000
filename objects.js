var playlist = {rihanna: "diamonds"};

function updatePlaylist(anObject, artistName, songTitle){
  return Object.assign({}, anObject, {artistName: songTitle});
}