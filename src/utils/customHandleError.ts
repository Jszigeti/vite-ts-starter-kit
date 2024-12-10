import { handleError } from "axios-error-handler-ts";

export const customHandleError = (
  err: unknown,
  errorMessages: string | Record<number, string>,
  errorCodeToCheck?: number
): string => {
  return handleError(
    err,
    errorMessages,
    errorCodeToCheck,
    "Your custom server error message here.",
    "Your custom unknown error message here."
  );
};
