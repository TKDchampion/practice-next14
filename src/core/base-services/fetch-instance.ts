import { ApiConfig, FetchConfig, Method, RenderType } from "./model";
import { storageGet } from "../storage";
// import { StorageKey } from "../../../utils/storage-key";

const errorHandle = (status: number, msg: string) => {
  console.log(`api error: ${status} | ${msg}`);
  switch (status) {
    case 401:
      // window.location.href = "/login"
      break;
    default:
      break;
  }
  return false;
};

export default async function fetchInstance(
  apiconfig: ApiConfig,
  method: Method,
  renderType?: RenderType
): Promise<void> {
  const token = storageGet("token");

  const baseURL = apiconfig.baseConfig?.baseURL
    ? apiconfig.baseConfig.baseURL
    : process.env["NEXT_PUBLIC_URL"];

  const fetchConfig: FetchConfig = {
    method: method,
    headers: apiconfig.baseConfig?.headers
      ? apiconfig.baseConfig.headers
      : {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
  };

  if (apiconfig.body) {
    fetchConfig["body"] = JSON.stringify(apiconfig.body);
  }

  if (renderType) {
    // app router setting
    // SSG, cache: "force-cache",
    // SSR, cache: "no-store",
    // ISR, { revalidate: seconds }
    switch (renderType) {
      case "ISR":
        fetchConfig["next"] = { revalidate: 5 };
        break;
      case "SSG":
        fetchConfig["cache"] = "force-cache";
        break;
      case "SSR":
        fetchConfig["cache"] = "no-store";
        break;
    }
  }

  try {
    const response = await fetch(`${baseURL}/${apiconfig.url}`, fetchConfig);

    if (!response.ok) {
      // Try to extract error details from the response
      const errorText = await response.text();
      errorHandle(response.status, errorText);
      throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
      // Handle or re-throw the error as needed
      throw error;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
}
