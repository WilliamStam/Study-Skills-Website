<script setup lang="ts">
import logo from '@/assets/images/logo.png';
import {menu, site} from '@/site';

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer id="app-footer">
        <div class="container">
            <div class="row g-4 align-items-start">
                <div class="col-12 md:col-4 text-center">
                    <router-link :to="{name: 'home'}" class="d-inline-block">
                        <img :alt="site.name" :src="logo" class="footer-logo" height="110" width="110"/>
                    </router-link>
                </div>
                <nav aria-label="Footer" class="col-6 md:col-4">
                    <ul class="footer-menu">
                        <li v-for="link in menu" :key="link.name">
                            <router-link :to="{name: link.name}">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="col-6 md:col-4 text-center">
                    <h2 class="footer-heading">Follow Us</h2>
                    <div class="social-links justify-content-center">
                        <a :href="site.facebook" aria-label="Facebook" rel="noopener" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-facebook-f"/>
                        </a>
                        <a :href="site.instagram" aria-label="Instagram" rel="noopener" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-instagram"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            {{ site.name }} &copy;{{ currentYear }} All Rights Reserved.
        </div>
    </footer>
</template>
