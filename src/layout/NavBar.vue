<script lang="ts" setup>
import {useTemplateRef} from 'vue';
import {useRouter} from 'vue-router';
import Drawer from 'bootstrap/js/dist/drawer.js';
import logo from '@/assets/images/logo.png';
import {menu, site} from '@/site';

const drawerEl = useTemplateRef<HTMLDialogElement>('drawer');

// On phones the menu is a drawer: close it once a link has been followed
useRouter().afterEach(() => {
    if (drawerEl.value?.open) {
        Drawer.getInstance(drawerEl.value)?.hide();
    }
});
</script>

<template>
    <header id="app-navbar" class="navbar md:navbar-expand">
        <div class="container">
            <router-link :to="{name: 'home'}" class="navbar-brand">
                <img :alt="site.name" :src="logo" class="navbar-logo" height="96" width="96"/>
            </router-link>

            <button
                aria-controls="navbarDrawer"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="btn-icon navbar-toggler"
                data-bs-target="#navbarDrawer"
                data-bs-toggle="drawer"
                type="button"
            >
                <span aria-hidden="true" class="navbar-toggler-icon"></span>
            </button>
            <dialog id="navbarDrawer" ref="drawer" aria-labelledby="navbarDrawerLabel" class="drawer drawer-top"
                    tabindex="-1">
                <div class="drawer-header">
                    <h5 id="navbarDrawerLabel" class="drawer-title">Menu</h5>
                    <button aria-label="Close" class="btn-close" data-bs-dismiss="drawer" type="button"></button>
                </div>
                <div class="drawer-body">
                    <ul class="nav navbar-nav ms-auto">
                        <li v-for="link in menu" :key="link.name" class="nav-item">
                            <router-link :to="{name: link.name}" class="nav-link">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </dialog>
        </div>
    </header>
</template>
