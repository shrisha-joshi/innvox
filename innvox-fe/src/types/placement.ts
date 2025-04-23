export interface PlacementOpportunity {
  id: string;
  companyName: string;
  role: string;
  type: 'internship' | 'placement';
  requiredSkills: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  lastDateToApply: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'closed';
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface PlacementApplication {
  id: string;
  opportunityId: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: string;
  updatedAt: string;
} 