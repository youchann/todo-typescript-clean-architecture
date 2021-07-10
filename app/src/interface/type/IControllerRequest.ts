export interface IControllerRequest {
  params: { [key in string]?: any };
  body: { [key in string]?: any };
  query: { [key in string]?: any };
}
