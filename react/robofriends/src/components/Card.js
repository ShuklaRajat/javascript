import React from 'react';

const Card = ({username, email, id}) => {
    return(
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org//${id}?200x200`} alt='Robo image'>
            </img>
            <h2>{username}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;