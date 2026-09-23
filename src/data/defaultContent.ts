import { ComfortItem, PersonalizationConfig, ReliabilityCommitment } from '../types';

export const defaultPersonalization: PersonalizationConfig = {
  recipientName: 'Dr. Trunali',
  senderName: 'Amit',
  senderEmail: 'amitlokhande909@gmail.com',
  senderPhone: '',
  sharedMemory: 'the two times we met this past month, and the honest conversation we shared today',
  favoriteDrink: 'warm tea, coffee, or a refreshing beverage after a long hospital shift',
  specialTrait: 'your dedication as a doctor, your quiet strength, and your honest, gentle heart',
};

export const whyILikeHerPoints = [
  {
    title: 'Your dedication & the heart behind your work',
    tagline: 'The compassion and strength you carry as Dr. Trunali',
    body: 'Being a doctor isn’t just a title—it demands emotional stamina, intellect, and giving so much of yourself to others every single day. Seeing your focus, your work ethic, and how grounded you remain through it all made me respect you on a level that goes far beyond surface attraction.',
    nuance: 'You give so much care to the world. You deserve someone who takes care of you in return, without demanding emotional labor from you.',
  },
  {
    title: 'How natural our conversation felt right from month one',
    tagline: 'Talking for a month and meeting twice showed me something rare',
    body: 'In the past month of talking and the two times we spent time together in person, there was an unmistakable calm. Neither of us had to put on a rehearsed personality or play games. The way we talk feels unforced, genuine, and grounded. I found myself looking forward to every message and every hour we shared.',
    nuance: 'It took only two in-person meetings for me to realize that staying "just friends" would be dishonest to what I truly feel for you.',
  },
  {
    title: 'Your authenticity as someone who has guarded her heart',
    tagline: 'Never having dated anyone is your strength, not a disadvantage',
    body: 'You haven’t jumped into relationships carelessly. You have protected your life, your focus, and your energy. That tells me your heart is rare and valuable. Today, when I told you how I felt and you agreed to date, it meant the world to me—because I know you don’t say yes lightly.',
    nuance: 'You have never dated anyone before, and that makes me want to protect your experience even more. Your first time exploring love should be patient, safe, and beautiful.',
  },
  {
    title: 'The peace you bring into my day',
    tagline: 'Being around you lowers my shoulders and clears my head',
    body: 'Modern life is fast and chaotic, but speaking with you brings a quiet clarity. You have an effortless grace, a sharp mind, and a sense of humor that catches me off guard in the best way. You make me want to be the steadiest, most reliable version of myself.',
    nuance: 'I didn’t just want to be around you as a friend; I wanted to be the person who holds your hand and stands by your side through everything.',
  },
];

export const whyDatingMakesSense = [
  {
    headline: 'You Said Yes Today — Let’s Honor That Courage',
    subtitle: 'Stepping into the unknown takes bravery, especially for the first time',
    description: 'Agreeing to date when you’ve never been in a relationship before is a courageous choice. I don’t take your "yes" for granted for a single second. We will take this step with care, patience, and zero rushed expectations.',
  },
  {
    headline: 'Built Around Your Demanding Life, Never In Competition With It',
    subtitle: 'Medicine is your calling; I am here to support you, not add stress',
    description: 'Being a doctor means erratic shifts, high pressure, and days when you just need silence and rest. Dating me will never feel like another chore or demand on your calendar. I will always be a place where you can decompress and exhale.',
  },
  {
    headline: 'A Clean Slate: No Past Baggage, Just Honest Discovery',
    subtitle: 'We write our own rulebook from scratch',
    description: 'Because you’ve never dated anyone, you don’t have to unlearn bad habits or compare us to anyone else. We get to build something pure, healthy, and tailored entirely around what feels comfortable to you.',
  },
];

export const attachmentFears = [
  {
    fear: 'I have never dated anyone, so attachment feels unfamiliar, unpredictable, and scary.',
    reality: 'It is 100% normal to feel anxious about territory you have never explored.',
    howWeHandleIt: 'You don’t have to know "how to date." There is no exam to pass. We take things day by day. You never have to guess what I expect from you—I will always communicate with total clarity and kindness.',
  },
  {
    fear: 'Will dating take away my independence, my focus on medicine, and my personal space?',
    reality: 'Healthy love expands your world; it never suffocates your life or career.',
    howWeHandleIt: 'Your independence as Dr. Trunali is sacred. Your study hours, clinic duties, and alone time come first. When you have night duties or long shifts, I will cheer you on and give you space to sleep, not complain about lack of attention.',
  },
  {
    fear: 'I have trust issues because I have always relied only on myself.',
    reality: 'You are used to being completely self-reliant, so letting someone close feels vulnerable.',
    howWeHandleIt: 'I don’t expect you to magically let your guard down overnight. I will demonstrate steady reliability through actions: showing up on time, keeping every promise, and being predictable and calm every single day.',
  },
  {
    fear: 'What if we move too fast and I feel overwhelmed or cornered?',
    reality: 'You hold the remote control to our pacing at all times.',
    howWeHandleIt: 'If at any point anything feels too fast, you can say "Can we slow this down?" or "I need a quiet weekend." I will smile, thank you for communicating, and adjust immediately with zero guilt.',
  },
];

export const microSteps = [
  {
    stepNumber: '01',
    name: 'Our 3rd Meeting: The Low-Stakes Post-Shift Coffee / Walk',
    duration: '45 mins (Hard stop)',
    concept: 'Now that we agreed to date, our next meet doesn’t need to be an intimidating formal dinner. Just 45 minutes of quiet coffee or tea near your place or hospital so you can relax after your day.',
    safeEscape: 'Hard stop built in: "You have rounds/rest scheduled." Easy, refreshing, and zero pressure.',
  },
  {
    stepNumber: '02',
    name: 'Low-Pressure Shared Relaxation',
    duration: '1 – 1.5 hours',
    concept: 'A calm afternoon trying good food, strolling through a quiet garden, or browsing books. Focused on enjoying good company without intense spotlight pressure.',
    safeEscape: 'Keeps nervous energy low and lets you see how comforting and simple spending time together really is.',
  },
  {
    stepNumber: '03',
    name: 'The "First-Timer" Check-In',
    duration: '10 min chat',
    concept: 'A comfortable check-in after a couple of dates: "How has this felt for your very first dating experience? Are we moving at a pace that feels peaceful to you?"',
    safeEscape: 'Total freedom to adjust the dial, take a breather, or slow down.',
  },
  {
    stepNumber: '04',
    name: 'Natural, Organic Deepening',
    duration: 'At your comfort',
    concept: 'Letting genuine affection grow organically as trust is proven day after day. No rushed timelines or forced expectations.',
    safeEscape: 'You always remain the co-author of our pace.',
  },
];

export const reliabilityCommitments: ReliabilityCommitment[] = [
  {
    id: 'consistency',
    title: 'Zero Hot-and-Cold Behavior (Predictability)',
    whatItMeans: 'You will never have to wonder where you stand or decipher confusing signals.',
    concreteAction: 'No disappearing acts, no moody silent treatments. If I am occupied, I let you know beforehand. You have spent your life being self-reliant; you will never have to guess my intentions.',
    fearItAddresses: 'Fear of emotional instability and second-guessing someone’s feelings.',
  },
  {
    id: 'doctor_schedule',
    title: 'Full Respect for Your Medical Duties & Exhaustion',
    whatItMeans: 'Your career and sleep are protected, never resented.',
    concreteAction: 'If you have emergency cases, extended shifts, or post-call fatigue, I will never guilt-trip you or whine about delayed texts. I will ask if you ate, encourage you to sleep, and be patient.',
    fearItAddresses: 'Fear that a partner will demand too much time or resent your calling.',
  },
  {
    id: 'boundaries',
    title: 'Your "No" or Need for Space is Celebrated',
    whatItMeans: 'Boundaries are met with gratitude, not passive aggression.',
    concreteAction: 'If you say you are too tired to meet or need a few days of quiet solitude, I will say "Rest well, proud of you today" with genuine warmth. No guilt trips ever.',
    fearItAddresses: 'Fear of losing personal autonomy and feeling trapped.',
  },
  {
    id: 'patience_first_timer',
    title: 'Patience With Your Very First Relationship Steps',
    whatItMeans: 'There is zero pressure to already know how everything works.',
    concreteAction: 'I will never expect you to move at anyone else’s speed. Your comfort, your physical boundaries, and your emotional readiness set the pace.',
    fearItAddresses: 'Fear of being judged or pressured into things before you are ready.',
  },
  {
    id: 'safe_confidant',
    title: 'An Emotionally Safe Confidant',
    whatItMeans: 'Whatever you share with me is held with absolute discretion and care.',
    concreteAction: 'You can talk about your hardest days, your self-doubts, or your fears without worrying that they will be weaponized or judged. I am in your corner.',
    fearItAddresses: 'Fear of vulnerability being used against you.',
  },
];

export const defaultComfortItems: ComfortItem[] = [
  {
    id: 'c1',
    title: 'A 30-45 minute post-shift coffee or fresh juice',
    description: 'A quick, restorative pause after work with a predefined departure time.',
    duration: '30-45 mins',
    pressureLevel: 'zero',
    status: 'comfortable',
  },
  {
    id: 'c2',
    title: 'Light evening text check-ins (“Did you get home safe?” / “How was your day?”)',
    description: 'Caring touchpoints without requiring immediate replies during busy hospital hours.',
    duration: 'Ongoing',
    pressureLevel: 'zero',
    status: 'comfortable',
  },
  {
    id: 'c3',
    title: 'An easy weekend afternoon walk in open fresh air',
    description: 'Quiet park or waterfront stroll to decompress away from hospital halls.',
    duration: '45 mins',
    pressureLevel: 'very low',
    status: 'comfortable',
  },
  {
    id: 'c4',
    title: 'A cozy casual dinner or trying a dessert spot together',
    description: 'Sitting down for a relaxed meal together without any fancy dress code.',
    duration: '1 hr',
    pressureLevel: 'very low',
    status: 'comfortable',
  },
  {
    id: 'c5',
    title: 'A 15-minute winding-down phone call before sleep',
    description: 'Hearing each other’s voice to recap the day and ease into sleep.',
    duration: '15 mins',
    pressureLevel: 'gentle',
    status: 'maybe later',
  },
  {
    id: 'c6',
    title: 'Planning a relaxing half-day outing on an off-duty weekend',
    description: 'Exploring a nearby museum, botanical garden, or scenic spot at an unhurried pace.',
    duration: '2-3 hrs',
    pressureLevel: 'gentle',
    status: 'maybe later',
  },
];

export const groundRules = [
  {
    rule: 'The Doctor’s Sanctuary Clause',
    explanation: 'Your patients, duties, and recovery sleep come first. Dating should be a calming shelter from stress, never an additional task on your plate.',
  },
  {
    rule: 'The "First-Time Grace" Agreement',
    explanation: 'Because this is your first time dating, there are zero dumb questions and zero expectations. Whatever feels unfamiliar, we discuss with laughter and kindness.',
  },
  {
    rule: 'The "Yellow Light" Safe Word',
    explanation: 'If anything feels too fast or emotionally overwhelming, you can say "Yellow light" anytime. We pause or slow down immediately, with zero questions or resentment.',
  },
  {
    rule: 'Honesty Over Pretense',
    explanation: 'You never have to pretend you are full of energy when you are exhausted. You can show up as your tired, messy, quiet self, and you will be completely cherished.',
  },
];
