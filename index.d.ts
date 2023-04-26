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
  save(): unknown
  _id: string,
  name: string,
  lastName: string,
  photo: string,
  mail: string,
  password: string,
  logged: boolean
} 

type ErrorRes = {
  data: string,
  status: number
}


type userCredentials = {
  _id: string | null,
  fullName: string | null,
  photo: string | null,
  logged: string | null
}

