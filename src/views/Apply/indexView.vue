<script setup lang="ts">
import "./style.less";
</script>

<template>
	<main class="apply">

		<div class="apply__page">
			<div class="apply__header">
				<span class="title">選擇收款方式</span>
				<span class="content">如果沒有申請過也沒有關係，我們可以為您代為申辦</span>
			</div>

			<div class="apply__ckeck-list">
				<div class="apply__ckeck-list__group">
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck1" checked>
						<label for="ckeck1"><span><i></i>信用卡代收付</span>
							<div class="payments-icons">
								<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
								<span><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
								<span><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
							</div>
						</label>
					</div>
				</div>

				<div class="apply__ckeck-list__group">
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck2">
						<label for="ckeck2"><span><i></i>LINE Pay</span>
							<div class="payments-icons">
								<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
							</div>
						</label>
					</div>
					<div class="apply__ckeck-list__option second">
						<input type="checkbox" id="ckeck2-1">
						<label for="ckeck2-1"><span><i></i>線下收款</span></label>
					</div>
					<div class="apply__ckeck-list__option second">
						<input type="checkbox" id="ckeck2-2">
						<label for="ckeck2-2"><span><i></i>線上收款<span class="fs">*限餐飲業</span></span></label>
						<div class="fs">*個人戶不能僅申請線上</div>
					</div>
				</div>

				<div class="apply__ckeck-list__group">
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck3">
						<label for="ckeck3"><span><i></i>街口支付</span>
							<div class="payments-icons">
								<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
							</div>
						</label>
					</div>
					<div class="apply__ckeck-list__option second">
						<input type="checkbox" id="ckeck3-1">
						<label for="ckeck3-1"><span><i></i>線下收款</span></label>
					</div>
					<div class="apply__ckeck-list__option second">
						<input type="checkbox" id="ckeck3-2">
						<label for="ckeck3-2"><span><i></i>線上收款</span></label>
					</div>
				</div>

				<div class="apply__ckeck-list__group">
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck4" checked>
						<label for="ckeck4"><span><i></i>臺灣Pay</span>
							<div class="payments-icons">
								<span><img src="@/assets/icons/taiwanpay.png" alt="臺灣Pay"></span>
							</div>
						</label>
					</div>
				</div>

				<div class="apply__ckeck-list__group">
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck5" checked>
						<label for="ckeck5"><span><i></i>icash Pay</span>
							<div class="payments-icons">
								<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
							</div>
						</label>
					</div>
				</div>

				<div class="apply__ckeck-list__group">
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck6" checked>
						<label for="ckeck6"><span><i></i>悠遊付</span>
							<div class="payments-icons">
								<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
							</div>
						</label>
					</div>
				</div>
			</div>

			<div class="bottom-btns">
				<a href="#">服務簡介</a>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__header">
				<span class="title">LINE Pay</span>
				<span class="content">是否已有LINE Pay帳號？</span>
				<div class="payments-icons">
					<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
				</div>
			</div>

			<div class="apply__radio-list">
				<div class="apply__radio-list__group">
					<div class="apply__radio-list__option">
						<input type="radio" id="radio1" name="radio" checked>
						<label for="radio1">現有帳號</label>
					</div>

					<div class="apply__radio-list__option">
						<input type="radio" id="radio2" name="radio">
						<label for="radio2">新申辦</label>
					</div>
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

			<div class="apply__ckeck-list">
				<span class="title">選擇申辦類型</span>
				<div class="apply__ckeck-list__group">
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck4-1">
						<label for="ckeck4-1"><span><i></i>線下收款</span></label>
					</div>
					<div class="apply__ckeck-list__option">
						<input type="checkbox" id="ckeck4-2">
						<label for="ckeck4-2"><span><i></i>線上收款<span class="fs">*限餐飲業</span></span></label>
						<div class="fs">*個人戶不能僅申請線上</div>
					</div>
				</div>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--read-only">下一步<i class="fa-solid fa-angle-right"></i></button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>


		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">服務條款確認</span>
				<span class="content">接下來我們將為您申辦您所選擇的金流服務，請幫我們確認以下條款以繼續您的申請</span>
			</div>

			<div class="apply__open-pop">
				<span class="title">點點付使用條款</span>
				<button class="apply__open-pop--agree">
					<span>同意點點付使用條款</span>
					<i class="fa-solid fa-circle-check fa-lg"></i>
				</button>
			</div>

			<div class="apply__open-pop">
				<span class="title">點點付隱私權政策</span>
				<button class="apply__open-pop--agree">
					<span>同意點點付隱私權政策</span>
					<i class="fa-solid fa-circle-check fa-lg"></i>
				</button>
			</div>

			<div class="apply__open-pop">
				<span class="title">LINE Pay使用條款</span>
				<button>
					<span>查看LINE Pay使用條款</span>
					<i class="fa-solid fa-angle-right fa-lg"></i>
				</button>
			</div>

			<div class="apply__open-pop">
				<span class="title">街口使用條款</span>
				<button>
					<span>查看街口使用條款</span>
					<i class="fa-solid fa-angle-right fa-lg"></i>
				</button>
			</div>

			<div class="apply__open-pop">
				<span class="title">icash Pay使用條款</span>
				<button>
					<span>查看icash Pay使用條款</span>
					<i class="fa-solid fa-angle-right fa-lg"></i>
				</button>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">會員資料</span>
			</div>

			<div class="apply__open-pop">
				<span class="title">會員類型</span>
				<span class="content">與款項撥付及發票開立有關，請正確填寫</span>
				<button class="select">
					<span>個人/獨資/企業</span>
					<i class="fa-solid fa-angle-down fa-lg"></i>
				</button>

				<button class="selected">
					<span>獨資戶 - 有統編, 公司帳戶收款</span>
					<i class="fa-solid fa-angle-down fa-lg"></i>
				</button>
			</div>

			<div class="apply__input">
				<span class="title">商店/品牌中文名稱</span>
				<span class="content">將出現於顧客信用卡消費明細上，8個字以內</span>
				<div class="input">
					<input type="text" placeholder="中文名稱 (8個字以內)" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">商店/品牌英文名稱</span>
				<span class="content">將出現於顧客信用卡消費明細上，14個字以內含空白</span>
				<div class="input">
					<input type="text" placeholder="英文名稱 (14個字以內含空白)" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">商店地址</span>
				<div class="select column3">
					<select>
						<option>縣市</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>鄉鎮市區</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="input column3">
					<input type="text" placeholder="郵遞區號" value="">
				</div>
				<div class="input">
					<input type="text" placeholder="地址" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">產業類型</span>
				<div class="select">
					<select>
						<option>選擇產業類型</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<div class="select error">
					<select>
						<option>選擇產業類型</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<span class="remark">請選擇項目</span>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">企業資料</span>
				<span class="content">請協助我們驗證您的身份，以確保我們提供您正確無誤的服務內容</span>
			</div>

			<div class="apply__input">
				<span class="title">企業名稱</span>
				<span class="content">請提供與經濟部公司登記所記載相同之企業名稱</span>
				<div class="input">
					<input type="text" placeholder="企業名稱" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">統一編號</span>
				<span class="content">請提供與經濟部公司登記所記載相同之統一編號</span>
				<div class="input">
					<input type="text" placeholder="統一編號" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">實收資本額</span>
				<div class="input">
					<input type="text" placeholder="實收資本額" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">核准設立日期 (西元)</span>
				<div class="select column3">
					<select>
						<option>西元年</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>月</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>日</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">公司登記地址</span>
				<div class="select column3">
					<select>
						<option>縣市</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>鄉鎮市區</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="input column3">
					<input type="text" placeholder="郵遞區號" value="">
				</div>
				<div class="input">
					<input type="text" placeholder="地址" value="">
				</div>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">企業審核</span>
			</div>

			<div class="apply__input">
				<span class="title">營業登記文件</span>
				<div class="file">
					<input type="file" id="file">
					<label for="file">
						<span>上傳營業登記文件</span>
						<i class="fa-solid fa-file-arrow-up fa-lg"></i>
					</label>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">店面照片</span>
				<span class="content">請拍到招牌，若於裝潢中，請拍到門牌號碼</span>
				<div class="file">
					<input type="file" id="file">
					<label for="file">
						<img src="@/assets/imgs/store.png">
						<i class="fa-solid fa-circle-check fa-lg"></i>
					</label>
				</div>
				<span class="remark">格式錯誤</span>
			</div>

			<div class="apply__input">
				<span class="title">店面內部照片</span>
				<span class="content">不得與其他照片重複</span>
				<div class="file error">
					<input type="file" id="file">
					<label for="file">
						<img src="@/assets/imgs/store.pdf">
						<i class="fa-solid fa-circle-check fa-lg"></i>
					</label>
				</div>
				<span class="remark">格式錯誤</span>
			</div>

			<div class="apply__input">
				<span class="title">營業項目照片</span>
				<span class="content">如菜單/價目表/DM</span>
				<div class="file">
					<input type="file" id="file">
					<label for="file">
						<span>上傳營業項目照片</span>
						<i class="fa-solid fa-file-arrow-up fa-lg"></i>
					</label>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">審核照片</span>
				<span class="content">非必填，如有提供將可快審核速度<br>如水費/電費帳單 (含地址)</span>
				<div class="file">
					<input type="file" id="file">
					<label for="file">
						<span>上傳審核照片</span>
						<i class="fa-solid fa-file-arrow-up fa-lg"></i>
					</label>
				</div>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">身份驗證</span>
				<span class="content">請協助我們驗證您的身份，以確保我們提供您正確無誤的服務內容</span>
			</div>

			<div class="apply__open-pop">
				<span class="title">負責人國籍</span>
				<span class="content">與款項撥付及發票開立有關，請正確填寫</span>
				<button class="select">
					<span>本國籍/外國籍/法人</span>
					<i class="fa-solid fa-angle-down fa-lg"></i>
				</button>

				<button class="selected">
					<span>外國籍 - 居留證</span>
					<i class="fa-solid fa-angle-down fa-lg"></i>
				</button>
			</div>

			<div class="apply__input">
				<span class="title">負責人姓名</span>
				<span class="content">與匯款作業相關，設定後將無法修改，請正確填寫</span>
				<div class="input">
					<input type="text" placeholder="姓名" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">負責人身分證字號</span>
				<span class="content">與款項撥付及發票開立有關，請正確填寫</span>
				<div class="input">
					<input type="text" placeholder="身分證字號" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">居留證統一證號</span>
				<span class="content">請提供與經濟部公司登記所記載相同之代表人居留證字號</span>
				<div class="input">
					<input type="text" placeholder="居留證統一證號" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">稅籍編號</span>
				<span class="content">請提供與經濟部公司登記所記載相同之代表人稅籍編號</span>
				<div class="input">
					<input type="text" placeholder="稅籍編號" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">統一編號</span>
				<span class="content">請提供與經濟部公司登記所記載相同之「統一編號」</span>
				<div class="input">
					<input type="text" placeholder="統一編號" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">登記證號</span>
				<span class="content">請提供與公司登記所記載相同之「登記證號」</span>
				<div class="input">
					<input type="text" placeholder="登記證號" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">實收資本額</span>
				<div class="input">
					<input type="text" placeholder="實收資本額" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">發證日期 (民國)</span>
				<div class="select column3">
					<select>
						<option>民國年</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>月</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>日</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="flex-row">
				<div class="apply__input column2">
					<span class="title">發證地點</span>
					<div class="select">
						<select>
							<option>北市</option>
						</select>
						<i class="fa-solid fa-angle-down"></i>
					</div>
				</div>
				<div class="apply__input column2">
					<span class="title">領補換類別</span>
					<div class="select">
						<select>
							<option>初發</option>
						</select>
						<i class="fa-solid fa-angle-down"></i>
					</div>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">居留期限 (西元)</span>
				<div class="check">永久居留證<input type="checkbox"></div>
				<div class="select column3">
					<select>
						<option>西元年</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>月</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>日</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">居留證背面序號</span>
				<div class="input">
					<input type="text" placeholder="背面序號<" value="">
				</div>
			</div>

			<div class="apply__input">
				<span class="title">護照效期 (西元)</span>
				<div class="select column3">
					<select>
						<option>西元年</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>月</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>日</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">核准設立日期 (西元)</span>
				<div class="select column3">
					<select>
						<option>西元年</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>月</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>日</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">出生年月日 (西元)</span>
				<div class="select column3">
					<select>
						<option>2000</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>01</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
				<div class="select column3">
					<select>
						<option>01</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">身份審核</span>
			</div>

			<div class="apply__input">
				<span class="title">身分證正面</span>
				<span class="content">因影本將用於多種收款申請，請勿加上浮水印</span>
				<div class="file">
					<input type="file" id="file">
					<label for="file">
						<span>上傳正面影本</span>
						<i class="fa-solid fa-file-arrow-up fa-lg"></i>
					</label>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">身分證背面</span>
				<span class="content">因影本將用於多種收款申請，請勿加上浮水印</span>
				<div class="file">
					<input type="file" id="file">
					<label for="file">
						<span>上傳背面影本</span>
						<i class="fa-solid fa-file-arrow-up fa-lg"></i>
					</label>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">第二證件</span>
				<span class="content">如健保卡或駕照，因影本將用於多種收款申請，請勿加上浮水印</span>
				<div class="file">
					<input type="file" id="file">
					<label for="file">
						<span>上傳第二證件影本</span>
						<i class="fa-solid fa-file-arrow-up fa-lg"></i>
					</label>
				</div>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">撥款銀行</span>
				<span class="content"><a>各金流撥款帳號說明</a></span>
			</div>

			<div class="apply__input">
				<span class="title">信用卡代收付撥款銀行</span>
				<div class="select">
					<select>
						<option>臺灣銀行 (手續費$0)</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">LINE Pay撥款銀行</span>
				<div class="select">
					<select>
						<option>聯邦商業銀行 (手續費$0)</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">街口支付撥款銀行</span>
				<div class="select">
					<select>
						<option>臺灣銀行 (手續費$5/次)</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="apply__input">
				<span class="title">icashPay撥款銀行</span>
				<div class="select">
					<select>
						<option>選擇撥款銀行</option>
					</select>
					<i class="fa-solid fa-angle-down"></i>
				</div>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div></div>
			</div>

			<div class="apply__header">
				<span class="title">銀行帳號</span>
			</div>

			<div class="apply__input">
				<span class="title">臺灣銀行帳號</span>
				<div class="input">
					<input type="text" placeholder="銀行帳號" value="">
				</div>
			</div>

			<div class="flex-row">
				<div class="apply__input column2">
					<span class="title">帳號戶名</span>
					<div class="input">
						<input type="text" placeholder="帳號戶名" value="">
					</div>
				</div>
				<div class="apply__input column2">
					<span class="title">分行</span>
					<div class="input">
						<input type="text" placeholder="分行" value="">
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

			<div class="hr-line"></div>

			<div class="apply__input">
				<span class="title">聯邦商業銀行帳號</span>
				<div class="input">
					<input type="text" placeholder="銀行帳號" value="">
				</div>
			</div>

			<div class="flex-row">
				<div class="apply__input column2">
					<span class="title">帳號戶名</span>
					<div class="input">
						<input type="text" placeholder="帳號戶名" value="">
					</div>
				</div>
				<div class="apply__input column2">
					<span class="title">分行</span>
					<div class="input">
						<input type="text" placeholder="分行" value="">
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

			<div class="hr-line"></div>

			<div class="apply__input">
				<span class="title">發票信箱</span>
				<span class="content">輸入欲接收電子發票之信箱</span>
				<div class="input">
					<input type="text" placeholder="發票信箱" value="">
				</div>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page">
			<div class="apply__progress">
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
				<div class="active"></div>
			</div>

			<div class="apply__header">
				<span class="title">下載申明書</span>
			</div>

			<div class="apply__input">
				<span class="title">DDPay獨資戶申請書</span>
				<span class="content">請下載申請書並填妥完成後，寄到以下地址進行審核<br>地址：新北市新莊區新北大道三段5號22樓之1</span>
				<button class="download">
					<span>下載DDPay獨資戶申請書</span>
					<i class="fa-solid fa-file-arrow-down fa-lg"></i>
				</button>
			</div>

			<div class="apply__input">
				<span class="title">LINE Pay獨資戶申請書</span>
				<span class="content">請下載申請書並填妥完成後，寄到以下地址進行審核<br>地址：新北市新莊區新北大道三段5號22樓之1</span>
				<button class="download">
					<span>下載LINE Pay獨資戶申請書</span>
					<i class="fa-solid fa-file-arrow-down fa-lg"></i>
				</button>
			</div>

			<div class="apply__input">
				<span class="title">街口紙本申請書</span>
				<span class="content">請下載申請書並填妥完成後，寄到以下地址進行審核<br>地址：街口地址</span>
				<button class="download">
					<span>下載街口紙本申請書</span>
					<i class="fa-solid fa-file-arrow-down fa-lg"></i>
				</button>
			</div>

			<div class="bottom-btns">
				<button class="bottom-btns--prev"><i class="fa-solid fa-angle-left"></i>上一步</button>
				<button class="bottom-btns--save">儲存草稿</button>
				<button class="bottom-btns--next">下一步<i class="fa-solid fa-angle-right"></i></button>
			</div>
		</div>

		<div class="apply__page finished">
			<div class="big-icon"><img src="@/assets/icons/congratulation.svg"></div>
			<div class="apply__header">
				<span class="title">恭喜已送出申請！</span>
				<span class="content">我們將開始審核您的申請，如有任何消息，我們將第一時間以E-mail通知您，請您耐心等候，謝謝！</span>
			</div>

			<div class="bottom-btns">
				<a class="button" href="/home">回首頁回首頁回首頁回首頁回首頁回首頁回首頁回首頁</a>
			</div>
		</div>

		<section class="pop pop--full pop--terms" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">點點付使用條款</span>
				<span class="pop__content">
					<p>—店家系統使用條款—</p>
					<p>在您(甲方)使用點點全球股份有限公司(乙方)的「快一點產品和服務」前，請詳讀以下的服務條款。不論是透過網站、電話、LINE官方帳號/小程式或是手機應用程式即APP，只要您使用點點全球股份有限公司網站或App取得任何餐點/產品和服務，即表示您同意本服務條款之規定，包括但不限於個人資料授權原則及使用同意書、所有公佈於本公司網站之條款、政策、內容、以書面或其他形式通知之服務使用規範及往後修訂的版本。</p>
					<p>乙方為餐點網路平台服務業者並依法開立平台服務費之發票予甲方。甲方應依法自行開立餐點之發票或稅法規定之合法憑證予消費者。</p>
					<p>甲方所任用之主要職員，如需操作技術訓練時，乙方將負責訓練，且甲方必須配合乙方進行相關訓練程序</p>
					<p>於甲方依合約規定給付全額系統服務費給乙方後，乙方同意於合約期間內將甲方選購之方案服務授權給甲方使用，此授權是非獨家的、不可轉讓的。</p>
					<p>甲乙雙方不得為任何損害他方商譽、信譽或其他利益之行為，亦不得使用平台或服務進行任何不正當或有損利益、商譽或信譽之行為。其包括但不限於以下項目：</p>
					<p>試圖自己或協助他人未經授權存取本平台或系統。</p>
					<p>以機器人或其他技術方法，變更、刪除、破壞乙方服務系統之資料內容或設備、或是對本系統經營造成不良影響之虞。</p>
					<p>藉由乙方系統設計存在之漏洞、或以越過、破壞乙方系統安全維護機制等其他技術方法、變更、刪除或蒐集他人之個人資料。</p>
					<p>違反任何相關法規。</p>
					<p>因不可抗力或不可歸責於雙方當事人之事由，致本契約之全部或一部無法履行時，任何一方得解除契約，解約條件依雙方協商。</p>
					<p>甲方瞭解並同意，因網路傳輸技術的有限性，乙方無法完全免除因為電訊服務不穩定、中斷、滯延或是網際網路傳輸品質問題而導致數據中斷或是滯延的情況發生，乙方須提出報告書，致甲方受有損害，乙方應賠償甲方損失之價額。</p>
					<p>甲方應依照乙方要求的格式提供乙方必要的協助及資料，以利乙方得提供本服務，包括但不限於產品描述、照片及取餐或送貨設定等，並須確保其網路及系統符合乙方所要求的規格。</p>
					<p>合約期間內，甲方得隨時於系統後台中下載資料，包含訂單資料、會員資料以及商品資料．乙方提供甲方將上述資料匯出成excel檔案，甲方須自行負擔資料保管的責任．</p>
					<p>本合約終止、解除或屆滿後，甲方可在七天內自行下載資料．乙方會在七天後封存甲方帳號之資料．若甲方之後想再取得資料，可在一年之內向乙方申請匯出 。 </p>
					<p>若需要刪除另外申請即可．</p>
					<p>客戶服務：</p>
					<p>服務時間：於乙方正常營業時間內施行</p>
					<p>乙方接獲甲方通報維護服務時，會先行線上教導排除，甲方須配合乙方操作線上排除。</p>
					<p>為提供本服務乙方將協助或代理甲方處理消費者資料或其他甲方提供的資料，甲方茲同意並委任乙方為處理商家資料，並授權乙方得為提供本服務之需將商家資料進行修改及移轉給第三服務商進行處理。</p>
					<p>甲方應自行負責商家資料的合法性、完整性及正確性、並保證其有權為前述授權。乙方應盡善良管理人之注意義務，挑選適當的第三服務商、並要求該第三服務商亦遵守個人資料保護法及相關法令規定執行乙方所委託的事務。若因乙方之疏失致甲方損失，乙方負損害賠償責任。</p>
					<p>甲方應確保提供給乙方之資料皆為合法取得、且就其資料之收集、處理及利用的方式應依照個人資料保護法或其他相關法律之規定公告或通知消費者或其他被收集資料之人、並取得其同意乙方及其委托的第三服務商得於本協議之目的範圍內收集、處理及利用消費者或其他被收集資料之人之個人資料。</p>
					<p>任何消費者的資料或其他商家資料因法令規定不得提供給乙方時，甲方應先移除前述不得提供的資料後再將其部分提供給乙方、或將其匿名化、若已提供給乙方時，應及時通知乙方移除該等資料。</p>
					<p>乙方將運用商業上專業的技術安全措施，保護甲方在乙方系統上資料免於未經授權的使用或披露。因乙方疏失致甲方損失，乙方負損害賠償責任。</p>
					<p>甲方需遵守所授權服務區域與可能適用地區之個人資料相關法令。</p>
					<p>若您有任何問題，請使用線上客服系統與我們客服團隊聯繫，謝謝。</p>
					<p>最後更新日期：2023年06月30日</p>
					<p>—消費者點餐平台服務條款—</p>
					<p>在您使用點點全球股份有限公司的產品和服務前，請詳讀以下的服務條款。不論是透過網站、電話、LINE官方帳號/小程式或是手機應用程式即APP，只要您使用點點全球股份有限公司網站或App取得任何餐點/產品和服務，即表示您同意本服務條款之規定，包括但不限於個人資料授權原則及使用同意書、所有公佈於本公司網站之條款、政策、內容、以書面或其他形式通知之服務使用規範及往後修訂的版本。</p>
				</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--tobottom"><i class="fa-solid fa-angle-down"></i></button>
					<button class="pop__action pop__action--minor">不同意</button>
					<button class="pop__action">同意條款</button>
				</div>
			</div>
		</section>

		<section class="pop pop--full pop--terms" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">各金流撥款帳號說明</span>
				<span class="pop__content">
					<ol>
					<li>DDPay合作銀行：臺灣銀行、臺灣土地銀行、合作金庫銀行、第一商業銀行、華南商業銀行、彰化商業銀行、上海商業儲蓄銀行、台北富邦商業銀行、國泰世華商業銀行、兆豐國際商業銀行、王道商業銀行、臺灣中小企業銀行、臺灣新光商業銀行、陽信商業銀行、三信商業銀行、中華郵政、聯邦商業銀行、遠東國際商業銀行、元大商業銀行、永豐商業銀行、玉山商業銀行、凱基商業銀行、台新國際商業銀行、中國信託商業銀行</li>
					<li>LINE Pay手續費 0 元：聯邦商業銀行、LINE Bank（連線商業銀行）、臺灣銀行、合作金庫商業銀行、兆豐國際商業銀行、農業金庫、王道商業銀行、臺灣中小企業銀行、瑞興商業銀行、遠東國際商業銀行、元大商業銀行、其餘銀行提領手續費為15元/次</li>
					<li>街口支付撥款手續費：5元/次</li>
					<li>icashPay合作銀行：元大商業銀行、華南銀行、台灣銀行、富邦銀行、台新銀行、國泰世華銀行、中華郵政、台灣企銀、台灣土地銀行、永豐銀行、新光銀行、中國信託銀行、第一銀行、彰化銀行</li>
					<li>悠遊付手續費 0 元：  台北富邦銀行、國泰世華銀行、台新銀行、中國信託銀行、第一銀行、彰化銀行、永豐銀行、新光銀行、其餘銀行提領手續費為10元/次</li>
					</ol>
				</span>

				<div class="pop__actions">
					<button class="pop__action">了解</button>
				</div>
			</div>
		</section>

		<section class="pop pop--full pop--select" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">會員類型</span>
				<div class="apply__radio-list">
					<div class="apply__radio-list__group">
						<div class="apply__radio-list__option">
							<input type="radio" id="radio3" name="radio" checked>
							<label for="radio3">個人戶 - 無統編</label>
						</div>

						<div class="apply__radio-list__option">
							<input type="radio" id="radio4" name="radio">
							<label for="radio4">獨資戶 - 有統編, 公司帳戶收款</label>
						</div>

						<div class="apply__radio-list__option">
							<input type="radio" id="radio5" name="radio">
							<label for="radio5">企業戶 - 有統編, 個人帳戶收款</label>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="pop pop--full pop--select" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">會員類型</span>
				<div class="apply__radio-list">
					<div class="apply__radio-list__group">
						<div class="apply__radio-list__option">
							<input type="radio" id="radio6" name="radio" checked>
							<label for="radio6">本國籍 - 國民身分證</label>
						</div>

						<div class="apply__radio-list__option">
							<input type="radio" id="radio7" name="radio">
							<label for="radio7">外國籍 - 居留證</label>
						</div>

						<div class="apply__radio-list__option">
							<input type="radio" id="radio8" name="radio">
							<label for="radio8">外國籍 - 護照</label>
						</div>

						<div class="apply__radio-list__option">
							<input type="radio" id="radio9" name="radio">
							<label for="radio9">法人- 本國</label>
						</div>

						<div class="apply__radio-list__option">
							<input type="radio" id="radio10" name="radio">
							<label for="radio10">法人 - 外國</label>
						</div>
					</div>
				</div>
			</div>
		</section>

		<RouterView />
	</main>
</template>
