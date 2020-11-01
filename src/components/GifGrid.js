import React from 'react'
import { useFethGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // Custom Hook
    const { data: images, loading } = useFethGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">

                <ol>
                    {images.map((img) =>
                        <GifGridItem key={img.id} {...img} />
                    )}
                </ol>
            </div>
        </>
    )
}
