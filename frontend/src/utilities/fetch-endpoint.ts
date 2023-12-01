const apiUrl = process.env.API_KEY ?? "http://localhost:3000";

export const fetchEndpoint = async (endpoint: string, init?: RequestInit): Promise<Response> => {
  const url = apiUrl + endpoint;
  return await fetch(url, init);
};