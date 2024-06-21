<script setup lang="ts">
import "./style.less";
</script>

<template>
	<main class="inquire">
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

		<div class="filter">
			<button class="item-select">
				<b>訂單狀態</b>
				<i class="fa-solid fa-caret-down"></i>
			</button>

			<button class="item-select">
				<b>收款方式</b>
				<i class="fa-solid fa-caret-down"></i>
			</button>

			<button class="item-select date">
				<b>8/15-8/16</b>
				<i class="calendar"></i>
			</button>
		</div>

		<div class="nodata">
            <div class="nodata__icon">
                <img src="../../assets/icons/clipboard-list-null.svg">
            </div>
            <h3>無交易紀錄</h3>
        </div>

		<div class="inquire-list">
			<div class="inquire-list__date">2024/8/15</div>
			<a class="inquire-list__row" href="./inquire-detail">
				<div class="payments-icons">
					<span><img src="@/assets/icons/pending.svg" alt="未收款"></span>
				</div>
				<div class="inquire-list__detail">
					<div class="inquire-list__name">未收款</div>
					<div>交易編號 AS1234567890</div>
					<div>快一點 <time>2024/8/15 6:20:33</time></div>
				</div>
				<div class="inquire-list__amount--pending">
					<span>$300</span>
					<span class="note">未收款</span>
				</div>
				<div class="inquire-list__action">
					<i class="fa-solid fa-angle-right fa-xl"></i>
				</div>
			</a>

			<a class="inquire-list__row" href="./inquire-detail">
				<div class="payments-icons">
					<span><img src="@/assets/icons/linepay.svg" alt="Line Pay"></span>
				</div>
				<div class="inquire-list__detail">
					<div class="inquire-list__name">LINE Pay</div>
					<div>交易編號 AS1234567890</div>
					<div>快一點 <time>2024/8/15 6:20:33</time></div>
				</div>
				<div class="inquire-list__amount">
					<span>$300</span>
				</div>
				<div class="inquire-list__action">
					<i class="fa-solid fa-angle-right fa-xl"></i>
				</div>
			</a>

			<a class="inquire-list__row" href="./inquire-detail">
				<div class="payments-icons">
					<span><img src="@/assets/icons/creditcard.svg" alt="信用卡"></span>
				</div>
				<div class="inquire-list__detail">
					<div class="inquire-list__name">信用卡 **** 5678</div>
					<div>交易編號 AS1234567890</div>
					<div>快一點 <time>2024/8/15 6:20:33</time></div>
				</div>
				<div class="inquire-list__amount--fail">
					<span><del>$300</del></span>
					<span class="note">失敗原因</span>
				</div>
				<div class="inquire-list__action">
					<i class="fa-solid fa-angle-right fa-xl"></i>
				</div>
			</a>

			<a class="inquire-list__row" href="./inquire-detail">
				<div class="payments-icons">
					<span><img src="@/assets/icons/mastercard.svg" alt="mastercard"></span>
				</div>
				<div class="inquire-list__detail">
					<div class="inquire-list__name">信用卡 **** 5678</div>
					<div>交易編號 AS1234567890</div>
					<div>快一點 <time>2024/8/15 6:20:33</time></div>
				</div>
				<div class="inquire-list__amount">
					<span>$300</span>
				</div>
				<div class="inquire-list__action">
					<i class="fa-solid fa-angle-right fa-xl"></i>
				</div>
			</a>
		</div>

		<div class="inquire-list">
			<div class="inquire-list__date">2024/8/14</div>
			<a class="inquire-list__row" href="./inquire-detail">
				<div class="payments-icons">
					<span><img src="@/assets/icons/jcb.svg" alt="JCB"></span>
				</div>
				<div class="inquire-list__detail">
					<div class="inquire-list__name">信用卡 **** 5678</div>
					<div>交易編號 AS1234567890</div>
					<div>快一點 <time>2024/8/15 6:20:33</time></div>
				</div>
				<div class="inquire-list__amount">
					<span>$300</span>
					<span class="point">含點數$30</span>
				</div>
				<div class="inquire-list__action">
					<i class="fa-solid fa-angle-right fa-xl"></i>
				</div>
			</a>

			<a class="inquire-list__row" href="./inquire-detail">
				<div class="payments-icons">
					<span><img src="@/assets/icons/jkopay.svg" alt="街口支付"></span>
				</div>
				<div class="inquire-list__detail">
					<div class="inquire-list__name">街口支付</div>
					<div>交易編號 AS1234567890</div>
					<div>快一點 <time>2024/8/15 6:20:33</time></div>
				</div>
				<div class="inquire-list__amount--fail">
					<span><del>$300</del></span>
					<span class="note">已退款</span>
				</div>
				<div class="inquire-list__action">
					<i class="fa-solid fa-angle-right fa-xl"></i>
				</div>
			</a>

			<a class="inquire-list__row" href="./inquire-detail">
				<div class="payments-icons">
					<span><img src="@/assets/icons/visa.svg" alt="VISA"></span>
				</div>
				<div class="inquire-list__detail">
					<div class="inquire-list__name">信用卡 **** 5678</div>
					<div>交易編號 AS1234567890</div>
					<div>快一點 <time>2024/8/15 6:20:33</time></div>
				</div>
				<div class="inquire-list__amount">
					<span>$300</span>
				</div>
				<div class="inquire-list__action">
					<i class="fa-solid fa-angle-right fa-xl"></i>
				</div>
			</a>
		</div>

		<div class="pager">
			<a class="prev disabled"><i class="fa-solid fa-angle-left fa-lg"></i></a>
			<a class="current" href="#">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<span>...</span>
			<a href="#">10</a>
			<a class="next"><i class="fa-solid fa-angle-right fa-lg"></i></a>
		</div>

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

		<section class="pop pop--full pop--select" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">訂單狀態</span>

                <div class="inquire__radio-list">
					<div class="inquire__radio-list__group">
						<div class="inquire__radio-list__option">
							<input type="radio" id="radio4" name="radio" checked>
							<label for="radio4">全部</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio5" name="radio">
							<label for="radio5">收款成功</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio6" name="radio">
							<label for="radio6">收款失敗</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio7" name="radio">
							<label for="radio7">已退款</label>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="pop pop--full pop--select" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">付款方式</span>

                <div class="inquire__radio-list">
					<div class="inquire__radio-list__group">
						<div class="inquire__radio-list__option">
							<input type="radio" id="radio8" name="radio" checked>
							<label for="radio8">全部</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio9" name="radio">
							<label for="radio9">信用卡</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio10" name="radio">
							<label for="radio10">LINE Pay</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio11" name="radio">
							<label for="radio11">街口支付</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio12" name="radio">
							<label for="radio12">icashPay</label>
						</div>

						<div class="inquire__radio-list__option">
							<input type="radio" id="radio13" name="radio">
							<label for="radio13">全支付</label>
						</div>
					</div>
				</div>
			</div>
		</section>

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