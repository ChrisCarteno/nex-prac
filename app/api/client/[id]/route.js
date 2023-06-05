import { connectToDB } from "@utils/database";
import Client from "@models/client";


//GET
export const GET = async (req, {params}) => {
    try{
        await connectToDB();

        const client = await Client.findById(params.id).populate("creator");
        if(!client) return new Response("Client not found", {status: 404});

        return new Response(JSON.stringify(client), {
            status: 200,
        });
    }catch(err){
        return new Response("Failed to get client", {status: 500});    
    }
}

//PATCH
export const PATCH = async (req, {params}) => {
    const { name, email, phone, idNumber, comment } = await req.json();
    
    try{
        await connectToDB();

        const existingClient = await Client.findById(params.id);
        if(!existingClient) return new Response("Client not found", {status: 404});

        existingClient.name = name;
        existingClient.email = email;
        existingClient.phone = phone;
        existingClient.idNumber = idNumber;
        existingClient.comment = comment;

        await existingClient.save();

        return new Response(JSON.stringify(existingClient), {
            status: 200,
        });
    }catch(err){
        return new Response("Failed to update Client", {status: 500});
    }
}


//DELETE

export const DELETE = async (req, {params}) => {
    try{
        await connectToDB();

        await Client.findByIdAndRemove(params.id);

        return new Response("Succesfully Deleted Client", { status: 200 });
    }catch(err){
        return new Response("Failed to delete Client", {status: 500});
    }
}