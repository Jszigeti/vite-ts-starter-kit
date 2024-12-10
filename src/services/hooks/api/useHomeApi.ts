import { getHomeData } from "@/services/api/homeApi";
import { useApi } from "./useApi";

export function useHomeApi() {
  const api = useApi();

  return {
    getHomeData: () => getHomeData(api),
  };
}
