<template>
    <div class="max-w-sm lg:max-w-md z-10">
        <a href="/">
            <div class="max-h-80 lg:max-h-96 border-2 border-solid border-white rounded overflow-hidden">
                <img src="/img/no_project.png" alt="No Project" class="w-full h-full hover:scale-110 duration-200">
            </div>
        </a>

        <div class="mt-8 w-full bg-[#1E1E1E] rounded">
            <slot></slot>
        </div>
    </div>
</template>