import Image from "next/image";
import {useState} from "react";

const Tweet = ({tweet}) => {
    const [like, setLike] = useState(false);
    const changeStateLike = () => {
        setLike(!like);
    }
    return (
        <div className={"card shadow d-flex flex-column"}>
            <div className="card-header">
                <h6>{tweet.title}</h6>
                <p>{tweet.message}</p>
            </div>
            <div className="d-flex align-items-center">
                <div onClick={changeStateLike}
                     className={"p-2"}>
                    <Image
                        width={20}
                        height={20}
                        src={like ? '/assets/logo/liked.png' : '/assets/logo/like.png'} alt={"like"}></Image>
                </div>
                <span className={"ms-1"}>{tweet.likes}</span>
            </div>
        </div>
    );
};

export default Tweet;