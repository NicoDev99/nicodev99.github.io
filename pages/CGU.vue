<template>
  <div class="bg-gradient-to-b from-[#161B1F] to-[#010204] w-full min-h-screen h-fit relative overflow-hidden pt-12 pb-20">

    <NavMenu @phoneDisplay="togglePhoneNav"/>

    <div class="w-fit mx-auto mt-12">
      <ArrowIcon color="white" class="block m-auto animate-bounce" />
      <h1 class="font-RedRose text-white text-center text-3xl mt-6">Conditions Générales d’Utilisation</h1>
      <Separator class="block mx-auto mt-5 translate-y-6 animate-[transformBottomTop_1s_ease_forwards]"/>
    </div>

    <div class="max-w-6xl mx-auto" :class="this.isPhoneNavDisplay ? 'hidden' : 'block'">
      <div class="text-white mt-20 mx-20 xl:mx-0 text-justify">
        <div class="mb-12">
          <h1 class="font-GoblinOne text-xl mb-5">1. Définition</h1>
          <p class="font-Habibi">
            Les présentes CGU ou Conditions Générales d’Utilisation encadrent juridiquement l’utilisation des services du site type portfolio de Monsieur Nicolas Erwan (ci-après dénommé « le site »).
            Constituant le contrat entre Monsieur Nicolas Erwan, l’Utilisateur, l’accès au site doit être précédé de l’acceptation de ces CGU.
            L’accès à cette plateforme signifie l’acceptation des présentes CGU.
          </p>
        </div>

        <div class="mb-12">
          <h1 class="font-GoblinOne text-xl mb-5">2. Utilisation du site</h1>
          <p class="font-Habibi">
            Vous acceptez d'utiliser ce site uniquement à des fins légales et conformément à ces CGU. Vous acceptez de ne pas utiliser ce site de manière à
            violer les droits de tiers, y compris les droits de propriété intellectuelle ou les droits à la vie privée.
          </p>
        </div>

        <div class="mb-12">
          <h1 class="font-GoblinOne text-xl mb-5">3. Collecte d'informations</h1>
          <p class="font-Habibi">
            Le site ne collecte aucune information personnelle vous concernant sans votre consentement. Si vous choisissez de nous
            fournir votre adresse e-mail dans le cadre de l'utilisation de ce site, nous n'utiliserons cette information que dans le but
            de communiquer avec vous directement. Aucune information ne sera stockée, partagée ou vendue à des tiers.
          </p>
        </div>

        <div class="mb-12">
          <h1 class="font-GoblinOne text-xl mb-5">4. Propriété Intellectuelle</h1>
          <p class="font-Habibi">
            Tout le contenu présenté sur ce site, y compris, mais sans s'y limiter, les textes, les graphiques, les logos,
            les icônes d'interface, les images, les clips audio et vidéo, ainsi que leur sélection et leur disposition,
            sont la propriété exclusive de Monsieur Nicolas Erwan et sont protégés par les lois sur le droit d'auteur et autres
            lois applicables.
          </p>
        </div>

        <div class="mb-12">
          <h1 class="font-GoblinOne text-xl mb-5">5. Limitation de Responsabilité</h1>
          <p class="font-Habibi">
            Dans toute la mesure permise par la loi, Monsieur Nicolas Erwan décline toute responsabilité découlant de l'utilisation ou
            de l'impossibilité d'utiliser ce site. En aucun cas, Monsieur Nicolas Erwan ne sera responsable envers vous ou tout tiers de
            tout dommage direct, indirect, spécial, accessoire, consécutif ou exemplaire.
          </p>
        </div>

        <div class="mb-12">
          <h1 class="font-GoblinOne text-xl mb-5">6. Modification des CGU</h1>
          <p class="font-Habibi">
            Monsieur Nicolas Erwan se réserve le droit de modifier ces CGU à tout moment et sans préavis. Toute modification des CGU sera
            effective dès sa publication sur ce site. Il est de votre responsabilité de consulter régulièrement ces CGU pour rester
            informé des mises à jour.
          </p>
        </div>

        <div class="mb-20">
          <h1 class="font-GoblinOne text-xl mb-5">7. Droit Applicable</h1>
          <p class="font-Habibi">
            Ces CGU sont régies et interprétées conformément aux lois en vigueur. Tout litige découlant de ces CGU sera soumis à la compétence
            exclusive des tribunaux compétents
          </p>
        </div>

        <p class="font-Habibi text-white">Si vous avez des questions ou des préoccupations concernant ces CGU, veuillez nous contacter à
          l'adresse e-mail suivante : <span class="underline">contact.nicopro.dev@gmail.com</span></p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="w-full bg-white py-5 px-10 flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:items-center text-center z-10" :class="this.isPhoneNavDisplay ? 'hidden' : 'block'">
    <p class="font-Roboto text-[#4E4E4E] text-sm">Copyright © 2023 Erwan Nicolas</p>
    <router-link to="/CGU" class="font-Roboto text-[#4E4E4E] text-sm">Conditions Générales d'Utilisation</router-link>
  </div>
</template>



<script>
  export default {

    data() {
      return {
        isPhoneNavDisplay: false,
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
    }
  }
</script>