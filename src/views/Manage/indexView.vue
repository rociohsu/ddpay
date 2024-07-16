<script setup lang="ts">
import "./style.less";
</script>

<template>
    <main class="header inside">
        <div class="header__left">
            <a class="header__back" onclick="history.back()">
                <i class="fa-regular fa-angle-left fa-xl"></i></a>
        </div>
        <div class="header__right">權限管理</div>
    </main>

    <main class="manage">
        <div class="searchbar">
			<input type="text" placeholder="搜尋">
			<button><i class="fa-solid fa-magnifying-glass fa-lg"></i></button>
		</div>

        <div class="admin-list">
            <a>
                <span class="admin-list__name">陳小明
                    <span class="admin-list__stores">中正店・中山店・中華店</span>
                </span> 
                <span class="admin-list__role">老闆</span>
                <span class="admin-list__action">
                    <i class="fa-regular fa-angle-right fa-lg"></i>
                </span>
            </a>

            <a>
                <span class="admin-list__name">汪喵
                    <span class="admin-list__stores">中正店・中山店・中華店</span>
                </span> 
                <span class="admin-list__role">員工</span>
                <span class="admin-list__action">
                    <i class="fa-regular fa-angle-right fa-lg"></i>
                </span>
            </a>

            <a>
                <span class="admin-list__name">林姍姍
                    <span class="admin-list__stores">中正店・中山店・中華店</span>
                </span> 
                <span class="admin-list__role">員工</span>
                <span class="admin-list__action">
                    <i class="fa-regular fa-angle-right fa-lg"></i>
                </span>
            </a>
        </div>

        <div class="bottom-btns">
            <a class="button" href="#">新增管理員</a>
        </div>

        <section class="pop pop--full pop--manage" style="display: flex;">
			<div class="pop__body">
                <a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">編輯管理員</span>
				<span class="pop__content">
                    <div class="admin__input">
                        <span class="title">管理員名稱</span>
                        <div class="input">
                            <input type="text" placeholder="輸入名稱" value="陳大明">
                        </div>
                    </div>

                    <div class="admin__input">
                        <span class="title">授權分店</span>
                        <button class="select">
                            <span>中正店・中山店</span>
                            <i class="fa-solid fa-angle-down fa-lg"></i>
                        </button>
                    </div>

                    <div class="admin-group">
                        <div class="admin-group__option">
							<input type="radio" id="radio1" name="radio" checked>
							<label for="radio1">老闆
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                    <li>編輯資料</li>
                                    <li>編輯權限</li>
                                    <li>建立活動</li>
                                </ul>
                            </label>
						</div>

                        <div class="admin-group__option">
							<input type="radio" id="radio2" name="radio">
							<label for="radio2">員工
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                </ul>
                            </label>
						</div>

                        <div class="admin-group__option">
							<input type="radio" id="radio3" name="radio">
							<label for="radio3">會計
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                    <li>建立活動</li>
                                </ul>
                            </label>
						</div>

                        <div class="admin-group__option">
							<input type="radio" id="radio4" name="radio">
							<label for="radio4">倉管
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                    <li>編輯資料</li>
                                </ul>
                            </label>
						</div>
                    </div>
                </span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor delete">刪除管理員</button>
					<button class="pop__action pop__action--green">儲存</button>
				</div>
			</div>
		</section>

        <section class="pop pop--center pop--confirm" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--green">
						<i class="fa-solid fa-check fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">已儲存</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--green">確認</button>
				</div>
			</div>
		</section>

        <section class="pop pop--center pop--confirm" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--red">
						<i class="fa-solid fa-exclamation fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">確定已刪除陳小明？</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--minor">取消</button>
					<button class="pop__action pop__action--red">確認刪除</button>
				</div>
			</div>
		</section>

        <section class="pop pop--center pop--confirm" style="display: flex;">
			<div class="pop__body">
				<div class="pop__icons">
					<div class="pop__icon pop__icon--green">
						<i class="fa-solid fa-check fa-2xl"></i>
					</div>
				</div>

				<span class="pop__title"></span>
				<span class="pop__content">已刪除陳小明</span>

				<div class="pop__actions">
					<button class="pop__action pop__action--green">確認</button>
				</div>
			</div>
		</section>

        <section class="pop pop--full pop--manage" style="display: flex;">
			<div class="pop__body">
                <a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">新增管理員</span>
				<span class="pop__content">
                    <div class="admin__input">
                        <span class="title">管理員名稱</span>
                        <div class="input">
                            <input type="text" placeholder="輸入名稱" value="陳大明">
                        </div>
                    </div>

                    <div class="admin__input">
                        <span class="title">授權分店</span>
                        <button class="select">
                            <span>中正店・中山店</span>
                            <i class="fa-solid fa-angle-down fa-lg"></i>
                        </button>
                    </div>

                    <div class="admin-group">
                        <div class="admin-group__option">
							<input type="radio" id="radio5" name="radio" checked>
							<label for="radio5">老闆
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                    <li>編輯資料</li>
                                    <li>編輯權限</li>
                                    <li>建立活動</li>
                                </ul>
                            </label>
						</div>

                        <div class="admin-group__option">
							<input type="radio" id="radio6" name="radio">
							<label for="radio6">員工
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                </ul>
                            </label>
						</div>

                        <div class="admin-group__option">
							<input type="radio" id="radio7" name="radio">
							<label for="radio7">會計
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                    <li>建立活動</li>
                                </ul>
                            </label>
						</div>

                        <div class="admin-group__option">
							<input type="radio" id="radio8" name="radio">
							<label for="radio8">倉管
                                <ul class="admin-group__option__item">
                                    <li>提領</li>
                                    <li>編輯資料</li>
                                </ul>
                            </label>
						</div>
                    </div>
                </span>

				<div class="pop__actions">
                    <button class="pop__action pop__action--green full">產生連結</button>
                    <div class="pop__action__url">https://www.jsdhgfkjsfkdsgnvskjfdhsjakdfhkxjdfskjhadsgnvskjfdhsjakdfhkxjdfskjhad</div>

					<button class="pop__action pop__action--minor"><i class="icon-line"></i>LINE分享</button>
					<button class="pop__action pop__action--green"><i class="fa-solid fa-copy"></i>複製連結</button>
                    <button class="pop__action pop__action--green"><i class="fa-solid fa-check"></i>複製成功</button>

                    <button class="pop__action pop__action--minor disabled"><i class="icon-line"></i>LINE分享</button>
					<button class="pop__action pop__action--green disabled"><i class="fa-solid fa-copy"></i>複製連結</button>
				</div>
			</div>
		</section>

        <section class="pop pop--full pop--select" style="display: flex;">
			<div class="pop__body">
				<a class="pop__close"><i class="fa-solid fa-xmark fa-lg"></i></a>
				<span class="pop__title">授權分店</span>
				<div class="store__check-list">
					<div class="store__check-list__group">
						<div class="store__check-list__option">
							<input type="checkbox" id="checkbox1" name="checkbox" checked>
							<label for="checkbox1"><i class="fa-solid fa-check"></i>中正店</label>
						</div>

						<div class="store__check-list__option">
							<input type="checkbox" id="checkbox2" name="checkbox" checked>
							<label for="checkbox2"><i class="fa-solid fa-check"></i>中山店</label>
						</div>

						<div class="store__check-list__option">
							<input type="checkbox" id="checkbox3" name="checkbox">
							<label for="checkbox3"><i class="fa-solid fa-check"></i>中華店</label>
						</div>
					</div>
				</div>

                <div class="pop__actions">
                    <button class="pop__action pop__action--white full">確認</button>
                </div>
			</div>
		</section>

        <RouterView />
    </main>
</template>
