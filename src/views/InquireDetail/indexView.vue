<script setup lang="ts">
import "./style.less";
</script>

<template>
	<main class="inquire-detail">
		<div class="inquire-page">
			<div class="pop__icons">
				<div class="pop__icon pop__icon--green">
					<i class="fa-solid fa-check fa-2xl"></i>
				</div>
			</div>

			<h2>收款成功</h2>
			<h3>NT$300</h3>

			<div class="inquire-list">
				<div class="inquire-list__group">
					<span>付款</span>
					<span>
						<div class="payments-icons">
							<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
						</div>
						LINE Pay
					</span>
					<span>LINE Pay交易序號</span>
					<span>87654321</span>
				</div>

				<div class="inquire-list__group">
					<span>商家訂單編號</span>
					<span>87654321</span>
					<span>交易編號</span>
					<span>AS1234567890</span>
					<span>交易時間</span>
					<span>2022/04/30 12:25</span>
				</div>

				<div class="inquire-list__group">
					<span>載具</span>
					<span>&nbsp;</span>
					<span>統一編號</span>
					<span>&nbsp;</span>
					<span>備註</span>
					<span>買一送一買一送一</span>
				</div>
			</div>
		</div>

		<div class="inquire-page">
			<div class="pop__icons">
				<div class="pop__icon pop__icon--red">
					<i class="fa-solid fa-xmark fa-2xl"></i>
				</div>
			</div>

			<h2 class="red">收款失敗</h2>
			<h3>NT$300</h3>

			<div class="inquire-list">
				<div class="inquire-list__group">
					<span>付款</span>
					<span>
						<div class="payments-icons">
							<span><img src="@/assets/icons/visa.svg" alt="VISA"></span>
						</div>
						信用卡 **** 5678
					</span>
					<span>刷卡授權編號</span>
					<span>87654321</span>
				</div>

				<div class="inquire-list__group">
					<span>商家訂單編號</span>
					<span>87654321</span>
					<span>交易編號</span>
					<span>AS1234567890</span>
					<span>交易時間</span>
					<span>2022/04/30 12:25</span>
				</div>

				<div class="inquire-list__group">
					<span>載具</span>
					<span>/ASDFGHJ</span>
					<span>統一編號</span>
					<span>12345678</span>
					<span>備註</span>
					<span>買一送一買一送一</span>
				</div>
			</div>
		</div>

		<div class="inquire-page">
			<div class="pop__icons">
				<div class="pop__icon pop__icon--orange">
					<i class="fa-solid fa-hourglass-half fa-xl"></i>
				</div>
			</div>

			<h2 class="orange">未收款</h2>
			<h3>NT$300</h3>

			<div class="inquire-list">
				<div class="inquire-list__group">
					<span>商家訂單編號</span>
					<span>87654321</span>
					<span>交易編號</span>
					<span>AS1234567890</span>
					<span>交易時間</span>
					<span>2022/04/30 12:25</span>
				</div>

				<div class="inquire-list__group">
					<span>備註</span>
					<span>買一送一買一送一</span>
				</div>
			</div>
		</div>

		<div class="bottom-btns">
			<button class="cancel-btn"><i class="clipboard-remove"></i>取消訂單</button>
			<button><i class="file-download"></i>下載簽單</button>
		</div>

		<section class="pop pop--center pop--confirm" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--red">
						<i class="fa-solid fa-exclamation fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">
					確認取消訂單？<br>
					<span>交易編號 AS1234567890</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">返回</button>
					<button class="pop__action pop__action--red">確認取消</button>
				</div>
			</div>
		</section>

		<section class="pop pop--center pop--confirm" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--green">
						<i class="fa-solid fa-check fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">
					已取消訂單<br>
					<span>交易編號 AS1234567890</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--green">確認</button>
				</div>
			</div>
		</section>

		<section class="pop pop--center pop--confirm" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--green">
						<i class="fa-solid fa-check fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">
					已下載簽單<br>
					<span>交易編號 AS1234567890</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--green">確認</button>
				</div>
			</div>
		</section>

		<RouterView />
	</main>
</template>