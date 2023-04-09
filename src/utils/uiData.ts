import Speedometer from '../assets/icons/speedometer.svg';
import Scanner from '../assets/icons/scanner.svg';
import Detailed from '../assets/icons/detailed.svg';
import Onboarding1 from '../assets/images/onboarding-1.png';
import Onboarding2 from '../assets/images/onboarding-2.png';
import { Feature, OnBoardingData, TPlan } from './types';

export const onBoardingData = [
  {
    id: 0,
    titleStart: 'Take a photo to ',
    titleBold: 'identify',
    titleEnd: ' the plant!',
    image: Onboarding1
  },
  {
    id: 1,
    titleStart: 'Get plant ',
    titleBold: 'care guides',
    image: Onboarding2
  },
  {
    id: 2
  }
] as OnBoardingData[];

export const features = [
  {
    icon: Scanner,
    title: 'Unlimited',
    subTitle: 'Plant Identify'
  },
  {
    icon: Speedometer,
    title: 'Faster',
    subTitle: 'Process'
  },
  {
    icon: Detailed,
    title: 'Detailed',
    subTitle: 'Plant Care'
  }
] as Feature[];

export const plans = [
  {
    id: 0,
    title: '1 Month',
    description: '$2.99/month, auto renewable',
    badge: false
  },
  {
    id: 1,
    title: '1 Year',
    description: 'First 3 days free, then $29.99/year',
    badge: true
  }
] as TPlan[];
