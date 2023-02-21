import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {BsEmojiSmile} from "react-icons/bs";

const TweetInput = () => {
    const {data: session} = useSession();
    const [message, setMessage] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);
    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    }

    const addEmoji = (e) => {
        setMessage(message+ e.native);
        setShowEmoji(false);
    }

    const submitTweet = async () => {
        try {
            await fetch('http://localhost:3000/api/sendTweet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message, user: session.user})
            })
        } catch (e) {
            console.log(e)
        } finally {
            setMessage("");
            refreshData();
        }
    }

    return (
        <div className={"card d-flex flex-column p-4 my-3 shadow"}>
            <div className="d-flex align-items-center">
                <Image src={session?.user.image} alt={"logo"}
                       width={"50"} height={"50"} className={"rounded-circle"}
                ></Image>
                <input
                    onChange={(e) => setMessage(e.target.value)}
                    className={"form-control"}
                    value={message}
                    type="text"
                    placeholder={"Enter your message ..."}/>
            </div>
            <div className={"d-flex justify-content-center"}>
                <BsEmojiSmile
                className={"cursor-pointer"}
                onClick={() => setShowEmoji(!showEmoji)}
                />
                {showEmoji && <Picker data={data} onEmojiSelect={(e) =>addEmoji(e)} />}
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button
                    className={"w-50 btn btn-primary d-flex align-items-center justify-content-evenly"}
                    onClick={session ? submitTweet : null}>
                    Tweeter
                    <Image
                        src={"/assets/logo/send-message.png"}
                        alt={"logo"}
                        width={"20"}
                        height={"20"}></Image>
                </button>
            </div>
        </div>
    );
};

export default TweetInput;