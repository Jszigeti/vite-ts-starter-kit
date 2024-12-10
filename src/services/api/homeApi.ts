import { AxiosInstance } from "axios";
import { customHandleError } from "@/utils/customHandleError";

export const getHomeData = async (apiInstance: AxiosInstance) => {
  try {
    const { data } = await apiInstance.get("/db/homedata.json");
    return data;
  } catch (err) {
    throw new Error(
      customHandleError(err, "Impossible de récupérer les données", 404)
    );
  }
};
