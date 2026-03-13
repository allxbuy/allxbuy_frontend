 import apiClient from "./apiClient";
 
export const getHomepageBanners = async () => {
  try {
    const res = await apiClient.get("/banners/homepage");
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to load banners";
  }
};