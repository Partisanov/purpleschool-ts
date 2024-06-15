import axios from 'axios';

interface IUsersResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: UserGender;
  email: string;
  phone: string;
  userName: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: ICrypto;
  role: Role;
}
enum UserGender {
  Male = 'male',
  Female = 'female'
}

interface IHair {
  color: string;
  type: TypeHair;
}

enum TypeHair {
  Curly = "Curly",
  Kinky = "Kinky",
  Straight = "Straight",
  Wavy = "Wavy",
}

interface IAddress {
  address:     string;
  city:        string;
  state:       string;
  stateCode:   string;
  postalCode:  string;
  coordinates: ICoordinates;
  country:     Country;
}

interface ICoordinates {
  lat: number;
  lng: number;
}

enum Country {
  UnitedStates = "United States",
}

interface IBank {
  cardExpire: string;
  cardNumber: string;
  cardType:   string;
  currency:   string;
  iban:       string;
}

interface ICompany {
  department: string;
  name:       string;
  title:      string;
  address:    IAddress;
}

interface ICrypto {
  coin: string;
  wallet: string;
  network: string;
  
}
enum Role {
  Admin = "admin",
  Moderator = "moderator",
  User = "user",
}

const fetchUsers = async ()  => {
  try {
    const { data }= await axios.get<IUsersResponse>('https://dummyjson.com/users');
    const users:IUser[] = data.users;
    console.log(users);
    
  } catch (error) {
    console.log(error);
  }
};

