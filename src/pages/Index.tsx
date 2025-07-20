import faculdadeLegaleLogo from "@/assets/faculdade-legale-logo.gif";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center py-12">
        {/* Logo - MAIOR */}
        <div className="mb-10">
          <img 
            src={faculdadeLegaleLogo} 
            alt="Faculdade Legale" 
            className="mx-auto w-64 h-auto rounded-xl"
            style={{
              backgroundColor: "#f9fafb" // fundo igual do bg-gray-50
            }}
          />
        </div>

        {/* Title - SEM NEGRITO, MAIOR */}
        <h1 className="text-2xl font-normal mb-12 text-black">
          ALUNO(A) MATRICULADO(A)
        </h1>

        {/* Student Info - SEM NEGRITO, MAIOR */}
        <div className="mb-12 space-y-4">
          <p className="text-black font-normal text-lg">
            ALUNO(A): TIAGO FRANCISCO LACERDA DE ALMEIDA
          </p>
          <p className="text-black font-normal text-lg">
            MATRÍCULA: 141175209
          </p>
        </div>

        {/* Validity Statement - SEM NEGRITO, MAIOR */}
        <p className="text-black font-normal mb-12 text-xl">
          DOCUMENTO VÁLIDO EM TODO TERRITÓRIO NACIONAL
        </p>

        {/* Credentials - MENOR, SEM NEGRITO */}
        <div className="text-sm text-black space-y-2 font-normal">
          <p>Credenciamento portaria MEC 3026 26/12/2001</p>
          <p>Credenciamento EAD portaria MEC 247 12/02/2020</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
