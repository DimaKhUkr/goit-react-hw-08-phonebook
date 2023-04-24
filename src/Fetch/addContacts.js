import axios from 'axios';

export async function addContacts({ name, phone }) {
  console.log('+++++');
  console.log(name);
  console.log(phone);
  const response = axios.post(`/contacts`, { name, phone });
  return response;
}
