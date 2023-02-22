import { AiOutlineStar, AiFillStar} from "react-icons/ai"


interface movieRatings {
    vote_average: number
}

const Stars = ({ vote_average }:movieRatings) => {
  
    let userRating =  Math.round(vote_average/2)

   switch (userRating) {
    case 0:
        return <span className="flex"> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> </span>
    
    case 1:
        return <span className="flex"> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> </span>

    case 2:
        return <span className="flex"> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> </span>

    case 3:
        return <span className="flex"> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> </span>

    case 4:
        return <span className="flex"> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> </span>

    case 5:
        return <span className="flex"> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> </span>

    default:
        return <p className="flex">N/A</p>
        
   }
}

export default Stars