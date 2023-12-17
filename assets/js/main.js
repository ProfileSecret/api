const form = document.querySelector("form");
const myChart = document.querySelector("#myChart");
const select = document.querySelector("#selectMoneda");
const input = document.querySelector("#moneda");
const conversion = document.querySelector("#conversion");
const calcular = document.querySelector("button");

const obtenerApi = async () => {
  try {
    const endPoint = await fetch(`https://www.mindicador.cl/api/`);
    const monedas = await endPoint.json();
    return monedas;
  } catch (error) {
    throw Error(error.message)
  }
};

const trabajoResp = async () => {
  const obtenermoneda = await obtenerApi();
  const array = Object.entries(obtenermoneda);
  select.innerHTML += `
  <option disabled>Moneda</ooption>
  <option name="${array[3][1].codigo}" value="${array[3][1].valor}">${array[3][1].codigo}</option>
  <option name="${array[5][1].codigo}" value="${array[5][1].valor}">${array[5][1].codigo}</option>
  <option name="${array[7][1].codigo}" value="${array[7][1].valor}">${array[7][1].codigo}</option>`.toLocaleUpperCase();
};

const convertirMoneda = () => {
  const resultado = +select.value * +input.value;
  conversion.innerHTML = resultado.toLocaleString("EN-US");
};

// const prepararGrafico = async () => {
//   const res = await obtenerApi()
//   const labels = Object.entries(res).map((moneda) => {
//     console.log(moneda);
//     return moneda
//   })
// }
// prepararGrafico()

// :ccc

trabajoResp();
calcular.addEventListener("click", convertirMoneda,);
