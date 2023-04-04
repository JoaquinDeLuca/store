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
  _id: TProductId
  name: string
  price: number
  image: Url
  attributes: TProductAttributes
  amount?: number
}

type IUSER = {
  _id: string,
  name: string,
  lastName: string,
  photo: string,
  mail: string,
  password: string,
  logged: boolean
} 