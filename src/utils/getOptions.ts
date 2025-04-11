import { connectionOptions, attractionOptions } from "./listOptions";

export const getOptions = (type: "connection" | "attraction") => {
  if (type === 'connection') {
    return connectionOptions;
  }

  return attractionOptions;
}