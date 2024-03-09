"use client";

import Label from "@/app/_components/Label";
import Select from "@/app/_components/Select";
import Input from "@/app/_components/Input";
import { useState } from "react";
import { acessoFunc, alimentaBarra, respiracao } from "../helpers/helpers";

export default function Gerador() {
  const [turno, setTurno] = useState("");
  const [resp, setResp] = useState("Ar Ambiente");
  const [litragem, setLitragem] = useState("");
  const [aliment, setAliment] = useState("Via Oral");
  const [percentAli, setPercentAli] = useState("");
  const [volDieta, setVolDieta] = useState("");
  const [acesso, setAcesso] = useState("Sem Acesso");
  const [acessoLocal, setAcessoLocal] = useState("Membro Superior Direito");
  const [tipoCateter, setTipoCateter] = useState("Duplo Lumem");
  const [dorPalp, setDorPalp] = useState("Sim");
  const [curativo, setCurativo] = useState("Sim");
  const [numeroCurativo, setNumeroCurativo] = useState(0);
  const [inputsCurativos, setInputsCurativo] = useState<any[]>([]);
  const [localCurativo, setLocalCurativo] = useState<any[]>([]);
  const [dor, setDor] = useState("s");
  const [evolucao, setEvolucao] = useState("");
  const [hora, setHora] = useState("");
  const [sexo, setSexo] = useState("masc");
  const [nivelConsciencia, setNivelConsciencia] = useState("");
  const [estadoAtual, setEstadoAtual] = useState("Acordado");
  const [curativoAcesso, setCurativoAcesso] = useState("");
  const [abdomem, setAbdomem] = useState("");
  const [diurese, setDiurese] = useState("");
  const [evacuacao, setEvacuacao] = useState("");
  const [locomocao, setLocomocao] = useState("");
  const [localDor, setlocalDor] = useState("");
  const [acompanhante, setAcompanhnte] = useState("");

  const gerarLocaisCurativos = () => {
    let numeroCurativos = numeroCurativo;
    // let divPai = document.createElement("div");
    let arr = [];

    for (let index = 1; index <= numeroCurativos; index++) {
      arr.push(index);
    }

    setInputsCurativo(arr);
  };
  const handleInputChange = (index: number, value: string) => {
    const newValues = [...localCurativo];
    newValues[index] = value;
    setLocalCurativo(newValues);
  };
  const handleTurno = (value: string) => {
    setTurno(value);
  };
  const handleHora = (value: string) => {
    setHora(value);
  };
  const handleEstAtual = (value: string) => {
    setEstadoAtual(value);
  };
  const handleNivelCon = (value: string) => {
    setNivelConsciencia(value);
  };
  const handleResp = (value: string) => {
    setResp(value);
  };
  const handleLitragem = (value: string) => {
    setLitragem(value);
  };
  const handleAlimenta = (value: string) => {
    setAliment(value);
  };
  const handlePercAli = (value: string) => {
    setPercentAli(value);
  };
  const handleMlDieta = (value: string) => {
    setVolDieta(value);
  };
  const handleAcesso = (value: string) => {
    setAcesso(value);
  };
  const halndleLocalAcesso = (value: string) => {
    setAcessoLocal(value);
  };
  const handleTipoCateter = (value: string) => {
    setTipoCateter(value);
  };
  const handleCurativoAcessoVenoso = (value: string) => {
    setCurativoAcesso(value);
  };
  const handleAbdomem = (value: string) => {
    setAbdomem(value);
  };
  const handleDorPalp = (value: string) => {
    setDorPalp(value);
  };
  const handleCurativo = (value: string) => {
    setCurativo(value);
  };
  const handleNumCurativos = (value: string) => {
    setNumeroCurativo(Number(value));
  };
  const handleDiurese = (value: string) => {
    setDiurese(value);
  };
  const handleEvacuacao = (value: string) => {
    setEvacuacao(value);
  };
  const handleLocomocao = (value: string) => {
    setLocomocao(value);
  };
  const handleDor = (value: string) => {
    setDor(value);
  };
  const handleLocalDor = (value: string) => {
    setlocalDor(value);
  };
  const handleAcompanhante = (value: string) => {
    setAcompanhnte(value);
  };
  const handleSexo = (value: string) => {
    setSexo(value);
  };

  const gerarEvolucao = () => {
    const respiracaoText = respiracao(resp, litragem);
    const alimetText = alimentaBarra(percentAli, aliment, volDieta);
    const acessoText = acessoFunc(acesso, acessoLocal, tipoCateter);

    let evol = `${hora}hrs: ${estadoAtual}, ${nivelConsciencia}, ${respiracaoText}, ${alimetText}, ${acessoText} `;

    setEvolucao(evol.toLocaleUpperCase());
  };

  return (
    <div className="w-[1200px] m-auto flex flex-col items-center justify-center my-8 border-t-2 border-red-400 ">
      <h1 className="text-4xl mt-8">Gerador de Evolução de Enfermagem</h1>

      <div className="w-full flex flex-col ">
        <div className="flex w-full items-center justify-between">
          <section className="flex flex-col items-center gap-4 mt-8  w-full mr-8">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="clock" label="Hora da Avaliação" />
            </div>
            <Input type="time" onChange={handleHora} />
          </section>
          <section className="flex flex-col items-center gap-4 mt-8  w-full">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="user" label="Sexo do paciente" />
            </div>
            <Select
              defaultOption="Selecione o sexo do paciente"
              options={["Masculino", "Feminino"]}
              onChange={handleSexo}
            />
          </section>
        </div>
        <section className="flex flex-col items-center gap-4 mt-8">
          <div className="flex justify-start items-center w-full gap-2">
            <Label icon="sun" label="Escolha seu Turno" />
          </div>
          <Select
            defaultOption="Selecione seu turno"
            options={["Manhã", "Tarde", "Noite"]}
            onChange={handleTurno}
          />
        </section>
        <section className="flex flex-col items-center gap-4 mt-8">
          <Label icon="brain" label="Estado atual" />
          <Select
            defaultOption="Estado atual"
            options={["Acordado", "Sonolento", "Sedado", "Dormindo"]}
            onChange={handleEstAtual}
          />
        </section>
        <section className="flex flex-col items-center gap-4 mt-8">
          <div className="flex justify-start items-center w-full gap-2">
            <Label icon="brain" label="Nivel de Consciencia"></Label>
          </div>
          <Select
            defaultOption="Selecione o nivel de consciencia do paciente"
            options={[
              "Alerta",
              "Confuso",
              "Responsivo a estimulos dolorosos",
              "Inconsciente",
            ]}
            onChange={handleNivelCon}
          ></Select>
        </section>
        <div className="flex w-full h-full items-center justify-center">
          <section className="flex flex-col items-center gap-4 mt-8  w-full mr-8">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="pulmao" label="Respiração"></Label>
            </div>
            <Select
              defaultOption="--------------------------------------"
              onChange={handleResp}
              options={[
                "Ar Ambiente",
                "Cateter Nasal",
                "Névoa Úmida",
                "Mascara com Reservatorio",
              ]}
            ></Select>
          </section>
          <section className="flex flex-col items-center justify-center gap-4 mt-8  w-full">
            {resp == "Ar Ambiente" ? (
              <div className="flex items-center justify-center gap-4 mt-9 w-full">
                <input type="text" disabled className="p-3 w-full rounded-md" />
                <span className="font-bold">L/min</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-4 mt-9 w-full">
                <Input type="text" onChange={handleLitragem}></Input>
                <span className="font-bold">L/min</span>
              </div>
            )}
          </section>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <section className="flex flex-col items-center gap-4 mt-8  w-full mr-8">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="food" label="Alimentação"></Label>
            </div>
            <Select
              defaultOption="--------------------------------------"
              options={[
                "Via Oral",
                "SNE",
                "Gastrostomia",
                "Jejunostomia",
                "Jejum",
              ]}
              onChange={handleAlimenta}
            ></Select>
          </section>
          <section className="flex flex-col items-center justify-center gap-4 mt-8  w-full">
            {aliment == "Via Oral" ? (
              <div className="flex items-center justify-center gap-4 mt-9 w-full">
                <Input type="range" onChange={handlePercAli}></Input>
                <span className="font-bold">{percentAli}% </span>
              </div>
            ) : aliment == "Jejum" ? (
              <div className="flex items-center justify-center gap-4 mt-9 w-full">
                <input
                  type="text"
                  disabled
                  className="p-3 w-full rounded-md text-black"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-4 mt-9 w-full">
                <Input type="text" onChange={handleMlDieta}></Input>
                <span className="font-bold">mL/h</span>
              </div>
            )}
          </section>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <section className="flex flex-col items-center gap-4 mt-8  w-full mr-8">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="acesso" label="Acesso Venoso"></Label>
            </div>
            <Select
              defaultOption="--------------------------------------"
              options={[
                "Sem Acesso",
                "Acesso Venoso Periferico",
                "Acesso Venoso Central",
                "Hipodermoclise",
                "PICC",
              ]}
              onChange={handleAcesso}
            ></Select>
          </section>
          <section className="flex flex-col items-center justify-center gap-4 mt-8  w-full">
            {acesso == "Acesso Venoso Periferico" ? (
              <div className="flex flex-col items-start gap-4  w-full mr-8">
                <span>Local da punção</span>
                <Select
                  defaultOption="--------------------------------------"
                  options={[
                    "Membro Superior Direito",
                    "Membro Superior Esquerdo",
                    "Membro Inferior Direito",
                    "Membro Inferior Esquerdo",
                    "Jugular Externa Direita",
                    "Jugular Externa Esquerda",
                  ]}
                  onChange={halndleLocalAcesso}
                ></Select>
              </div>
            ) : acesso == "Acesso Venoso Central" ? (
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-start gap-4 justify-center w-full mr-8">
                  <span>Tipo Cateter</span>
                  <Select
                    defaultOption="--------------------------------------"
                    options={[
                      "Mono Lumem",
                      "Duplo Lumem",
                      "Triplo Lumen",
                      "Quinton",
                      "Hickmann",
                      "Permcath",
                      "Port-a-cath",
                      "Equistream",
                    ]}
                    onChange={handleTipoCateter}
                  ></Select>
                </div>
                <div className="flex flex-col items-start gap-4 justify-center w-full mr-8">
                  <span>Local da punção</span>
                  <Select
                    defaultOption="-----------------------"
                    onChange={halndleLocalAcesso}
                    options={[
                      "Subclavia Direita",
                      "Subclavia Esquerda",
                      "Femural Direito",
                      "Femural Esquerdo",
                      "Jugular Interna Direita",
                      "Jugular Interna Esquerda",
                    ]}
                  ></Select>
                </div>
              </div>
            ) : acesso == "PICC" ? (
              <div className="flex flex-col items-start gap-4 justify-center w-full mr-8">
                <span>Local da Punção</span>
                <Select
                  onChange={halndleLocalAcesso}
                  defaultOption="-------------------------"
                  options={[
                    "Veia Basílica Esquerda",
                    "Veia Basílica Direita",
                    "Veia Cefálica Esquerda",
                    "Veia Cefálica Direita",
                    "Veia Cubital Esquerda",
                    "Veia Cubital Direita",
                    "Veia Mediana Esquerda",
                    "Veia Mediana Direita",
                    "Veia Jugular Esquerda",
                    "Veia Jugular Direita",
                  ]}
                ></Select>
              </div>
            ) : acesso == "Hipodermoclise" ? (
              <div className="flex flex-col items-start gap-4 justify-center w-full mr-8">
                <span>Local da Punção</span>
                <Input onChange={halndleLocalAcesso} type="text"></Input>
              </div>
            ) : (
              ""
            )}
          </section>
        </div>
        {acesso == "savp" ? (
          ""
        ) : (
          <section className="flex flex-col items-center gap-4 mt-8">
            <div className="flex justify-start items-center w-full gap-2">
              <Label
                icon="virus"
                label="O curativo do acesso venoso esta integro?"
              />
            </div>
            <Select
              defaultOption="Integridade do curativo"
              options={["Sim", "Não"]}
              onChange={handleCurativoAcessoVenoso}
            ></Select>
          </section>
        )}
        <div className="flex w-full items-center justify-between">
          <section className="flex flex-col items-center gap-4 mt-8  w-full mr-8">
            <Label icon="abd" label="Abdomem"></Label>
            <Select
              onChange={handleAbdomem}
              defaultOption="---------------------------------"
              options={["Flacido", "Globoso", "Ascitico", "Negativo"]}
            ></Select>
          </section>
          <section className="flex items-center justify-center gap-4 mt-8  w-full">
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <span>Dor a palpação</span>
              <Select
                defaultOption="--------------"
                onChange={handleDorPalp}
                options={["Sim", "Não"]}
              ></Select>
            </div>

            {dorPalp == "Sim" ? (
              <div className="w-full flex flex-col gap-2">
                <span>Local</span>
                <input
                  type="text"
                  className="p-3 w-full text-black rounded-md"
                />
              </div>
            ) : (
              ""
            )}
          </section>
        </div>
        <section className="flex flex-col items-center gap-4 mt-8">
          <div className="flex justify-start items-center w-full gap-2">
            <Label icon="curativo" label="Possui Curativo"></Label>
          </div>
          <Select
            defaultOption="-----------"
            onChange={handleCurativo}
            options={["Sim", "Não"]}
          ></Select>

          {curativo == "Sim" ? (
            <div className="w-full flex items-center justify-center">
              <div className="flex-1 mr-4">
                <span>Numero de curativos</span>
                <Input onChange={handleNumCurativos} type="number"></Input>
              </div>
              <button
                className="bg-purple-600 text-black font-bold  p-4 mt-4 rounded-md"
                onClick={gerarLocaisCurativos}
              >
                Gerar Locais
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="w-full">
            {inputsCurativos.length > 0
              ? inputsCurativos.map((item, index) => (
                  <div key={index} className="flex flex-col my-4">
                    <span> Curativo {item}: </span>
                    <input
                      type="text"
                      className="w-full p-3 rounded-md text-black"
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </div>
                ))
              : ""}
          </div>
        </section>
        <div className="flex w-full items-center justify-between">
          <section className="flex flex-col items-center gap-4 mt-8  w-full mr-8">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="banheiro" label="Diurese"></Label>
            </div>
            <Select
              defaultOption="Diurese"
              options={["Sim", "Não"]}
              onChange={handleDiurese}
            ></Select>
          </section>
          <section className="flex flex-col items-center gap-4 mt-8  w-full">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="banheiro" label="Evacuação"></Label>
            </div>
            <Select
              defaultOption="Evacuação"
              onChange={handleEvacuacao}
              options={["Sim", "Não"]}
            ></Select>
          </section>
        </div>
        <section className="flex flex-col items-center gap-4 mt-8">
          <div className="flex justify-start items-center w-full gap-2">
            <Label icon="pe" label="Locomoção"></Label>
          </div>
          <Select
            defaultOption="-------------------"
            onChange={handleLocomocao}
            options={["Deambula", "Deambula com auxilio", "Acamado"]}
          ></Select>
        </section>
        <div className="flex w-full h-full items-center justify-center">
          <section className="flex flex-col items-center gap-4 mt-8  w-full mr-8">
            <div className="flex justify-start items-center w-full gap-2">
              <Label icon="dor" label="Queixas Algicas"></Label>
            </div>
            <Select
              defaultOption="-----------------"
              onChange={handleDor}
              options={["Sim", "Não"]}
            ></Select>
          </section>
          <section className="flex flex-col items-center justify-center gap-4 mt-8  w-full">
            {dor == "Sim" ? (
              <div className="flex flex-col items-start gap-4  w-full mr-8">
                <span>Local da dor</span>
                <Input type="text" onChange={handleLocalDor}></Input>
              </div>
            ) : (
              ""
            )}
          </section>
        </div>
        <section className="flex flex-col items-center gap-4 mt-8">
          <div className="flex justify-start items-center w-full gap-2">
            <Label icon="user" label="Acompanhante"></Label>
          </div>
          <Select
            defaultOption="---------"
            onChange={handleAcompanhante}
            options={["Sim", "Não"]}
          ></Select>
        </section>
      </div>
      <button
        onClick={gerarEvolucao}
        className="w-full p-4 bg-red-800 text-black font-bold rounded-md mt-6 hover:bg-purple-500 ease-in duration-200"
      >
        Gerar evolução
      </button>
      <div className="mt-4 border w-full p-8">{evolucao}</div>
    </div>
  );
}
