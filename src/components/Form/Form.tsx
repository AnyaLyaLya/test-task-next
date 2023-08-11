// Importing necessary modules and components
import Image from 'next/image';
import { validateName, validateEmail, validatePhone } from '../../utils/validation.utils';
import './form.scss';
import cn from 'classnames';
import { FormEvent, useState } from 'react';

interface FormData {
  [key: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

// Defining the Form component
export default function Form() {
  // Defining the form fields and their attributes
  const fields = [
    { name: 'firstName', label: 'First Name', validator: validateName },
    { name: 'lastName', label: 'Last Name', validator: validateName },
    { name: 'email', label: 'Email', validator: validateEmail },
    { name: 'phoneNumber', label: 'Phone Number', validator: validatePhone },
  ];

  // Initializing form data state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  // State for selected subject and focused input
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedInput, setSelectedInput] = useState('');

  // State to track if an input field is focused
  const [isFocused, setIsFocused] = useState(false);

  // Handling form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validating form fields using the defined validators
    for (const field of fields) {
      if (!field.validator(formData[field.name])) {
        alert(`Invalid ${field.label}`);
        return;
      }
    }
    // Clearing form data on successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });

    setSelectedSubject('');
  };

  // Handling changes in form fields
  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__header">
        {/* Mapping through fields to generate input labels and fields */}
        {fields.map(field => (
          <label
            key={field.name}
            className={cn('form__label', { 'form__label--focused': field.name === selectedInput })}
          >
            {field.label}
            <input
              type="text"
              className="form__input"
              value={formData[field.name]}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onFocus={() => setSelectedInput(field.name)}
              onBlur={() => setSelectedInput('')}
              required
            />
          </label>
        ))}
      </div>

      {/* Selecting a subject */}
      <div className='form__select'>
        <h3 className='form__select--title'>Select Subject?</h3>
        {/* Radio buttons for subject selection */}
        <input 
          id="radio-1" 
          className="radio-custom" 
          name="radio-group" 
          type="radio" 
          value={selectedSubject} 
          onClick={(e) => setSelectedSubject((e.target as HTMLInputElement).value)} 
        />
        <label htmlFor="radio-1" className="radio-custom-label">General Inquiry</label>

        <input 
          id="radio-2" 
          className="radio-custom" 
          name="radio-group" 
          type="radio" 
          value={selectedSubject} 
          onClick={(e) => setSelectedSubject((e.target as HTMLInputElement).value)} 
        />
        <label htmlFor="radio-2" className="radio-custom-label">General Inquiry</label>

        <input 
          id="radio-3" 
          className="radio-custom" 
          name="radio-group" 
          type="radio" 
          value={selectedSubject} 
          onClick={(e) => setSelectedSubject((e.target as HTMLInputElement).value)} 
        />
        <label htmlFor="radio-3" className="radio-custom-label">General Inquiry</label>

        <input 
          id="radio-4" 
          className="radio-custom" 
          name="radio-group" 
          type="radio" 
          value={selectedSubject} 
          onClick={(e) => setSelectedSubject((e.target as HTMLInputElement).value)} 
        />
        <label htmlFor="radio-4" className="radio-custom-label">General Inquiry</label>
      </div>

      {/* Message input field */}
      <label className={cn('form__label', { 'form__label--focused': 'message' === selectedInput })}>
        Message
        <input 
          type="text" 
          className='form__input' 
          placeholder='Write your message..'
          value={formData.message}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          onFocus={() => setSelectedInput('message')}
          onBlur={() => setSelectedInput('')}
          required
        />
      </label>

      {/* Submit button */}
      <button className="form__button" type='submit'>
        Send Message
      </button>
    </form>
  )
}
