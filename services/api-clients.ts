/**
 * Simple fetch wrapper with fixed tenant domain header
 */
export const apiFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  const headers = new Headers(init?.headers);

  // Fixed domain
  headers.set("X-Tenant-Domain", "brainstorm-global-education.nepdora.com");

  return fetch(input, {
    ...init,
    headers,
  });
};
