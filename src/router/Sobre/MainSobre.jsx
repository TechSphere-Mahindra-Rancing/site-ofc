import { DesingMainSobre } from "./desingSobre";

export default function MainSobre(){

    return(
        <DesingMainSobre>
            <section id="banner">
                <div className="imagem-inicial">
                     <img src="#" alt="image" />
                </div>
            </section>

            <section className="primeira-section">
                <h1>Sobre Nós</h1>
                <hr />
                <h3>Sobre a TechSphere e a Jornada até o Formula Hub</h3>
                <div className="primeiro-paragrafo">
                    <p>A TechSphere é uma empresa de tecnologia fundada com a missão de transformar ideias inovadoras em soluções digitais impactantes. Desde o início, nossa visão foi clara: usar a tecnologia para criar experiências interativas que não apenas resolvem problemas, mas também elevam a forma como as pessoas interagem com o mundo digital. Com uma equipe diversificada de desenvolvedores, designers e estrategistas de produto, nos especializamos em entregar plataformas que unem inovação e funcionalidade, sempre focadas em oferecer valor real aos usuários.</p>

                    <p>Nosso primeiro grande projeto, o Formula Hub, foi o resultado de nossa paixão compartilhada por tecnologia sustentável e esportes. Quando nos deparamos com o desafio de ajudar a popularizar a Fórmula E no Brasil, vimos a oportunidade perfeita para aplicar nossa expertise em desenvolvimento de plataformas digitais e criar algo totalmente novo. O Formula Hub nasceu como uma plataforma gamificada, onde fãs de automobilismo elétrico podem se engajar em desafios, aprender sobre o esporte e apostar em seus pilotos favoritos, tudo enquanto promovemos o conceito de corridas sustentáveis.</p>

                    <p>O Formula Hub foi nossa estreia no mercado, e sua concepção trouxe à vida nossa crença no poder da inovação. Desde então, ele se tornou uma vitrine para o nosso trabalho, refletindo nossa capacidade de integrar soluções tecnológicas robustas com experiências imersivas e interativas, sempre com um olhar voltado para o futuro das tecnologias sustentáveis.
                    </p>
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
                            <li>Focar na experiência do usuário:</li>
                            <li>Entregar soluções personalizadas</li>
                            <li>Aprimorar processos ágeis</li>
                        </ul>
                    </div>
                </div>

                <div className="nossa-missao">
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
                <div className="primeira">
                    <div className="foto">
                        <img src="#" alt="thiago" />
                    </div>

                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>Thiago lidera o projeto Formula Hub como Product Owner, sendo responsável por definir as prioridades, alinhar a visão do produto com os objetivos estratégicos e garantir que o desenvolvimento esteja sempre focado em entregar valor. Além disso, ele é o responsável pela arquitetura e implementação do Back-End, cuidando da eficiência, segurança e escalabilidade do sistema, incluindo servidores, banco de dados e APIs.</p>

                        <p><span className="negrito">Estilo de trabalho: </span>Focado e orientado a resultados, Thiago é um líder organizado que mantém uma comunicação constante com sua equipe, facilitando o progresso e a resolução de problemas. Sua abordagem técnica é detalhista e eficiente, sempre buscando soluções robustas que garantam a estabilidade do projeto. Ele equilibra bem suas funções, assegurando que tanto a visão estratégica quanto a execução técnica estejam alinhadas.</p>

                    </div>
                </div>
                
                {/* João */}
                <div className="segunda">
                    <div className="foto">
                        <img src="#" alt="joão" />
                    </div>

                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>João Victor é o Scrum Master do projeto, responsável por coordenar as cerimônias ágeis e garantir que a equipe siga os princípios do Scrum. Ele facilita a comunicação entre os membros da equipe e remove qualquer obstáculo que possa impedir o progresso.</p>

                        <p><span className="negrito">Estilo de trabalho: </span>João é organizado e comunicativo, sempre buscando melhorar os processos de trabalho e garantir que o time esteja em sintonia. Ele valoriza o desenvolvimento contínuo da equipe e é peça-chave na resolução de problemas do dia a dia.</p>

                    </div>
                </div>

                {/* Maria */}
                <div className="primeira">
                    <div className="foto">
                        <img src="#" alt="maria" />
                    </div>

                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span> Maria Alice lidera a equipe de Front-End, cuidando de toda a interface visual e da experiência do usuário. Ela é responsável por garantir que o design e a usabilidade estejam de acordo com os padrões de qualidade definidos.</p>

                        <p><span className="negrito">Estilo de trabalho: </span> Detalhista e criativa, Maria Alice se concentra em entregar um produto esteticamente agradável e funcional. Ela trabalha em estreita colaboração com os desenvolvedores de back-end e o Product Owner para garantir que o Front-End atenda às expectativas de performance e design.</p>

                        
                    </div>
                </div>

                {/* Ianny */}
                <div className="segunda">
                    <div className="foto">
                        <img src="#" alt="ianny" />
                    </div>

                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>Ianny colabora diretamente com Maria Alice, ajudando na implementação das interfaces e nas melhorias de usabilidade. Ela é parte integrante do desenvolvimento visual e da implementação de funcionalidades.</p>

                        <p><span className="negrito">Estilo de trabalho: </span>Colaborativa e prática, Ianny costuma contribuir com soluções ágeis e focadas em melhorar a experiência do usuário. Ela se destaca por sua habilidade em resolver problemas rapidamente e sugerir ajustes necessários durante o processo de desenvolvimento.</p>

                    </div>
                </div>

                {/* Jean */}
                <div className="primeira">
                    <div className="foto">
                        <img src="#" alt="jean" />
                    </div>

                    <div className="paragrafo">
                        <p><span className="negrito">Responsabilidade: </span>Assim como Ianny, Jean apoia Maria Alice no desenvolvimento da interface. Ele cuida da implementação de componentes e na integração de novas funcionalidades para garantir uma experiência fluida e dinâmica para os usuários.</p>

                        <p><span className="negrito">Estilo de trabalho: </span>Jean é metódico e atento aos detalhes, com foco na qualidade do código e na eficiência das interações entre usuário e sistema. Ele busca sempre implementar soluções técnicas que atendam às necessidades da interface sem comprometer a performance.
</p>
                    </div>
                </div>

            </section>
        </DesingMainSobre>
    )
}