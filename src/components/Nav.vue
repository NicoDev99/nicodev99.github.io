<template>
    <!-- Computer screen nav menu -->
    <nav class="border-y borer-solid border-[#767478] mx-auto w-5/6 py-3 max-w-5xl hidden lg:flex items-center justify-center">
        <Logo width="30" height="30" class="mr-12"/>
        <ul class="flex gap-x-10">
            <CompNavLink name="Accueil" link="/" number="01" />
            <CompNavLink name="Présentation" link="/#about-me" number="02" />
            <CompNavLink name="Compétences" link="/#skills" number="03" />
            <CompNavLink name="Mes projets" link="/#projects" number="04" />
            <CompNavLink name="Contact" link="/#contact" number="05" />
        </ul>
    </nav>

    <!-- Phone screen nav menu -->
    <div class="block lg:hidden overflow-hidden">
        <div class="flex justify-between items-center mx-12">
            <BurgerIcon width="40" height="40" color="white" class="cursor-pointer" @click="this.togglePhoneNav()"/>
            <Logo width="40" height="40"/>
        </div>
        <nav class="bg-[#151A1E] w-full absolute top-0 transition ease duration-300 z-10" :class="!this.isPhoneNavDisplay ? '-translate-y-full' : '-translate-y-0 min-h-screen h-fit'">
            <CloseIcon width="40" height="40" color="white" class="cursor-pointer mt-12 ml-10" @click="this.togglePhoneNav()" />
            <ul class="text-center mt-20">
                <Logo height="60" width="60" class="block w-16 mx-auto mb-16"/>
                <PhoneNavLink name="Accueil" link="/" @click="this.togglePhoneNav()" />
                <PhoneNavLink name="Présentation" link="/#about-me" @click="this.togglePhoneNav()" />
                <PhoneNavLink name="Compétences" link="/#skills" @click="this.togglePhoneNav()" />
                <PhoneNavLink name="Mes projets" link="/#projects" @click="this.togglePhoneNav()" />
                <PhoneNavLink name="Contact" link="/#contact" @click="this.togglePhoneNav()" />
            </ul>
        </nav>
    </div>
</template>


<script>
    import BurgerIcon from './icons/Burger.vue'
    import CompNavLink from "./ComputerNavLink.vue"
    import PhoneNavLink from "./PhoneNavLink.vue"
    import CloseIcon from "./icons/Close.vue"
    import Logo from "./icons/Logo.vue";

    export default {
        components : {
            BurgerIcon,
            CompNavLink,
            PhoneNavLink,
            CloseIcon,
            Logo
        },

        data() {
            return {
                isPhoneNavDisplay: false,
            }
        },

        methods: {

            /**
             * Switch the phone menu (hidden to visible and inversly)
             * 
             * @return {void}
             */
             togglePhoneNav : function() {
                this.isPhoneNavDisplay = !this.isPhoneNavDisplay
                this.$emit("phoneDisplay", this.isPhoneNavDisplay)
            },
        }
    }
</script>