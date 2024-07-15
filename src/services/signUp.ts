import axios from "@/utils/axios";

export const createUser = async (userData: any) => {
  try {
    const response = await axios.post("http://localhost:5000/users", userData);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Server responded with status:", error.response.status);
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error setting up the request:", error.message);
    }
    throw new Error("Failed to create user");
  }
};
