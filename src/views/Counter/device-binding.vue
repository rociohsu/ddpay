<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="counter apply">
        <div class="device__img"><img src="@/assets/imgs/printer.png" alt="示意圖"></div>

        <div class="apply__input">
			<span class="title">出單機序號</span>
            <span class="note">標示於出單機底部</span>
			<div class="input">
				<input type="text" placeholder="輸入9碼序號" value="">
			</div>
		</div>

        <div class="apply__input">
			<span class="title">出單機序號</span>
            <span class="note">標示於出單機底部</span>
			<div class="input error">
				<input type="text" placeholder="輸入9碼序號" value="12345678">
			</div>
			<span class="remark">序號輸入錯誤</span>
		</div>

        <div class="bottom-btns">
            <button class="button">新增設備</button>
            <button class="button delete">刪除設備</button>
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
					確認刪除設備？<br>
					<span>刪除後部分功能可能受到影響</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action pop__action--red">確認刪除</button>
				</div>
			</div>
		</section>

        <RouterView />
    </main>
</template>
