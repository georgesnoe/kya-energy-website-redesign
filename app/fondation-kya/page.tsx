import Script from "next/script";
import "./fondation-kya.css";

export default function Page() {
    return (
        <>
            {/* <div className="loading-screen" id="loadingScreen">
                <div className="loading-content">
                    <div className="loading-logo">
                        <div className="logo-pulse">KYA</div>
                        <div className="logo-pulse">FOUNDATION</div>
                    </div>
                    <div className="loading-bar">
                        <div className="loading-progress"></div>
                    </div>
                    <p className="loading-text">Chargement en cours...</p>
                </div>
            </div> */}


            {/* <nav className="navbar" id="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src="https://yongvic.github.io/kya_text/placeholder.svg?height=50&width=120" alt="KYA ÉNERGIE GROUPE" className="logo" />
                        <div className="certification-badges">
                            <div className="certification-badge">
                                <i className="fas fa-certificate"></i>
                                <span>ISO 9001:2015</span>
                            </div>
                            <div className="quality-badge">
                                <i className="fas fa-shield-check"></i>
                                <span>QUALITY POLICY</span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-menu" id="nav-menu">
                        <a href="index.html" className="nav-link">HOME PAGE</a>
                        <a href="produits-services.html" className="nav-link">PRODUCTS & SERVICES</a>
                        <a href="a-propos.html" className="nav-link">OUR TEAM</a>
                        <a href="recompences.html" className="nav-link">AWARDS</a>
                        <a href="certification.html" className="nav-link">CERTIFICATION</a>
                        <a href="news.html" className="nav-link">NEWS</a>
                        <a href="kya-foundation.html" className="nav-link active">KYA FOUNDATION</a>
                    </div>
                    <div className="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav> */}


            <section className="foundation-hero">
                <div className="hero-video-container">
                    <video className="hero-video" autoPlay muted loop playsInline>
                        <source src="https://yongvic.github.io/kya_text/img/file.mp4" type="video/mp4" />

                        <img src="https://yongvic.github.io/kya_text/img/dio.jpg?height=1080&width=1920" alt="Solar panels landscape" />
                    </video>
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-particles" id="heroParticles"></div>

                <div className="container" >
                    <div className="hero-content" >
                        <div className="hero-text-block" data-aos="fade-up" data-aos-delay="300">
                            <div className="hero-badge">
                                <div className="badge-glow"></div>
                                <span className="badge-text">FONDATION KYA</span>
                            </div>

                            <h1 className="hero-title">
                                <span className="title-word" data-aos="fade-up" data-aos-delay="500">NOS</span>
                                <span className="title-word highlight" data-aos="fade-up" data-aos-delay="700">INITIATIVES</span>
                            </h1>

                            <div className="hero-description" data-aos="fade-up" data-aos-delay="900">
                                <p>
                                    La Fondation KYA est créée en <span className="highlight-orange">octobre 2022</span>.
                                    Elle a pour but de contribuer au développement socio-économique des populations africaines,
                                    issues des groupes les plus vulnérables par des interventions en faveur du développement
                                    en matière d&apos;<span className="highlight-green">énergie, d&apos;agriculture, de médecine, d&apos;éducation</span>
                                    et de l&apos;environnement.
                                </p>
                                <p className="hero-motto">
                                    <i className="fas fa-heart pulse"></i>
                                    <strong>Fondation KYA, pour un monde meilleur.</strong>
                                </p>
                            </div>

                            <div className="hero-actions" data-aos="fade-up" data-aos-delay="1100">
                                <button className="download-btn" id="downloadBtn">
                                    <div className="btn-bg"></div>
                                    <div className="btn-content">
                                        <i className="fas fa-download"></i>
                                        <span>Télécharger la lettre d&apos;engagement</span>
                                    </div>
                                    <div className="btn-ripple"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1300">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <p>Découvrir nos actions</p>
                </div>
            </section>


            <section className="actions-goals-section">
                <div className="section-bg">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>

                <div className="actions-goals-grid">

                    <div className="content-card action-card" data-aos="slide-right">
                        <div className="card-bg-pattern"></div>
                        <div className="card-content">
                            <div className="card-header">
                                <div className="card-icon">
                                    <i className="fas fa-rocket"></i>
                                </div>
                                <h2>Nos moyens d&apos;actions</h2>
                                <div className="card-line"></div>
                            </div>

                            <div className="card-body">
                                <ul className="action-list">
                                    <li className="list-item" data-aos="fade-left" data-aos-delay="100">
                                        <div className="item-bullet"></div>
                                        <span>L&apos;octroi de bourses et subventions de formation</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-left" data-aos-delay="200">
                                        <div className="item-bullet"></div>
                                        <span>L&apos;organisation des concours d&apos;innovation</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-left" data-aos-delay="300">
                                        <div className="item-bullet"></div>
                                        <span>L&apos;organisation des cours de formation, conférences, séminaires</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-left" data-aos-delay="400">
                                        <div className="item-bullet"></div>
                                        <span>L&apos;appui aux entrepreneurs</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-left" data-aos-delay="500">
                                        <div className="item-bullet"></div>
                                        <span>Le soutien à l&apos;autonomisation des femmes et des jeunes filles</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-left" data-aos-delay="600">
                                        <div className="item-bullet"></div>
                                        <span>L&apos;appui à l&apos;insertion socio-professionnelle des jeunes diplômés</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="content-card goals-card" data-aos="slide-left">
                        <div className="card-bg-pattern"></div>
                        <div className="card-content">
                            <div className="card-header">
                                <div className="card-icon">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <h2>Nos objectifs</h2>
                                <div className="card-line"></div>
                            </div>

                            <div className="card-body">
                                <ul className="goals-list">
                                    <li className="list-item" data-aos="fade-right" data-aos-delay="100">
                                        <div className="item-bullet"></div>
                                        <span>Accroître l&apos;accès aux services énergétiques durables en milieu rural</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-right" data-aos-delay="200">
                                        <div className="item-bullet"></div>
                                        <span>Promouvoir la science et la technologie chez les femmes</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-right" data-aos-delay="300">
                                        <div className="item-bullet"></div>
                                        <span>Promouvoir l&apos;employabilité des jeunes en énergies renouvelables</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-right" data-aos-delay="400">
                                        <div className="item-bullet"></div>
                                        <span>Contribuer à l&apos;amélioration de la qualité de l&apos;éducation</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-right" data-aos-delay="500">
                                        <div className="item-bullet"></div>
                                        <span>Contribuer à l&apos;autonomisation économique des femmes</span>
                                    </li>
                                    <li className="list-item" data-aos="fade-right" data-aos-delay="600">
                                        <div className="item-bullet"></div>
                                        <span>Contribuer à la lutte contre les changements climatiques</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="director-video-section">
                <div className="container">
                    <div className="director-content" data-aos="fade-up">
                        <div className="section-header">
                            <h2 className="section-title">
                                <span className="title-line">Les domaines</span>
                                <span className="title-line highlight">d&apos;intervention</span>
                            </h2>
                            <p className="section-subtitle">
                                Découvrez notre approche et notre vision à travers cette présentation vidéo
                            </p>
                        </div>

                        <div className="video-player-container" data-aos="zoom-in" data-aos-delay="300">
                            <div className="video-wrapper">
                                <video
                                    id="kyaVideo"
                                    className="kya-video"
                                    poster="https://yongvic.github.io/kya_text/img/fond.png.jpg?width=800"
                                    preload="metadata"
                                >
                                    <source src="https://yongvic.github.io/kya_text/img/video_kya.mp4" type="video/mp4" />
                                    <source src="https://yongvic.github.io/kya_text/img/video_kya.webm" type="video/webm" />
                                    Votre navigateur ne supporte pas la lecture vidéo.
                                </video>


                                <div className="video-controls" id="videoControls">
                                    <div className="controls-overlay">

                                        <button className="control-btn play-pause-btn" id="playPauseBtn">
                                            <i className="fas fa-play" id="playPauseIcon"></i>
                                        </button>


                                        <div className="progress-container">
                                            <div className="progress-bar" id="progressBar">
                                                <div className="progress-filled" id="progressFilled"></div>
                                                <div className="progress-handle" id="progressHandle"></div>
                                            </div>
                                            <div className="time-display">
                                                <span id="currentTime">0:00</span>
                                                <span className="time-separator">/</span>
                                                <span id="duration">0:00</span>
                                            </div>
                                        </div>


                                        <div className="volume-container">
                                            <button className="control-btn volume-btn" id="volumeBtn">
                                                <i className="fas fa-volume-up" id="volumeIcon"></i>
                                            </button>
                                            <div className="volume-slider" id="volumeSlider">
                                                <div className="volume-bar">
                                                    <div className="volume-filled" id="volumeFilled"></div>
                                                    <div className="volume-handle" id="volumeHandle"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="speed-container">
                                            <button className="control-btn speed-btn" id="speedBtn">
                                                <span className="speed-text">1x</span>
                                            </button>
                                            <div className="speed-menu" id="speedMenu">
                                                <button className="speed-option" data-speed="0.5">0.5x</button>
                                                <button className="speed-option" data-speed="0.75">0.75x</button>
                                                <button className="speed-option active" data-speed="1">1x</button>
                                                <button className="speed-option" data-speed="1.25">1.25x</button>
                                                <button className="speed-option" data-speed="1.5">1.5x</button>
                                                <button className="speed-option" data-speed="2">2x</button>
                                            </div>
                                        </div>


                                        <button className="control-btn fullscreen-btn" id="fullscreenBtn">
                                            <i className="fas fa-expand" id="fullscreenIcon"></i>
                                        </button>
                                    </div>
                                </div>


                                <div className="video-loading" id="videoLoading">
                                    <div className="loading-spinner">
                                        <div className="spinner-ring"></div>
                                        <div className="spinner-ring"></div>
                                        <div className="spinner-ring"></div>
                                    </div>
                                    <p>Chargement de la vidéo...</p>
                                </div>


                                <div className="video-overlay-initial" id="videoOverlay">
                                    <div className="overlay-content">
                                        <div className="play-button-large" id="playButtonLarge">
                                            <i className="fas fa-play"></i>
                                        </div>
                                        <h3>Présentation KYA Foundation</h3>
                                        <p>Découvrez notre mission et nos actions</p>
                                        <div className="video-duration-badge">
                                            <i className="fas fa-clock"></i>
                                            <span>5:30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="video-info" data-aos="fade-up" data-aos-delay="500">
                                <div className="video-details">
                                    <h4>À propos de cette vidéo</h4>
                                    <p>
                                        Cette présentation vous donne un aperçu complet de la mission de la Fondation KYA,
                                        de nos domaines d&apos;intervention et de l&apos;impact de nos actions sur les communautés africaines.
                                        Découvrez comment nous contribuons au développement durable à travers l&apos;éducation,
                                        les énergies renouvelables et l&apos;autonomisation des femmes.
                                    </p>
                                    <div className="video-tags">
                                        <span className="tag">Éducation</span>
                                        <span className="tag">Énergies Renouvelables</span>
                                        <span className="tag">Développement Durable</span>
                                        <span className="tag">Autonomisation</span>
                                    </div>
                                </div>

                                <div className="video-stats">
                                    <div className="stat-item">
                                        <i className="fas fa-eye"></i>
                                        <span>2,847 vues</span>
                                    </div>
                                    <div className="stat-item">
                                        <i className="fas fa-thumbs-up"></i>
                                        <span>156 likes</span>
                                    </div>
                                    <div className="stat-item">
                                        <i className="fas fa-share"></i>
                                        <span>23 partages</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="intervention-domains">
                <div className="container">
                    <div className="domains-grid">
                        <div className="domain-card" data-aos="zoom-in" data-aos-delay="100">
                            <div className="domain-icon">
                                <div className="icon-bg"></div>
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="domain-content">
                                <h3 className="domain-title">Éducation et formation</h3>
                                <p className="domain-description">
                                    L&apos;éducation est un droit fondamental, un puissant vecteur de développement et l&apos;un des meilleurs moyens de réduire la pauvreté,  de promouvoir l&apos;égalité entre les sexes et de faire progresser la paix et la stabilité.
                                    C&apos;est dans ce sens que la Fondation KYA intervient dans l’accès à l’éducation des jeunes filles dans le domaine de la science et la technologie.   La fondation encourage  la poursuite des études chez les filles talentueuses  et octroie également des bourses d’études à celles qui sont vulnérables.
                                </p>
                                <div className="domain-stats">
                                    <div className="stat">
                                        <span className="stat-number" data-count="150">0</span>
                                        <span className="stat-label">Bourses accordées</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="domain-card" data-aos="zoom-in" data-aos-delay="300">
                            <div className="domain-icon">
                                <div className="icon-bg"></div>
                                <i className="fas fa-solar-panel"></i>
                            </div>
                            <div className="domain-content">
                                <h3 className="domain-title">Énergies renouvelables</h3>
                                <p className="domain-description">
                                    L’énergie est importante pour le développement social et économique.  Afin de faciliter l’accès à l’énergie durable en milieu rural et semi-urbain, la Fondation KYA intervient  en installation de système de Pompage et systèmes d&apos;éclairage solaire. Des formations gratuites sont également offertes aux filles en installation et maintenance des systèmes solaires photovoltaïques chaque année.
                                </p>
                                <div className="domain-stats">
                                    <div className="stat">
                                        <span className="stat-number" data-count="75">0</span>
                                        <span className="stat-label">Installations solaires</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="domain-card full-width" data-aos="zoom-in" data-aos-delay="500">
                            <div className="domain-icon">
                                <div className="icon-bg"></div>
                                <i className="fas fa-globe-africa"></i>
                            </div>
                            <div className="domain-content">
                                <h3 className="domain-title">Développement durable</h3>
                                <p className="domain-description">
                                    Alignée sur les 17 Objectifs de Développement Durable de l&apos;ONU,
                                    la Fondation KYA se concentre sur 7 objectifs prioritaires pour transformer les communautés africaines.
                                </p>
                                <div className="sdg-grid">
                                    <div className="sdg-item">
                                        <div className="sdg-number">ODD1</div>
                                        <span>Éliminer la pauvreté sous toutes ses formes</span>
                                    </div>
                                    <div className="sdg-item">
                                        <div className="sdg-number">ODD4</div>
                                        <span>Éducation de qualité  pour tous</span>
                                    </div>
                                    <div className="sdg-item">
                                        <div className="sdg-number">ODD5</div>
                                        <span>Egalité des sexes et autonomisation des femmes</span>
                                    </div>
                                    <div className="sdg-item">
                                        <div className="sdg-number">ODD7</div>
                                        <span>Énergies durables pour tous</span>
                                    </div>
                                    <div className="sdg-item">
                                        <div className="sdg-number">ODD8</div>
                                        <span>Croissance économique et emploi pour tous</span>
                                    </div>
                                    <div className="sdg-item">
                                        <div className="sdg-number">ODD13</div>
                                        <span>Lutte contre les changements climatiques</span>
                                    </div>
                                    <div className="sdg-item">
                                        <div className="sdg-number">ODD17</div>
                                        <span>Partenariats pour la réalisation des objectifs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="activities-section">
                <div className="container">
                    <h2 className="section-title center" data-aos="fade-up">
                        <span className="title-line">Quelques images</span>
                        <span className="title-line highlight">de nos activités</span>
                    </h2>

                    <div className="activities-carousel" data-aos="fade-up" data-aos-delay="300">
                        <div className="swiper activitiesSwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="activity-card">
                                        <div className="activity-image">
                                            <img src="https://yongvic.github.io/kya_text/img/acti1.avif?height=300&width=400" alt="Formation des jeunes filles" />
                                            <div className="activity-overlay">
                                                <div className="activity-icon">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activity-content">
                                            <h3>Formation des jeunes filles en solaire</h3>
                                            <p>Programme de formation technique pour l&apos;autonomisation des femmes dans le secteur de l&apos;énergie solaire.</p>
                                            <div className="activity-meta">
                                                <span className="activity-date">
                                                    <i className="fas fa-calendar"></i>
                                                    Mai 2024
                                                </span>
                                                <span className="activity-location">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    Lomé, Togo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="activity-card">
                                        <div className="activity-image">
                                            <img src="https://yongvic.github.io/kya_text/img/acti4.avif?height=300&width=400" alt="Installation solaire" />
                                            <div className="activity-overlay">
                                                <div className="activity-icon">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activity-content">
                                            <h3>Lancement de la fondation KYA</h3>
                                            <p>Un engagement durable pour l’impact social et environnemental.</p>
                                            <div className="activity-meta">
                                                <span className="activity-date">
                                                    <i className="fas fa-calendar"></i>
                                                    2015
                                                </span>
                                                <span className="activity-location">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    Lomé, Togo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="activity-card">
                                        <div className="activity-image">
                                            <img src="https://yongvic.github.io/kya_text/placeholder.svg?height=300&width=400" alt="Conférence éducation" />
                                            <div className="activity-overlay">
                                                <div className="activity-icon">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activity-content">
                                            <h3>Conférence sur l&apos;éducation inclusive</h3>
                                            <p>Sensibilisation sur l&apos;importance de l&apos;éducation des filles en sciences et technologies.</p>
                                            <div className="activity-meta">
                                                <span className="activity-date">
                                                    <i className="fas fa-calendar"></i>
                                                    Mars 2024
                                                </span>
                                                <span className="activity-location">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    Sokodé, Togo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="activity-card">
                                        <div className="activity-image">
                                            <img src="https://yongvic.github.io/kya_text/img/acti3.avif?height=300&width=400" alt="Remise de bourses" />
                                            <div className="activity-overlay">
                                                <div className="activity-icon">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activity-content">
                                            <h3>Remise de bourses d&apos;études</h3>
                                            <p>Cérémonie de remise de bourses à 50 jeunes filles méritantes pour poursuivre leurs études supérieures.</p>
                                            <div className="activity-meta">
                                                <span className="activity-date">
                                                    <i className="fas fa-calendar"></i>
                                                    Février 2024
                                                </span>
                                                <span className="activity-location">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    Lomé, Togo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="support-cta">
                <div className="cta-bg">
                    <div className="cta-particles"></div>
                </div>
                <div className="container">
                    <div className="cta-content" data-aos="zoom-in">
                        <h2>Rejoignez notre mission</h2>
                        <p>Ensemble, construisons un avenir durable pour l&apos;Afrique</p>
                        <button className="support-btn" id="supportBtn">
                            <div className="btn-bg"></div>
                            <div className="btn-content">
                                <i className="fas fa-heart"></i>
                                <span>Soutenir les actions de la Fondation KYA</span>
                            </div>
                            <div className="btn-ripple"></div>
                        </button>
                    </div>
                </div>
            </section>


            <section className="sponsors-section">
                <div className="container">
                    <h2 className="section-title center" data-aos="fade-up">
                        <span className="title-line">Nos</span>
                        <span className="title-line highlight">Sponsors OR</span>
                    </h2>

                    <div className="sponsors-container" data-aos="fade-up" data-aos-delay="300">
                        <div className="sponsors-grid">
                            <div className="sponsor-card">
                                <div className="sponsor-logo">
                                    <img src="https://yongvic.github.io/kya_text/img/asecna.png?height=80&width=160" alt="Sponsor 1" />
                                </div>
                                <div className="sponsor-glow"></div>
                            </div>
                            <div className="sponsor-card">
                                <div className="sponsor-logo">
                                    <img src="https://yongvic.github.io/kya_text/img/cetef.avif?height=80&width=160" alt="CETEF" />
                                </div>
                                <div className="sponsor-glow"></div>
                            </div>
                            <div className="sponsor-card">
                                <div className="sponsor-logo">
                                    <img src="https://yongvic.github.io/kya_text/img/onono.avif?height=80&width=160" alt="ONOMO" />
                                </div>
                                <div className="sponsor-glow"></div>
                            </div>
                            <div className="sponsor-card">
                                <div className="sponsor-logo">
                                    <img src="https://yongvic.github.io/kya_text/img/MOOV.avif?height=80&width=160" alt="Sponsor 4" />
                                </div>
                                <div className="sponsor-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="news-section">
                <div className="container">
                    <h2 className="section-title center" data-aos="fade-up">
                        <span className="title-line">Nos dernières</span>
                        <span className="title-line highlight">Actualités</span>
                    </h2>

                    <div className="news-grid">
                        <article className="news-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="news-image">
                                <img src="https://yongvic.github.io/kya_text/img/2fcfb1_6094c382ee544223a1d5904f89862906~mv2.avif?height=250&width=350" alt="Formation des jeunes filles" />
                                <div className="news-overlay">
                                    <div className="news-category">Formation</div>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-date">
                                        <i className="fas fa-calendar"></i>
                                        7 mai 2024
                                    </span>
                                    <span className="news-author">
                                        <i className="fas fa-user"></i>
                                        Fondation KYA
                                    </span>
                                </div>
                                <h3 className="news-title">Formation des jeunes filles en solaire : la Fondation KYA</h3>
                                <p className="news-excerpt">
                                    Un programme innovant pour former les jeunes femmes aux technologies solaires
                                    et promouvoir leur autonomisation économique.
                                </p>
                                <div className="news-stats">
                                    <span><i className="fas fa-eye"></i> 74</span>
                                    <span><i className="fas fa-comment"></i> 0</span>
                                    <span><i className="fas fa-heart"></i> 12</span>
                                </div>
                                <a href="#" className="news-link">
                                    Lire la suite
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </article>

                        <article className="news-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="news-image">
                                <img src="https://yongvic.github.io/kya_text/img/3191ca_33235050d9ff4df2a7bb29133111eda6~mv2.avif?height=250&width=350" alt="Réunion du Conseil" />
                                <div className="news-overlay">
                                    <div className="news-category">Gouvernance</div>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-date">
                                        <i className="fas fa-calendar"></i>
                                        24 mai 2024
                                    </span>
                                    <span className="news-author">
                                        <i className="fas fa-user"></i>
                                        Conseil d&apos;administration
                                    </span>
                                </div>
                                <h3 className="news-title">Fondation KYA : Réunion du Conseil d&apos;administration</h3>
                                <p className="news-excerpt">
                                    Le conseil d&apos;administration se réunit pour définir les orientations stratégiques
                                    et approuver les nouveaux projets de développement.
                                </p>
                                <div className="news-stats">
                                    <span><i className="fas fa-eye"></i> 53</span>
                                    <span><i className="fas fa-comment"></i> 2</span>
                                    <span><i className="fas fa-heart"></i> 8</span>
                                </div>
                                <a href="#" className="news-link">
                                    Lire la suite
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </article>

                        <article className="news-card" data-aos="fade-up" data-aos-delay="500">
                            <div className="news-image">
                                <img src="https://yongvic.github.io/kya_text/img/3191ca_6ad0f10b94204d6e98884d78e6fe026a~mv2.avif?height=250&width=350" alt="Soutien renouvelé" />
                                <div className="news-overlay">
                                    <div className="news-category">Éducation</div>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-date">
                                        <i className="fas fa-calendar"></i>
                                        24 mai 2024
                                    </span>
                                    <span className="news-author">
                                        <i className="fas fa-user"></i>
                                        Équipe terrain
                                    </span>
                                </div>
                                <h3 className="news-title">Un soutien renouvelé pour l&apos;éducation des filles</h3>
                                <p className="news-excerpt">
                                    Extension du programme de bourses d&apos;études pour permettre à plus de jeunes filles
                                    d&apos;accéder à l&apos;enseignement supérieur en sciences et technologies.
                                </p>
                                <div className="news-stats">
                                    <span><i className="fas fa-eye"></i> 44</span>
                                    <span><i className="fas fa-comment"></i> 1</span>
                                    <span><i className="fas fa-heart"></i> 15</span>
                                </div>
                                <a href="#" className="news-link">
                                    Lire la suite
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


            <footer className="footer">
                <div className="footer-bg">
                    <div className="footer-pattern"></div>
                </div>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="footer-logo">
                                <img src="https://yongvic.github.io/kya_text/placeholder.svg?height=40&width=100" alt="KYA ÉNERGIE GROUPE" />
                                <p>Democratizing access to sustainable energy</p>
                            </div>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <i className="fab fa-facebook"></i>
                                    <div className="social-ripple"></div>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-twitter"></i>
                                    <div className="social-ripple"></div>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-linkedin"></i>
                                    <div className="social-ripple"></div>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-instagram"></i>
                                    <div className="social-ripple"></div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="index.html">Home Page</a></li>
                                <li><a href="products-services.html">Products & Services</a></li>
                                <li><a href="our-team.html">Our Team</a></li>
                                <li><a href="awards.html">Awards</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="certification.html">Certification</a></li>
                                <li><a href="news.html">News</a></li>
                                <li><a href="kya-foundation.html">KYA Foundation</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Contact</h4>
                            <div className="contact-info">
                                <p><i className="fas fa-envelope"></i> contact@kya-energy.com</p>
                                <p><i className="fas fa-phone"></i> +33 1 23 45 67 89</p>
                                <p><i className="fas fa-map-marker-alt"></i> Paris, France</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 KYA ÉNERGIE GROUPE. All rights reserved.</p>
                        <div className="footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Legal Notice</a>
                        </div>
                    </div>
                </div>
            </footer>



            <Script src="/fondation-kya.js" />
        </>
    );
}