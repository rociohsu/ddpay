<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="counter apply">
        <div class="filter-sticky">
            <div class="counterbar">
                <div class="counterbar__name">KJEBYMND</div>
                <div class="setting__switch">
                    <input type="checkbox" name="switch"  id="switch1" checked>
                    <label for="switch1">
                        <span class="switch__inner"></span>
                        <span class="switch__switch"></span>
                    </label>
                </div>
            </div>
        </div>

        <div class="apply__input">
			<span class="title">櫃位名稱</span>
			<div class="input">
				<input type="text" placeholder="櫃位名稱" value="">
			</div>
		</div>

        <div class="apply__radio-list">
            <span class="title">掃碼收款</span>
			<div class="apply__radio-list__group">
				<div class="apply__radio-list__option">
					<input type="radio" id="radio1" name="radio1" checked>
					<label for="radio1">啟用</label>
				</div>

				<div class="apply__radio-list__option">
					<input type="radio" id="radio2" name="radio1">
					<label for="radio2">停用</label>
				</div>
			</div>
		</div>

        <div class="apply__radio-list">
            <span class="title">感應收款</span>
			<div class="apply__radio-list__group">
				<div class="apply__radio-list__option">
					<input type="radio" id="radio3" name="radio2">
					<label for="radio3">啟用</label>
				</div>

				<div class="apply__radio-list__option">
					<input type="radio" id="radio4" name="radio2" checked>
					<label for="radio4">停用</label>
				</div>
			</div>
		</div>

        <div class="apply__radio-list">
            <span class="title">FQR</span>
			<div class="apply__radio-list__group">
				<div class="apply__radio-list__option">
					<input type="radio" id="radio5" name="radio3" checked>
					<label for="radio5">啟用</label>
				</div>

				<div class="apply__radio-list__option">
					<input type="radio" id="radio6" name="radio3">
					<label for="radio6">停用</label>
				</div>
			</div>
		</div>

        <div class="apply__open-pop">
			<span class="title">簽單出單設備</span>
			<a class="apply__open-pop--agree" href="./device-binding">
				<span>已綁定 123456789</span>
				<i class="fa-solid fa-circle-check fa-lg"></i>
            </a>
		</div>

		<div class="apply__open-pop">
			<span class="title">結帳掃碼設備</span>
			<a href="./device-binding">
				<span>前往綁定</span>
				<i class="fa-solid fa-angle-right fa-lg"></i>
            </a>
		</div>

        <RouterView />
    </main>
</template>
