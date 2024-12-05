<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="store point">
        <h1><b>第三方點數申請</b></h1>

        <div class="payment-way">
            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/cathay-bonus.svg" alt="小樹點"></span>
				</div>
                <div class="payments-name">小樹點</div>
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

            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/momo-point.png" alt="Momo幣"></span>
				</div>
                <div class="payments-name">Momo幣</div>
                <div class="payment-setting deactivate">
                    <span>未啟用</span>
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch2" disabled>
                        <label for="switch2">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/tycg-point.svg" alt="紅利桃子"></span>
				</div>
                <div class="payments-name">紅利桃子</div>
                <div class="payment-setting deactivate">
                    <span>未啟用</span>
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
					<span><img src="@/assets/icons/ttpush.png" alt="TTPush"></span>
				</div>
                <div class="payments-name">TTPush</div>
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

            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/hualien-q.png" alt="花蓮好Q"></span>
				</div>
                <div class="payments-name">花蓮好Q</div>
                <div class="payment-setting">
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch5" checked>
                        <label for="switch5">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="payment-way__list">
                <div class="payments-icons">
					<span><img src="@/assets/icons/qc-point.svg" alt="筷點"></span>
				</div>
                <div class="payments-name">筷點</div>
                <div class="payment-setting">
                    <div class="setting__switch">
                        <input type="checkbox" name="switch"  id="switch6" checked>
                        <label for="switch6">
                            <span class="switch__inner"></span>
                            <span class="switch__switch"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <section class="pop pop--center pop--save-update" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--red">
						<i class="fa-solid fa-exclamation fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title__fs">確認停用小樹點？</span>
				<span class="pop__content">
					<span class="fs">停用後消費者將無法使用小樹點折抵消費</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action pop__action--red">確認停用</button>
				</div>
			</div>
		</section>

        <RouterView />
    </main>
</template>
