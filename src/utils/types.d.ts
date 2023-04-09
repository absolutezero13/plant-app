export interface OnBoardingData {
  id: number;
  titleStart?: string;
  titleBold?: string;
  titleEnd?: string;
  image?: ImageSourcePropType;
}

export interface Feature {
  icon: React.FC<IconProps>;
  title: string;
  subTitle: string;
}

export interface TPlan {
  id: number;
  title: string;
  description: string;
  badge: boolean;
}
