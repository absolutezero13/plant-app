import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface HomeState {
  questions: { data: Question[]; pending: boolean; error: any };
  categories: { data: Category[]; pending: boolean; error: any };
}

export type ThunkDispatchType = ThunkDispatch<HomeState, undefined, AnyAction>;
export type ThunkActionType = ThunkDispatch<
  Promise<void>,
  HomeState,
  undefined,
  AnyAction
>;
