import Image from "next/image";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Tweet = ({tweet}) => {
    const [like, setLike] = useState(false);
    const [user, setUser] = useState("null");
    const router = useRouter();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/user/${tweet.authorId}`, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                },
            });
            const {user} = await res.json();
            setUser(user);
        } catch (e) {
            console.log(e);
        }
    }

    //used to change the icon of the like button
    const changeStateLike = () => {
        setLike(!like);
    }
    //use to refresh the page after like or unlike a tweet
    const refreshData = () => {
        router.replace(router.asPath);
    }

    //use to update the number of likes
    const updateTweet = () => {
        if (!like) {
            fetch(`http://localhost:3000/api/addLike/${tweet.id}`, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({likes: tweet.likes + 1})
            })
        } else {
            fetch(`http://localhost:3000/api/addLike/${tweet.id}`, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({likes: tweet.likes - 1})
            })
        }
    }

    //use to add a like to a tweet
    const addLike = async () => {
        try {
            await updateTweet();
        } catch (e) {
            console.log(e)
        } finally {
            refreshData();
        }
        changeStateLike();
    }

    return (<div className={"card shadow d-flex flex-column p-2 my-2"}>
        <div className="card-header">
            <Image
                src={user.picture}
                alt={"user"}
                width={50} height={50} className={"rounded-circle"}></Image>
        </div>
        <div className="card-body">
            <h6>{tweet.title}</h6>
            <p>{tweet.message}</p>
        </div>
        <div className="d-flex align-items-center">
            <div onClick={addLike}
                 className={"p-2"}>
                <Image
                    width={20}
                    height={20}
                    src={like ? '/assets/logo/liked.png' : '/assets/logo/like.png'} alt={"like"}></Image>
            </div>
            <span className={"ms-1"}>{tweet.likes}</span>
        </div>
    </div>);
};

export default Tweet;
