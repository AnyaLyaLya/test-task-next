export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s]{2,}$/;

  return nameRegex.test(name.trim());
};

export const validateEmail = (em: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(em);
};

export const validatePhone = (phoneNumber: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/; 

  return phoneRegex.test(phoneNumber);
};


