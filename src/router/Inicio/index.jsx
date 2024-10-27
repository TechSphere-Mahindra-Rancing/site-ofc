import { Link } from 'react-router-dom';
import { RiScrollToBottomLine } from 'react-icons/ri';
import { FaStar } from "react-icons/fa";
import { StyleScroll } from "./Style/style-scroll-btn"
import { InicioStyle } from './Style/index-style';

function Inicio() {

    // Função Scroll Down
    const scrollToContent = () => {
        const content = document.getElementById('content-section');
        content.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <InicioStyle>
            <section className="section">
                <div className="banner-container">
                    <div className="banner-text">
                        <h1>Da pista ao digital: Viva a experiência completa da Fórmula E.</h1>
                        <hr className="diviser banner-diviser"/>
                        <h3>Entre no <span className='negrito'></span>Fórmula Hub e transforme sua paixão pela Fórmula E em uma experiência única e envolvente.</h3>
                        <div className='btn-default-center'>
                            <Link to="/cadastro">
                                <button className="btn-default">Participe Agora</button>
                            </Link>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src="inicio-banner.png" alt="image" />
                    </div>
                </div>

                <StyleScroll className="scroll-icon-container">
                    <RiScrollToBottomLine className="scroll-icon" onClick={scrollToContent}/>
                </StyleScroll>

                <hr className="diviser"/>
            </section>

            <section className="section">
                <div id='content-section' className='content-section'>
                    <h1>Aposte na inovação e acelere sua paixão pela Fórmula E!</h1>
                    <h3>Descubra um mundo interativo onde fãs se conectam, aprendem e competem em um ambiente gamificado.</h3>
                    <p>
                        O <span className='negrito'>Formula Hub </span>é uma plataforma inovadora criada para conectar entusiastas da Fórmula E e promover o automobilismo elétrico no Brasil.
                        Por meio de desafios, quizzes e um jogo de apostas, oferecemos aos usuários a oportunidade de se engajar de forma divertida e competitiva.
                        Aqui, você pode não apenas acompanhar as corridas, mas também participar ativamente, acumulando pontos e trocando por prêmios enquanto
                        se torna um expert em sustentabilidade e automobilismo elétrico. Venha fazer parte dessa revolução nas corridas e viva a emoção da
                        Fórmula E como nunca antes!
                    </p>
                </div>
                <div className="bloco-background">
                    <div className="bloco-content">
                        <div className="img">
                        </div>
                        <div>
                            <h3 className='z-index-text'>Experiência Interativa</h3>
                        </div>
                    </div>
                    <div className="bloco-content">
                        <div className="img">
                        </div>
                        <div>
                            <h3 className='z-index-text'>Dashboard Completo</h3>
                        </div>
                    </div>
                </div>
                <hr className="diviser"/>
            </section>

            <section className="section">
                <div className="content-section bloco-content-fe">
                    <div>
                        <img src="#" alt="formula e logo" />
                    </div>
                    <h3>No Formula Hub, a Fórmula E é o foco central, oferecendo uma plataforma interativa que conecta fãs ao emocionante mundo das corridas elétricas.</h3>
                </div>
                <div className="content-section">
                    <h2>No Formula Hub, cada corrida é uma nova oportunidade de se engajar, competir e celebrar o futuro das corridas elétricas!</h2>
                    <h4>Desperte seu espírito competitivo e viva a adrenalina das corridas elétricas em cada corrida!</h4>
                </div>
                <div className="animacao bloco-content-fe">
                </div>
                <hr className="diviser"/>
            </section>

            <section className="section">
                <div className="content-section">
                    <h1>Funcionalidades do Site</h1>
                    <h3>O Formula Hub oferece uma experiência rica e interativa, com funcionalidades que se destacam pela inovação e engajamento. Entre os principais recursos, estão:</h3>
                </div>
                <div className="container-bloco">
                    <div className="bloco"># modal Loja de Pontos</div>
                    <div className="bloco"># modal E-GOAT</div>
                    <div className="bloco"># modal E-Talk</div>
                </div>
                <div className='content-section'>
                    <h2>Junte-se à comunidade e transforme sua paixão por automobilismo em uma experiência interativa e emocionante!</h2>
                    <Link to="/cadastro">
                        <button className="btn-default">Participe Agora</button>
                    </Link>
                </div>
                <hr className="diviser"/>
            </section>

            <section className="avaliacoes-container">
                <h1 className="avaliacoes-title">Avaliações</h1>
                <div className="depoimentos">
                    <div className="depoimento-content">
                        <img src="avatar1.png" alt="avatar" className="depoimento-avatar" />
                        <div className="avaliacao">
                            <p>
                                <span className="nome">Ítalo Fernandez</span>
                                <span>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </p>
                            <p>"Estou adorando minha experiência no Formula Hub! Os desafios do E-GOAT são super divertidos e me motivam a aprender mais sobre Fórmula E."</p>
                        </div>
                    </div>
                        
                    <div className="depoimento-content">
                        <img src="avatar2.png" alt="avatar" className="depoimento-avatar" />
                        <div className="avaliacao">
                            <p>
                                <span className="nome">Ellen Gonçalves</span>
                                <span>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </p>
                            <p>"A plataforma é incrível! A variedade de conteúdos e a interação com outros fãs tornam tudo ainda mais empolgante."</p>
                        </div>
                    </div>
                </div>
            </section>
        </InicioStyle>
    );
}

export default Inicio;
