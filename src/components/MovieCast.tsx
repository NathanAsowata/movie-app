import Image from "next/image"
import Slider from "react-slick"


interface movieCastProp {
        cast: {
            cast_id: number,
            name: string,
            character: string,
            profile_path: string
        }[]
}


const MovieCast = ({cast}:movieCastProp) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
              }
            }
        ]
    }


 return(
    <section className="text-white pt-5 pb-10 px-5 sm:px-10">
        <h2 className="text-2xl pb-3 font-semibold">Cast</h2>
        <Slider {...settings}>
        {cast.map(person => {
            return(
                <div key={person.cast_id} className="">
                    <Image 
                        src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                        alt={person.name}
                        width="100"
                        height="100"
                        style={{width: "172px", height: "260px"}}
                    />
                    <h3>{person.name}</h3>
                    <p className="text-slate-400">{person.character}</p>
                </div>
            )
        })}
        </Slider>
    </section>
 )
}

export default MovieCast