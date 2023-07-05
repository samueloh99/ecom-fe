import NextLink from "next/link";

export default function Cadastro() {
  return (
    <div className="flex flex-col w-full container justify-center items-center py-10">
      <h4 className="uppercase text-[25px] font-bold">
        CRIAR SEU CADASTRO
      </h4>
      <div className="flex flex-col w-full gap-5 justify-center items-center py-10 px-3 lg:px-0">
        <div className="flex flex-col w-full lg:w-3/6 gap-2">
          <label>E-mail</label>
          <input
            id="email"
            className="px-1 py-2 rounded-sm border border-gray-400"
            placeholder="Email"
            type="text"
          />
        </div>
        <div className="flex lg:flex-row flex-col w-full lg:w-3/6 gap-5 lg:gap-3 items-center justify-center">
          <div className="flex flex-col w-full lg:w-3/6 gap-2">
            <label>Razão Social</label>
            <input
              id="razao-social"
              className="px-1 py-2 rounded-sm border border-gray-400"
              type="text"
              placeholder="Razão Social"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/6 gap-2">
            <label>Nome de contato</label>
            <input
              id="nome"
              className="px-1 py-2 rounded-sm border border-gray-400"
              placeholder="Nome de contato"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/6 gap-2">
          <label>CNPJ</label>
          <input
            id="cnpj"
            className="px-1 py-2 rounded-sm border border-gray-400"
            placeholder="CNPJ"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full lg:w-3/6 gap-2">
          <label>Informações Tributárias</label>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="flex w-full lg:w-auto items-center justify-start gap-2">
              <input
                id="contribuinte-icms"
                className="px-1 py-2 rounded-sm border border-gray-400"
                type="checkbox"
              />
              <label htmlFor="contribuinte-icms">
                Contribuinte ICMS
              </label>
            </div>
            <div className="flex w-full lg:w-auto items-center justify-start gap-2">
              <input
                id="nao-contribuinte"
                className="px-1 py-2 rounded-sm border border-gray-400"
                type="checkbox"
              />
              <label htmlFor="nao-contribuinte">
                Não Contribuinte
              </label>
            </div>
            <div className="flex w-full lg:w-auto items-center justify-start gap-2">
              <input
                id="isento-ie"
                className="px-1 py-2 rounded-sm border border-gray-400"
                type="checkbox"
              />
              <label htmlFor="isento-ie">
                Isento de Inscrição Estadual
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/6 gap-2">
          <label>Inscrição Estadual</label>
          <input
            id="ie"
            className="px-1 py-2 rounded-sm border border-gray-400"
            placeholder="Inscrição Estadual"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full lg:w-3/6 gap-2">
          <label>Telefone</label>
          <input
            id="telefone"
            className="px-1 py-2 rounded-sm border border-gray-400"
            placeholder="Telefone"
            type="text"
          />
        </div>
        <div className="flex lg:flex-row flex-col w-full lg:w-3/6 gap-5 lg:gap-3 items-center justify-center">
          <div className="flex flex-col w-full lg:w-3/6 gap-2">
            <label>Senha</label>
            <input
              id="senha"
              className="px-1 py-2 rounded-sm border border-gray-400"
              type="password"
              placeholder="Senha"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/6 gap-2">
            <label>Repetir Senha</label>
            <input
              id="senha-confirmacao"
              className="px-1 py-2 rounded-sm border border-gray-400"
              placeholder="Repetir Senha"
              type="password"
            />
          </div>
        </div>
        <div className="flex w-full lg:w-3/6 gap-2">
          <input
            id="aceitar-termo"
            className="px-1 py-2 rounded-sm border border-gray-400"
            type="checkbox"
          />
          <label htmlFor="aceitar-termo">
            Aceito os Termos de uso e a Política de Privacidade
          </label>
        </div>
        <div className="flex w-full lg:w-3/6 flex-col justify-center items-center gap-5">
          <button className="w-full py-4 px-2 bg-black text-white rounded-sm">
            Cadastrar
          </button>
          <div className="flex items-center justify-center w-full gap-1">
            <p className="text-[15px] text-gray-500">
              Já tem cadastro ?
            </p>
            <NextLink
              href={"/login"}
              className="text-[15px] underline text-gray-500"
            >
              Login
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
