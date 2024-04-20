//78692
// function make_album() creating two parameter"artist,&album"
// and adding optional "parameter track"
function make_album(artist: string, album:string, tracks?:number ){
//creating variable "musicalbum" object and defining its data type in"{} ={"
    const music_album:{artist:string, album:string, tracks?:number}={
        artist:artist,
        album:album,
        
    }
    if(tracks !== undefined){
        music_album.tracks=tracks
    }
    return music_album

 }
const album1=make_album("Artist 1","Album 1");
console.log(album1);
const album2=make_album("Artist 2","Album 2");
console.log(album2);
const album3=make_album("Artist 3","Album 3",12);
console.log(album3);