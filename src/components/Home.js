import Hero from "./Hero";

const Home = () => {
    return (
      <>
        <Hero text="Welocme to Movie Browser" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Welcome to Movie Browser, your go-to destination for exploring the world of cinema! With our user-friendly search feature, you can effortlessly discover detailed insights about any movie that piques your interest. Whether you're a film enthusiast or simply curious about a particular title, Movie Browser provides you with essential information such as movie length, reviews, release date, and a concise summary of what the movie is all about. Dive into the captivating world of movies and uncover the stories, characters, and reviews that make each cinematic experience unique. Start your movie journey today with Movie Browser! 
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

export default Home;