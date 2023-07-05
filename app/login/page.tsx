export default function Login() {
  return (
    <div className="flex flex-col w-full container justify-center items-center py-10">
      <h4 className="uppercase text-[25px] font-bold">
        Identificação
      </h4>
      <div className="flex flex-col w-full gap-5 justify-center items-center py-10 px-3 lg:px-0">
        <div className="flex flex-col w-full lg:w-2/6 gap-2">
          <label>E-mail</label>
          <input
            className="px-1 py-2 rounded-sm border border-gray-400"
            placeholder="email"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full lg:w-2/6 gap-2">
          <label>Senha</label>
          <input
            className="px-1 py-2 rounded-sm border border-gray-400"
            type="password"
            placeholder="senha"
          />
        </div>
        <p className="underline">Esqueceu a senha ?</p>
        <div className="flex w-full lg:w-2/6 flex-col justify-center items-center gap-2">
          <button className="w-full py-4 px-2 bg-black text-white rounded-sm">
            Entrar
          </button>
          <p className="text-[12px] w-4/5 text-gray-400 text-center">
            Este site é protegido pelo reCAPTCHA e pelo Google
            Política de Privacidade e Termos de serviço se aplicam.
          </p>
        </div>
      </div>
    </div>
  );
}
