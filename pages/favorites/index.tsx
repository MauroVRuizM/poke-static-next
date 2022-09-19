import { useEffect, useState } from 'react';
import { Layout } from "../../components/layouts"
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from "../../components/ui";
import localFavorites from '../../utils/localFavorites';

const FavoritesPage = () => {

    const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemos( localFavorites.pokemons() );
    }, []);
    

    return (
        <Layout title="Favoritos">

            {
                favoritePokemos.length === 0
                ? ( <NoFavorites/> )
                : ( <FavoritePokemons pokemons={ favoritePokemos }/> )
            }

        </Layout>
    )
}

export default FavoritesPage;
