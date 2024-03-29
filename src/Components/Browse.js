import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularVideo from '../hooks/usePopularVideo';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';


const Browse = () => {
   
  useNowPlayingMovies();
  usePopularVideo();
  useTopRated();
  useUpcoming();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse
