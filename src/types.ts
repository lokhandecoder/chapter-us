export interface SavedResponse {
  id: string;
  recipientName: string;
  senderName: string;
  choice: string;
  choiceTitle: string;
  note: string;
  timestamp: string;
}

export interface PersonalizationConfig {
  recipientName: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  sharedMemory: string;
  favoriteDrink: string;
  specialTrait: string;
}

export interface ComfortItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  pressureLevel: 'zero' | 'very low' | 'gentle';
  status: 'comfortable' | 'maybe later' | 'not now';
}

export interface ReliabilityCommitment {
  id: string;
  title: string;
  whatItMeans: string;
  concreteAction: string;
  fearItAddresses: string;
}

export type ResponseOption = 
  | 'coffee'
  | 'thinking'
  | 'chat_first'
  | 'stay_friends';
