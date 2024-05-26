<script setup lang="ts">
import "./style.less";
</script>

<template>
	<main class="home">
		<div class="home__top">
			<a class="home__banner" href="#">
				<h1>歡迎使用<br>點點付</h1>
				<button class="home__about">服務簡介<i class="fa-solid fa-angle-right"></i></button>
				<div class="payments-icons">
					<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
					<span><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
					<span><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
					<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
					<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
					<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
					<span><img src="@/assets/icons/taiwanpay.png" alt="臺灣Pay"></span>
					<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
				</div>
			</a>

			<div class="home__notices">
				<span class="home__title">最新通知</span>

				<div class="home__notices__list">
					<a class="home__notices__list__row" href="#">
						<div class="home__notices__row__item">
							Line Pay審核通過
							<time>5/12/2024</time>
						</div>
						<button class="home__notices__row__btn">查看金鑰<i class="fa-solid fa-angle-right"></i></button>
					</a>

					<a class="home__notices__list__row" href="#">
						<div class="home__notices__row__item">
							街口支付審核圖片有誤
							<time>5/12/2024</time>
						</div>
						<button class="home__notices__row__btn">上傳圖片<i class="fa-solid fa-angle-right"></i></button>
					</a>

					<a class="home__notices__list__row loading" href="#">
						<div class="home__notices__row__item">
							DDPay信用卡收單未通過
							<time>5/12/2024</time>
						</div>
						<button class="home__notices__row__btn">查看原因<i class="fa-solid fa-angle-right"></i></button>
					</a>
				</div>
			</div>

			<div class="home__payments">
				<span class="home__title">我的收款方式</span>
				<div class="home__none">
					<i class="icon"><img src="@/assets/icons/creditcard-linear.svg"></i>
					暫無收款方式
					<i class="icon arrow-to"><img src="@/assets/icons/arrow-to.svg"></i>
				</div>
				<a class="payments__add" href="./apply"><img src="@/assets/icons/add-w.svg"></a>
			</div>

			<div class="home__payments">
				<span class="home__title">我的收款方式</span>

				<div class="home__payments__list">
					<a class="home__payments__list__column credit-card" href="#">
						<div class="payments-icons">
							<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
							<span><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
							<span><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
						</div>
						<div class="home__payments__list--state"></div>
						<button class="home__payments__list__btn">信用卡代收付<i class="fa-solid fa-angle-right"></i></button>
					</a>

					<a class="home__payments__list__column loading" href="#">
						<div class="payments-icons">
							<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
						</div>
						<div class="home__payments__list--state">12345678</div>
						<button class="home__payments__list__btn">LINE Pay<i class="fa-solid fa-angle-right"></i></button>
					</a>

					<a class="home__payments__list__column" href="#">
						<div class="payments-icons">
							<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
						</div>
						<div class="home__payments__list--state">南門店</div>
						<button class="home__payments__list__btn">LINE Pay<i class="fa-solid fa-angle-right"></i></button>
					</a>

					<a class="home__payments__list__column" href="#">
						<div class="payments-icons">
							<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
						</div>
						<div class="home__payments__list--state review">審核中</div>
						<button class="home__payments__list__btn">街口支付<i class="fa-solid fa-angle-right"></i></button>
					</a>

					<a class="home__payments__list__column notice" href="#">
						<div class="payments-icons">
							<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
						</div>
						<div class="home__payments__list--state needadd">補充資料</div>
						<button class="home__payments__list__btn">悠遊付<i class="fa-solid fa-angle-right"></i></button>
					</a>
				</div>

				<a class="payments__add" href="./apply"><img src="@/assets/icons/add-w.svg"></a>
				<a class="payments__add"><b>繼續申請</b><img src="@/assets/icons/add-w.svg"></a>
			</div>
		</div>

		<div class="home__main">
			<div class="home__stores">
				<span class="home__title">我的商店</span>
				<div class="home__none">
					<i class="icon"><img src="@/assets/icons/shop-linear.svg"></i>
					暫無我的商店
				</div>
			</div>

			<div class="home__stores">
				<span class="home__title">我的商店
					<div class="home__title__search">
						<input type="text" placeholder="搜尋商店">
						<button><i class="fa-solid fa-magnifying-glass fa-lg"></i></button>
					</div>
				</span>

				<div class="home__stores__list">
					<a class="home__stores__list__row" href="#">
						<div class="home__stores__list__name">鬍鬚張南門店</div>
						<div class="payments-icons">
							<span class="open"><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
							<span class="open"><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
							<span class="open"><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
							<span class="open"><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
							<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
							<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
							<span><img src="@/assets/icons/taiwanpay.png" alt="臺灣Pay"></span>
							<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
						</div>
					</a>

					<a class="home__stores__list__row" href="#">
						<div class="home__stores__list__name">鬍鬚張西門店</div>
						<div class="payments-icons">
							<span class="open"><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
							<span class="open"><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
							<span class="open"><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
							<span class="open"><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
							<span class="open"><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
							<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
							<span><img src="@/assets/icons/taiwanpay.png" alt="臺灣Pay"></span>
							<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>

							<span class="spacer-line"></span>
							<span class="open"><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
						</div>
					</a>

					<a class="home__stores__list__row" href="#">
						<div class="home__stores__list__name">鬍鬚張北門店</div>
						<div class="payments-icons">
							<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
							<span><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
							<span><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
							<span class="open"><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
							<span class="open"><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
							<span class="open"><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
							<span class="open"><img src="@/assets/icons/taiwanpay.png" alt="臺灣Pay"></span>
							<span class="open"><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
						</div>
					</a>

					<a class="home__stores__list__row loading" href="#">
						<div class="home__stores__list__name">鬍鬚張東門店</div>
						<div class="payments-icons">
							<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
							<span><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
							<span><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
							<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
							<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
							<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
							<span><img src="@/assets/icons/taiwanpay.png" alt="臺灣Pay"></span>
							<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>

							<span class="spacer-line"></span>
							<span class="open"><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
						</div>
					</a>
				</div>

			</div>
		</div>

		<section class="pop pop--center pop--continue-to-apply" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--orange">
						<i class="fa-solid fa-exclamation fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">
					您有一份申請草稿，是否繼續申請？<br>
					<span class="fs-red">如開始新申請，原有申請進度將被覆蓋</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">新申請</button>
					<button class="pop__action">繼續申請</button>
				</div>
			</div>
		</section>

		<RouterView />
	</main>
</template>