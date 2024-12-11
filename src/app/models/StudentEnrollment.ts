export interface Student {
    studentID?: number; // Optional property
    studentNumber: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string | Date; 
    emailAddress: string;
    mobileNumber?: string;
    address?: string;
    isActive: boolean;
  }
  