import faculdadeLegaleLogo from "@/assets/faculdade-legale-logo.gif";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl mx-auto text-center p-8 border border-border">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={faculdadeLegaleLogo} 
            alt="Faculdade Legale" 
            className="mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-8 text-foreground">
          ALUNO(A) MATRICULADO(A)
        </h1>

        {/* Student Info */}
        <div className="mb-12 space-y-2">
          <p className="text-foreground font-medium">
            ALUNO(A): TIAGO FRANCISCO LACERDA DE ALMEIDA
          </p>
          <p className="text-foreground font-medium">
            MATRÍCULA: 141175209
          </p>
        </div>

        {/* Validity Statement */}
        <p className="text-foreground font-bold mb-8 text-lg">
          DOCUMENTO VÁLIDO EM TODO TERRITÓRIO NACIONAL
        </p>

        {/* Credentials */}
        <div className="text-sm text-foreground space-y-1">
          <p>Credenciamento portaria MEC 3026 26/12/2001</p>
          <p>Credenciamento EAD portaria MEC 247 12/02/2020</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
