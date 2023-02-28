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

//fetches go here?
//export const fetchXRay = (examID) => API_ROOT.get(`/examdetails/${examID}`)
//export const createExam = (newExam) => API_ROOT.post('/', newExam);
//export const updateExam = (examID, updateExam) => API_ROOT.patch(`/examdetails/${examID}`, updatePost); patch replaces some of the data, put replaces all the data
//export const deleteExam = (examID) => API_ROOT.delete(`/examdetails/${examID}`);