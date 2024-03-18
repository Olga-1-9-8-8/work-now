import { useState } from "react";

export const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState({});

  function getPosition() {
    if (!navigator.geolocation) {
      return setError("Ваш браузер не поддерживает геолокацию");
    }
    setIsLoading(true);
    return navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      },
    );
  }

  return { position, error, isLoading, getPosition };
};
