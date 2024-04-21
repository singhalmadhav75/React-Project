import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserDataForm: React.FC = () => {
  const { register, handleSubmit, setValue, formState } = useForm<FormData>();
  const [isFormDirty, setIsFormDirty] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsFormDirty(false);
    // Save data to local storage
    localStorage.setItem('userData', JSON.stringify(data));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name as keyof FormData, e.target.value);
    setIsFormDirty(true);
  };

  const handleFormSubmit = () => {
    handleSubmit(onSubmit)();
  };

  // Check for unsaved changes before leaving the page
  window.onbeforeunload = (e: BeforeUnloadEvent) => {
    if (isFormDirty) {
      const message = 'You have unsaved changes. Are you sure you want to leave?';
      e.returnValue = message;
      return message;
    }
  };

  return (
    <div>
      <h1>User Data Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" {...register('name')} onChange={handleInputChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" {...register('address')} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email')} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" {...register('phone')} onChange={handleInputChange} />
        </div>
        <button type="submit" disabled={!formState.isDirty}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UserDataForm;
