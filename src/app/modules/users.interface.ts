type TFullName = {
  firstName: string;
  lastName: string;
};

type TAddress = {
    street: string;
    city: string;
    country: string;
  };

export type TUser = {
  userId: number;
  username: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress
};