<template>
    <div class="bg-[url('/img/fond.png')] bg-fixed w-full min-h-screen h-fit bg-cover pt-10 relative">

        <Nav @phoneDisplay="togglePhoneNav"/>

        <div class="block text-center pb-44">
            <ArrowIcon color="white" class="block m-auto mt-24 animate-bounce" />

            <TitleSide class="mt-16">
                <h1 class="font-Habibi text-white text-2xl sm:text-4xl uppercase translate-y-6 animate-[transformBottomTop_1s_ease_forwards]">Erwan Nicolas</h1>
            </TitleSide>

            <h2 class="text-white font-Gruppo mt-6 text-xl sm:text-3xl translate-y-6 animate-[transformBottomTop_1s_ease_forwards]">Développeur Full Stack</h2>

            <Separator class="block mx-auto mt-12 translate-y-6 animate-[transformBottomTop_1s_ease_forwards]"/>
        </div>

        <a href="#about-me" class="block mx-auto absolute bottom-10 left-0 right-0 cursor-pointer border border-solid border-white rounded-full w-fit">
            <ArrowIcon color="white" class="animate-[transformTopBottom_1s_ease] my-1.5 px-1 sm:px-0 sm:mx-1 sm:my-2.5" />
        </a>
    </div>


    <!-- Bg linear gradient -->
    <div class="bg-gradient-to-b from-[#161B1F] to-[#010204] w-full h-fit relative overflow-hidden" :class="this.isPhoneNavDisplay ? 'hidden' : 'block'">

        <!-- About me -->
        <div class="pt-20 px-10 md:px-20 relative scroll-smooth max-w-[1920px] w-fit mx-auto" id="about-me">

            <RoundWhiteBlur class="absolute top-[400px]"/>
            <RoundWhiteBlur class="absolute top-[700px] right-0"/>
            <RoundWhiteBlur class="absolute top-[2100px]"/>

            <h1 class="uppercase font-ZenTokyoZoo text-5xl sm:text-7xl md:text-8xl text-white leading-tight">A propos <br />de moi</h1>
            <img src="/img/shooting_star.png" alt="Etoile filante" class="hidden xl:block w-[500px] 2xl:w-auto absolute top-24 2xl:top-20 right-20" data-aos="slide-right">

            <div class="xl:mx-10 2xl:mx-40">
                <div class="xl:flex xl:gap-x-7 -translate-y-7 md:-top-10">
                    <img src="/img/photo_profil.png" alt="Etoile filante" class="mx-auto xl:mx-0 w-64 h-64 md:w-96 md:h-96 rounded-xl" data-aos="zoom-in">

                    <div class="mx-0 sm:mx-10 lg:mx-40 xl:mx-0 mt-12 xl:mt-0">
                        <h1 class="font-ZenOldMincho text-4xl 2xl:text-5xl text-white text-center xl:text-left">Erwan Nicolas</h1>
                        <h2 class="text-white font-Gruppo mt-3 text-xl 2xl:text-2xl text-center xl:text-left">Développeur Full Stack</h2>

                        <p class="font-Roboto text-white text-justify text-xs md:text-sm mt-7">
                            Alternant en BUT Informatique à l'Université Côte d'Azur, je suis passionné par le développement, les nouvelles technologies, 
                            l'entrepreneuriat et la gendarmerie. Depuis mon enfance, l'informatique et la programmation occupent une place centrale dans ma vie, 
                            me permettant de concevoir les technologies du futur. Toujours curieux et avide d'apprentissage, je cherche continuellement à développer 
                            mes compétences et à relever de nouveaux défis. Récemment, mon intérêt pour l'entrepreneuriat m'a conduit à rejoindre le réseau PEPITE, 
                            où j'ai acquis des connaissances en gestion d'entreprise, élaboration de business plans, et communication avec des investisseurs.<br /><br />

                            En parallèle, je nourris une profonde admiration pour la gendarmerie, dont les valeurs d'intégrité, de service et de responsabilité m'inspirent. 
                            Convaincu que ces principes peuvent s'allier à l'informatique, je suis actuellement candidat à la réserve opérationnelle, avec l'ambition de contribuer 
                            activement à la protection de mon pays et de ses citoyens. Alliant polyvalence, vision innovante et engagement, je m'investis pleinement dans mes études
                            et mes projets, avec l'objectif de créer un impact positif dans chacun de mes domaines d'intérêt.
                        </p>

                        <div class="md:flex md:justify-between md:items-center mt-8">
                            <div class="flex gap-x-6 justify-center md:justify-normal">

                                <a href="https://www.linkedin.com/in/erwan-nicolas-79729029a/" target="_blank" class="hover:-translate-y-1 duration-300">
                                    <LinkedinIcon color="white" />
                                </a>
                                
                                <a href="https://github.com/NicoDev99" target="_blank" class="hover:-translate-y-1 duration-300">
                                    <GithubIcon color="white" />
                                </a>
                            </div>

                            <a href="/CV.pdf" download="CV.pdf" class="mx-auto mt-12 md:mt-0 md:mx-0 w-fit text-white cursor-pointer flex gap-x-2 border border-solid border-white px-3 py-2.5 rounded hover:bg-white/10 duration-500">
                                Télécharger CV
                                <PaperIcon color="white"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- My course -->
            <div class="mt-32">

              <!-- Experiences -->
              <TitleSide class="mb-8">
                <h1 class="font-ZenOldMincho text-white text-3xl">Expériences Pro</h1>
              </TitleSide>

              <div class="w-fit mx-auto relative">
                <Satellite width="200" height="200" color="white" class="-rotate-90 hidden xl:block translate-x-8 2xl:translate-x-20 translate-y-10"/>

                <ExperienceElement number="1" orientation="left" class="translate-x-0 xl:translate-x-48 2xl:translate-x-64 mb-40 xl:mb-0 mt-24 xl:mt-0">
                  <div class="text-white w-full max-w-lg 2xl:max-w-xl" data-aos="fade-right">
                    <div class="mb-3">
                      <h3 class="font-Yaldevi text-[#BDBDBD] text-sm mb-2">Frolson</h3>
                      <div class="flex justify-between items-center">
                        <h1 class="font-ZenDots text-sm lg:text-lg 2xl:text-xl">Développeur IA</h1>
                        <p class="text-[#BDBDBD] text-xs 2xl:text-sm font-YujiSyuku text-right">dec. 2024 - Aujourd'hui</p>
                      </div>
                    </div>
                    <p class="text-justify font-Roboto text-sm lg:text-base">
                        Chez Frolson, je conçois et mets en place des automatisations 
                        avancées avec des outils comme Make et n8n, tout en les intégrant aux systèmes existants et à des plateformes comme Coda. 
                        Je développe également des solutions d'IA, en fine-tunant des modèles comme Ollama et Deepseek, et en les intégrant dans un 
                        système RAG pour l'analyse de documents complexes dans le domaine de l'assurance.
                    </p>
                  </div>
                </ExperienceElement>

                <ExperienceElement number="2" orientation="right" class="translate-x-0 xl:-translate-x-52 2xl:-translate-x-64 mt-10 mb-40 xl:mb-0">
                  <div class="text-white w-full max-w-lg 2xl:max-w-xl" data-aos="fade-left">
                    <div class="mb-3">
                      <h3 class="font-Yaldevi text-[#BDBDBD] text-sm mb-2">INOCESS</h3>
                      <div class="flex justify-between items-center">
                        <h1 class="font-ZenDots text-sm lg:text-lg 2xl:text-xl">Développeur Full Stack</h1>
                        <p class="text-[#BDBDBD] text-xs 2xl:text-sm font-YujiSyuku text-right">oct. 2022 - Aujourd'hui</p>
                      </div>
                    </div>
                    <p class="text-justify font-Roboto text-sm lg:text-base">
                      J'ai rejoint l'équipe d'INOCESS en alternance dans le but de contribuer à la création, la conception, le développement, la mise en production et la maintenance
                      d'une solution web permettant la visualisation de données sous différentes formes : graphiques, graphes, matrices, etc.
                    </p>
                  </div>
                </ExperienceElement>

                <ExperienceElement number="3" orientation="left" class="translate-x-0 xl:translate-x-48 2xl:translate-x-64 mb-40 xl:mb-0 mt-10">
                  <div class="text-white w-full max-w-lg 2xl:max-w-xl" data-aos="fade-right">
                    <div class="mb-3">
                      <h3 class="font-Yaldevi text-[#BDBDBD] text-sm mb-2">NicoDev</h3>
                      <div class="flex justify-between items-center">
                        <h1 class="font-ZenDots text-sm lg:text-lg 2xl:text-xl">Fondateur CEO</h1>
                        <p class="text-[#BDBDBD] text-xs 2xl:text-sm font-YujiSyuku text-right">juin 2023 - juin 2024</p>
                      </div>
                    </div>
                    <p class="text-justify font-Roboto text-sm lg:text-base">
                      Après avoir passé plusieurs années à travailler en tant qu'indépendant, j'ai pris la décision de lancer ma propre entreprise.
                      Mon objectif était de donner vie à mes projets tout en collaborant avec d'autres entreprises, en leur proposant mes services pour
                      la conception et le développement de solutions informatiques sur mesure.
                    </p>
                  </div>
                </ExperienceElement>
              </div>

              <!-- Formations -->
              <TitleSide class="my-32">
                <h1 class="font-ZenOldMincho text-white text-3xl">Formations</h1>
              </TitleSide>

              <div class="w-fit mx-auto relative">

                <ExperienceElement number="4" orientation="right" class="translate-x-0 xl:-translate-x-52 2xl:-translate-x-64 mt-24 xl:mt-0 mb-40 xl:mb-0">
                  <div class="text-white w-full max-w-lg 2xl:max-w-xl" data-aos="fade-left">
                    <div class="mb-3">
                      <h3 class="font-Yaldevi text-[#BDBDBD] text-sm mb-2">Université Côte d'Azur</h3>
                      <div class="flex justify-between items-center">
                        <h1 class="font-ZenDots text-sm lg:text-lg 2xl:text-xl">BUT Informatique</h1>
                        <p class="text-[#BDBDBD] text-xs 2xl:text-sm font-YujiSyuku text-right">sept. 2022 - Aujourd'hui</p>
                      </div>
                    </div>
                    <p class="text-justify font-Roboto text-sm lg:text-base">
                      Après l'obtention de mon baccalauréat, j'ai rejoint le Bachelor Universitaire de Technologie (BUT) à l'IUT de Nice,
                      sur le campus de Sophia Antipolis, dans le but d'approfondir mes compétences en informatique. Actuellement en troisième année de BUT, cette
                      formation m'a permis de faire des avancées significatives dans ce domaine aussi vaste que complexe.
                    </p>
                  </div>
                </ExperienceElement>

                <ExperienceElement number="5" orientation="left" class="translate-x-0 xl:translate-x-48 2xl:translate-x-64 mt-10 mb-40 xl:mb-0">
                  <div class="text-white w-full max-w-lg 2xl:max-w-xl" data-aos="fade-right">
                    <div class="mb-3">
                      <h3 class="font-Yaldevi text-[#BDBDBD] text-sm mb-2">PEPITE PACA-EST</h3>
                      <div class="flex justify-between items-center">
                        <h1 class="font-ZenDots text-sm lg:text-lg 2xl:text-xl">Etudes entrepreneuriales</h1>
                        <p class="text-[#BDBDBD] text-xs 2xl:text-sm font-YujiSyuku text-right">fev. 2024 - août 2024</p>
                      </div>
                    </div>
                    <p class="text-justify font-Roboto text-sm lg:text-base">
                      Dans le cadre du programme PEPITE, j'ai rejoint la formation D2E pour approfondir mes compétences
                      dans le domaine de l'entrepreneuriat et de la gestion de projet. Cette formation m'offre l'opportunité d'explorer en profondeur divers aspects
                      tels que l'élaboration de plans d'affaires, les interactions avec les investisseurs, les aspects juridiques incluant les différents statuts
                      possibles pour les entreprises, ainsi que les études de marché.
                    </p>
                  </div>
                </ExperienceElement>

                <ExperienceElement number="6" orientation="right" class="translate-x-0 xl:-translate-x-52 2xl:-translate-x-64 mt-10">
                  <div class="text-white w-full max-w-lg 2xl:max-w-xl" data-aos="fade-left">
                    <div class="mb-3">
                      <h3 class="font-Yaldevi text-[#BDBDBD] text-sm mb-2">Lycée Saint Exupery</h3>
                      <div class="flex justify-between items-center">
                        <h1 class="font-ZenDots text-sm lg:text-lg 2xl:text-xl">Baccalauréat</h1>
                        <p class="text-[#BDBDBD] text-xs 2xl:text-sm font-YujiSyuku text-right">sept. 2019 - juin 2022</p>
                      </div>
                    </div>
                    <p class="text-justify font-Roboto text-sm lg:text-base">
                      Passionné par les mathématiques et l'informatique, j'ai choisi ces deux spécialités pour mon baccalauréat. En terminale, j'ai également
                      suivi l'option mathématiques expertes, où j'ai pu m'épanouir pleinement en explorant de nouveaux aspects de cette discipline.
                    </p>
                  </div>
                </ExperienceElement>

                <SatelliteDish width="175" height="175" color="white" class="absolute left-64 hidden xl:block"/>
            </div>
        </div>
        </div>


        <!-- Skills -->
        <div class="mt-44 md:mt-96 mx-10 relative max-w-[1920px] lg:mx-auto" id="skills">

            <RoundWhiteBlur class="absolute top-[700px] right-0"/>

            <div class="w-fit mx-auto" >
                <Separator class="mx-auto mb-10" data-aos="zoom-in" data-aos-easing="linear"/>
                <h1 class="font-Syncopate text-white text-center text-2xl sm:text-4xl">Mes compétences</h1>
                <h2 class="font-Genos text-[#767478] max-w-xl mx-14 md:mx-auto text-center mt-6 text-xs lg:text-lg">Au file des années j'ai acquis une grande expérience dans différents langages qui ne cessent encore de me surprendre aujourd'hui par leurs nouveautés</h2>
            </div>

            <div class="md:grid md:grid-cols-2 mx-0 lg:mx-20 2xl:mx-64 md:gap-x-14 lg:gap-x-28 mt-10">
              <LinearProgressBar firstColor="#F16529" endColor="#2965F1" progress="90" name="HTML / CSS" class="mt-16"/>
              <ProgressBar color="#8993C1" progress="90" name="PHP" class="mt-16" />
              <ProgressBar color="#CF649B" progress="70" name="SASS / SCSS" class="mt-16" />
              <ProgressBar color="#339ADB" progress="80" name="SQL" class="mt-16" />
              <ProgressBar color="#4DB0B4" progress="90" name="TailWindCSS" class="mt-16" />
              <LinearProgressBar firstColor="#D10A77" endColor="#9E28F8" progress="50" name="InfluxDB" class="mt-16"/>
              <ProgressBar color="#FCD329" progress="70" name="JavaScript" class="mt-16" />
              <ProgressBar color="#FE2C21" progress="70" name="Laravel" class="mt-16"/>
              <ProgressBar color="#FE767A" progress="50" name="ChartJS" class="mt-16" />
              <ProgressBar color="#A3EDBA" progress="50" name="Highcharts" class="mt-16" />
              <ProgressBar color="#AF1F1F" progress="70" name="Java" class="mt-16" />
              <LinearProgressBar firstColor="#FFDF58" endColor="#3573A4" progress="70" name="Python" class="mt-16"/>
              <LinearProgressBar firstColor="#9D68AB" endColor="#5571B5" progress="50" name="Git / GitHub" class="mt-16"/>
              <LinearProgressBar firstColor="#809DC9" endColor="#B32024" progress="70" name="SVN / Redmine" class="mt-16"/>
              <ProgressBar color="#2A6914" progress="70" name="VueJS / NuxtJS" class="mt-16" />
              <ProgressBar color="#1A58CF" progress="30" name="TypeScript" class="mt-16" />
              <ProgressBar color="#2B9DDD" progress="30" name="Docker" class="mt-16" />
              <ProgressBar color="#A259FF" progress="80" name="Figma" class="mt-16" />
              <ProgressBar color="#95a69f" progress="20" name="IA" class="mt-16" />
              <LinearProgressBar firstColor="#0ebeff" endColor="#ff42b3" progress="20" name="Automatisation" class="mt-16"/>
            </div>

            <div class="flex items-center mt-24 ml-0 md:ml-8">
                <Satellite width="125" height="125" color="rgba(255, 255, 255, 0.5)" class="-rotate-[135deg] hidden md:block"/>
                <p class="text-white/50 font-RobotoFlex text-sm lg:text-base text-center md:text-left">Mes compétences sont basées sur mon expérience professionnelle et sur les différents projets sur lesquels j’ai pu travailler</p>
            </div>
        </div>

        
        <!-- Projects -->
        <div class="mt-36 mx-10" id="projects">
            <div class="w-fit mx-auto text-center">
                <h2 class="text-[#767478] text-xl font-Galada">Quelques projets récents</h2>
                <TitleShootingSide>
                    <h1 class="uppercase text-white text-center font-Syncopate text-4xl font-bold">Mes projets</h1>
                </TitleShootingSide>
            </div>


            <div class="relative mt-16">

                <!-- BLur white round -->
                <div class="hidden lg:block w-[500px] h-[500px] bg-white/40 blur-[700px] rounded-full absolute left-1/2 -translate-x-1/2 z-0"></div>


                <div class="flex flex-col lg:flex-row items-center lg:justify-between gap-y-16 lg:gap-y-0 lg:gap-x-10 relative max-w-screen-2xl w-full lg:w-fit mx-auto mt-24 lg:mt-0">

                    <!-- Carousel Buttons -->
                    <div class="flex gap-x-5 absolute lg:right-0 -top-16">
                        <div class="bg-[#1E1E1E]/50 w-10 h-10 relative cursor-not-allowed">
                            <ArrowIcon color="rgba(255, 255, 255, 0.5)" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"/>
                        </div>
                        <div class="bg-[#1E1E1E]/50 w-10 h-10 relative cursor-not-allowed">
                            <ArrowIcon color="rgba(255, 255, 255, 0.5)" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"/>
                        </div>
                    </div>

                    <ProjectCard class="">
                        <div class="mx-auto text-white py-12 px-10">
                            <h1 class="font-SquadaOne text-center text-3xl">Pas encore de projets</h1>
                            <h3 class="font-SplineSans text-center text-sm pt-3">Cependant, gardez l'œil ouvert, ça ne va pas tarder.</h3>
                        </div>
                    </ProjectCard>

                    <ProjectCard>
                        <div class="mx-auto text-white py-12 px-10">
                            <h1 class="font-SquadaOne text-center text-3xl">Pas encore de projets</h1>
                            <h3 class="font-SplineSans text-center text-sm pt-3">Cependant, gardez l'œil ouvert, ça ne va pas tarder.</h3>
                        </div>
                    </ProjectCard>
                    
                    <ProjectCard>
                        <div class="mx-auto text-white py-12 px-10">
                            <h1 class="font-SquadaOne text-center text-3xl">Pas encore de projets</h1>
                            <h3 class="font-SplineSans text-center text-sm pt-3">Cependant, gardez l'œil ouvert, ça ne va pas tarder.</h3>
                        </div>
                    </ProjectCard>
                </div>
            </div>
        </div>

        <!-- Contact -->
        <div class="mt-64 relative max-w-[1920px] mx-auto pb-40" id="contact">

            <RoundWhiteBlur class="absolute -bottom-10 -right-10 z-0"/>

            <!-- Shooting stars -->
            <div class="hidden 2xl:block absolute top-10 left-0">
                <ShootingStar class="absolute top-5 left-56" data-aos-delay="100"/>
                <ShootingStar class="absolute -top-7 left-20" data-aos-delay="150" />
                <ShootingStar class="absolute top-16 left-28" data-aos-delay="200"/>
                <ShootingStar class="absolute top-10 -left-5" data-aos-delay="300" />
                <ShootingStar class="absolute top-28 left-5" data-aos-delay="350"/>
                <ShootingStar class="absolute top-48 left-20" data-aos-delay="250"/>
                <ShootingStar class="absolute top-48 -left-5" data-aos-delay="400"/>
            </div>

            <div class="w-fit mx-auto">
                <h2 class="font-VollkornSC text-[#767478] text-center mx-10 md:mx-0 text-sm md:text-xl">Vous avez une question ou bien une remarque ?</h2>
                <h1 class="font-Trykker text-white font-light text-center text-xl md:text-5xl uppercase mt-5">Contactez-moi</h1>
                <Separator class="mx-auto mt-10" data-aos="fade-up"/>
            </div>

            <p class="font-RedHatText text-white font-light text-center max-w-2xl break-normal mt-16 text-sm md:text-base mx-10 md:mx-auto">N'hésitez pas à m'envoyer un message ou à me contacter sur mes différents
                réseaux sociaux, je serai ravi de vous répondre</p>

            <div class="max-w-3xl mx-10 md:mx-auto mt-10">

                <div v-if="this.success" class="bg-green-400 w-full rounded my-12">
                    <p class="px-20 py-5 text-gray-50 text-center">Succès : {{ this.success }}</p>
                </div>
                <div v-if="this.error['main']" class="bg-red-400 w-full rounded my-12">
                    <p class="px-10 py-5 text-gray-50 text-center">Erreur : {{ this.error["main"] }}</p>
                </div>

                <div class="w-full relative">
                    <input type="email" class="bg-[#282828] px-5 py-3 outline outline-0 text-white font-Roboto block w-full relative z-0 rounded" id="email" v-model="this.email"
                        :class="!this.error['email'] ?? 'border border-solid border-red-500'" 
                        @focus="this.error['email'] = null, this.success = '', this.error['main'] = null">
                    <label for="email" class="font-Roboto text-white absolute transition-all ease z-10" :class="this.email == '' ? 'top-3 left-5' : '-top-7 left-0 text-sm'">Votre email</label>
                    <p class="text-red-500 absolute -bottom-6 right-0">{{ this.error["email"] }}</p>
                </div>

                <div class="w-full relative mt-12">
                    <input type="text" class="bg-[#282828] px-5 py-3 outline outline-0 text-white font-Roboto block w-full relative z-0 rounded" :class="this.error['subject'] ? 'border border-solid border-red-500' : ''" id="subject" v-model="this.subject" @focus="this.error['subject'] = null, this.success = '', this.error['main'] = null">
                    <label for="subject" class="font-Roboto text-white absolute transition-all ease z-10" :class="this.subject == '' ? 'top-3 left-5' : '-top-7 left-0 text-sm'">Sujet</label>
                    <p class="text-red-500 absolute -bottom-6 right-0">{{ this.error["subject"] }}</p>
                </div>

                <div class="w-full relative mt-12">
                    <textarea class="bg-[#282828] px-5 py-3 outline outline-0 text-white font-Roboto block w-full mt-10 min-h-72 z-0 rounded" id="message" v-model="this.message"
                        :class="!this.error['message'] ?? 'border border-solid border-red-500'" 
                        @focus="this.error['message'] = null, this.success = '', this.error['main'] = null"></textarea>
                    <label for="message" class="font-Roboto text-white absolute transition-all ease z-10" :class="this.message == '' ? 'top-3 left-5' : '-top-7 left-0 text-sm'">Message</label>
                    <p class="text-red-500 absolute -bottom-6 right-0">{{ this.error["message"] }}</p>
                </div>

                <label for="readCGU" class="text-white font-Roboto font-light mt-8 flex gap-x-3 items-center text-xs md:text-base relative cursor-pointer">
                    <input type="checkbox" class="hidden" id="readCGU" v-model="this.readCGU">
                    <div class="rounded w-4 md:w-5 h-4 md:h-5 cursor-pointer" 
                        :class="this.error['readCGU'] 
                                    ? 'border border-solid border-red-500' 
                                    : 'border border-solid border-white'"></div>
                    J'ai lu et j'accepte les<RouterLink to="/CGU" class="underline">Conditions Générales d'Utilisation</RouterLink>
                </label>
                <p v-if="this.error['readCGU']" class="text-red-500">{{ this.error['readCGU'] }}</p>

                <button class="mt-16 text-white text-lg cursor-pointer flex gap-x-4 items-center border border-solid border-white px-5 py-2 rounded hover:bg-white/10 duration-500" @click="this.sendMail()">
                    {{ this.sendButton }}
                    <SendIcon color="white"/>
                </button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="w-full bg-white py-5 px-10 flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:items-center text-center z-10" :class="this.isPhoneNavDisplay ? 'hidden' : 'block'">
        <p class="font-Roboto text-[#4E4E4E] text-sm">Copyright © {{ new Date().getFullYear() }} Erwan Nicolas</p>
        <RouterLink to="/CGU" class="font-Roboto text-[#4E4E4E] text-sm">Conditions Générales d'Utilisation</RouterLink>
    </div>
</template>


<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css'

    import emailjs from '@emailjs/browser';

    import BurgerIcon from './components/icons/Burger.vue'
    import CompNavLink from "./components/ComputerNavLink.vue"
    import PhoneNavLink from "./components/PhoneNavLink.vue"
    import CloseIcon from "./components/icons/Close.vue"
    import Logo from "./components/icons/Logo.vue";
    import ArrowIcon from "./components/icons/Arrow.vue"
    import Separator from "./components/Separator.vue"
    import TitleSide from "./components/TitleSide.vue"
    import InstagramIcon from './components/icons/Instagram.vue';
    import LinkedinIcon from "./components/icons/Linkedin.vue"
    import GithubIcon from "./components/icons/Github.vue"
    import PaperIcon from "./components/icons/Paper.vue"
    import Satellite from './components/icons/Satellite.vue';
    import ExperienceElement from "./components/ExperienceElement.vue"
    import SatelliteDish from './components/icons/SatelliteDish.vue';
    import RoundWhiteBlur from './components/RoundWhiteBlur.vue';
    import ProgressBar from './components/ProgressBar.vue';
    import LinearProgressBar from './components/LinearProgressBar.vue';
    import ProjectCard from './components/ProjectCard.vue';
    import SendIcon from "./components/icons/Send.vue"
    import ShootingStar from './components/ShootingStar.vue';
    import TitleShootingSide from './components/TitleShootingSide.vue';
    import Nav from "./components/Nav.vue"

    export default {
        components: {
            CompNavLink,
            BurgerIcon,
            PhoneNavLink,
            CloseIcon,
            Logo,
            ArrowIcon,
            Separator,
            TitleSide,
            InstagramIcon,
            LinkedinIcon,
            GithubIcon,
            PaperIcon,
            Satellite,
            ExperienceElement,
            SatelliteDish,
            RoundWhiteBlur,
            ProgressBar,
            LinearProgressBar,
            ProjectCard,
            SendIcon,
            ShootingStar,
            TitleShootingSide,
            Nav
        },

        setup() {
            AOS.init({
                offset: 0,
                once: true
            });
            
            emailjs.init({
                publicKey: "cCr6-0XJI7sXEct6U",
            });
        },

        data() {
            return {
                isPhoneNavDisplay: false,

                // Form
                email: "",
                subject: "",
                message: "", 
                readCGU: false,
                sendButton: "Envoyer",
                sendTextInterval : null,

                error: [],
                success: ""
            }
        },

        methods: {

            /**
             * Parent toggle function for phone nav menu
             * @param {bool} phoneDisplay 
             * 
             * @return {void}
             */
             togglePhoneNav : function(phoneDisplay) {
                this.isPhoneNavDisplay = phoneDisplay
            },


            /**
             * Reset the input error
             * @param {string} errorName    Error name (defined in the sendMail function)
             */
            resetInputError : function(errorName) {
                if(this.error[errorName]) {
                    this.error[errorName] = false
                }
            },

            /**
             * Send a mail from the user to me
             * First the fonction will check if the informations filled are correct and send me 
             * a mail after
             * 
             * @return {void}
             */
            sendMail : function() {

                if(this.email) {

                    let formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    if(!formatEmail.test(this.email)) {
                        this.error["email"] = "L'email n'est pas correcte"
                    }

                } else {
                    this.error["email"] = "Le champ doit être rempli"
                }


                if(this.subject == "") {
                    this.error["subject"] = "Le champ doit être rempli"
                }


                if(this.message == "") {
                    this.error["message"] = "Le champ doit être rempli"
                }


                if(!this.readCGU) {
                    this.error["readCGU"] = "Vous devez accepter les conditions générales d'utilisation"
                }


                if(!this.error["email"] && !this.error["subject"] && !this.error["message"] && !this.error["readCGU"]) {

                    this.sendText(true)

                    var templateParams = {
                        email: this.email,
                        subject: this.subject,
                        message: this.message,
                    };

                    emailjs.send('service_lg8fbh9', 'template_s69qkkc', templateParams).then(
                        (response) => {
                            this.success = "Le formulaire a correctement été envoyé"
                            this.email = ""
                            this.subject = ""
                            this.message = ""
                            this.readCGU = false
                            this.sendText(false)
                        },
                        (error) => {
                            this.error["main"] = "Erreur lors de l'envoi du formulaire, veuillez réessayer plus tard"
                            this.sendText(false)
                        },
                    );
                }
            },


            /**
             * Animate the text button where the form is sent 
             * @param {bool} start      Bool to know if we start the function
             * 
             * @return {void}
             */
            sendText : function(start) {
                if(start) {
                    let _this = this
                    this.sendTextInterval = setInterval(function(){
                        if(_this.sendButton == "Envoie") {
                            _this.sendButton = "Envoie ."
                        } else if(_this.sendButton == "Envoie .") {
                            _this.sendButton = "Envoie .."
                        } else if(_this.sendButton == "Envoie ..") {
                            _this.sendButton = "Envoie ..."
                        } else {
                            _this.sendButton = "Envoie"
                        }
                    }, 1000)
                } else {
                    clearInterval(this.sendTextInterval)
                    this.sendButton = "Envoyer"
                }
            }
        },

        watch: {
            readCGU(newValue, oldValue) {
                if(newValue && this.error["readCGU"]) {
                    this.error["readCGU"] = null
                }
            }
        }
    }
</script>

<style scoped>
    input:focus + label {
        top: -28px;
        left: 0px;
        font-size: 14px;
    }

    textarea:focus + label {
        top: -28px;
        left: 0px;
        font-size: 14px;
    }

    input[type="checkbox"]:checked + div {
        border: 1px solid white;
        background-color: white;
    }
</style>
