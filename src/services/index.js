import { axiosInstance } from "../api";

export const fetchFeedData = async () => {
  try {
    const res = await axiosInstance.get(
      `/search/photos/?page=2&query=office&client_id=${
        import.meta.env.VITE_APP_CLIENT_ID
      }`
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
