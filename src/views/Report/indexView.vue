<script setup lang="ts">
import "./style.less";
</script>

<template>
	<main class="report">
		<div class="filter-sticky">
			<button class="item-select date">
				<b>8/15-8/16</b>
				<i class="calendar"></i>
			</button>
		</div>

		<div class="report-page">
			<h2>
				<b>總營業額</b>
				<span>$10000</span>
			</h2>
			<hr />
			
			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/cash.svg" alt="現金/現場收入"></span>
					</div>
					現金/現場收入
				</span>
				<span class="report-list__price">$1000</span>
			</div>
			
			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
					</div>
					信用卡
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
					</div>
					Line Pay
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
					</div>
					街口支付
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
					</div>
					悠遊付
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
					</div>
					icash Pay
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/pxpayplus.png" alt="全支付"></span>
					</div>
					全支付
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/pluspay.png" alt="全盈支付"></span>
					</div>
					全盈支付
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/taiwanpay.png" alt="台灣Pay"></span>
					</div>
					台灣Pay
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<hr />
			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/point.svg" alt="點數折抵"></span>
					</div>
					點數折抵
				</span>
				<span class="report-list__price">$1000</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/coupon.svg" alt="票券折抵"></span>
					</div>
					票券折抵
				</span>
				<span class="report-list__price">$1000</span>
			</div>
		</div>

		<div class="report-page">
			<h2>
				<b>總訂單數</b>
				<span>100</span>
			</h2>
			<hr />
			
			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/cash.svg" alt="現金/現場收入"></span>
					</div>
					現金/現場收入
				</span>
				<span class="report-list__price">10</span>
			</div>
			
			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
					</div>
					信用卡
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
					</div>
					Line Pay
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
					</div>
					街口支付
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/easycard.svg" alt="悠遊付"></span>
					</div>
					悠遊付
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/icash.png" alt="icash Pay"></span>
					</div>
					icash Pay
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/pxpayplus.png" alt="全支付"></span>
					</div>
					全支付
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/pluspay.png" alt="全盈支付"></span>
					</div>
					全盈支付
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/taiwanpay.png" alt="台灣Pay"></span>
					</div>
					台灣Pay
				</span>
				<span class="report-list__price">10</span>
			</div>

			<hr />
			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/point.svg" alt="點數折抵"></span>
					</div>
					點數折抵訂單
				</span>
				<span class="report-list__price">10</span>
			</div>

			<div class="report-list">
				<span class="report-list__icon">
					<div class="payments-icons">
						<span><img src="@/assets/icons/coupon.svg" alt="票券折抵"></span>
					</div>
					純優惠折抵訂單
				</span>
				<span class="report-list__price">10</span>
			</div>
		</div>

		<section class="pop pop--full pop--dateselect" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">日期</span>
				<span class="pop__content">
					<div class="dateselect__top">
						<button><i class="fa-solid fa-angle-left fa-xl"></i></button>

						<div class="select">
							<select>
								<option>2024</option>
							</select>
							<i class="fa-solid fa-angle-down"></i>
						</div>

						<div class="select">
							<select>
								<option>08</option>
							</select>
							<i class="fa-solid fa-angle-down"></i>
						</div>

						<button><i class="fa-solid fa-angle-right fa-xl"></i></button>
					</div>

					<div class="dateselect__calendar">
						<div class="title">日</div>
						<div class="title">一</div>
						<div class="title">二</div>
						<div class="title">三</div>
						<div class="title">四</div>
						<div class="title">五</div>
						<div class="title">六</div>

						<div class="disabled">30</div>
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
						<div>6</div>
						<div>7</div>
						<div>8</div>
						<div>9</div>
						<div>10</div>
						<div>11</div>
						<div class="selected start">12</div>
						<div class="selected">13</div>
						<div class="selected">14</div>
						<div class="selected">15</div>
						<div class="selected end">16</div>
						<div>17</div>
						<div>18</div>
						<div>19</div>
						<div>20</div>
						<div>21</div>
						<div>22</div>
						<div>23</div>
						<div>24</div>
						<div>25</div>
						<div>26</div>
						<div>27</div>
						<div>28</div>
						<div>29</div>
						<div>30</div>
						<div>31</div>
						<div class="disabled">1</div>
						<div class="disabled">2</div>
						<div class="disabled">3</div>
					</div>

					<div class="dateselect__bottom">
						<span>開始<br>時間</span>
						<div class="select">
							<select>
								<option>00:00</option>
							</select>
							<i class="fa-solid fa-angle-down"></i>
						</div>

						<span>結束<br>時間</span>
						<div class="select">
							<select>
								<option>23:59</option>
							</select>
							<i class="fa-solid fa-angle-down"></i>
						</div>
					</div>
				</span>
			</div>
		</section>
    
		<RouterView />
	</main>
</template>