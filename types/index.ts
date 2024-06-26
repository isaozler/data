/** This is th base card prop type */
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

/** These are the available card types */
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

/** These are the props that get extended by the various card types */
export type TCardBase = {
  id: string
  title: string
  description?: string
}

/** Avatar Card Type */
export type TCardAvatar = TCardBase & {
  type: ECardType.AVATAR
  data: TAvatarProps
}

/** List Card Type */
export type TCardList = TCardBase & {
  type: ECardType.LIST
  data: TListProps
}

/** Icon List Card Type */
export type TCardIconList = TCardBase & {
  type: ECardType.ICONLIST
  data: TIconListProps
}

/** Content Card Type */
export type TCardContent = TCardBase & {
  type: ECardType.CONTENT
  data: TContentProps
}

/** Education Card Type */
export type TCardEducation = TCardBase & {
  type: ECardType.EDUCATION
  data: TEducationProps
}

/** Experience Card Type */
export type TCardExperience = TCardBase & {
  type: ECardType.EXPERIENCE
  data: TExperienceProps
}

/** Work Card Type */
export type TCardWork = TCardBase & {
  type: ECardType.WORK
  data: TWorkProps
}

/** Recommendation Card Type */
export type TCardRecommendation = TCardBase & {
  type: ECardType.RECOMMENDATION
  data: TRecommendationProps
}

/** The Card Props */
export type TCardsProps =
  | TCardAvatar
  | TCardList
  | TCardIconList
  | TCardContent
  | TCardEducation
  | TCardExperience
  | TCardWork
  | TCardRecommendation

/** Section Properties */
export type TSection = {
  id: string
  title: string
  description?: string
  cards: TCardsProps[]
}
