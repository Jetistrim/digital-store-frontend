import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Dialog } from "primereact/dialog";
import visa from "../assets/images/visa.svg";
import Modal from "./Modal";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Button } from "primereact/button";


const MetodosPagamentos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [visible, setVisible] = useState(false);

  const [state, setState] = useState({
    identifier: "",
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  const [cartoes, setCartoes] = useState([
    {
      id: 1,
      apelido: "C6 Black",
      numero: "4756 5469 8547 2020",
      nome: "Francisco Antonio Pereira",
      validade: "12/25",
      cvc: "123",
      bandeira: visa,
    },
  ]);

  const handleDelete = (id) => {
    confirmDialog({
      header: 'Aviso',
      message: "Deseja excluir este cartão?",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      reject: () => setOpenModal(false),
      accept: () => setCartoes(cartoes.filter((cartao) => cartao.id !== id)),
      rejectClassName:
        "px-4 py-1 ml-10 lg:ml-28 rounded text-primary-1 border hover:text-tertiary hover:border hover:border-primary-1 font-bold",
      acceptClassName:
        "px-4 py-1 ml-3 rounded text-white bg-primary-1 hover:bg-tertiary font-bold",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const value = state.expiry;
    const [mes, ano] = value.split("/").map(Number);
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;
    
    const anoCompleto = ano < 100 ? 2000 + ano : ano;
    if (
      anoCompleto < anoAtual ||
      (anoCompleto === anoAtual && mes < mesAtual)
    ) { 
      window.alert("Data de validade expirada");
    } else {
      return (window.confirm("Dados cadastrados com sucesso!")) && 
         setState({
           identifier: "",
           number: "",
           expiry: "",
           cvc: "",
           name: "",
           focus: "",
         });
       }
    }

  return (
    <div>
     <ConfirmDialog className="custom-confirm-dialog" />
      <section className="bg-white min-w-[315px] h-[466px] lg:w-[890px] lg:h-[466px] mx-5 lg:mr-[101px] flex flex-col items-start justify-start px-5 lg:py-5 font-sans rounded">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center mt-1">
          <h6 className="order-none font-bold text-sm tracking-[0.75px] leading-[22px] text-dark-gray-2">
            Cartões cadastrados
          </h6>
          <button
            className="-order-1 lg:order-1 text-primary-1 hover:text-tertiary underline font-semibold lg:text-sm mr-3 lg:mr-4 mt-4 lg:mt-1 mb-3 text-end underline-offset-[3px]"
            onClick={() => setOpenModal(true)}
          >
            Adicionar cartão
          </button>
        </div>
        <div className="w-full border-t border-light-gray-2 my-1 lg:mb-3"></div>
        <div className="flex mt-3 lg:mt-2">
          {cartoes.map((cartao) => (
            <dl
              key={cartao.id}
              className="flex items-center justify-between w-64 lg:w-80 text-dark-gray font-medium text-sm border p-4 lg:p-4 rounded-xl"
            >
              <div className="flex-col">
                <div className="flex gap-2">
                  <img
                    className="h-11"
                    src={cartao.bandeira}
                    alt={cartao.bandeira}
                  />
                  <div className="mt-[10px]">
                    <dt className="hidden text-light-gray">
                      Apelido do cartão
                    </dt>
                    <dd>{cartao.apelido}</dd>
                  </div>
                </div>
                <div>
                  <dt className="hidden text-light-gray">Número do cartão:</dt>
                  <dd>{`**** **** **** ${cartao.numero.slice(-4)}`}</dd>
                </div>
              </div>
              <div className="card flex justify-content-center">                
                <i
                  className="pi pi-trash text-primary-1 cursor-pointer"
                  onClick={() => handleDelete(cartao.id)}
                ></i>
              </div>
              <div className="hidden gap-2 mb-[10px]">
                <dt className="text-light-gray">Nome:</dt>
                <dd>{cartao.nome}</dd>
              </div>
              <div className="hidden gap-2 mb-[10px]">
                <dt className="text-light-gray">Validade:</dt>
                <dd>{cartao.validade}</dd>
              </div>
              <div className=" hidden gap-2">
                <dt className="text-light-gray">CVV:</dt>
                <dd>{cartao.cvv}</dd>
              </div>
            </dl>
          ))}
        </div>
      </section>
      <Modal visible={openModal} onClose={() => setOpenModal(false)}>
        <div className="bg-white shadow transition-all flex-col justify-center items-center h-[550px] w-[315px] lg:w-[700px] lg:h-[466px] overflow-auto lg:gap-2 lg:px-4 pt-4 pl-5 rounded">
          <div className="flex gap-3">
            <div className="flex-col">
              <h2 className="text-lg font-semibold mb-1 ml-1 text-dark-gray">
                Adicionar cartão
              </h2>
              <h3 className="mt-1 text-dark-gray">Informações do cartão</h3>
              <div className="w-full border-t border-light-gray-2 mb-4"></div>
              <form
                className="flex flex-col items-start lg:w-[340px] rounded p-1 mb-2"
                onSubmit={handleSubmit}
              >
                <div className="inline-flex flex-col mb-2 w-full">
                  <label
                    htmlFor="identifier"
                    className="text-light-gray font-semibold text-sm"
                  >
                    Apelido do cartão (opcional):
                  </label>
                  <input
                    type="text"
                    name="identifier"
                    autoComplete="organization"
                    value={state.identifier}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                  />
                </div>
                <div className="inline-flex flex-col mb-2 w-full">
                  <label
                    htmlFor="number"
                    className="text-light-gray font-semibold text-sm"
                  >
                    Número do cartão:
                  </label>
                  <InputMask
                    type="text"
                    name="number"
                    mask="9999 9999 9999 9999"
                    style={{ color: "#8f8f8f" }}
                    required
                    autoComplete="cc-number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                  />
                </div>
                <div className="inline-flex flex-col mb-2 w-full">
                  <label
                    htmlFor="name"
                    className="text-light-gray font-semibold text-sm"
                  >
                    Nome impresso no cartão:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="cc-name"
                    pattern="^(?=.*[A-Za-z])[A-Za-z\s]+$"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                  />
                </div>

                <div className=" flex flex-col lg:flex-row lg:gap-3">
                  <div className="inline-flex flex-col mb-2 lg:w-1/3">
                    <label
                      htmlFor="expiry"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Validade:
                    </label>
                    <InputMask
                      type="text"
                      name="expiry"
                      mask="99/99"
                      style={{ color: "#8f8f8f" }}
                      slotChar="mm/aa"
                      required
                      autoComplete="cc-exp"
                      pattern="^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$"
                      value={state.expiry}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    />
                  </div>
                  <div className="relative inline-flex flex-col lg:w-1/3">
                    <label
                      htmlFor="cvc"
                      className="text-light-gray font-semibold text-sm"
                    >
                      CVV:
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      required
                      autoComplete="cc-csc"
                      pattern="^\d{3,4}$"
                      value={state.cvc}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    />
                    <i
                      className="pi pi-question-circle text-dark-gray-3 cursor-pointer absolute top-8 right-3"
                      onClick={() => setVisible(true)}
                    ></i>
                    <div className="card flex justify-content-center">
                      <Button
                        icon="pi pi-external-link"
                        onClick={() => setVisible(true)}
                      />
                      <Dialog
                        header="Atenção"
                        visible={visible}
                        style={{ width: "50vw" }}
                        onHide={() => {
                          if (!visible) return;
                          setVisible(false);
                        }}
                      >
                        <p className="m-0">
                          O número CVV é representado pelos três últimos dígitos
                          no verso do seu cartão. Em cartões American Express, o
                          CVV é um número de 4 dígitos na frente do cartão.
                        </p>
                      </Dialog>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center lg:justify-end w-full gap-3 lg:mr-10">
                  <button
                    className="w-28 h-11 py-2 px-4 text-light-gray-3 bg-primary-1 hover:bg-tertiary font-bold text-sm tracking-wider shadow-md rounded outline-none focus:shadow-[0_0_0_0.2rem_#991956]"
                    type="submit"
                  >
                    Salvar
                  </button>
                  <button
                    className="w-28 h-11 py-2 px-4 text-primary-1 hover:text-tertiary hover:bg-light-gray-3 font-bold text-sm tracking-wider hover:shadow-md rounded outline-none focus:shadow-[0_0_0_0.2rem_#c92071]"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block">
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
                placeholders={{ name: "NOME" }}
                locale={{ valid: "Validade" }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default MetodosPagamentos;
