import React from 'react'

const Box = ({isOpen,movies,watched,setIsOpen}) => {
  return (
    <div className='box'>
        <button className='btn-toggle' onClick={()=>setIsOpen(!isOpen)}>
            {isOpen?"-":"+"}
        </button>
        {isOpen&&(
            <ul className='list'>
                {movies.map((movie)=>{
                    return <li key={movie.imdbKey}>
                        <img src={movie.Poster} alt="" />
                        <h3>{movie.Title}</h3>
                        {!watched?(
                            <div>
                                <p>ℹ️</p>
                                <span>{movie.Year}</span>
                            </div>
                            
                        ):(
                            <div>
                                <p>
                                    <span>⭐</span>
                                    <span>{movie.imdbRating}</span>
                                </p>
                                <p>
                                    <span>🌟</span>
                                    <span>{movie.userRating}</span>
                                </p>
                                <p>
                                    <span>⏳</span>
                                    <span>{movie.runtime} min</span>
                                </p>
                            </div>
                        )}
                    </li>
                    
                })}
            </ul>
        )}
    </div>
  )
}

export default Box