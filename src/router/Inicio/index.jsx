import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageBanner from "../../../public/inicio-banner.png";
import { RiScrollToBottomLine } from "react-icons/ri";

const Inicio =()=>{

    // Função Scroll Down
    const scrollToContent = () => {
        const content = document.getElementById('content-section');
        content.scrollIntoView({ behavior: 'smooth' });
      };

    // Função da Estilização do Scroll Buttun
    const StyleScroll = styled.div`

    .scroll-icon-container {
        position: fixed;
        bottom: 20px; /* Ajuste conforme necessário */
        left: 50%;
        transform: translateX(-50%);
        animation: fadeInOut 2s infinite; /* Animação de fade in e out */
    }
      
    .scroll-icon {
        font-size: 50px; /* Ajuste o tamanho do ícone conforme necessário */
        color: #CF2929FF; /* Cor do ícone */
        animation: moveDown 2s infinite; /* Animação de movimento */
        cursor: pointer;
    }
      
    @keyframes moveDown {
        0% {
          transform: translateY(0); /* Começo */
        }
        50% {
          transform: translateY(20px); /* Desce */
        }
        100% {
          transform: translateY(0); /* Volta ao início */
        }
    }
      
    @keyframes fadeInOut {
        0%, 100% {
          opacity: 1; /* Visível */
        }
        50% {
          opacity: 0; /* Invisível */
        }
    }
    `
      

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

                <StyleScroll className="scroll-icon-container">
                    <RiScrollToBottomLine className="scroll-icon" onClick={scrollToContent}/>
                </StyleScroll>

                <hr className="linha-divisoria"/>
            </section>

            <section id="content-section">
                <div>
                    <h1>Aposte na inovação e acelere sua paixão pela Fórmula E!</h1>
                    <h3>Descubra um mundo interativo onde fãs se conectam, aprendem e competem em um ambiente gamificado.</h3>
                    <p>O Formula Hub é uma plataforma inovadora criada para conectar entusiastas da Fórmula E e promover o automobilismo elétrico no Brasil. Por meio de desafios, quizzes e um jogo de apostas, oferecemos aos usuários a oportunidade de se engajar de forma divertida e competitiva. Aqui, você pode não apenas acompanhar as corridas, mas também participar ativamente, acumulando pontos e trocando por prêmios enquanto se torna um expert em sustentabilidade e automobilismo elétrico. Venha fazer parte dessa revolução nas corridas e viva a emoção da Fórmula E como nunca antes!</p>

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
                    <h3>No Formula Hub, cada corrida é uma nova oportunidade de se engajar, competir e celebrar o futuro das corridas elétricas!</h3>
                    <p>Desperte seu espírito competitivo e viva a adrenalina das corridas elétricas em cada corrida!</p>
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
                    <h3>Junte-se à comunidade e transforme sua paixão por automobilismo em uma experiência interativa e emocionante!</h3>
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