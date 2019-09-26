export interface User {
  id: number;
  firstName: string;
  lastName: string;
  contactPreferense: string;
  mail?: string;
  phone?: number;
  address: {
    city: string;
    street: string;
    house: string;
  };
}
