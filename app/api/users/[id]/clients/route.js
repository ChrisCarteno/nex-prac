import { connectToDB } from "@utils/database";
import Client from "@models/client";

export const GET = async (req, {params}) => {
    try{
        await connectToDB();

        const clientInfo = await Client.find({
            creator: params.id,
        }).populate("creator");

        return new Response(JSON.stringify(clientInfo), {
            status: 200,
        });
    }catch(err){
        return new Response("Failed to get clients", {status: 500});
    }
}
