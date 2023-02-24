import { useState, useEffect } from 'react';

const API_ROOT = 'https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams';

export function useApi({ path } = { path: '' }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}/${path}`)
      .then(res => res.json())
      .then(res => setResponse(res));
  }, []);

  return {
    response
  };
}
