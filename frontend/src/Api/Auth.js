
import axios from "axios";

const getAuthErrorMessage = (error, fallbackMessage) => {
    if (!error.response) {
        return fallbackMessage;
    }

    const data = error.response.data;

    return typeof data === "string" ? data : data?.message || fallbackMessage;
};

export class AuthApi {

    async register(userData) {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL ?? ""}/api/auth/register`,
                userData,
            );

            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            throw new Error(getAuthErrorMessage(error, "Failed to register"), {
                cause: error,
            });
        }
    }

    async login(credentials) {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL ?? ""}/api/auth/login`,
                credentials,
            );

            return response.data;
        } catch (error) {
            console.error("Error during login:", error);
            throw new Error(getAuthErrorMessage(error, "Unable to reach the auth server."), {
                cause: error,
            });
        }
    }   

}
