export async function getEventList() {
  const url = "https://ngtmtkyk.com/frontendnagoya/api/ES_event_list/"
  const options = {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": import.meta.env.X_API_KEY
    }
  }
  const res = await fetch(url, options);
  if (res.status === 404) {
    return null;
  }
  const eventList = (await res.json());
  return eventList;
}