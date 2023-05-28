import { handleNetworkError } from "@/helpers/helper";
import axios from "axios";
import { API_ROUTES } from "@/helpers/constants";

export default async function fetcher(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw handleNetworkError(e);
  }
}

export async function saveContactUsForm(params: any) {
  try {
    const response = await axios.post(API_ROUTES.LEAD, params);
    return response.data;
  } catch (e) {
    throw handleNetworkError(e);
  }
}

export async function saveEnquiry(params: any) {
  try {
    const response = await axios.post(API_ROUTES.ENQUIRY, params);
    return response.data;
  } catch (e) {
    throw handleNetworkError(e);
  }
}
