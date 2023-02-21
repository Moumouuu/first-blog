import Image from "next/image";
import {useState} from "react";

const TweetInput = () => {
    const [message, setMessage] =useState("");

    const submitTweet = async () => {
        try {
            await fetch('http://localhost:3000/api/sendTweet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message})
            })
        } catch (e) {
            console.log(e)
        }finally {
            setMessage("");
        }
    }

    return (
        <div className={"card d-flex flex-column p-4 my-3 shadow"}>
            <input
                onChange={(e) => setMessage(e.target.value)}
                className={"form-control"}
                value={message}
                type="text"
                placeholder={"Enter your message ..."}/>
            <div className="d-flex justify-content-center mt-3">
                <button
                    className={"w-50 btn btn-primary d-flex align-items-center justify-content-evenly"}
                    onClick={submitTweet}>
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