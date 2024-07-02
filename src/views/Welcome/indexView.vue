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

        <!-- Android -->
        <section class="pop pop--full pop--app" style="display: flex;">
			<div class="pop__body">
                <span class="pop__logo"><img src="@/assets/imgs/ddpay.png"></span>
				<span class="pop__title">安裝DDPay後台？</span>
				<span class="pop__content">安裝到您的首頁，以享有最完整之功能</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">暫時不要</button>
					<button class="pop__action pop__action--green">加到首頁</button>
				</div>
			</div>
		</section>

        <!-- iOS -->
        <section class="pop pop--full pop--app pop--ios" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
                <span class="pop__logo"><img src="@/assets/imgs/ddpay.png"></span>
				<span class="pop__title">安裝DDPay後台？</span>
				<span class="pop__content">
                    安裝到您的首頁，以享有最完整之功能<br>
                    按下Safari分享選單<i class="icon-share"></i>，點選「新增至主畫面」
                </span>
			</div>
		</section>

        <RouterView />
    </main>
</template>
