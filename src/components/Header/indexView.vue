<template>
    <main class="header">
        <div class="header__left">
            <a class="header__back" onclick="history.back()">
                <img src="@/assets/icons/arrow-l.svg"></a>
            <a class="header__menu" onclick="">
                <img src="@/assets/icons/menu.svg"></a>
            <a class="header__home" href="./home">
                <img src="@/assets/icons/home-w.svg"></a>
            <!-- <a class="header__logo" href="./home">
                <img src="@/assets/icons/favicon-w.svg"></a> -->
            <a class="header__logo" href="./home">
                <img src="@/assets/imgs/Hualien.svg"></a>
        </div>
        <a class="header__right" onclick="">
            <div class="profile__info">
                <span class="profile__sub-name">LaFresh</span>
                <span class="profile__name">鬍鬚張股份有限公司</span>
            </div>
            <img class="profile__img" src="@/assets/imgs/la-fresh.png">
        </a>

        <section class="pop pop--nobg pop--top" style="display: flex;">
            <div class="pop__body">
                <div class="current-company">
                    <span class="current-company__logo"><img src="@/assets/imgs/la-fresh.png"></span>
                    <span class="current-company__name">LaFresh</span>
                </div>

                <div class="other-list">
                    <a class="other-list__item">
                        <span class="other-list__item__logo"><img src="@/assets/imgs/fmsc.png"></span>
                        <span class="other-list__item__name">鬍鬚張股份有限公司</span>
                    </a>

                    <a class="other-list__item">
                        <span class="other-list__item__logo"><img src="@/assets/imgs/8way.png"></span>
                        <span class="other-list__item__name">八方雲集股份有限公司</span>
                    </a>

                    <a class="other-list__item">
                        <span class="other-list__item__logo"><i class="fa-solid fa-plus"></i></span>
                        <span class="other-list__item__name add">新增公司</span>
                    </a>

                    <a class="other-list__item" href="./manage">
                        <span class="other-list__item__logo"><i class="fa-solid fa-users-gear"></i></span>
                        <span class="other-list__item__name add">權限設定</span>
                    </a>

                    <a class="other-list__item">
                        <span class="other-list__item__logo"><i class="fa-solid fa-right-from-bracket"></i></span>
                        <span class="other-list__item__name logout">登出</span>
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>
