<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="store">
        <div class="nodata">
            <div class="nodata__icon">
                <img src="../../assets/icons/shop-linear-null.svg">
            </div>
            <h2>暫無可使用商店</h2>
            <p>如有疑問請聯繫客服</p>
        </div>

        <button class="store-select">
            <b>鬍鬚張中正店</b><i class="fa-solid fa-caret-down"></i>
        </button>

        <div class="store-mainmenu">
            <a href="/inquire">
                <span class="store-mainmenu__name">交易查詢</span>
                <span class="store-mainmenu__icon"><i class="card-search"></i></span>
            </a>

            <a href="#">
                <span class="store-mainmenu__name">營業日報表</span>
                <span class="store-mainmenu__icon"><i class="clipboard-list"></i></span>
            </a>
        </div>

        <h1><b>鬍鬚張中正店</b><i class="fa-solid fa-store fa-xl"></i></h1>
        <h2>收款方式</h2>

        <div class="payment-way">
            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
				</div>
                <div class="payments-name">信用卡代收付</div>
                <div class="payment-setting">
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch1" checked>
                        <label for="switch1">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="payment-way__list deactivate">
                <div class="payments-icons">
					<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
				</div>
                <div class="payments-name">LINE Pay<span class="fs">ABC</span></div>
                <div class="payment-setting">
                    <span>已停用</span>
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch2" disabled>
                        <label for="switch2">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="payment-way__list deactivate">
                <div class="payments-icons">
					<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
				</div>
                <div class="payments-name">LINE Pay<span class="fs">123</span></div>
                <div class="payment-setting">
                    <span>已停用</span>
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch3" disabled>
                        <label for="switch3">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
				</div>
                <div class="payments-name">街口支付</div>
                <div class="payment-setting">
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch4" checked>
                        <label for="switch4">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <h3>其他管理者之收款方式</h3>
        <div class="payment-way">
            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
				</div>
                <div class="payments-name">LINE Pay<span class="fs">XYZ</span></div>
                <div class="payment-setting">
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch5">
                        <label for="switch5">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-btns">
			<button class="bottom-btns--full">儲存</button>
		</div>

        <section class="pop pop--center pop--save-update" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--orange">
						<i class="fa-solid fa-exclamation fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">
					確定儲存以下更新？<br>
					<span class="fs">啟用LINE Pay ABC<br>停用街口支付</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action">儲存</button>
				</div>
			</div>
		</section>

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

        <RouterView />
    </main>
</template>
