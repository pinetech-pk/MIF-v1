export interface User {
  _id: string;
  email: string;
  name: string;
  role: "donor" | "student" | "parent" | "admin" | "super-admin";
  kindeId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  category: "education" | "health" | "microfinancing" | "social-welfare";
  targetAmount: number;
  raisedAmount: number;
  beneficiaries: string[]; // Beneficiary IDs
  images: string[];
  status: "active" | "completed" | "paused";
  createdBy: string; // Admin ID
  createdAt: Date;
  updatedAt: Date;
}

export interface Donation {
  _id: string;
  donorId: string;
  projectId: string;
  amount: number;
  currency: string;
  stripePaymentId: string;
  status: "pending" | "completed" | "failed";
  message?: string;
  createdAt: Date;
}

export interface Beneficiary {
  _id: string;
  name: string;
  age: number;
  category: "education" | "health" | "microfinancing" | "social-welfare";
  story: string;
  images: string[];
  projectId: string;
  donorConnections: string[]; // Donor IDs connected to this beneficiary
  updates: BeneficiaryUpdate[];
  createdAt: Date;
}

export interface BeneficiaryUpdate {
  title: string;
  description: string;
  images?: string[];
  date: Date;
}
