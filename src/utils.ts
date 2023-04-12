import type {Film, searchOutput} from "./types";

export async function searchByTitle(url:string):Promise<Film[]> {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('Error al obtener datos');
    }
    const data:Film[] = await response.json();
    let res:Film[] =data.slice(0,20);
    for(let film of res){
        const response2 = await fetch(`http://www.omdbapi.com/?apikey=df59daa9&t=${film.primaryTitle}`)
        if(!response2.ok){
            throw new Error('Error al obtener datos');
        }
        const data2 = await response2.json();
        if(data2.Poster===undefined||data2.Poster==="N/A"){
            film.poster="https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg?w=640";
        }else{
            film.poster=data2.Poster;
        }
    }
    return res;
}
export async function search(url:string):Promise<searchOutput> {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('Error al obtener datos');
    }
    const data:searchOutput = await response.json();
    for(let film of data.hits){
        const response2 = await fetch(`http://www.omdbapi.com/?apikey=df59daa9&t=${film.primaryTitle}`)
        if(!response2.ok){
            throw new Error('Error al obtener datos');
        }
        const data2 = await response2.json();
        if(data2.Poster===undefined||data2.Poster==="N/A"){
            film.poster="https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg?w=640";
        }else{
            film.poster=data2.Poster;
        }
    }
    return data;
}