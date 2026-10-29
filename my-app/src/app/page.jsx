import Link from "next/link";
import Image from "next/image";
import minhaLogo from './NutriKids.png';
import "./globals.css";
import "./styles.css";
export default function Home() {
  return (
    <main className="page active" id="page-intro">
      <section className="hero">
        <div className="hero-grid">
          <div>
    </div>
          <header className="hero-text">
            <div className="hero-tag">🌟 Para crianças de 8 a 12 anos</div>
            <h1>
              Comer Bem é <span className="green">Super</span>{" "}
              <span className="blue">Poder!</span>
            </h1>
            <p>
              Descubra como frutas, verduras e alimentos nutritivos podem deixar
              você mais forte, esperto e cheio de energia para brincar e
              aprender todo dia.
            </p>
            <div className="hero-btns">
              <Link href="/guia-alimentacao">
                <button className="btn-green" data-goto="guide">
                  🥦 Ver o Guia Alimentar
                </button>
              </Link>
              <Link href="/artigos">
                <button className="btn-blue" data-goto="articles">
                  📚 Artigos Científicos
                </button>
              </Link>
            </div>
          </header>
          <figure className="hero-img-wrap">
            <span className="img-frame">
              <Image src={minhaLogo} alt="Logo do projeto" width={150}/>
            </span>
            <span className="badge badge-yellow">🍎 +50 alimentos</span>
            <span className="badge badge-blue">💪 100% saudável</span>
          </figure>
        </div>
      </section>

      <section className="why-section">
        <header className="section-center">
          <h2>Por que comer bem faz diferença?</h2>
          <p>
            Seu corpo é como uma máquina incrível — ele precisa do combustível
            certo para funcionar!
          </p>
        </header>
        <ul className="cards-3">
          <li className="card">
            <span className="card-icon icon-blue">🧠</span>
            <h3>Cérebro mais esperto</h3>
            <p>
              Nutrientes certos ajudam a memória, atenção e aprendizado na
              escola.
            </p>
          </li>
          <li className="card">
            <span className="card-icon icon-green">⚡</span>
            <h3>Muita energia</h3>
            <p>
              Alimentos saudáveis dão energia para brincar, correr e se
              divertir.
            </p>
          </li>
          <li className="card">
            <span className="card-icon icon-teal">🛡️</span>
            <h3>Defesa do corpo</h3>
            <p>
              Vitaminas e minerais fortalecem seu sistema imunológico
              naturalmente.
            </p>
          </li>
        </ul>
      </section>

      <section className="cta-strip">
        <h2>Pronto para começar sua jornada saudável?</h2>
        <p>
          Explore o guia alimentar e descubra quais alimentos são seus aliados!
        </p>
        <Link href="/guia-alimentacao">
          <button className="btn-white" data-goto="guide">
            Começar agora →
          </button>
        </Link>
      </section>
    </main>
  );
}