import { Record } from './types';

const mockData: Record[] = [
  {
    id: '1',
    salary: 15000,
    documents: [
      { id: '1', name: 'Offer.pdf' },
      { id: '2', name: 'Employment.pdf' },
      { id: '3', name: 'Assignment.pdf' }
    ]
  },
  {
    id: '2',
    salary: 36000,
    documents: [
      { id: '1', name: 'Offer.pdf' },
      { id: '2', name: 'Employment.pdf' },
      { id: '3', name: 'Offer.pdf' },
      { id: '4', name: 'Employment.pdf' },
      { id: '5', name: 'Offer.pdf' },
      { id: '6', name: 'Communication_line.pdf' },
      { id: '7', name: 'Offer.pdf' },
      { id: '8', name: 'Employment.pdf' },
      { id: '9', name: 'Offer.pdf' },
      { id: '10', name: 'Communication_line.pdf' },
      { id: '11', name: 'Offer.pdf' }
    ]
  },
  {
    id: '3',
    salary: 20000,
    documents: [
      { id: '1', name: 'Offer.pdf' },
      { id: '2', name: 'Employment.pdf' },
      { id: '3', name: 'Assignment.pdf' }
    ]
  },
  {
    id: '4',
    salary: 20000,
    documents: [
      { id: '1', name: 'Offer.pdf' },
      { id: '2', name: 'Employment.pdf' },
      { id: '3', name: 'Offer.pdf' },
      { id: '4', name: 'Employment.pdf' },
      { id: '5', name: 'Offer.pdf' },
      { id: '6', name: 'Communication_line.pdf' },
      { id: '7', name: 'Offer.pdf' },
      { id: '8', name: 'Employment.pdf' },
      { id: '9', name: 'Offer.pdf' },
      { id: '10', name: 'Communication_line.pdf' }
    ]
  }
];

export default mockData;
