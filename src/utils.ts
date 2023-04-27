import type {Film, searchOutput} from "./types";
export async function search(url:string, isDaily:boolean):Promise<searchOutput> {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('Error al obtener datos');
    }
    const data:searchOutput = await response.json();
    if(isDaily){
        let index:number = Math.floor(Math.random() * (data.hits.length + 1));
        data.hits = [data.hits[index]]
    }else{
        data.hits = data.hits.slice(0,20);
    }
    for(let film of data.hits){
        const response2 = await fetch(`http://www.omdbapi.com/?apikey=df59daa9&i=${film.tconst}`)
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

export async function searchGenresAndTypes(url:string):Promise<searchOutput> {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('Error al obtener datos');
    }
    return await response.json();
}


export function addFilters(sliderValue:number,filters:string[],newFilters:string[],isFinal:boolean):string[]{
    if(sliderValue>=7.5&&!isFinal){
        filters.push(newFilters[0]);
        filters.push(newFilters[1]);
    }else if((sliderValue<=7.5&&sliderValue>=5)||(isFinal&&sliderValue>=5)){
        filters.push(newFilters[0]);
    }
    return filters;
}

export function isFilterSelected(sliderValue:number,filterSelected:number):number{
    if(sliderValue>=7.5){
        filterSelected+=2
    }else if((sliderValue<=7.5&&sliderValue>=5)){
        filterSelected++
    }
    return filterSelected;
}

export function saveLikedFilm(film:Film): void{
    fetch("http://localhost:8080/movies/favorites/" + film.tconst, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}