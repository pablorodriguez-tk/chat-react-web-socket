import moment from "moment";

export const horaMes = (fecha) => {
  const hoyMes = moment(fecha);
  return hoyMes.format("hh:mm a | MMMM D");
};
