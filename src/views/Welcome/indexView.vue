<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="welcome">
        <header>
            <div class="circle-bg">
                <div class="circle-bg__center">
                    <p>歡迎使用</p>
                    <div class="header__logo">
                        <!-- <img src="@/assets/icons/favicon-w.svg"> -->
                        <img src="@/assets/imgs/Hualien.svg">
                    </div>
                </div>
            </div>
        </header>

        <div class="mainkv">
            <img src="@/assets/imgs/welcome.png" alt="">
        </div>

        <div class="bottom-btns">
            <a class="button" href="#">前往申請</a>
        </div>

        <RouterView />
    </main>
</template>
