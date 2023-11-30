const apiUrl = import.meta.env.API_URL;

export const fetchEndpoint = async (endpoint: string, init?: RequestInit): Promise<Response> => {
  const url = apiUrl + endpoint;
  return await fetch(url, init);
};