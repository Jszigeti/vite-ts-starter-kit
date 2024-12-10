import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { customHandleError } from "@/utils/customHandleError";
import { REFRESH_URL } from "@/services/api/endpointsList";

export function useApi(): AxiosInstance {
  // Create axios instance with base url and cookies use
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // => Configure your API url in .env file
    withCredentials: true, // => Comment this line if you do not want to use authentification httpOnly cookies
  });

  // Create response interceptor to refresh token if error is 401
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (
        error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retried &&
        originalRequest.url !== REFRESH_URL
      ) {
        originalRequest._retried = true;
        // Store original request
        if (originalRequest) {
          try {
            // Call refresh token endpoint
            await api.post(REFRESH_URL); // => Configure your endpoints in /service/api/endpointsList/endpointsList.ts
            // Retry original request
            return api(originalRequest);
          } catch (refreshError: unknown) {
            // Optional : redirection or logout function
            return Promise.reject(
              customHandleError(
                refreshError,
                "Session expirée, veuillez vous reconnecter",
                401
              )
            );
          }
        }
      }
      return Promise.reject(error);
    }
  );
  // Return axios instance
  return api;
}
