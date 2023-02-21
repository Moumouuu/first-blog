import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    const user = req.body.user
    //create user if not exist in db
    await prisma.user.upsert({
        where: {
            email: user.email
        },
        update:{},
        create: {
            name: user.name,
            email: user.email,
            picture: user.image,
        }
    });


    //Post a tweet
    if(req.method === 'POST') {
        try {
            //find user by email and get id
            const actualUser = await prisma.user.findUnique({
                where: {
                    email: user.email,
                }
            });
            //allow to create a tweet
            await prisma.tweet.create({
                data: {
                    //from "body: JSON.stringify({message})"
                    message: req.body.message,
                    likes: 0,
                    authorId: actualUser.id
                }
            });
            res.status(200).json({message: 'Tweet posted'});
            //catch error
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'Internal server error'});
        }
    }
    //method not allowed
    else {
        res.status(500).json({message: 'Method not allowed'});
    }
}