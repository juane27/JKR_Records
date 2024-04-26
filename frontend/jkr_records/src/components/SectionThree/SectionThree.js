import React, { useState, useEffect, useRef } from 'react';
import "./SectionThree.css";


const SectionThree = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [artists, setArtists] = useState([]);
    const modalRef = useRef(null);

    useEffect(() => {
        fetch('/api/artists/')
            .then(response => response.json())
            .then(data => setArtists(data));

        // Agregar un event listener para detectar clics fuera del modal
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleArtistClick = (artist) => {
        setSelectedArtist(artist);
        setShowModal(true);
    };

    return (
        <div className='container-s3'>
            <h1>ARTISTS</h1>
            <div className="container-btns">
                {artists.map(artist => (
                    <div key={artist.id} className='artist-1'>
                        <button
                            className='custom-btn'
                            type="button"
                            onClick={() => handleArtistClick(artist)}
                        >
                            <img alt={artist.nombre} src={artist.foto} className='custom-image'></img>
                            <div>
                                <h6 className='custom-text'>{artist.nombre}</h6>
                            </div>
                        </button>
                        {/* Modal */}
                        {showModal && selectedArtist && selectedArtist.id === artist.id && (
                            <div className="modal" ref={modalRef}>
                                <div className="modal-content">
                                    <span className="close-btn" onClick={toggleModal}>&times;</span>
                                    <p>{selectedArtist.nombre}</p>
                                    <div className='img-modal'>
                                        <img alt={artist.nombre} src={artist.foto} className='custom-image-modal'></img>
                                    </div>
                                    <div className='socials-modal'>
                                        <div className='red'>
                                        <a href={artist.instagram} target="_blank"><i className='fab fa-instagram'> </i></a>
                                        </div>
                                        <div className='red'>
                                        <a href={artist.twitter} target="_blank"><i className='fab fa-twitter'> </i></a>
                                        </div>
                                        <div className='red'>
                                        <a href={artist.youtube} target="_blank"><i className='fab fa-youtube'> </i></a>
                                        </div>
                                        <div className='red'>
                                        <a href={artist.spotify} target="_blank"><i className='fab fa-spotify'> </i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionThree;
