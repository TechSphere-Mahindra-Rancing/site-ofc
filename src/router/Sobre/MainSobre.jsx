import { DesingMainSobre } from "./desingSobre";
import { useState } from "react";

export default function MainSobre() {


    // Modal das Redes sociais
    const [activeModal, setActiveModal] = useState(null);

    const toggleModal = (modalId) => {
        if (activeModal === modalId) {
            setActiveModal(null);
        } else {
            setActiveModal(modalId);
        }
    };


    return (
        <DesingMainSobre>
            <section id="banner">
                <div className="imagem-inicial">
                    <img src="caminho/para/sua/imagem.jpg" alt="Imagem inicial" />
                </div>
            </section>

            <section className="primeira-section">
                <h1>Sobre Nós</h1>
                <hr />
                <h3>Sobre a TechSphere e a Jornada até o Formula Hub</h3>
                <div className="primeiro-paragrafo">
                    <p>A TechSphere é uma empresa de tecnologia fundada com a missão de transformar ideias inovadoras em soluções digitais impactantes. Desde o início, nossa visão foi clara: usar a tecnologia para criar experiências interativas que não apenas resolvem problemas, mas também elevam a forma como as pessoas interagem com o mundo digital. Com uma equipe diversificada de desenvolvedores, designers e estrategistas de produto, nos especializamos em entregar plataformas que unem inovação e funcionalidade, sempre focadas em oferecer valor real aos usuários.</p>

                    <p>Nosso primeiro grande projeto, o Formula Hub, foi o resultado de nossa paixão compartilhada por tecnologia sustentável e esportes. Quando nos deparamos com o desafio de ajudar a popularizar a Fórmula E no Brasil, vimos a oportunidade perfeita para aplicar nossa expertise em desenvolvimento de plataformas digitais e criar algo totalmente novo. O Formula Hub nasceu como uma plataforma gamificada, onde fãs de automobilismo elétrico podem se engajar em desafios, aprender sobre o esporte e apostar em seus pilotos favoritos, tudo enquanto promovemos o conceito de corridas sustentáveis.</p>

                    <p>O Formula Hub foi nossa estreia no mercado, e sua concepção trouxe à vida nossa crença no poder da inovação. Desde então, ele se tornou uma vitrine para o nosso trabalho, refletindo nossa capacidade de integrar soluções tecnológicas robustas com experiências imersivas e interativas, sempre com um olhar voltado para o futuro das tecnologias sustentáveis.</p>
                </div>
            </section>

            <section className="div-valores">
                <div className="nossa-missao">
                    <h2>Nossa Missão</h2>
                    <hr />
                    <div className="lista">
                        <ul>
                            <li>Inovar continuamente</li>
                            <li>Criar impacto positivo</li>
                            <li>Focar na experiência do usuário</li>
                            <li>Entregar soluções personalizadas</li>
                            <li>Aprimorar processos ágeis</li>
                        </ul>
                    </div>
                </div>

                <div className="nossos-valores">
                    <h2>Nossos Valores</h2>
                    <hr />
                    <div className="lista">
                        <ul>
                            <li>Inovação</li>
                            <li>Colaboração</li>
                            <li>Excelência</li>
                            <li>Transparência</li>
                            <li>Comprometimento</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="frase-impactante">
                <h3>Transformando Ideias em Soluções Digitais Inovadoras</h3>
                <h4>Na TechSphere, utilizamos a tecnologia para impulsionar a inovação, desenvolvendo plataformas digitais que conectam pessoas e resolvem problemas reais. Nosso compromisso é criar experiências impactantes, unindo excelência técnica e colaboração para entregar soluções personalizadas e de alta qualidade.</h4>
            </section>

            <section className="equipe">
                <h2>Nossa Equipe</h2>
                <hr />

                {/* Thiago */}
                <div className="membro-equipe primeira">
                    <div className="foto">
                        <img src="caminho/para/imagem_thiago.jpg" alt="Thiago" />
                    </div>
                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>Thiago lidera o projeto Formula Hub como Product Owner, sendo responsável por definir as prioridades, alinhar a visão do produto com os objetivos estratégicos e garantir que o desenvolvimento esteja sempre focado em entregar valor. Além disso, ele é o responsável pela arquitetura e implementação do Back-End, cuidando da eficiência, segurança e escalabilidade do sistema, incluindo servidores, banco de dados e APIs.</p>

                        <p><span className="negrito">Estilo de trabalho: </span>Focado e orientado a resultados, Thiago é um líder organizado que mantém uma comunicação constante com sua equipe, facilitando o progresso e a resolução de problemas. Sua abordagem técnica é detalhista e eficiente, sempre buscando soluções robustas que garantam a estabilidade do projeto. Ele equilibra bem suas funções, assegurando que tanto a visão estratégica quanto a execução técnica estejam alinhadas.</p>

                        <div className="btn-ver-mais">
                            <button onClick={() => toggleModal('thiago')}>Ver Mais</button>
                        </div>

                        {/* Modal */}
                        {activeModal === 'thiago' && (
                            <div className="modal-overlay" onClick={() => toggleModal('thiago')}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <h3>Verifique o que o Thiago anda fazendo por aí</h3>
                                    <p>Siga-o nas redes sociais:</p>
                                    <ul>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">GitHub</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Email</a></li>
                                    </ul>
                                    <button onClick={() => toggleModal('thiago')}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* João */}
                <div className="membro-equipe segunda">
                    <div className="foto">
                        <img src="caminho/para/imagem_joao.jpg" alt="João" />
                    </div>
                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>João Victor é o Scrum Master do projeto, responsável por coordenar as cerimônias ágeis e garantir que a equipe siga os princípios do Scrum. Ele facilita a comunicação entre os membros da equipe e remove qualquer obstáculo que possa impedir o progresso.</p>

                        <p><span className="negrito">Estilo de trabalho: </span>João é organizado e comunicativo, sempre buscando melhorar os processos de trabalho e garantir que o time esteja em sintonia. Ele valoriza o desenvolvimento contínuo da equipe e é peça-chave na resolução de problemas do dia a dia.</p>

                        <div>
                            <button onClick={() => toggleModal('joao')}>Ver Mais</button>
                        </div>

                        {/* Modal */}
                        {activeModal === 'joao' && (
                            <div className="modal-overlay" onClick={() => toggleModal('joao')}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <h3>Verifique o que o João anda fazendo por aí</h3>
                                    <p>Siga-o nas redes sociais:</p>
                                    <ul>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">GitHub</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Email</a></li>
                                    </ul>
                                    <button onClick={() => toggleModal('joao')}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Maria */}
                <div className="membro-equipe primeira">
                    <div className="foto">
                        <img src="caminho/para/imagem_maria.jpg" alt="Maria" />
                    </div>
                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span> Maria Alice lidera a equipe de Front-End, cuidando de toda a interface visual e da experiência do usuário. Ela é responsável por garantir que o design e a usabilidade estejam de acordo com os padrões de qualidade definidos.</p>

                        <p><span className="negrito">Estilo de trabalho: </span> Detalhista e criativa, Maria Alice se concentra em entregar um produto esteticamente agradável e funcional. Ela trabalha em estreita colaboração com os desenvolvedores de back-end e o Product Owner para garantir que o Front-End atenda às expectativas de performance e design.</p>

                        <div className="btn-ver-mais">
                            <button onClick={() => toggleModal('maria')}>Ver Mais</button>
                        </div>

                        {/* Modal */}
                        {activeModal === 'maria' && (
                            <div className="modal-overlay" onClick={() => toggleModal('maria')}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <h3>Verifique o que a Maria anda fazendo por aí</h3>
                                    <p>Siga-o nas redes sociais:</p>
                                    <ul>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">GitHub</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Email</a></li>
                                    </ul>
                                    <button onClick={() => toggleModal('maria')}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Ianny */}
                <div className="membro-equipe segunda">
                    <div className="foto">
                        <img src="caminho/para/imagem_ianny.jpg" alt="Ianny" />
                    </div>
                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>Ianny Raquel é uma desenvolvedora Front-End, atuando em projetos de implementação e melhorias contínuas da interface do usuário no Formula Hub.</p>

                        <p><span className="negrito">Estilo de trabalho: </span> Proativa e ágil, Ianny busca soluções criativas para problemas de usabilidade e experiência do usuário. Ela está sempre disposta a aprender e compartilhar conhecimentos com a equipe.</p>

                        <div>
                            <button onClick={() => toggleModal('ianny')}>Ver Mais</button>
                        </div>

                        {/* Modal */}
                        {activeModal === 'ianny' && (
                            <div className="modal-overlay" onClick={() => toggleModal('ianny')}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <h3>Verifique o que a Ianny anda fazendo por aí</h3>
                                    <p>Siga-o nas redes sociais:</p>
                                    <ul>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">GitHub</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Email</a></li>
                                    </ul>
                                    <button onClick={() => toggleModal('ianny')}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Jean */}
                <div className="membro-equipe primeira">
                    <div className="foto">
                        <img src="caminho/para/imagem_jean.jpg" alt="Jean" />
                    </div>
                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>Jean Matheus é um desenvolvedor Back-End, responsável pela construção de APIs e integração com bancos de dados, garantindo a performance e a segurança do sistema.</p>

                        <p><span className="negrito">Estilo de trabalho: </span> Analítico e metódico, Jean foca na otimização do código e na escalabilidade do sistema, sempre buscando melhorias que beneficiem a performance do produto.</p>

                        <div className="btn-ver-mais">
                            <button onClick={() => toggleModal('jean')}>Ver Mais</button>
                        </div>

                        {/* Modal */}
                        {activeModal === 'jean' && (
                            <div className="modal-overlay" onClick={() => toggleModal('jean')}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <h3>Verifique o que o Jean anda fazendo por aí</h3>
                                    <p>Siga-o nas redes sociais:</p>
                                    <ul>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">GitHub</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Email</a></li>
                                    </ul>
                                    <button onClick={() => toggleModal('jean')}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </DesingMainSobre>
    );
}
