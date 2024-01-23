<main id="content" class="contents" style="min-height: 1054px;">
	<h1>마이페이지</h1>
	<div class="inner-wrap">
		<nav class="lnb">
			<h3>나의 주문</h3>
			<ul>
				<li><a href="/secured/mypage/listOrder" id="listOrder"><span>주문·교환·반품·취소 내역</span></a></li>
				<li><a href="/secured/mypage/listRepair" id="listRepair"><span>무료 사이즈수선 신청·내역</span></a></li>
				<li><a href="/secured/mypage/listPayRepair" id="listPayRepair"><span>AS수선 신청·내역</span></a></li>
				<!-- 멤버십 회원, 일모 회원 일 경우 노출 -->
				<li><a href="/secured/mypage/myPurchasedListInStore" id="myPurchasedListInStore"><span>매장구매내역</span></a>
				</li>
				<li><a href="/secured/mypage/memberAddrMgmt"><span>배송지 관리</span></a></li>
			</ul>

			<h3>나의 쇼핑 혜택</h3>
			<ul>
				<li><a href="/secured/mypage/myCouponList" id="myCouponList"><span>쿠폰</span></a></li>
				<li><a href="/secured/mypage/myGiftPointList" id="myGiftPointList"><span>기프트 포인트</span></a></li>
				<li><a href="/secured/mypage/myPurpleCoinList" id="myPurpleCoinList"><span>퍼플코인</span></a></li>
				<li><a href="/secured/mypage/myMemberShipPointList" id="myMemberShipPointList"><span>멤버십 포인트</span></a>
				</li>
				<li><a href="/secured/mypage/myEightSecondsBenefits"><span>8Seconds 구매실적 혜택</span></a></li>
			</ul>

			<h3>나의 활동</h3>
			<ul>
				<li><a href="/secured/mypage/myWishList" id="myWishList"><span>위시리스트</span></a></li>
				<li><a href="/secured/mypage/myTodayGoodList" id="myTodayGoodList"><span>최근 본 상품</span></a></li>
				<li><a href="/secured/mypage/myAlarmsForStock" id="myAlarmsForStock"><span>재입고 알림</span></a></li>
				<li><a href="/secured/mypage/eventList" id="eventList"><span>이벤트 참여내역</span></a></li>
				<li><a href="/secured/mypage/myGoodsReviewList" id="myGoodsReviewList"><span>상품리뷰</span></a></li>
			</ul>

			<h3>고객의 소리 </h3>
			<ul>
				<li><a href="/secured/mypage/myInquiryList" id="myInquiryList"><span>1:1문의/SSF톡</span></a></li>
				<li><a href="/secured/mypage/myQnaList" id="myQnaList"><span>상품Q&amp;A</span></a></li>
			</ul>

			<h3>회원 정보</h3>
			<ul>
				<li><a href="/secured/mypage/memberInfoMgmt" id="updateMember"><span>회원정보 수정</span></a></li>

				<!-- [#31806][16.12.29] 멤버십 제도 개선 Start -->
				<li><a href="/secured/mypage/myMembershipInfo" id="myMembershipInfo"><span>멤버십 정보</span></a></li>
				<!-- [#31806][16.12.29] 멤버십 제도 개선 End -->
				<li><a href="/secured/mypage/memberSecession" id="memberSecession"><span>회원 탈퇴</span></a></li>
			</ul>

		</nav>

		<script type="text/javascript" src="/v3/js/myPageCommon-HASH-383d228962.js"></script>
		<script type="text/javascript">
			$(document).on('click', '#btnClose', function () {
				/* $(this).parents('.fullLayerPopWrap').hide();
				 $('.allWrap').removeClass('on');
				 $('#wrap').css({'z-index':''});
				 $('.allWrap').children().addBack().off();
				 scrFix(false);
				 return false;*/
			});

			function crmCircuitBreakePopup(message) {
				openAlert(message, function () {
					return;
				});
			}
		</script>

		<title>SSFSHOP.COM</title>
		<form method="post" id="srchForm" action="/secured/mypage/myPage">
			<input type="hidden" name="_csrf" value="466b779f-86f6-4e48-9cb9-bf4ac322b966">
			<input type="hidden" id="ilmoCardUseYn" name="ilmoCardUseYn" value="">
			<input type="hidden" id="ilmoYn" name="ilmoYn" value="Y">
			{/* <!-- [#31806][16.12.29] 멤버십 제도 개선(등급별 text)  -->
			<!-- 다음 달 예상 등급 -->
			<!-- v3 컨텐츠 시작 --> */}
			<section class="mypage">
				<div class="membership">
					<div class="mem-class">
						<!-- lv-01 ~ lv-08 -->
						<i class="lv-02 coin"></i>
						<div class="mem-profile">
							<h2>
								<a href="/secured/mypage/memberInfoMgmt"><em>한다영</em>
									님</a>
								<small>358910d@daum.net</small>
							</h2>

							<div class="mem-grade">
								<span>Welcome Back!!</span>
							</div>
							<a href="/secured/mypage/myMembershipInfo" class="btn gy">혜택 보기</a>
						</div>
					</div>
					<div class="mem-wallet">
						<ul>
							<!--  기프트 포인트 -->
							<li>
								<span>기프트 포인트</span>
								<a href="/secured/mypage/myGiftPointList" class="value">0</a>
							</li>
							<!--  퍼플코인 -->
							<li>
								<span>퍼플코인</span>
								<a href="/secured/mypage/myPurpleCoinList" class="value">0</a>
							</li>
							<!--  멤버십 포인트 -->
							<li>
								<span>멤버십 포인트</span>
								<a href="/secured/mypage/myMemberShipPointList" class="value" id="reserve">0</a>
							</li>
						</ul>
						<ul>
							<!--  쿠폰 -->
							<li>
								<span>쿠폰</span>
								<a href="/secured/mypage/myCouponList" class="value">3</a>
							</li>
							<!--  상품리뷰 -->
							<li>
								<span>상품리뷰</span>
								<a href="/secured/mypage/myGoodsReviewList" class="value">0</a>
							</li>
						</ul>
					</div>
				</div>
				<!-- 주문내역 -->
				<script language="JavaScript" charset="euc-kr"
					src="https://tx.allatpay.com/common/NonAllatPayREPlus.js"></script>
				<div id="ALLAT_PLUS_PAY"
					style="left:0px; top:0px; width:0px; height:0px; position:absolute; z-index:1000; display:block; background-color:white;">
					<iframe id="ALLAT_PLUS_FRAME" name="ALLAT_PLUS_FRAME"
						src="https://tx.allatpay.com/common/iframe_blank.jsp" frameborder="0" width="0px" height="0px"
						scrolling="no" title="빈 프레임"></iframe></div>
				<div id="includeOrderList">
					<p class="null">현재 진행중인 주문·교환·반품·취소내역이 없습니다.</p>
					<form name="claimForm" id="claimForm" method="post">
					</form>

					<script>

						$(document).ready(function () {

							var totalCount = $('#totalCount').val();
							var page = $('#page').val();
							var page_size = $('#pageSize').val();
							var total_page = Math.ceil(totalCount / page_size);
							var str = '';

							$('#total_page').val(total_page);

							if (page > 1) {
								str += '<a href="#" onclick="fnSearchMore(1)"><<</a>';
								str += '<a href="#" onclick="goPrev();return false;"><</a>';
							}
							for (var i = 1; i <= total_page; i++) {
								if (i == page) {
									str += '<a href="#" onclick="fnSearchMore(' + i + ')" class="on">' + i + '</a>';
								} else {
									str += '<a href="#" onclick="fnSearchMore(' + i + ')" >' + i + '</a>';
								}
							}
							if (page < total_page) {
								str += '<a href="#" onclick="goNext();return false;">></a>';
								str += '<a href="#" onclick="fnSearchMore(' + total_page + ')">>></a>';
							}

							$('#divPage').html(str);

							/* #123821 맞춤 스타일링 성과 분석을 위한 utag 추가/개선 요청 */
							var styleCnt = $(".go_styling").length;
							if (styleCnt > 0) {
								n_click_logging('styling_disp', '', 'tp:mypage$imid:');
							}

						});

						/*
						* 시스템 점검시 고객 알림 정보 조회 ajax
						*/
						var systemAlert = false;
						var chkSysProgress = false;

						function getSystemCheckAlertMsg() {
							chkSysProgress = true;

							$.ajax({
								type: "POST",
								url: "/secured/mypage/getSystemCheckAlertMsg.json",
								data: {},
								dataType: "JSON",
								async: false,
								success: function (args) {
									chkSysProgress = false;
									if (args.result == 'Y') {
										openAlert(args.alertMsg);
										systemAlert = true;
									}
								}
							});
						}

						function goPrev() {
							var page = parseInt($('#page').val()) - 1;
							if (page <= 0) {
								page = 1;
							}
							fnSearchMore(page);
						};
						function goNext() {
							var page = parseInt($('#page').val()) + 1;
							if (page > $('#total_page').val()) {
								page = $('#total_page').val();
							}
							fnSearchMore(page);
						};

						function changeOrdGoodOption(strGodNo, strOrdNo, strOrdGodTurn, strDlvPcupspTurn) {

							var strParams = null;
							strParams = { 'godNo': strGodNo, 'ordNo': strOrdNo, 'ordGodTurn': strOrdGodTurn, 'dlvPcupspTurn': strDlvPcupspTurn, 'srchType': 'list', '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966' };
							loadLayer("/secured/mypage/changeOrdGoodOption.pop", strParams, "pop_option_sel", "POST", true);

						}

						function changeOrdSetOption(strGodNo, strOrdNo, strOrdGodTurn, strOrdItmNo) {
							var strParams = null;
							strParams = { 'godNo': strGodNo, 'ordNo': strOrdNo, 'ordGodTurn': strOrdGodTurn, 'dlvPcupspTurn': strDlvPcupspTurn, 'srchType': 'list', '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966' };
							loadLayer("/secured/mypage/changeOrdSetOption.pop", strParams, "pop_option_sel", "POST", true);
						}

						function getLayerPopupTotalCancel(ordNo, ordStatCd, ordDt) {
							// 시스템 점검시 고객 알림
							/*
							getSystemCheckAlertMsg();
							while(!chkSysProgress){
								if(systemAlert){
									return false;
								}else{
									break;
								}
							}
							*/

							// 올앳 센터 이전 관련 고객 알림
							checkAllat('clm');
							while (!isProgress) {
								if (allatCheck) {
									return false;
								} else {
									break;
								}
							}

							//	openConfirm('해당 주문을 전체취소 하시겠습니까?', function() {
							var strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'ordDt': ordDt, 'ordStatCd': ordStatCd };
							//loadLayer("/secured/mypage/getLayerPopupTotalCancel", strParams, "Allcancelpopup", "POST", true);
							openPop("/secured/mypage/getLayerPopupTotalCancel", "POST", strParams);
							//});
						}

						//주문취소
						function jsUnitCancel(ordNo, dlvPcupspTurn, ordDt, godNo, prmNo, dlivyDrctGodNo, ordGodTurn, ordGodTurnAnce) {
							// 시스템 점검시 고객 알림
							/*
							getSystemCheckAlertMsg();
							while(!chkSysProgress){
								if(systemAlert){
									return false;
								}else{
									break;
								}
							}
							*/

							// 올앳 센터 이전 관련 고객 알림
							checkAllat('clm');
							while (!isProgress) {
								if (allatCheck) {
									return false;
								} else {
									break;
								}
							}

							jsLinkUrlPost('/secured/mypage/partCancelAcceptPopup', { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'startOrdDt': ordDt, 'dlvPcupspTurn': dlvPcupspTurn, 'godNo': godNo, 'prmNo': prmNo, 'dlivyDrctGodNo': dlivyDrctGodNo, 'ordGodTurn': ordGodTurn, 'ordGodTurnAnce': ordGodTurnAnce });
						}

						//반품신청
						function jsRequestForReturn(ordNo, ordDt, dlvPcupspTurn, prmTpCd, prmNo, godNo, dlivyDrctGodNo, ordGodTurn, ordGodTurnAnce, partmalSectCd) {
							// 시스템 점검시 고객 알림
							getSystemCheckAlertMsg();
							while (!chkSysProgress) {
								if (systemAlert) {
									return false;
								} else {
									break;
								}
							}

							jsLinkUrlPost('/secured/mypage/requestForReturn', { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'dlvPcupspTurn': dlvPcupspTurn, 'prmTpCd': prmTpCd, 'startOrdDt': ordDt, 'prmNo': prmNo, 'godNo': godNo, 'dlivyDrctGodNo': dlivyDrctGodNo, 'ordGodTurn': ordGodTurn, 'ordGodTurnAnce': ordGodTurnAnce, 'partmalSectCd': partmalSectCd });
						}

						//교환신청
						function jsExchangeClaim(ordNo, dlvPcupspTurn, ordDt, prmNo, godNo, dlivyDrctGodNo, ordGodTurn, ordGodTurnAnce, partmalSectCd) {
							var param = { 'ordNo': ordNo, 'ordGodTurn': ordGodTurn };

							$.ajax({
								type: "POST",
								url: "/secured/mypage/exchangeIlmoCheck.json",
								data: param,
								success: function (data) {

									if (data.ilmoMbr == 'N') {
										openAlert("해당 상품은 일모 할인을 적용 받은 상품으로 일모 카드의 사용이 정지되어 교환 신청이 불가합니다." + "<br>" + "단, 반품 신청은 가능합니다.");
									}
									else {
										jsLinkUrlPost('/secured/mypage/exchangeClaim', { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'dlvPcupspTurn': dlvPcupspTurn, 'startOrdDt': ordDt, 'prmNo': prmNo, 'godNo': godNo, 'dlivyDrctGodNo': dlivyDrctGodNo, 'ordGodTurn': ordGodTurn, 'ordGodTurnAnce': ordGodTurnAnce, 'partmalSectCd': partmalSectCd });
									}
								}
							});
						}

						//주문상세 이동
						function jsOrderInfo(ordNo) {

							location.href = "/secured/mypage/" + ordNo + "/orderInfo";
						}

						//리뷰작성
						function getLayerPopupInsertGoodsReview(ordNo, ordGodTurn, godNo, type) {
							var strParams = { 'ordGod.ordNo': ordNo, 'ordGod.ordGodTurn': ordGodTurn, 'ordGod.godNo': godNo, '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'type': type, 'pchChnnlCd': 'ONLNE' };
							loadLayer("/secured/mypage/getGoodsReview.popup", strParams, "popReview", "POST", true);
						}

						//배송완료
						var isDoubleUpdate = false;
						function jsUpdateDeliveryStatus(ordNo, wayBilNo) {
							if (isDoubleUpdate) return false;

							var dlvMsg = '상품수령 완료 시 동일 운송장 상품 모두 수령 완료됩니다.\n수령완료 후 상품리뷰를 남겨주세요. 최대 4500코인의 혜택을 드립니다!';
							if (!confirm(dlvMsg)) {
								return false;
							}

							isDoubleUpdate = true;
							jsLinkUrlPost('/secured/mypage/deliveryStatus/update', { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'wayBilNo': wayBilNo });
						}

						/**
						 * 배송완료처리 후 상품리뷰팝업 호출
						 */
						function jsUpdateDeliveryStatusCallReview(ordNo, wayBilNo, ordGodTurn, godNo, strNmbrYn) {
							if (isDoubleUpdate) return false;

							var dlvMsg = '상품수령 완료 시 동일 운송장 상품 모두 수령 완료됩니다.\n수령완료 후 상품리뷰를 남겨주세요. 최대 4500코인의 혜택을 드립니다!';

							var params = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'wayBilNo': wayBilNo };
							if (!confirm(dlvMsg)) {
								return false;
							}

							isDoubleUpdate = true;
							if (strNmbrYn == 'Y') {
								jsLinkUrlPost('/secured/mypage/deliveryStatus/update', { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'wayBilNo': wayBilNo });
							} else {
								$.ajax({
									type: "POST",
									url: "/secured/mypage/deliveryStatus/update.json",
									data: params,
									dataType: "json",
									success: function (jsonData) {
										var strParams = null;
										strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'viewType': 'MAIN' };
										$("#includeOrderList").load("/secured/mypage/listMyOrderInclude", strParams);
										if (strNmbrYn == 'N') {
											getLayerPopupInsertGoodsReview(ordNo, ordGodTurn, godNo, 'insert');
										}
									},
									error: function (e) {
										openAlert(e);
									}
								});
							}
						}

						//매장위치확인
						function searchStorePop(strShopId, baseContext) {
							var params = new Object();
							params.shopId = strShopId;
							openPopupGet(baseContext + '/secured/mypage/searchStorePop.pop', params, 'storeMap', 710, 560);
						}

						//택배로받기
						function getLayerPopupDeliveryChange(ordNo, dlvPcupspTurn, type, ordTpCd) {
							if (type == "pkupOrderChange") {
								var pkupParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo };

								$.ajax({
									type: "POST",
									url: "/secured/order/pkupOrderChangeInfo.json",
									data: pkupParams,
									beforeSend: function (request) {
										var csrfToken = $("meta[name='_csrf']").attr("content");
										var csrfName = $("meta[name='_csrf_header']").attr("content");
										request.setRequestHeader(csrfName, csrfToken);
									},
									//datatype : "json",
									success: function (data) {

										if (data.pickupDeliveryChangeYnInfo.pickupDlvChgItmStatYn != "Y") {
											alert("상품의 재고가 소진되어 일반배송으로 전환하실 수 없습니다.");
											return;
										}


										if (data.dlvCstSumAmt > 0) {

											if (data.mobilPonPayRfd.rfdYn == "Y") {
												alert("핸드폰 결제는 익월이 되면 일반배송 전환이 어렵습니다.\n고객센터로 문의 부탁드립니다.\n☎1599-0007(평일 09:00~18:00/토,일,공휴일 휴무)");
												return false;
											}
										}

										if (data.pickupDeliveryChangeYnInfo.affCpnUseYn == "Y") {
											openAlert("배송지 변경이 필요할 경우 고객센터로 문의해주세요.<br/>(고객센터: 1599-0007)");
											return;
										}

										var strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'dlvPcupspTurn': dlvPcupspTurn, 'type': type, 'ordTpCd': ordTpCd, 'viewType': '01' };
										// $("#layerPopup").load("/secured/mypage/orderDeliveryLocationPop", strParams);
										//loadLayer("/secured/mypage/orderDeliveryLocationPop", strParams, "dlvPcupspTurn", "POST", true);
										openPop("/secured/mypage/orderDeliveryLocationPop", "POST", strParams);
									},
									error: function (e) {
										/*alert(e.responseText);*/
									}
								});
							} else {
								var strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'dlvPcupspTurn': dlvPcupspTurn, 'type': type, 'ordTpCd': ordTpCd, 'viewType': '01' };
								// $("#layerPopup").load("/secured/mypage/orderDeliveryLocationPop", strParams);
								//loadLayer("/secured/mypage/orderDeliveryLocationPop", strParams, "dlvPcupspTurn", "POST", true);
								openPop("/secured/mypage/orderDeliveryLocationPop", "POST", strParams);
							}
						}

						// #177332 [새벽배송_분석/개발]빠른 배송 서비스 도입
						function getLayerPopupFastDeliveryChange(ordNo, dlvPcupspTurn, type, ordTpCd, dlvComCd) {
							var strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'dlvPcupspTurn': dlvPcupspTurn, 'type': type, 'ordTpCd': ordTpCd, 'viewType': '01', 'dlvComCd': dlvComCd };
							openPop("/secured/mypage/orderDeliveryLocationPop", "POST", strParams);
						}

						//주문번호 픽업번호 바코드 레이어
						function fn_barcode(type, brndNm, barcode_data, dlvPcupspTurn, dlvTurn, ordNo) {

							var strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'ordNo': ordNo, 'dlvPcupspTurn': dlvPcupspTurn, 'dlvTurn': dlvTurn };
							var url = "/secured/mypage/getWaybilNo.json";

							var barcode_src = "/public/common/barcodeProcess/" + barcode_data;

							if (barcode_data == "") {
								openAlert("아직 픽업번호 발행전입니다.");
								return false;

							} else {

								var strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'brndNm': brndNm, 'barcodeData': barcode_data, 'barcodeSrc': barcode_src };
								openPop("/secured/mypage/pickupNumber.popup", "POST", strParams);

							}

						}

						function fnNull() {
						}

						/* 배송추적 */
						function checkDelivery(waybillNumber, cdDscr, dlvComCd, dlvStatCd, dlvComTrnsmisYn, partmalSectCd) {

							if (!waybillNumber || !cdDscr) {

								return;
							}

							if (dlvComCd == "CJKEX") {

								if (dlvStatCd == 'DLIVY_COMPT' && dlvComTrnsmisYn == 'N' && partmalSectCd == 'MCOM') {
									openAlert('고객님 상품이 준비되어 택배사 인도 예정입니다.');
								} else {
									window.open(cdDscr + waybillNumber, 'dlvPopup', 'width=800, height=800, resizable=0, scrollbars=no, status=0, titlebar=0');
								}

							} else if (dlvComCd == "HANJN") {

								window.open("http://www.hanjinexpress.hanjin.net/customer/hddcw99ssf.display?w_num=" + waybillNumber + "&gubun=SFM");

							} else if (dlvComCd == "TODAYPICK") {

								var agent = navigator.userAgent.toLowerCase();

								if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
									window.open(cdDscr + waybillNumber, 'dlvPopup', 'width=1300, height=800, resizable=0, scrollbars=yes, status=0, titlebar=0');
								} else {
									window.open(cdDscr + waybillNumber, 'dlvPopup', 'width=800, height=800, resizable=0, scrollbars=no, status=0, titlebar=0');
								}

							} else if (dlvComCd == "TIMF") {
								var strParams = { '_csrf': '466b779f-86f6-4e48-9cb9-bf4ac322b966', 'waybillNumber': waybillNumber };
								openPop("/secured/mypage/teamfreshCheckDeliveryPop", "POST", strParams);

							} else {

								window.open(cdDscr + waybillNumber, 'dlvPopup', 'width=800, height=800, resizable=0, scrollbars=no, status=0, titlebar=0');

							}

						}

						/* 리뷰작성 */
						function getLayerPopupInsertGoodsReview(ordNo, ordGodTurn, godNo, type) {
							var strParams = { 'ordGod.ordNo': ordNo, 'ordGod.ordGodTurn': ordGodTurn, 'ordGod.godNo': godNo, '_csrf': '3692b792-6280-4635-bc49-05c73b01047d', 'type': type, 'pchChnnlCd': 'ONLNE' };
							openPop('/secured/mypage/getGoodsReview.popup', 'POST', strParams);

						}

						function goGoodDetail(strGodNo) {
							location.href = "/public/goods/detail/" + strGodNo + "/view";
						}

						function goLuckyThrowGoodDetail(strGodNo) {
							window.open('/public/goods/luckyEvtGodDetailPopup?godNo=' + strGodNo, '상품상세', 'width=1020, height=720, scrollbars=yes');
						}

						/* 교환신청/반품신청 철회 */
						function checkWithdrawClaim(clmNo, mbrNo, ordNo, ordTpCd, clmTpCd, sumPkgClmYn, ordGodTurn) {
							if (sumPkgClmYn == "Y") {
								$.ajax({
									type: "POST",
									async: false,
									url: "/secured/mypage/getSumDlvClmWithdrawGod",
									data: { 'clmNo': clmNo, 'mbrNo': mbrNo, 'ordNo': ordNo, 'ordTpCd': ordTpCd, 'clmTpCd': clmTpCd, 'ordGodTurn': ordGodTurn },
									dataType: "html",
									success: function (data) {
										if (data.includes("swiper-slide")) {
											// 기존 레이어 삭제 후 다시 그림
											$(".guideCancel").remove();

											$("#popup").html(data);

											openLayer('.guideCancel', { 'onOpen': exe_layerCancel });
										} else {
											withdrawClaimStep1(clmNo, mbrNo, ordNo, ordTpCd, clmTpCd);
										}
									},
									error: function (pa_data, status, err) {
										//alert("error forward : " + err + " ,status=" + status);
									}
								});
							} else {
								withdrawClaimStep1(clmNo, mbrNo, ordNo, ordTpCd, clmTpCd);
							}
						}

						var exe_layerCancel = function () {
							var layercancel = new Swiper(".guideCancel .swiper", {
								direction: 'horizontal',
								slidesPerView: 4,
								spaceBetween: 10,
								navigation: {
									nextEl: '.guideCancel .swiper-button-next',
									prevEl: '.guideCancel .swiper-button-prev',
								},
								on: {
									init: function () {
										if ($('.guideCancel .swiper-slide').length <= 4) {
											$('.guideCancel .swiper-button-next').hide();
											$('.guideCancel .swiper-button-prev').hide();
										}
									}
								}
							});
						}

						function withdrawClaimStep1(clmNo, mbrNo, ordNo, ordTpCd, clmTpCd) {
							let clmTpNm = "";

							if (clmTpCd == "GNRL_EXCHG")
								clmTpNm = "교환신청"
							else if (clmTpCd == "RTGOD")
								clmTpNm = "반품신청"

							openConfirm(clmTpNm + "을 취소하시겠습니까?", function () {
								withdrawClaimStep2(clmNo, mbrNo, ordNo, ordTpCd, clmTpCd)
							});
						}

						function withdrawClaimStep2(clmNo, mbrNo, ordNo, ordTpCd, clmTpCd) {
							$('#claimForm').html("");
							$('#claimForm').append('<input type="hidden" name="ordTpCd"  value=' + ordTpCd + '>');
							$('#claimForm').append('<input type="hidden" name="clmNo"  	value=' + clmNo + '>');
							$('#claimForm').append('<input type="hidden" name="ordNo"  	value=' + ordNo + '>');
							$('#claimForm').append('<input type="hidden" name="clmTpCd"  value=' + clmTpCd + '>');
							$('#claimForm').append('<input type="hidden" name="mbrNo"  value=' + mbrNo + '>');

							$.ajax({
								type: "POST",
								url: "/secured/mypage/updateOrdClaimCancle.json",
								data: $('#claimForm').serialize(),
								dataType: "json",
								success: function (jsonData) {
									if (jsonData.data.RT == 'S') {
										let clmTpNm = "";

										if (clmTpCd == "GNRL_EXCHG")
											clmTpNm = "교환신청"
										else if (clmTpCd == "RTGOD")
											clmTpNm = "반품신청"

										openAlert(clmTpNm + " 취소가 완료 되었습니다.");

										$("#alert").dialog({
											close: function () {
												window.location.reload(true);
											}
										});

									} else {
										openAlert(jsonData.data.MSG);
									}

								},
								error: function (e) {
									openAlert("철회 신청이 불가합니다." + "<br>" + "관련 문의는 게시판에 남겨주세요.");
									//window.location.reload(true);
								}
							});
						}

						function goRepair() {
							location.href = "/secured/mypage/repairRequest";
						}

						function callbackClmDlvAmtPay() {
							window.location.reload(true);
						}

						function getPayRtgodPreprogrsPop(ordNo, preRtPayWaitCnt) {
							if (preRtPayWaitCnt > 0) {
								openAlert('결제 불가한 주문입니다.');
							} else {
								getPayMethodChangePop('/secured/order/payMethodChangePop', { ordNo: ordNo });
							}
						}

						function payPopCloseCheck() {
							var poll = window.setInterval(function () {
								if (payMethodChangePop.closed) {
									dimed(false);
									window.clearInterval(poll);
								}
							}, 1000);
						}

						//퍼플코인 전환
						function jsWebPntGfctCnvrs(ordNo) {

							if (_isProcessing) return false;
							_isProcessing = true;

							//이벤트성 퍼플코인 #1409803 기획서 변경으로 인한 해당 얼럿 제거


							openConfirm("퍼플코인 상품권을 현금성 퍼플코인으로 전환시키시겠습니까?", function () {
								$.ajax({
									type: "POST",
									url: "/secured/mypage/ordGfctWebPntCnvrs.json",
									data: { "ordNo": ordNo },
									dataType: "json",
									success: function (res) {
										if (res.result == 'Y') {
											openAlert("퍼플코인으로 전환되었습니다.");
											$("#alert").dialog({
												close: function () {
													window.location.reload(true);
												}
											});
										} else {
											openAlert("퍼플코인으로 전환 시 에러 발생하였습니다.");
										}
									},
									error: function (e) {
										openAlert("퍼플코인으로 전환 시 에러 발생하였습니다.");
									},
									complete: function (e) {
										_isProcessing = false;
									}
								});
							}, function () {
								_isProcessing = false;
							});

						}

						/*#141816*/
						var review_progress = {
							opts: {
								achieve_step: 0,
								txt_level: 0,
								photo_level: 0,
								count: 0,
								achieve_txt: [
									{ txt: '내용 20자 작성하면 코인게이지가 올라가요', coin: 0, gauge: 0 },//
									{ txt: '20자 달성! 30자를 더 쓰면 500C이에요', coin: '200C', gauge: 20 },//20 - 10
									{ txt: '50자 달성! 사진 올리면 500C이 추가로!', coin: '500C', gauge: 50 },//50 - 20
									{ txt: '영차영차👊 텍스트 20자만 채우면 게이지 UP!', coin: '500C', gauge: 50 },//텍스트 없이 사진만 올렸을 때 - 01
									{ txt: '거의 다 왔어요! 50자 채우면 1000C 달성!!', coin: '700C', gauge: 70 },// 텍스트20, 사진 있을 때 - 11
									{ txt: '수고하셨어요! 1000C이 지급됩니다!', coin: '1,000C', gauge: 100 }//50 텍스트와 사진 모두 작성했을 때 - 21
								]
							},
							chk_add_photo: function () {
								_this = this;
								_this.opts.count++;
								_this.opts.photo_level = 1;
								_this.exe_achieve_step();
							},
							chk_delete_photo: function () {
								_this = this;
								_this.opts.count = _this.opts.count - 1;
								if (_this.opts.count == 0) {
									_this.opts.photo_level = 0
									_this.exe_achieve_step();
								}
							},
							chk_write_txt: function (size) {
								_this = this;
								if (size < 20) {
									_this.opts.txt_level = 0;
								} else if (size > 19 && size < 50) {
									_this.opts.txt_level = 1;
								} else if (size > 49) {
									_this.opts.txt_level = 2;
								}
								_this.exe_achieve_step();
							},
							exe_achieve_step: function () {
								_this = this;

								if (_this.opts.txt_level == 1 && _this.opts.photo_level == 0) {
									_this.opts.achieve_step = 1;

								} else if (_this.opts.txt_level == 2 && _this.opts.photo_level == 0) {
									_this.opts.achieve_step = 2;

								} else if (_this.opts.txt_level == 0 && _this.opts.photo_level == 1) {
									_this.opts.achieve_step = 3;

								} else if (_this.opts.txt_level == 1 && _this.opts.photo_level == 1) {
									_this.opts.achieve_step = 4;

								} else if (_this.opts.txt_level == 2 && _this.opts.photo_level == 1) {
									_this.opts.achieve_step = 5;

								} else {
									_this.opts.achieve_step = 0;
								}

								_this.write_achieve_step();
							},
							write_achieve_step: function () {
								$(".review-progress .achieve .gauge span").animate({
									'width': _this.opts.achieve_txt[_this.opts.achieve_step].gauge + '%'
								}, 50, function () {
									var tmpVal = parseInt($("#aditAccml").val());
									var tmpValText = parseInt($("#aditAccmlTextRevw50").val());
									var tmpValPhoto = parseInt($("#aditAccmlPhotoRevw").val());
									if (tmpVal > 1000) {
										if (_this.opts.achieve_step == 1) {
											var tmpVal1 = tmpValText + 500;
											var tempVal11 = '';
											if (tmpValText > 0) {
												tempVal11 = '<em>(+추가 ' + tmpValText + '코인 즉시적립)</em>';
											}
											$(".review-progress .achieve .txt").html(_this.opts.achieve_txt[_this.opts.achieve_step].txt + tempVal11);
											$(".review-progress .achieve .rate span").text(_this.opts.achieve_txt[_this.opts.achieve_step].coin);
										} else if (_this.opts.achieve_step == 2) {
											var tmpVal2 = tmpValPhoto + 500;
											var tempVal22 = '';
											if (tmpValPhoto > 0) {
												tempVal22 = '<em>(+추가 ' + tmpValPhoto + '코인 즉시적립)</em>';
											}
											$(".review-progress .achieve .txt").html(_this.opts.achieve_txt[_this.opts.achieve_step].txt + tempVal22);
											$(".review-progress .achieve .rate span").text(tmpValText + 500 + 'C');
										} else if (_this.opts.achieve_step == 3) {
											$(".review-progress .achieve .txt").text(_this.opts.achieve_txt[_this.opts.achieve_step].txt);
											$(".review-progress .achieve .rate span").text(tmpValPhoto + 500 + 'C');
										} else if (_this.opts.achieve_step == 4) {
											var tmpVal4 = tmpValText + tmpValPhoto + 1000;
											var tempVal44 = '';
											if (tmpValText > 0) {
												tempVal44 = '<em>(+추가 ' + tmpValText + '코인 즉시적립)</em>';
											}
											$(".review-progress .achieve .txt").html(_this.opts.achieve_txt[_this.opts.achieve_step].txt + tempVal44);
											$(".review-progress .achieve .rate span").text(tmpValPhoto + 700 + 'C');
										} else if (_this.opts.achieve_step == 5) {
											var tmpVal5 = tmpValText + tmpValPhoto + 1000;
											var tmpVal6 = tmpValText + tmpValPhoto;
											var tmpVal66 = '';
											if (tmpVal6 > 0) {
												tmpVal66 = '<em>(+추가 ' + tmpVal6 + '코인 즉시적립)</em>';
											}
											$(".review-progress .achieve .txt").html(_this.opts.achieve_txt[_this.opts.achieve_step].txt + tmpVal66);
											$(".review-progress .achieve .rate span").text(tmpValText + tmpValPhoto + 1000 + 'C');
										} else {
											$(".review-progress .achieve .txt").text(_this.opts.achieve_txt[_this.opts.achieve_step].txt);
											$(".review-progress .achieve .rate span").text(_this.opts.achieve_txt[_this.opts.achieve_step].coin);
										}
									} else {
										$(".review-progress .achieve .txt").text(_this.opts.achieve_txt[_this.opts.achieve_step].txt);
										$(".review-progress .achieve .rate span").text(_this.opts.achieve_txt[_this.opts.achieve_step].coin);
									}

									if (_this.opts.achieve_step == 5) {
										$(".review-progress .achieve .twinkle").addClass("on");
									}
								});
							}
						}
						/*//#141816*/

					</script>
				</div>

				<div class="history_wrap">
					<h4>
						<span>진행중인 수선 내역</span><span>진행중인 문의 내역</span>
					</h4>
					<ul class="ask_list">
						<li><span>무료사이즈 수선</span> <a href="/secured/mypage/listRepair" class="c999">0</a></li>
						<li><span>AS 수선</span> <a href="/secured/mypage/listPayRepair" class="c999">0</a></li>
						<li><span>1:1문의/SSF톡</span> <a href="/secured/mypage/myInquiryList" class="c999">0</a></li>
						<li><span>상품 Q&amp;A</span> <a href="/secured/mypage/myQnaList" class="c999">0</a></li>
					</ul>
				</div>
				<div class="history_wrap">
					<h4>진행중인 활동 내역</h4>
					<ul class="ask_list">
						<li><span>찜한상품</span> <a href="/secured/mypage/myWishList" class="c999">0</a></li>
						<li><span>마이브랜드</span> <a href="/secured/mypage/myBrndList" class="c999">0</a></li>
						<li><span>재입고알림</span> <a href="/secured/mypage/myAlarmsForStock" class="c999">0</a></li>
						<li><span>이벤트참여내역</span> <a href="/secured/mypage/eventList" class="c999">0</a></li>
					</ul>

					<div class="hint_area">
						<div class="left">
							<em>8 Seconds 구매혜택</em>
							<p>삼성패션 멤버십 고객님들께만 제공되는 혜택입니다.</p>
						</div>
						<div class="right">
							<a href="/secured/mypage/myEightSecondsBenefits" class="btn">쿠폰 혜택보기</a>
						</div>
					</div>

				</div>
			</section>
			<!-- v3 컨텐츠 종료 -->
		</form>
		<!-- //sub content -->
		<!-- 로컬 JS 스크립트 선언 -->
	</div>
</main>