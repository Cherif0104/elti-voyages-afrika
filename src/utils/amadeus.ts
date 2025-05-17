
/**
 * Amadeus API utility functions
 */

// Types
export interface AmadeusAccessToken {
  type: string;
  access_token: string;
  expires_in: number;
  state: string;
}

// Constants
const API_KEY = "HKbJFhP2AVEHNHqIMt9qKRa1D1ZNDP50";
const API_SECRET = "rLoU5lwyj1Dw8BWY";
const BASE_URL = "https://test.api.amadeus.com";

// Get Amadeus access token
export const getAmadeusToken = async (): Promise<AmadeusAccessToken> => {
  const response = await fetch(`${BASE_URL}/v1/security/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: API_KEY,
      client_secret: API_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to get access token from Amadeus API");
  }

  return response.json();
};

// Search flights
export const searchFlights = async (
  origin: string, 
  destination: string, 
  departureDate: string, 
  returnDate: string | null,
  adults: string,
  token: string
) => {
  let url = `${BASE_URL}/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}&currencyCode=EUR&max=10`;
  
  if (returnDate) {
    url += `&returnDate=${returnDate}`;
  }
  
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to search flights on Amadeus API");
  }

  return response.json();
};

// Search hotels
export const searchHotels = async (
  cityCode: string,
  checkInDate: string,
  checkOutDate: string,
  adults: string,
  token: string
) => {
  const url = `${BASE_URL}/v3/shopping/hotel-offers?cityCode=${cityCode}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&adults=${adults}&radius=50&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE`;
  
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to search hotels on Amadeus API");
  }

  return response.json();
};

// Format date from ISO to localized string
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Format duration from PT2H30M to 2h 30m
export const formatDuration = (duration: string) => {
  return duration
    .replace('PT', '')
    .replace('H', 'h ')
    .replace('M', 'm');
};
