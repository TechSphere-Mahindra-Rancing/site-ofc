import { Link } from "react-router-dom";
import ImageBanner from "../../../public/inicio-banner.png";

const Inicio =()=>{

    // Função Scroll Down
    const scrollToContent = () => {
        const content = document.getElementById('content-section');
        content.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <>
            <section>
                {/* Banner */}
                <div>
                    <h1>Da pista ao digital: Viva a experiência completa da Fórmula E.</h1>
                    <h3>Entre no Fórmula Hub e transforme sua paixão pela Fórmula E em uma experiência única e envolvente.</h3>
                    <div>
                        <button>Participe Agora</button>
                    </div>
                </div>

                <div>
                    <img src={ImageBanner} alt="image" />
                </div>

                <div>
                    <button onClick={scrollToContent}>Scroll to Content</button>
                </div>

                <hr className="linha-divisoria"/>
            </section>

            <section id="content-section">
                <div>
                    <h1>FRASE IMPACTANTE</h1>
                    <h3>Lorem ipsum dolor sit amet. Et ratione possimus est rerum</h3>
                    <p>Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur. Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur. Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur. Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur.</p>

                    {/* Demonstrações do site */}
                    <div>
                        <div>
                            <div>
                                {/* colocar imagens */}
                            </div>
                            <div>
                                <h3>Experiência Interativa</h3>
                            </div>
                        </div>

                        <div>
                            <div>
                                {/* colocar imagens */}
                            </div>
                            <div>
                                <h3>Dashboard Completo</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="linha-divisoria"/>
            </section>

            <section>
                <div>
                    {/* Banner */}
                </div>

                <div>
                    <h2>Lorem ipsum dolor sit amet. Et ratione possimus est rerum</h2>
                    <p>Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur. Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur.</p>
                </div>

                <div>
                    {/* animação */}
                </div>

                <hr className="linha-divisoria"/>
            </section>

            <section>
                <h1>Funcionalidades do Site</h1>
                <p>Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur. Lorem ipsum dolor sit amet. Et ratione possimus est rerum voluptas quo explicabo consequatur.</p>

                <div>
                    <div>Loja de Pontos</div>
                    <div>E-GOAT</div>
                    <div>E-Talk</div>
                </div>

                <div>
                    <h2>FRASE IMPACTO</h2>
                    <div>
                        <button>Participe Agora</button>
                    </div>
                </div>
            </section>

            <section>
                <h1>Avaliações</h1>
                <div>

                </div>
            </section>
        </>
    )
}

export default Inicio