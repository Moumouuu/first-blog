import TweetInput from "@/Components/TweetInput";
import Tweet from "@/Components/Tweet";

export default function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <div className="col-md-6 col-sm-8">
                        <TweetInput />
                    </div>
                </div>
                <Tweet tweet={{title:"test", message:"message",likes:2}} />

            </div>
        </>
    )
}
