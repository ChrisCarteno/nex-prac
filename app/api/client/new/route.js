import { connectToDB } from "@utils/database"
import Client from "@models/client";

export const POST = async (req, res) => {
    const { userId, name, email, phone, idNumber, comment, createdAt} = await req.json();

    try{
        await connectToDB();
        const newClient = new Client({ creator: userId, name, email, phone, idNumber, comment, createdAt});

        await newClient.save();

        return new Response(JSON.stringify(newClient),{
            status: 200,
        });
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error connecting to database" });
        return;
    }
}