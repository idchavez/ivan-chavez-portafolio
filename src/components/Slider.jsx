import React, { useEffect, useRef, useState } from 'react'
import pro1 from '../media/Imagen1.png';
import pro2 from '../media/Imagen2.png';
import pro3 from '../media/Imagen3.png';
import pro4 from '../media/Imagen4.png';
import pro5 from '../media/Imagen5.png';

const Slider = () => {

    const images = [
        pro1, pro2, pro3, pro4, pro5
    ];

    const [index, setIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const slideRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {

        const numImages = images.length;

        if (autoPlay) {
            intervalRef.current = setInterval(()=> {
                setIndex((prev) => (prev+1) % numImages);
            }, 5000);
        }
        return () => clearInterval(intervalRef.current);
    }, [autoPlay]);

    const updateIndex = (step) => {
        const numImages = images.length;
        setIndex((prev) => (prev + step + numImages) % numImages);
        setAutoPlay(false);
        clearInterval(intervalRef.current);
    }

    return (
        <section className='slider-container'>
            <div className='slides'
                 style={{ transform: `translateX(-${index * 100}%)` }}
                 ref={slideRef}   
            >
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`Slide ${i + 1}`} />
                ))}
            </div>
            <button className='prev' onClick={() =>updateIndex(-1) }>❮</button>
            <button className='next' onClick={() =>updateIndex(1) }>❯</button>
        </section>
    );
}

export default Slider