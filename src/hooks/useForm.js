import { useState, useCallback } from 'react';

const useForm = () => {
  const [errors, setErrors] = useState({});
  const [isInputValid, setisInputValid] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChangeInput = (e) => {
    setErrors((errorsMessage) => (
      { ...errorsMessage, [e.target.name]: e.target.validationMessage }));

    setisInputValid(() => ({ ...isInputValid, [e.target.name]: e.target.validity.valid }));

    setIsValid(e.target.form.checkValidity());
  };

  const resetForm = useCallback(() => {
    setErrors({});
    setisInputValid({});
    setIsValid(false);
  }, []);

  return {
    errors, isInputValid, isValid, handleChangeInput, resetForm, setIsValid,
  };
};

export default useForm;
