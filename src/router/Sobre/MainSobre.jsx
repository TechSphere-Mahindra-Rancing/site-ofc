import { DesingMainSobre } from "./desingSobre";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramFill  } from "react-icons/ri";

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
            <div className="container">
                <section className="section">
                    <div className="container-banner"></div>
                </section>

                <section className="section about-us">
                    <div className="title-box">
                        <h1>Sobre nós</h1>
                        <hr className="diviser"/>
                    </div>

                    <div>
                        <h3 className="subtitle-box">Sobre a TechSphere e a Jornada até o Formula Hub</h3>
                        <p className="paragraf">A <span className="negrito">TechSphere </span>é uma empresa de tecnologia fundada com a missão de transformar ideias inovadoras em soluções digitais impactantes. Desde o início, nossa visão foi clara: usar a tecnologia para criar experiências interativas que não apenas resolvem problemas, mas também elevam a forma como as pessoas interagem com o mundo digital. Com uma equipe diversificada de desenvolvedores, designers e estrategistas de produto, nos especializamos em entregar plataformas que unem inovação e funcionalidade, sempre focadas em oferecer valor real aos usuários.</p>

                        <p className="paragraf">Nosso primeiro grande projeto, o <span className="negrito">Formula Hub</span>, foi o resultado de nossa paixão compartilhada por tecnologia sustentável e esportes. Quando nos deparamos com o desafio de ajudar a popularizar a <span className="negrito">Fórmula E </span>no Brasil, vimos a oportunidade perfeita para aplicar nossa expertise em desenvolvimento de plataformas digitais e criar algo totalmente novo. O Formula Hub nasceu como uma plataforma gamificada, onde fãs de automobilismo elétrico podem se engajar em desafios, aprender sobre o esporte e apostar em seus pilotos favoritos, tudo enquanto promovemos o conceito de corridas sustentáveis.</p>

                        <p className="paragraf">O Formula Hub foi nossa estreia no mercado, e sua concepção trouxe à vida nossa crença no poder da inovação. Desde então, ele se tornou uma vitrine para o nosso trabalho, refletindo nossa capacidade de integrar soluções tecnológicas robustas com experiências imersivas e interativas, sempre com um olhar voltado para o futuro das tecnologias sustentáveis.</p>
                    </div>
                </section>

                <section className="section value-mission">
                    <div className="section-box">
                        <div className="title-box">
                            <h1>Nossos Valores</h1>
                            <hr className="diviser"/>
                        </div>
                        <div className="box">
                            <ul>
                                <li>Inovação</li>
                                <li>Colaboração</li>
                                <li>Excelência</li>
                                <li>Transparência</li>
                                <li>Comprometimento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-box">
                        <div className="title-box">
                            <h1>Nossa Missão</h1>
                            <hr className="diviser"/>
                        </div>
                        <div className="box">
                            <ul>
                                <li>Inovar continuamente</li>
                                <li>Criar impacto positivo</li>
                                <li>Focar na experiência do usuário</li>
                                <li>Entregar soluções personalizadas</li>
                                <li>Aprimorar processos ágeis</li>
                            </ul>
                        </div>
                    </div>

                </section>

                <section className="section mensage">
                    <h1 className="mensage-title">Transformando Ideias em Soluções Digitais Inovadoras</h1>
                    <h3 className="mensage-subtitle">Na TechSphere, utilizamos a tecnologia para impulsionar a inovação, desenvolvendo plataformas digitais que conectam pessoas e resolvem problemas reais. Nosso compromisso é criar experiências impactantes, unindo excelência técnica e colaboração para entregar soluções personalizadas e de alta qualidade.</h3>
                </section>

                <section className="section equipe">
                    <div className="title-box">
                        <h2>Nossa Equipe</h2>
                        <hr className="diviser"/>
                    </div>
                    <h3 className="subtitle-box">
                        Conheça os membros que compoem a TechSphere
                    </h3>

                    <div className="container-members">
                        {/* Thiago */}
                        <div className="membro-equipe primeira">
                            <div className="members-content">
                                <div className="member">
                                    <div className="members-photo">
                                        <img src="avatar1.png" alt="avatar" />
                                    </div>
                                    <div lassName="nome">
                                        <p c>Thiago Oliveira</p>
                                    </div>

                                </div>

                                <div className="about">
                                    <p className="paragraf">
                                        <span className="negrito">Responsabilidade: </span>Thiago lidera o projeto Formula Hub como Product Owner, sendo responsável por definir as prioridades, alinhar a visão do produto com os objetivos estratégicos e garantir que o desenvolvimento esteja sempre focado em entregar valor. Além disso, ele é o responsável pela arquitetura e implementação do Back-End, cuidando da eficiência, segurança e escalabilidade do sistema, incluindo servidores, banco de dados e APIs.
                                    </p>
                                    <p className="paragraf">
                                        <span className="negrito">Estilo de trabalho: </span>Focado e orientado a resultados, Thiago é um líder organizado que mantém uma comunicação constante com sua equipe, facilitando o progresso e a resolução de problemas. Sua abordagem técnica é detalhista e eficiente, sempre buscando soluções robustas que garantam a estabilidade do projeto. Ele equilibra bem suas funções, assegurando que tanto a visão estratégica quanto a execução técnica estejam alinhadas.
                                    </p>
                                    <div className="btn-ver-mais">
                                        <button onClick={() => toggleModal('thiago')}>Ver Mais</button>
                                    </div>
                                </div>
                                    {/* Modal */}
                                    {activeModal === 'thiago' && (
                                        <div className="modal-overlay" onClick={() => toggleModal('thiago')}>
                                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                <p>Veja o que <span className="negrito">Thiago </span>anda fazendo.</p>
                                                <p>Siga-o nas redes sociais:</p>
                                                <ul className="container-redes">
                                                    <li>
                                                        <a href="#">
                                                            <RiLinkedinBoxFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <RiGithubFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <RiInstagramFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <MdEmail className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <button onClick={() => toggleModal('thiago')}>Fechar</button>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>

                        {/* João */}
                        <div className="membro-equipe segunda">
                        <div className="members-content">
                                <div className="member">
                                    <div className="members-photo">
                                        <img src="avatar1.png" alt="avatar" />
                                    </div>
                                    <div lassName="nome">
                                        <p c>João Soave</p>
                                    </div>

                                </div>

                                <div className="about">
                                    <p className="paragraf"><span className="negrito">Responsabilidade: </span>João Victor é o Scrum Master do projeto, responsável por coordenar as cerimônias ágeis e garantir que a equipe siga os princípios do Scrum. Ele facilita a comunicação entre os membros da equipe e remove qualquer obstáculo que possa impedir o progresso.</p>
                                    <p className="paragraf"><span className="negrito">Estilo de trabalho: </span>João é organizado e comunicativo, sempre buscando melhorar os processos de trabalho e garantir que o time esteja em sintonia. Ele valoriza o desenvolvimento contínuo da equipe e é peça-chave na resolução de problemas do dia a dia.</p>
                                    <div className="btn-ver-mais">
                                        <button onClick={() => toggleModal('joao')}>Ver Mais</button>
                                    </div>

                                </div>
                                    {/* Modal */}
                                    {activeModal === 'joao' && (
                                        <div className="modal-overlay" onClick={() => toggleModal('joao')}>
                                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                <p>Veja o que <span className="negrito">João </span>anda fazendo.</p>
                                                <p>Siga-o nas redes sociais:</p>
                                                <ul className="container-redes">
                                                    <li>
                                                        <a href="#">
                                                            <RiLinkedinBoxFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <RiGithubFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <RiInstagramFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <MdEmail className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <button onClick={() => toggleModal('joao')}>Fechar</button>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>

                        {/* Maria */}
                        <div className="membro-equipe primeira">
                        <div className="members-content">
                                <div className="member">
                                    <div className="members-photo">
                                        <img src="avatar1.png" alt="avatar" />
                                    </div>
                                    <div lassName="nome">
                                        <p c>Maria Alice</p>
                                    </div>

                                </div>

                                <div className="about">
                                    <p className="paragraf"><span className="negrito">Responsabilidade: </span> Maria Alice lidera a equipe de Front-End, cuidando de toda a interface visual e da experiência do usuário. Ela é responsável por garantir que o design e a usabilidade estejam de acordo com os padrões de qualidade definidos.</p>

                                    <p className="paragraf"><span className="negrito">Estilo de trabalho: </span> Detalhista e criativa, Maria Alice se concentra em entregar um produto esteticamente agradável e funcional. Ela trabalha em estreita colaboração com os desenvolvedores de back-end e o Product Owner para garantir que o Front-End atenda às expectativas de performance e design.</p>
                    
                                    <div className="btn-ver-mais">
                                        <button onClick={() => toggleModal('maria')}>Ver Mais</button>
                                    </div>
                                </div>
                                    {/* Modal */}
                                    {activeModal === 'maria' && (
                                        <div className="modal-overlay" onClick={() => toggleModal('maria')}>
                                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                <p>Veja o que <span className="negrito">Maria </span>anda fazendo.</p>
                                                <p>Siga-o nas redes sociais:</p>
                                                <ul className="container-redes">
                                                    <li>
                                                        <a href="#">
                                                            <RiLinkedinBoxFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <RiGithubFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <RiInstagramFill className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <MdEmail className="icon-rede"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <button onClick={() => toggleModal('maria')}>Fechar</button>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>

                        {/* Ianny */}
                        <div className="membro-equipe segunda">
                            <div className="members-content">
                                    <div className="member">
                                        <div className="members-photo">
                                            <img src="avatar1.png" alt="avatar" />
                                        </div>
                                        <div lassName="nome">
                                            <p c>Ianny Raquel</p>
                                        </div>

                                    </div>

                                    <div className="about">
                                        <p className="paragraf"><span className="negrito">Responsabilidade: </span>Ianny Raquel é uma desenvolvedora Front-End, atuando em projetos de implementação e melhorias contínuas da interface do usuário no Formula Hub.</p>

                                        <p className="paragraf"><span className="negrito">Estilo de trabalho: </span> Proativa e ágil, Ianny busca soluções criativas para problemas de usabilidade e experiência do usuário. Ela está sempre disposta a aprender e compartilhar conhecimentos com a equipe.</p>
                        
                                        <div className="btn-ver-mais">
                                            <button onClick={() => toggleModal('ianny')}>Ver Mais</button>
                                        </div>
                                    </div>
                                        {/* Modal */}
                                        {activeModal === 'ianny' && (
                                            <div className="modal-overlay" onClick={() => toggleModal('ianny')}>
                                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                    <p>Veja o que <span className="negrito">Ianny </span>anda fazendo.</p>
                                                    <p>Siga-o nas redes sociais:</p>
                                                    <ul className="container-redes">
                                                        <li>
                                                            <a href="#">
                                                                <RiLinkedinBoxFill className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <RiGithubFill className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <RiInstagramFill className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <MdEmail className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <button onClick={() => toggleModal('ianny')}>Fechar</button>
                                                </div>
                                            </div>
                                        )}
                                </div>
                        </div>

                        {/* Jean */}
                        <div className="membro-equipe primeira">
                            <div className="members-content">
                                    <div className="member">
                                        <div className="members-photo">
                                            <img src="avatar1.png" alt="avatar" />
                                        </div>
                                        <div lassName="nome">
                                            <p c>Jean Matheus</p>
                                        </div>

                                    </div>

                                    <div className="about">
                                        <p className="paragraf"><span className="negrito">Responsabilidade: </span>Jean Matheus é um desenvolvedor Back-End, responsável pela construção de APIs e integração com bancos de dados, garantindo a performance e a segurança do sistema.</p>

                                        <p className="paragraf"><span className="negrito">Estilo de trabalho: </span> Analítico e metódico, Jean foca na otimização do código e na escalabilidade do sistema, sempre buscando melhorias que beneficiem a performance do produto.</p>

                        
                                        <div className="btn-ver-mais">
                                            <button onClick={() => toggleModal('jean')}>Ver Mais</button>
                                        </div>
                                    </div>
                                        {/* Modal */}
                                        {activeModal === 'jean' && (
                                            <div className="modal-overlay" onClick={() => toggleModal('jean')}>
                                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                    <p>Veja o que <span className="negrito">Jean </span>anda fazendo.</p>
                                                    <p>Siga-o nas redes sociais:</p>
                                                    <ul className="container-redes">
                                                        <li>
                                                            <a href="#">
                                                                <RiLinkedinBoxFill className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <RiGithubFill className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <RiInstagramFill className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <MdEmail className="icon-rede"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <button onClick={() => toggleModal('jean')}>Fechar</button>
                                                </div>
                                            </div>
                                        )}
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </DesingMainSobre>
    );
}
