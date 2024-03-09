export const respiracao = (resp: string, litragem?: string) => {
  switch (resp) {
    case "Ar Ambiente":
      return "respirando em ar ambiente";
      break;
    case "Cateter Nasal":
      return "respirando com auxilio de cateter nasal a " + litragem + "L/min";
      break;
    case "Névoa Úmida":
      return "respirando com auxilio de névoa úmida a " + litragem + "L/min";
      break;
    case "Mascara com Reservatorio":
      return (
        "respirando com auxilio de mascará com reservatorio a " +
        litragem +
        "L/min"
      );
      break;
    default:
      return;
      break;
  }
};

export const alimentaBarra = (percent: string, ali: string, vol?: string) => {
  if (ali == "Jejum") {
    return "mantém jejum via oral";
  }
  if (ali == "SNE") {
    return `mantém SNE com dieta em curso a ${vol} mL/h`;
  }
  if (ali == "Gastrostomia") {
    return `mantém Gastrostomia com dieta em curso a ${vol} mL/h`;
  }
  if (ali == "Jejunostomia") {
    return `mantém Jejunostomia com dieta em curso a ${vol} mL/h`;
  }

  if (Number(percent) >= 0 && Number(percent) <= 40) {
    return `relata pouca aceitação de dieta VO oferecida, cerca de ${percent}% do oferecido`;
  }
  if (Number(percent) >= 41 && Number(percent) <= 60) {
    return `relata média aceitação de dieta VO oferecida, cerca de ${percent}% do oferecido`;
  }
  if (Number(percent) >= 61 && Number(percent) <= 100) {
    return `relata boa aceitação de dieta VO oferecida, cerca de ${percent}% do oferecido`;
  }
};

export const acessoFunc = (acesso: string, local: string, type?: string) => {
  switch (acesso) {
    case "Sem Acesso":
      return `mantém sem acesso venoso`;
    case "Acesso Venoso Periferico":
      return `mantém acesso venoso periferico em ${local}`;
    case "Acesso Venoso Central":
      return `mantém ${type} em ${local}`;
    case "Hipodermoclise":
      return `mantém hipodermoclise em região de ${local}`;
    case "PICC":
      return `mantém PICC EM ${local}`;
    default:
      break;
  }
};
