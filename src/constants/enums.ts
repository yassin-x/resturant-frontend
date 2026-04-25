export enum Role {
  USER = "USER",
  CLIENT = "CLIENT",
  STAFF = "STAFF",
  OWNER = "OWNER",
}

export enum Routes {
  HOME = "/",
  AUTH = "auth",
  USER = "user",
  ADMIN = "admin",
}

export enum Pages {
  SIGNIN = "signin",
  SIGNUP = "signup",
  PROFILE = "profile",
  ADD_ITEM = "add-item",
  DELETE_ITEM = "delete-item",
  UPDATE_ITEM = "update-item",
  VIEW_ORDERS = "view-orders",
}

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  DATE = "date",
  TIME = "time",
  DATE_TIME_LOCAL = "datetime-local",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SELECT = "select",
  PHONE = "phone",
  TEXTAREA = "textarea",
  FILE = "file",
  IMAGE = "image",
  OTP = "otp",
  COLOR = "color",
  RANGE = "range",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
  MONTH = "month",
  WEEK = "week",
  HIDDEN = "hidden",
  MULTI_SELECT = "multi select",
}

export enum Environments {
  PROD = "production",
  DEV = "development",
}

export enum MenuCategory {
  PIZZA = "PIZZA",
  BURGER = "BURGER",
  DRINKS  = "DRINKS",
}
