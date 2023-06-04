import { connectToDB } from "@utils/database";
import Client from "@models/client";

export const GET = async (req, res) => {
    try{
        await connectToDB();

        const clients = await Client.find({}).populate("creator");

        return new Response(JSON.stringify(clients), {
            status: 200,
        });
    }catch(err){
        return new Response("Failed to get clients", {status: 500});    
    }
}