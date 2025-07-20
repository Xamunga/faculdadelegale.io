import faculdadeLegaleLogo from "@/assets/faculdade-legale-logo.gif";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center py-12">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src={faculdadeLegaleLogo} 
            alt="Faculdade Legale" 
            className="mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-12 text-black">
          ALUNO(A) MATRICULADO(A)
        </h1>

        {/* Student Info */}
        <div className="mb-16 space-y-2">
          <p className="text-black font-medium">
            ALUNO(A): TIAGO FRANCISCO LACERDA DE ALMEIDA
          </p>
          <p className="text-black font-medium">
            MATRÍCULA: 141175209
          </p>
        </div>

        {/* Validity Statement */}
        <p className="text-black font-bold mb-12 text-lg">
          DOCUMENTO VÁLIDO EM TODO TERRITÓRIO NACIONAL
        </p>

        {/* Credentials */}
        <div className="text-sm text-black space-y-1">
          <p>Credenciamento portaria MEC 3026 26/12/2001</p>
          <p>Credenciamento EAD portaria MEC 247 12/02/2020</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
