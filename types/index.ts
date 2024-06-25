export type TBaseCardProps = {
  isActive?: boolean
}

import type { TProps as TAvatarProps } from './section/avatar.ts'
import { TProps as TContentProps } from './section/content.ts'
import { TProps as TEducationProps } from './section/education.ts'
import { TProps as TExperienceProps } from './section/experience.ts'
import { TProps as TWorkProps } from './section/work.ts'
import { TProps as TRecommendationProps } from './section/recommendation.ts'
import { TList as TListProps, TIconList as TIconListProps } from './section/list.ts'

export enum ECardType {
  AVATAR = 'avatarCard',
  LIST = 'listCard',
  ICONLIST = 'iconListCard',
  CONTENT = 'contentCard',
  EDUCATION = 'educationCard',
  EXPERIENCE = 'experienceCard',
  WORK = 'workCard',
  RECOMMENDATION = 'recommendationCard',
}

export type TCardBase = {
  id: string
  title: string
  description?: string
}

export type TCardAvatar = TCardBase & {
  type: ECardType.AVATAR
  data: TAvatarProps
}
export type TCardList = TCardBase & {
  type: ECardType.LIST
  data: TListProps
}
export type TCardIconList = TCardBase & {
  type: ECardType.ICONLIST
  data: TIconListProps
}
export type TCardContent = TCardBase & {
  type: ECardType.CONTENT
  data: TContentProps
}
export type TCardEducation = TCardBase & {
  type: ECardType.EDUCATION
  data: TEducationProps
}
export type TCardExperience = TCardBase & {
  type: ECardType.EXPERIENCE
  data: TExperienceProps
}
export type TCardWork = TCardBase & {
  type: ECardType.WORK
  data: TWorkProps
}
export type TCardRecommendation = TCardBase & {
  type: ECardType.RECOMMENDATION
  data: TRecommendationProps
}

export type TCardsProps =
  | TCardAvatar
  | TCardList
  | TCardIconList
  | TCardContent
  | TCardEducation
  | TCardExperience
  | TCardWork
  | TCardRecommendation

export type TSection = {
  id: string
  title: string
  description?: string
  cards: TCardsProps[]
}
