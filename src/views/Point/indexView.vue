<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="store point">
        <div class="filter-sticky">
            <button class="store-select">
                <b>鬍鬚張中正店</b><i class="fa-solid fa-caret-down"></i>
            </button>
        </div>

        <h1><b>第三方點數申請</b></h1>

        <div class="nodata">
            <div class="nodata__icon">
                <img src="../../assets/icons/p-point-null.svg">
            </div>
            <h2>暫無點數</h2>
        </div> 

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

        <section class="pop pop--full pop--terms" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">紅利桃子使用條款</span>
				<span class="pop__content">
					<p>本人為辦理帳戶驗證，同意提供本人身分證字號或統一編號及銀行帳戶號碼等資訊予點點全球股份有限公司，並由點點全球股份有限公司將本人所提供之資料傳送至台北富邦商業銀行、台灣票據交換所及帳戶行，俾利完成ID帳戶驗證流程。</p>
                    <p>—店家系統使用條款—</p>
                    <p>在您(甲方)使用點點全球股份有限公司(乙方)的「快一點產品和服務」前，請詳讀以下的服務條款。不論是透過網站、電話、LINE官方帳號/小程式或是手機應用程式即APP，只要您使用點點全球股份有限公司網站或App取得任何餐點/產品和服務，即表示您同意本服務條款之規定，包括但不限於個人資料授權原則及使用同意書、所有公佈於本公司網站之條款、政策、內容、以書面或其他形式通知之服務使用規範及往後修訂的版本。</p>
                    <p>乙方為餐點網路平台服務業者並依法開立平台服務費之發票予甲方。甲方應依法自行開立餐點之發票或稅法規定之合法憑證予消費者。</p>
                    <p>甲方所任用之主要職員，如需操作技術訓練時，乙方將負責訓練，且甲方必須配合乙方進行相關訓練程序。</p>
                    <p>於甲方依合約規定給付全額系統服務費給乙方後，乙方同意於合約期間內將甲方選購之方案服務授權給甲方使用，此授權是非獨家的、不可轉讓的。</p>
                    <p>甲乙雙方不得為任何損害他方商譽、信譽或其他利益之行為，亦不得使用平台或服務進行任何不正當或有損利益、商譽或信譽之行為。其包括但不限於以下項目：</p>
                    <ol>
                        <li>試圖自己或協助他人未經授權存取本平台或系統。</li>
                        <li>以機器人或其他技術方法，變更、刪除、破壞乙方服務系統之資料內容或設備、或是對本系統經營造成不良影響之虞。</li>
                        <li>藉由乙方系統設計存在之漏洞、或以越過、破壞乙方系統安全維護機制等其他技術方法、變更、刪除或蒐集他人之個人資料。</li>
                        <li>違反任何相關法規。</li>
                        <li>因不可抗力或不可歸責於雙方當事人之事由，致本契約之全部或一部無法履行時，任何一方得解除契約，解約條件依雙方協商。</li>
                        <li>甲方瞭解並同意，因網路傳輸技術的有限性，乙方無法完全免除因為電訊服務不穩定、中斷、滯延或是網際網路傳輸品質問題而導致數據中斷或是滯延的情況發生，乙方須提出報告書，致甲方受有損害，乙方應賠償甲方損失之價額。</li>
                        <li>甲方應依照乙方要求的格式提供乙方必要的協助及資料，以利乙方得提供本服務，包括但不限於產品描述、照片及取餐或送貨設定等，並須確保其網路及系統符合乙方所要求的規格。</li>
                        <li>合約期間內，甲方得隨時於系統後台中下載資料，包含訂單資料、會員資料以及商品資料．乙方提供甲方將上述資料匯出成excel檔案，甲方須自行負擔資料保管的責任。</li>
                        <li>本合約終止、解除或屆滿後，甲方可在七天內自行下載資料．乙方會在七天後封存甲方帳號之資料．若甲方之後想再取得資料，可在一年之內向乙方申請匯出 。 若需要刪除另外申請即可。</li>
                    </ol>
                    <br>
                    <p>客戶服務：<br>
                    服務時間：於乙方正常營業時間內施行</p>
                    <p>乙方接獲甲方通報維護服務時，會先行線上教導排除，甲方須配合乙方操作線上排除。</p>
                    <p>為提供本服務乙方將協助或代理甲方處理消費者資料或其他甲方提供的資料，甲方茲同意並委任乙方為處理商家資料，並授權乙方得為提供本服務之需將商家資料進行修改及移轉給第三服務商進行處理。</p>
                    <p>甲方應自行負責商家資料的合法性、完整性及正確性、並保證其有權為前述授權。乙方應盡善良管理人之注意義務，挑選適當的第三服務商、並要求該第三服務商亦遵守個人資料保護法及相關法令規定執行乙方所委託的事務。若因乙方之疏失致甲方損失，乙方負損害賠償責任。</p>
                    <p>甲方應確保提供給乙方之資料皆為合法取得、且就其資料之收集、處理及利用的方式應依照個人資料保護法或其他相關法律之規定公告或通知消費者或其他被收集資料之人、並取得其同意乙方及其委托的第三服務商得於本協議之目的範圍內收集、處理及利用消費者或其他被收集資料之人之個人資料。</p>
                    <p>任何消費者的資料或其他商家資料因法令規定不得提供給乙方時，甲方應先移除前述不得提供的資料後再將其部分提供給乙方、或將其匿名化、若已提供給乙方時，應及時通知乙方移除該等資料。</p>
                    <p>乙方將運用商業上專業的技術安全措施，保護甲方在乙方系統上資料免於未經授權的使用或披露。因乙方疏失致甲方損失，乙方負損害賠償責任。</p>
                    <p>甲方需遵守所授權服務區域與可能適用地區之個人資料相關法令。</p>
                    <p>若您有任何問題，請使用線上客服系統與我們客服團隊聯繫，謝謝。</p>
                    <p>最後更新日期：2023年06月30日</p>
                    <br>
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

        <RouterView />
    </main>
</template>
