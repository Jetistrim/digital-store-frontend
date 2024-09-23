import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import validator from "validator";

const MinhasInformacoes = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [visible, setVisible] = useState(false); 

  const onSubmit = (data) => {
    console.log(data);
  }
    // try {
    //   const response = await axios.post('https://localhost:5173/endpoint', dados, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer SEU_TOKEN_AQUI', // Adicione este cabeçalho se o backend exigir autenticação
    //     },
    //   });

    //   alert('Dados enviados com sucesso!');
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Erro ao enviar dados:', error);
    //   alert('Erro ao enviar dados');
    // }

 

  return (
    <div>
      <section className="bg-white min-w-[315px] h-[466px] lg:w-[890px] lg:h-[466px] mx-5 lg:mr-[101px] flex flex-col items-start justify-start p-5 font-sans rounded">
        <div className="w-full flex justify-between mt-1">
          <h4 className="font-bold text-sm tracking-[0.75px] leading-[22px] text-dark-gray-2">
            Minhas Informações
          </h4>
          <button
            className="text-primary-1 hover:text-tertiary underline font-semibold text-sm tracking-wide mr-3 lg:mr-4 underline-offset-[3px]"
            onClick={() => setVisible(true)}
          >
            Editar
          </button>
        </div>
        <div className="w-full border-t border-light-gray-2 my-3"></div>
        <div>
          <h3 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">
            Informações Pessoais
          </h3>
          <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Nome:</dt>
              <dd className="text-dark-gray">Francisco Antonio Pereira</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">CPF:</dt>
              <dd className="text-dark-gray">123485913-35</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Email:</dt>
              <dd className="text-dark-gray">francisco@gmail.com</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-light-gray">Celular:</dt>
              <dd className="text-dark-gray">(85) 5555-5555</dd>
            </div>
          </dl>
        </div>
        <div className="w-full border-t border-light-gray-2 my-3"></div>
        <div>
          <h3 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">
            Informações de Entrega
          </h3>
          <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Endereço:</dt>
              <dd className="text-dark-gray">Rua João Pessoa, 333</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Bairro:</dt>
              <dd className="text-dark-gray">Centro</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Cidade:</dt>
              <dd className="text-dark-gray">Fortaleza, Ceará</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">CEP:</dt>
              <dd className="text-dark-gray">433-8800</dd>
            </div>
          </dl>
        </div>
      </section>
      
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div className="bg-white rounded shadow transition-all flex-col justify-center items-center h-[580px] w-[315px] lg:w-[700px] lg:h-[466px] px-3 pt-5 lg:px-5 lg:pt-3 overflow-auto">
          <h2 className="text-lg font-semibold mb-1 lg:mb-3 text-dark-gray">
            Editar Informações
          </h2>
          <form            
            className="flex flex-col lg:flex-row lg:gap-10 items-center"   
            onSubmit={handleSubmit(onSubmit)}          
          >
            <div className="flex flex-col rounded p-1 w-full">
              <h3 className="my-1 text-dark-gray">Informações Pessoais</h3>
              <div className="w-full border-t border-light-gray-2 mb-3"></div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="nome"
                  className="text-light-gray font-semibold text-sm"
                >
                  Nome
                </label>
                <InputText
                  id="nome"
                  autoClear
                  {...register("nome", { required: true })}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
                {errors?.nome?.type === "required" && (
                  <p className="mt-1 text-sm text-red">
                    O nome é obrigatório.
                  </p>
                )}
              </div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="cpf"
                  className="text-light-gray font-semibold text-sm"
                >
                  CPF
                </label>
                <InputText
                  id="cpf"
                  {...register("cpf", { required: true })}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
                {errors?.cpf?.type === "required" && (
                  <p className="mt-1 text-sm text-red">
                    O CPF é obrigatório.
                  </p>
                )}
              </div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="email"
                  className="text-light-gray font-semibold text-sm"
                >
                  Email
                </label>
                <InputText
                  id="email"
                  {...register("email", {
                    required: true,
                    validate: (value) => validator.isEmail(value),
                  })}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
                {errors?.email?.type === "required" && (
                  <p className="mt- text-sm text-red">
                    O email é obrigatório.
                  </p>
                )}
                {errors?.email?.type === "validate" && (
                  <p className="mt-2 text-sm text-red-600">
                    O email é inválido.
                  </p>
                )}
              </div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="celular"
                  className="text-light-gray font-semibold text-sm"
                >
                  Celular
                </label>
                <InputText
                  id="celular"
                  {...register("celular")}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
              </div>
            </div>
            <div className="flex flex-col rounded p-1 w-full">
              <h3 className="mb-1 text-dark-gray">Informações de Entrega</h3>
              <div className="w-full border-t border-light-gray-2 mb-3"></div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="endereco"
                  className="text-light-gray font-semibold text-sm"
                >
                  Endereco
                </label>
                <InputText
                  id="endereco"
                  {...register("endereco")}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
              </div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="bairro"
                  className="text-light-gray font-semibold text-sm"
                >
                  Bairro
                </label>
                <InputText
                  id="bairro"
                  {...register("bairro")}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
              </div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="cidade"
                  className="text-light-gray font-semibold text-sm"
                >
                  Cidade
                </label>
                <InputText
                  id="cidade"
                  {...register("cidade")}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
              </div>
              <div className="inline-flex flex-col mb-2">
                <label
                  htmlFor="cep"
                  className="text-light-gray font-semibold text-sm"
                >
                  CEP
                </label>
                <InputText
                  id="cep"
                  {...register("cep")}
                  className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center md:justify-end gap-2 mt-1">
            <button
              type="submit"
              className="w-28 h-11 py-2 px-4 mb-4 text-light-gray-3 bg-primary-1 hover:bg-tertiary font-bold text-sm tracking-wider shadow-md rounded"
            >
              Salvar
            </button>
            <button
              type="button"
              className="w-28 h-11 py-2 px-4 mb-4 text-primary-1 hover:text-tertiary hover:bg-light-gray-3 font-bold text-sm tracking-wider hover:shadow-md rounded"
              onClick={() => setVisible(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default MinhasInformacoes;