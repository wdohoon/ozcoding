import React from 'react';
import { imageBasePath } from '../../constant';

const MovieModal = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) => {
  return (
    <div className='presentation' role="presentation">
        <div className='wrapper_modal'>
            <div className="modal">
                <span onClick={() => setModalOpen(false)} className='modal-close'>
                    x
                </span>
                {backdrop_path && (
                    <img 
                        src={`${imageBasePath}${backdrop_path}`} 
                        className='modal_poster-img' 
                        alt='modal_poster-img'
                    />
                )}
                <div className="modal_content">
                    <p className='modal_details'>
                        {release_date ? release_date : first_air_date}
                    </p>
                    <h2 className='modal_title'>
                        {title ? title : name}
                    </h2>
                    <p className='modal_overview'>평점: {vote_average}</p>
                    <p className='modal_overview'>{overview}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MovieModal;
