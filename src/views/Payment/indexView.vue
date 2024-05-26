<script setup lang="ts">
import "../Store/style.less";
import "../Apply/style.less";
import "./style.less";
</script>

<template>
	<main class="store apply payment">
		<div class="payment-way">
			<div class="payment-way__list">
				<div class="payments-icons">
					<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
				</div>
				<div class="payments-name">信用卡代收付</div>
				<div class="payment-setting">
					<div class="setting__switch">
						<input type="checkbox" name="switch" id="switch1" checked>
						<label for="switch1">
							<span class="switch__inner"></span>
							<span class="switch__switch"></span>
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="payment-way">
			<div class="payment-way__list deactivate">
				<div class="payments-icons">
					<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
				</div>
				<div class="payments-name">悠遊付</div>
				<div class="payment-setting">
					<span>已停用</span>
					<div class="setting__switch">
						<input type="checkbox" name="switch" id="switch2" disabled>
						<label for="switch2">
							<span class="switch__inner"></span>
							<span class="switch__switch"></span>
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="payment-info">
			<div class="payment-info__row">
				<span class="title">手續費</span>
				<span class="content">2.2%</span>
			</div>

			<div class="payment-info__row">
				<span class="title">撥款日</span>
				<span class="content">2.2%</span>
			</div>

			<div class="payment-info__row">
				<span class="title">統編</span>
				<span class="content">12345678</span>
			</div>
		</div>

		<div class="attetion-block">
			<div class="attetion-block__top">
				<div>您好，您的悠遊付帳號已開通，目前需要請您提供以下兩個資料，我們會接續完成串接，謝謝</div>
				<a target="_blank" href="#">悠遊付後台<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
			</div>

			<div class="apply__input">
				<span class="title">悠遊付後台帳號</span>
				<div class="input">
					<input type="text" placeholder="輸入後台帳號" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">悠遊付後台變更安全碼(非密碼)，並提供新安全碼</span>
				<div><a target="_blank" href="https://reurl.cc/4oMokD">變更安全碼教學</a></div>
				<div class="input">
					<input type="text" placeholder="輸入新安全碼" value="">
				</div>
			</div>
		</div>

		<div class="apply__input">
			<span class="title">名稱</span>
			<div class="input">
				<input type="text" placeholder="" value="信用卡南門店">
			</div>
		</div>

		<div class="apply__input">
			<span class="title">Channel ID</span>
			<div class="input">
				<input type="text" placeholder="輸入線上Channel ID" value="">
			</div>
		</div>

		<div class="apply__input">
			<span class="title">Channel Secret</span>
			<div class="input error">
				<input type="text" placeholder="輸入線上Channel Secret" value="A123456789">
			</div>
			<span class="remark">格式錯誤</span>
		</div>

		<div class="apply__open-pop">
			<span class="title">撥款帳戶</span>
			<button>
				<span>臺灣銀行 (手續費$0)</span>
				<i class="fa-solid fa-angle-right fa-lg"></i>
			</button>
		</div>

		<div class="apply__open-pop">
			<span class="title">收款額度</span>
			<button>
				<span>NT$250,000</span>
				<span class="fs">調整額度</span>
				<i class="fa-solid fa-angle-right fa-lg"></i>
			</button>
		</div>

		<div class="used-store">
			<span class="title">使用中商店</span>
			<div class="content">
				<div class="userd-store__search">
					<input type="text" placeholder="搜尋商店">
					<button><i class="fa-solid fa-magnifying-glass"></i></button>
				</div>

				<div class="userd-store__list">
					<div class="userd-store__name">鬍鬚張南門店</div>
					<div class="userd-store__setting">
						<div class="setting__switch">
							<input type="checkbox" name="switch" id="switch2" checked>
							<label for="switch2">
								<span class="switch__inner"></span>
								<span class="switch__switch"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="userd-store__list deactivate">
					<div class="userd-store__name">鬍鬚張西門店</div>
					<div class="userd-store__setting">
						<span>已停用</span>
						<div class="setting__switch">
							<input type="checkbox" name="switch" id="switch3" disabled>
							<label for="switch3">
								<span class="switch__inner"></span>
								<span class="switch__switch"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="used-store deactivate">
			<span class="title">使用中商店</span>
			<div class="content">
				<div class="userd-store__search">
					<input type="text" placeholder="搜尋商店">
					<button><i class="fa-solid fa-magnifying-glass"></i></button>
				</div>

				<div class="userd-store__list deactivate">
					<div class="userd-store__name">鬍鬚張南門店</div>
					<div class="userd-store__setting">
						<div class="setting__switch">
							<input type="checkbox" name="switch" id="switch4" checked>
							<label for="switch4">
								<span class="switch__inner"></span>
								<span class="switch__switch"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="userd-store__list deactivate">
					<div class="userd-store__name">鬍鬚張西門店</div>
					<div class="userd-store__setting">
						<span>已停用</span>
						<div class="setting__switch">
							<input type="checkbox" name="switch" id="switch5" disabled>
							<label for="switch5">
								<span class="switch__inner"></span>
								<span class="switch__switch"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bottom-btns">
			<button class="bottom-btns--full">儲存</button>
		</div>

		<section class="pop pop--center pop--select-account" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">選擇撥款帳戶</span>
				<div class="account__radio-list">
					<div class="account__radio-list__option">
						<input type="radio" id="radio1" name="radio" checked>
						<label for="radio1">
							<span class="bank-name">****6789 臺灣銀行</span>
							<span class="handling-fee">手續費 $0</span>
							<i></i>
						</label>
					</div>

					<div class="account__radio-list__option">
						<input type="radio" id="radio2" name="radio">
						<label for="radio2">
							<span class="bank-name">****6789 聯邦商業銀行</span>
							<span class="handling-fee">手續費 $10</span>
							<i></i>
						</label>
					</div>

					<div class="account__radio-list__option">
						<input type="radio" id="radio3" name="radio">
						<label for="radio3">
							<span class="bank-name">****6789 台新銀行</span>
							<span class="handling-fee">手續費 $15</span>
							<i></i>
						</label>
					</div>

					<div class="account__radio-list__option deactivate">
						<input type="radio" id="radio4" name="radio" disabled>
						<label for="radio4">
							<span class="bank-name">****6789 富邦銀行</span>
							<span class="handling-fee">等待審核中</span>
							<i></i>
						</label>
					</div>
				</div>

				<span class="pop__content">
					<button class="add-btn">新增其他撥款帳戶<i class="fa-solid fa-plus"></i></button>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action pop__action--green">儲存</button>
				</div>
			</div>
		</section>

		<section class="pop pop--center" style="display: flex;">
			<div class="pop__body">
				<span class="pop__title">新增撥款帳戶</span>

				<div class="apply__input">
					<span class="title">撥款銀行</span>
					<div class="select">
						<select>
							<option>臺灣銀行 (手續費$0)</option>
						</select>
						<i class="fa-solid fa-angle-down"></i>
					</div>
				</div>

				<div class="apply__input">
					<span class="title">銀行帳號</span>
					<div class="input">
						<input type="text" placeholder="銀行帳號" value="12345678">
					</div>
				</div>

				<div class="flex-row">
					<div class="apply__input column2">
						<span class="title">帳號戶名</span>
						<div class="input">
							<input type="text" placeholder="帳號戶名" value="陳小明">
						</div>
					</div>
					<div class="apply__input column2">
						<span class="title">分行</span>
						<div class="input">
							<input type="text" placeholder="分行" value="123">
						</div>
					</div>
				</div>

				<div class="apply__input">
					<span class="title">存摺影本</span>
					<span class="content">因影本將用於多種收款申請，請勿加上浮水印</span>
					<div class="file">
						<input type="file" id="file">
						<label for="file">
							<span>上傳存摺影本</span>
							<i class="fa-solid fa-file-arrow-up fa-lg"></i>
						</label>
					</div>
				</div>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action pop__action--green">送出</button>
				</div>
			</div>
		</section>

		<section class="pop pop--center" style="display: flex;">
			<div class="pop__body">
				<span class="pop__title">調整額度申請</span>

				<div class="apply__input">
					<span class="title">收款額度</span>
					<span class="content">現有額度：NT$250,000</span>
					<div class="input">
						<input type="text" placeholder="輸入新收款額度" value="">
					</div>
				</div>

				<div class="apply__input">
					<span class="title">營業額證明文件</span>
					<span class="content">例如：401或403報表</span>
					<div class="file">
						<input type="file" id="file">
						<label for="file">
							<span>上傳營業額證明文件</span>
							<i class="fa-solid fa-file-arrow-up fa-lg"></i>
						</label>
					</div>
				</div>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action pop__action--green">申請</button>
				</div>
			</div>
		</section>

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
					<span class="fs">
						<div><b>名稱：</b></div>
						<div>LINE Pay南門店</div>
						<div><b>使用中商店：</b></div>
						<div>啟用鬍鬚張南門店</div>
						<div>停用鬍鬚張西門店</div>
					</span>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action">儲存</button>
				</div>
			</div>
		</section>

		<RouterView />
	</main>
</template>
