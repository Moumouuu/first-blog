import prisma from "@/lib/prisma";
export default async function handler(req, res) {
    const id = req.query.id;
    const likes = req.body.likes;

    if (req.method === 'POST') {
        try {
            await prisma.tweet.update({
                where: {
                    id: Number(id)
                },
                data: {
                    likes: Number(likes)
                },
            })
            res.status(200).json({message: 'Like added'});
        } catch (e) {
            console.log(e);
        }
    } else {
        res.status(500).json({message: 'Method not allowed'});
    }
}