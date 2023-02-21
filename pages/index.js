import TweetInput from "@/Components/TweetInput";
import Tweet from "@/Components/Tweet";
import prisma from "@/lib/prisma";

export default function Home({tweets}) {



    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <div className="col-md-6 col-sm-8">
                        <TweetInput/>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-sm-12">
                            {tweets.map(tweet => (
                                <Tweet tweet={tweet} key={tweet.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const tweets = await prisma.tweet.findMany();
    return {
        props: {
            tweets: tweets,
        }
    }
}
