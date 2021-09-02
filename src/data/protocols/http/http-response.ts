export enum HttpStatusCode {
  ok = 200,
  unauthorized = 401,
  badRequest = 400,
  noContent = 204,
  notFound = 404,
  serverError = 500
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}