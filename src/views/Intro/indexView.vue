<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="intro">
        <div class="intro__wrap">
            <a class="intro__wrap__item creditcard">
                <div class="payments-icons">
                    <span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
                    <span><img src="@/assets/icons/applepay.svg" alt="Apple Pay"></span>
                    <span><img src="@/assets/icons/googlepay.svg" alt="Google Pay"></span>
                </div>
                <div class="intro__wrap__item__info">
                    <div class="title">信用卡收單</div>
                    <div class="content">
                        手續費：2.31%<br>
                        撥款日：每週四<br>
                        申辦期：約14日
                    </div>
                </div>
            </a>

            <a class="intro__wrap__item icashpay">
                <div class="payments-icons">
					<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
				</div>
                <div class="intro__wrap__item__info">
                    <div class="title">icashPay</div>
                    <div class="content">
                        手續費：2.2%<br>
                        撥款日：T+3<br>
                        申辦期：約14日
                    </div>
                </div>
            </a>

            <a class="intro__wrap__item easycard">
                <div class="payments-icons">
			        <span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
                </div>
                <div class="intro__wrap__item__info">
                    <div class="title">悠遊付</div>
                    <div class="content">
                        手續費：2.2%<br>
                        撥款日：T+2<br>
                        申辦期：約30~45日
                    </div>
                </div>
            </a>

            <a class="intro__wrap__item linepay">
                <div class="payments-icons">
				    <span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
                </div>
                <div class="intro__wrap__item__info">
                    <div class="title">LINE Pay</div>
                    <div class="content">
                        手續費：2.31%<br>
                        撥款日：T+3*<br>
                        申辦期：約5~30日
                    </div>
                </div>
            </a>

            <a class="intro__wrap__item jkopay">
                <div class="payments-icons">
					<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
				</div>
                <div class="intro__wrap__item__info">
                    <div class="title">街口支付</div>
                    <div class="content">
                        手續費：2.2%<br>
                        撥款日：T+2<br>
                        申辦期：約14日
                    </div>
                </div>
            </a>

            <a class="intro__wrap__item apply">
                <button>前往申請<i class="fa-solid fa-angle-right fa-sm"></i></button>
            </a>
        </div>

        <section class="pop pop--full pop--service" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<div class="service__header">
                    <div class="payments-icons">
                        <span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
                    </div>
                    <span class="title">DDPay信用卡收單服務</span>
                    <span class="content">含Apple Pay / Google Pay</span>
                </div>

                <div class="service__box">
                    <div class="service__box__item">
                        <span class="title">手續費</span>
                        <span class="content">2.2%</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">撥款日</span>
                        <span class="content">每週四</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">申辦期</span>
                        <span class="content">約14日</span>
                    </div>
                </div>

				<span class="pop__content">
					<ol>
					<li>點點全球股份有限公司為平台服務業者並依法開立平台金流服務費之發票予申請人。申請人應自行開立發票或稅法規定之合法憑證予消費者</li>
                    <li>手續費：優惠費率2.2%(未稅) [ 原價 : 3% (未稅)] </li>
                    <li>每周撥款一次，每周三提供上週之對帳單，若申請人無異議則於每周四撥款，若遇例假日則順延。</li>
                    <li>撥款手續費：30元/次 ( 目前申請優惠手續費為 15元/次 )。</li>
                    <li>手續費發票每月開立一次，每月5日前以電子發票形式開立，請確認您的Email地址，避免沒收到發票</li>
                    <li>合作銀行：臺灣銀行、臺灣土地銀行、合作金庫銀行、第一商業銀行、華南商業銀行、彰化商業銀行、上海商業儲蓄銀行、台北富邦商業銀行、國泰世華商業銀行、兆豐國際商業銀行、王道商業銀行、臺灣中小企業銀行、臺灣新光商業銀行、陽信商業銀行、三信商業銀行、中華郵政、聯邦商業銀行、遠東國際商業銀行、元大商業銀行、永豐商業銀行、玉山商業銀行、凱基商業銀行、台新國際商業銀行、中國信託商業銀行</li>
                    <li>好消息！2023年申請富邦數位帳戶，在2023/12/31前享撥款手續費 0 元 ，富邦銀行數位帳戶開立連結：<a target="_blank" href="https://ebank.taipeifubon.com.tw/EXT/curl/rEdixh8U">https://ebank.taipeifubon.com.tw/EXT/curl/rEdixh8U</a>（富邦銀行數位帳戶開立天數：1-2工作日、限個人戶開戶、僅DDPay信用卡收單服務可使用數位存摺申請）</li>
					</ol>
				</span>

				<div class="pop__actions">
					<a class="pop__action pop__action--green" href="./apply">前往申請</a>
				</div>
			</div>
		</section>

        <section class="pop pop--full pop--service" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<div class="service__header">
                    <div class="payments-icons">
                        <span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
                    </div>
                    <span class="title">LINE Pay</span>
                    <span class="content">線上點餐帳號 / 實體收款帳號</span>
                </div>

                <div class="service__box">
                    <div class="service__box__item">
                        <span class="title">手續費</span>
                        <span class="content">2.31%</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">撥款日</span>
                        <span class="content">T+3*</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">申辦期</span>
                        <span class="content">約5~30日</span>
                    </div>
                </div>

				<span class="pop__content">
					<ol>
					<li>手續費：2.2% (未稅)</li>
					<li>撥款日為交易日後的第三個工作天</li>
					<li>款項將直接由LINE Pay撥款至您的帳戶</li>
					<li>須提供實體收款存摺(LINE Pay未開放數位存摺申請)</li>
					<li>撥款手續費：有統編戶0元；個人戶除指定銀行享提領手續費 0 元優惠外，其餘銀行提領手續費為15元/次</li>
					<li>手續費 0 元：聯邦商業銀行、LINE Bank（連線商業銀行）、臺灣銀行、合作金庫商業銀行、兆豐國際商業銀行、農業金庫、王道商業銀行、臺灣中小企業銀行、瑞興商業銀行、遠東國際商業銀行、元大商業銀行</li>
					</ol>
				</span>

				<div class="pop__actions">
					<a class="pop__action pop__action--green" href="./apply">前往申請</a>
				</div>
			</div>
		</section>

        <section class="pop pop--full pop--service" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<div class="service__header">
                    <div class="payments-icons">
                        <span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
                    </div>
                    <span class="title">街口支付</span>
                </div>

                <div class="service__box">
                    <div class="service__box__item">
                        <span class="title">手續費</span>
                        <span class="content">2.2%</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">撥款日</span>
                        <span class="content">T+2</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">申辦期</span>
                        <span class="content">約14日</span>
                    </div>
                </div>

				<span class="pop__content">
					<ol>
					<li>手續費：2.2%(含稅)</li>
					<li>撥款日為交易日後的第二個工作天</li>
					<li>款項將直接由街口支付撥款至您的帳戶</li>
					<li>須提供實體收款存摺(街口未開放數位存摺申請)</li>
					<li>撥款手續費：5元/次</li>
					<li>僅提供實體對外營業店家申辦</li>
					</ol>
				</span>

				<div class="pop__actions">
					<a class="pop__action pop__action--green" href="./apply">前往申請</a>
				</div>
			</div>
		</section>

        <section class="pop pop--full pop--service" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<div class="service__header">
                    <div class="payments-icons">
                        <span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
                    </div>
                    <span class="title">icashPay</span>
                </div>

                <div class="service__box">
                    <div class="service__box__item">
                        <span class="title">手續費</span>
                        <span class="content">2.2%</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">撥款日</span>
                        <span class="content">T+3</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">申辦期</span>
                        <span class="content">約14日</span>
                    </div>
                </div>

				<span class="pop__content">
					<ol>
					<li>手續費：2.2%(含稅)</li>
					<li>撥款日為交易日第三個工作天撥至ICP帳戶</li>
					<li>撥至ICP帳戶後可手動提領</li>
					<li>須提供實體收款存摺(icashPay未開放數位存摺申請，另請提供非郵局帳戶)</li>
					<li>撥款手續費：合作銀行免費，非合作銀行$15元</li>
					<li>合作銀行：元大商業銀行、華南銀行、台灣銀行、富邦銀行、台新銀行、國泰世華銀行、中華郵政、台灣企銀、台灣土地銀行、永豐銀行、新光銀行、中國信託銀行、第一銀行、彰化銀行</li>
					</ol>
				</span>

				<div class="pop__actions">
					<a class="pop__action pop__action--green" href="./apply">前往申請</a>
				</div>
			</div>
		</section>

        <section class="pop pop--full pop--service" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<div class="service__header">
                    <div class="payments-icons">
                        <span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
                    </div>
                    <span class="title">悠遊付</span>
                </div>

                <div class="service__box">
                    <div class="service__box__item">
                        <span class="title">手續費</span>
                        <span class="content">2.2%</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">撥款日</span>
                        <span class="content">T+2</span>
                    </div>
                    <div class="service__box__item">
                        <span class="title">申辦期</span>
                        <span class="content">約30~45日</span>
                    </div>
                </div>

				<span class="pop__content">
					<ol>
					<li>手續費：2.2% (含稅)</li>
					<li>撥款日為交易日後的第二個工作天</li>
					<li>款項將直接由悠遊付撥款至您的帳戶</li>
					<li>須提供實體收款存摺(悠遊付未開放數位存摺申請)</li>
					<li>撥款手續費： 除指定銀行享提領手續費 0 元優惠外，其餘銀行提領手續費為10元/次</li>
					<li>手續費 0 元：  台北富邦銀行、國泰世華銀行、台新銀行、中國信託銀行、第一銀行、彰化銀行、永豐銀行、新光銀行</li>
					</ol>
				</span>

				<div class="pop__actions">
					<a class="pop__action pop__action--green" href="./apply">前往申請</a>
				</div>
			</div>
		</section>

        <section class="pop pop--center pop--continue-to-apply">
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
