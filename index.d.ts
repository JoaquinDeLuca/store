type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  description: string
  SpeakerType: string
  OutputPower: string
  FrequencyResponse: string
  Sensitivity: string
  Dimensions: string
  Weight: string
  Battery: string
  BatteryLife: string
  TypeOfConnector: string
}

type TProduct = {
  id: TProductId
  name: string
  price: number
  image: Url
  attributes: TProductAttributes
  amount?: number
}

type TAPISpeakerDetailResponse = TProduct

type TAPISpeakerResponse = {
  length: number
  data: TProduct[]
  error?: string
}