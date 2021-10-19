import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmComponents = films.map((film, index) => {
        return <Film name={film.name} url={film.url} key={index} />
    })

    return ( 
        <>
            {filmComponents}
        </>
    );
}

export default FilmList;