<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="counter inquire">
        <div class="filter-sticky">
            <button class="store-select">
                <b>鬍鬚張中正店</b><i class="fa-solid fa-caret-down"></i>
            </button>

            <div class="search-select">
				<div class="searchbar">
					<input type="text" placeholder="搜尋">
					<button><i class="fa-solid fa-magnifying-glass fa-lg"></i></button>
				</div>

				<button class="item-select">
					<b>項目</b>
					<i class="fa-solid fa-caret-down"></i>
				</button>
			</div>
        </div>

        <div class="counter-list">
            <a href="./counter-settings">
                <span class="counter-list__name">DD櫃位
                    <span class="counter-list__tags">
                        <span class="turned-on">掃碼</span>
                        <span class="deactivated">感應</span>
                        <span class="turned-off">KJEBYMND</span>
                    </span>
                </span> 
                <span class="counter-list__state">已啟用</span>
                <span class="counter-list__action">
                    <i class="fa-regular fa-angle-right fa-lg"></i>
                </span>
            </a>

            <a href="./counter-settings">
                <span class="counter-list__name">DD櫃位
                    <span class="counter-list__tags">
                        <span class="turned-on">掃碼</span>
                        <span class="deactivated">感應</span>
                        <span class="turned-off">KJEBYMND</span>
                    </span>
                </span> 
                <span class="counter-list__state disabled">未啟用</span>
                <span class="counter-list__action">
                    <i class="fa-regular fa-angle-right fa-lg"></i>
                </span>
            </a>
        </div>

        <section class="pop pop--full pop--select" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">選擇分店</span>

                <div class="store__radio-list">
					<div class="store__radio-list__group">
						<div class="store__radio-list__option">
							<input type="radio" id="radio1" name="radio" checked>
							<label for="radio1">
                                <span>鬍鬚張中正店鬍鬚張中正店鬍鬚張中正店鬍鬚張中正店</span>
                                <span>P_4Jk02DA4I</span>
                            </label>
						</div>

						<div class="store__radio-list__option">
							<input type="radio" id="radio2" name="radio">
							<label for="radio2">
                                <span>鬍鬚張中山店</span>
                                <span>P_4Jk02DA4I</span>
                            </label>
						</div>

						<div class="store__radio-list__option">
							<input type="radio" id="radio3" name="radio">
							<label for="radio3">
                                <span>鬍鬚張中原店</span>
                                <span>P_4Jk02DA4I</span>
                            </label>
						</div>
					</div>
				</div>
			</div>
		</section>

        <section class="pop pop--full pop--select" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">搜尋項目</span>

                <div class="inquire__radio-list">
					<div class="inquire__radio-list__group">
						<div class="inquire__radio-list__option">
							<input type="radio" id="radio1" name="radio" checked>
							<label for="radio1">全部</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio2" name="radio">
							<label for="radio2">金額</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio3" name="radio">
							<label for="radio3">訂單編號</label>
						</div>
					</div>
				</div>
			</div>
		</section>

        <RouterView />
    </main>
</template>
