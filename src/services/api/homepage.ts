import { customHandleError } from "@/utils/customHandleError";
import { useApi } from "../hooks/useApi/useApi";
import { AxiosInstance } from "axios";

const getHomePageData = async (apiInstance: AxiosInstance) => {
  try {
    const { data } = await apiInstance.get("/db/homepagedata.json");
    return data;
  } catch (err) {
    throw new Error(
      customHandleError(err, "Impossible de récupérer les données", 404)
    );
  }
};

export function useHomePageApiCalls() {
  const api = useApi();

  return {
    getHomePageData: () => getHomePageData(api),
  };
}
