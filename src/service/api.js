import { mockFetch } from "./mock-fetch";

const makeOrganizationResolver = organizations => user =>{
  // Неуклюже, потому что неправильно выбрано наименование полей, комментарий в бекенде
  const organization = organizations.find(organization => organization.id === user.organization)
  return organization ? {...user, organization} : user;    
};

export function getUsers() {
  return mockFetch("/users");
}

export function getOrganizations() {
  return mockFetch("/organizations");
}

export const getData = () => (
  Promise.all([getUsers(), getOrganizations()])
  .then(([users, organizations]) => {
    return users.map(makeOrganizationResolver(organizations))
  }));  
