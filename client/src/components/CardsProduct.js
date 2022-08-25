import React from 'react'
import "./Cardsproduct.css"
function CardsProduct() {
    return (
        <div className='bodyP'>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swahttps://media-cdn.tripadvisor.com/media/photo-s/17/33/23/81/assortiment-de-patisseries.jpg" rel="stylesheet" />
            <div className="containerP">
                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/33/23/81/assortiment-de-patisseries.jpg" alt="Picture by Kyle Cottrell" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
                            <p className="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
                            <a href className="card__button">Read more</a>
                        </figcaption>
                    </figure>
                </div>
                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">This Is Your Body And Brain On Coffee</h2>
                            <p className="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
                            <a href className="card__button">Read more</a>
                        </figcaption>
                    </figure>
                </div>
                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">Why You Should Bring Your Dog To Work</h2>
                            <p className="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
                            <a href className="card__button">Read more</a>
                        </figcaption>
                    </figure>
                </div>

                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">Why You Should Bring Your Dog To Work</h2>
                            <p className="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
                            <a href className="card__button">Read more</a>
                        </figcaption>
                    </figure>
                </div>

            </div>

        </div>
    )
}

export default CardsProduct