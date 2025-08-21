import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_KEY;
const apiSecrect = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecrect) {
    console.error("Stream API key or Secret is missing!");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecrect);


export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error upserting Stream", error);
    }
};


export const generateStreamToken = (userId) => {
    try {
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.error("Error generating Stream token", error);

    }
};