
export interface PricingData {
  id: string;
  name: string;
  price: string;
  features: { feature: string }[];
}

export const pricingData: PricingData[] = [
  {
    id: 'premium',
    name: 'Premium',
    price: '6500.00',
    features: [
      { feature: 'Unlimited Counselling Sessions' },
      { feature: 'Full Application Assistance' },
      { feature: 'Visa File Preparation & Review"' },
      { feature: 'Interview & Pre-departure Training' },
      { feature: 'Travel & Accommodation Assistance' },
      { feature: 'Post-arrival Settlement Help' },
      { feature: 'Personal Case Manager' },
      { feature: 'Mock Visa Interview Training' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '3500.00',
    features: [
      { feature: '3 Counselling Sessions' },
      { feature: 'University Shortlisting' },
      { feature: 'SOP & CV Editing Support' },
      { feature: 'Document Review & Formatting' },
      { feature: 'Education Loan Guidance' },
      { feature: 'Interview Preparation Call' },
      { feature: 'Priority Email & Call Support' },
      { feature: 'University Shortlisting (5 Options)' },
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '1500.00',
    features: [
      { feature: '1 Counselling Session' },
      { feature: 'Course & Country Guidance"' },
      { feature: 'Application Process Overview' },
      { feature: 'Basic Document Checklist' },
      { feature: 'Email Support' },
      { feature: 'University Information Access' },
      { feature: 'Guidance for Test Preparation' },
      { feature: 'Basic SOP & CV Template' },
    ],
  },
];
