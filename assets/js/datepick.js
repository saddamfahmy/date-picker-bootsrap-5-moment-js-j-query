(function($) {


	$('<style>#exampleModal>.modal-dialog>.modal-content>.modal-body>.container>.row>.col>.tab-content>.tab-pane>.row>.col{background:#fff;cursor:pointer}#exampleModal>.modal-dialog>.modal-content>.modal-body>.container>.row>.col>.tab-content>.tab-pane>.row>.col.bg-primary{color:#f8f9fa}#exampleModal>.modal-dialog>.modal-content>.modal-body>.container>.row>.col>.tab-content>.tab-pane>.row>.col:hover{background:#fdfdfd}').appendTo('head');


	$("[data-datePicker=true]").each(function() {

		$(this).hide();
         
		if($(this).val()){
			var dateinput = moment($(this).val()).format("DD MMMM YYYY")
		}else if(!$(this).val()){
			var dateinput = moment().format("DD MMMM YYYY")
		}

       console.log(dateinput,$(this).attr('datePickercurent'),$(this).val(),$(this))
		
		//return false;


		var inputinsert = $('<div class="input-group mt-3"><input value="' + dateinput + '" type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"><button class="btn btn-outline-secondary" type="button" id="button-addon1"><svg class="bi bi-calendar3"fill=currentColor height=16 viewBox="0 0 16 16"width=16 xmlns=http://www.w3.org/2000/svg><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></button></div>')
		inputinsert.insertAfter(this);
		$(inputinsert.find("button")).on('click', pick);


	})

	function pick() {
		var curelm = $(this)
		var m = $('<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="exampleModalLabel">Date Picker</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="row"><div class="col-6"><select class="form-select form-select-sm month" aria-label="Small select example"><option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select></div><div class="col-6"><ul class="nav nav-tabs" id="myTab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></button></li><li class="nav-item" role="presentation"><button class="nav-link" id="year-tab" data-bs-toggle="tab" data-bs-target="#year" type="button" role="tab" aria-controls="year" aria-selected="false">2022</button></li></ul></div></div>' +
			'<div class="container  text-center g-0">' +
			'<div class="row g-0">' +
			'<div class="col g-0 position-relative prev-btn" style="box-shadow: inset -3px 0px 2px 0px rgba(0,0,0,0.03);max-width:20px;min-width:20px;">' +
			'<svg class="position-absolute top-50 start-0 translate-middle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>' +
			' </div>' +
			' <div class="col g-0" style="" >' +
			'<div class="tab-content" id="myTabContent"> <div class="tab-pane fade show active list-num" id="home" role="tabpanel" aria-labelledby="home-tab"> <div class="row day-name g-0"> <div class="col g-0">Sun</div><div class="col g-0">Mon</div><div class="col g-0 ">Tue</div><div class="col g-0 ">We</div><div class="col g-0 ">Thue</div><div class="col g-0 ">Fri</div><div class="col g-0 ">Sat</div></div><div class="row num-date g-0"> <div class="col g-0">1</div><div class="col g-0">2</div><div class="col g-0">3</div><div class="col g-0">4</div><div class="col g-0">5</div><div class="col g-0">6</div><div class="col g-0">7</div></div><div class="row num-date g-0"> <div class="col g-0">1</div><div class="col g-0">2</div><div class="col g-0">3</div><div class="col g-0">4</div><div class="col g-0">5</div><div class="col g-0">6</div><div class="col g-0">7</div></div><div class="row num-date g-0"> <div class="col g-0">1</div><div class="col g-0">2</div><div class="col g-0">3</div><div class="col g-0">4</div><div class="col g-0">5</div><div class="col g-0">6</div><div class="col g-0">7</div></div><div class="row num-date g-0"> <div class="col g-0">1</div><div class="col g-0">2</div><div class="col g-0">3</div><div class="col g-0">4</div><div class="col g-0">5</div><div class="col g-0">6</div><div class="col g-0">7</div></div><div class="row num-date g-0"> <div class="col g-0">1</div><div class="col g-0">2</div><div class="col g-0">3</div><div class="col g-0">4</div><div class="col g-0">5</div><div class="col g-0">6</div><div class="col g-0">7</div></div></div><div class="tab-pane fade" id="year" role="tabpanel" aria-labelledby="year-tab"></div></div>' +
			' </div>' +
			' <div class="col position-relative next-btn" style="box-shadow: inset 3px 0px 2px 0px rgba(0,0,0,0.03);max-width:20px;min-width:20px">' +
			'<svg class="position-absolute top-50 start-100 translate-middle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>' +
			' </div>' +
			' </div>' +

			'<div class="modal-footer">' +

			'<button type="button" class="btn btn-outline-secondary final-date" data-bs-dismiss="modal">17 november 2023</button><button type="button" class="btn btn-outline-primary save-btn">Save changes</button></div></div></div></div>')
		m.appendTo("body");

		var myModal = new bootstrap.Modal(m, {});
		myModal.show();


		var cdt = moment().format("YYYY-MM-DD")
		if ($(this).parent().find("input").val().length > 0) {
			cdt = moment($(this).parent().find("input").val()).format("YYYY-MM-DD")
		}

		rekayasa(cdt)

		m[0].addEventListener('hidden.bs.modal', event => {
			m[0].remove()
		})

		var prevbtn = $(myModal._element).find(".prev-btn");
		var nextbtn = $(myModal._element).find(".next-btn");
		var select = $(myModal._element).find(".form-select.form-select-sm.month");



		$(select).change(function() {
			var nd = setonlymonth($(this).val()) //newdate
			console.log(nd)
			rekayasa(nd)
		});

		function setonlymonth(m) {
			var nd = moment(moment(cdt).format("YYYY-MM-DD")).set('month', m - 1).format("YYYY-MM-DD").toString() //newdate
			return nd;
		}
		$(prevbtn).on("mouseover", function() {
			$(this).css({
				"box-shadow": "inset -3px 0px 5px 0px rgba(13,110,253,0.03)",
				"cursor": "pointer"
			})
		})
		$(prevbtn).mouseleave(function() {
			$(this).css({
				"box-shadow": "inset -3px 0px 2px 0px rgba(0,0,0,0.03)"
			})
		});
		$(nextbtn).on("mouseover", function() {
			$(this).css({
				"box-shadow": "inset 3px 0px 5px 0px rgba(13,110,253,0.03)",
				"cursor": "pointer"
			})
		})
		$(nextbtn).mouseleave(function() {
			$(this).css({
				"box-shadow": "inset 3px 0px 2px 0px rgba(0,0,0,0.03)"
			})
		});

		$(prevbtn).on("click", function() {
			var navlink = $(myModal._element).find(".nav-link.active");
			var activetab = navlink.attr("aria-controls");
			if (activetab == 'home') {
				rekayasa(moment(cdt).subtract(1, 'months').format("YYYY-MM-DD").toString())
			} else if (activetab == 'year') {
				rekayasatahun('prev')
			}
		})
		$(nextbtn).on("click", function() {
			var navlink = $(myModal._element).find(".nav-link.active");
			var activetab = navlink.attr("aria-controls");
			var navlink = $(myModal._element).find(".nav-link.active");
			var activetab = navlink.attr("aria-controls");
			if (activetab == 'home') {
				rekayasa(moment(cdt).add(1, 'months').format("YYYY-MM-DD").toString())
			} else if (activetab == 'year') {
				rekayasatahun('next')
			}

		})
		$(myModal._element).on("click", function() {
			console.log($(event.target))
			if($(event.target).hasClass("col-num-date")){
				$(event.target).removeClass("bg-primary")
				$(event.target).addClass("bg-primary");
				console.log($(event.target).attr("for-date"))
				rekayasa($(event.target).attr("for-date"))

			}
			

		})

		$($(myModal._element).find(".save-btn")).on("click", function() {
			var tglcurent = $(this).prev("button")
			tglcurent = moment(tglcurent.text()).format("DD MMMM YYYY")
			var thisinput = curelm.prev("input");
			var hideinput = $(curelm.parent()).prev("[data-datepicker=true]");
			$(thisinput).attr('value', tglcurent)
			$(hideinput).attr('value', moment(tglcurent).format("YYYYMMDD"));
			myModal.hide();

		})

		function rekayasatahun(n) {
			var tabyear = $(myModal._element).find(".tab-pane#year");
			var y = parseInt(moment(cdt).format("YYYY"));
			if (n == 'next') {
				n = -16
				yx = $(tabyear.find("p")[0]).text()
				yx = parseInt(yx)
			} else if (n == "prev") {
				n = +16
				yx = parseInt($(tabyear.find("p")[0]).text())
				yx = parseInt(yx)
			} else {
				n = 7
				yx = parseInt(moment(cdt).format("YYYY"));
				yx = parseInt(yx)
			}





			var caltab = $(myModal._element).find('[aria-labelledby="home-tab"]');
			var caltabw = $(caltab).width();
			var caltabh = $(caltab).height();
			var yearcol = $("<div class='row g-0'></div>")
			yearcol.css({
				width: "100%",
				height: caltabh + "px",
			})
			$($(myModal._element).find(".tab-pane#year")).html(yearcol);
			var yearcolw = yearcol.width() / 4;
			var yearcolh = yearcol.height() / 4;
			var yearcolchild = $("<div class='g-0 text-center' data-toggle='tab'></div>");

			yearcolchild.css({
				width: yearcolw + "px",
				height: yearcolh + "px",
				"box-sizing": "border-box",
				"-moz-box-sizing": "border-box",
				"-webkit-box-sizing": "border-box",
				"border": "1px solid #e3e2de",
				"border-top": "0px solid #e3e2de",
				"background": "#f7f6f2",
				"cursor": "pointer",
				position: "relative"
			});

			for (var i = 0; i < 16; i++) {
				var elmt = yearcolchild.clone();
				if (i < 7) {
					var u = yx + n - i
					elmt.html("<p>" + u + "</p>");
				} else if (i == 7 && n == 7 || yx + n - i == y) {
					var u = yx + n - i
					elmt.addClass("bg-primary")
					elmt.html("<p>" + u + "</p>");
				} else if (i == 7 && n != 7) {
					var u = yx + n - i
					elmt.html("<p>" + u + "</p>");
				} else if (i > 7) {
					var u = yx + n - i
					elmt.html("<p>" + u + "</p>");
				}


				$(elmt).appendTo(yearcol)
				$(elmt.find("p")).css("position", "relative")
				$(elmt.find("p")).css("top", (parseInt($(elmt.find("p")).css("line-height")), yearcolh, yearcolh - parseInt(elmt.css("line-height"))) / 2 + "px")

				$(elmt).click(function(params) {
					var tabInstance = new bootstrap.Tab($(myModal._element).find("#home-tab"));
					console.log("click")
					tabInstance.show();
					cdt = moment(cdt).set('year', parseInt($(this).text()))
					rekayasa(cdt)
					$($(myModal._element).find('button[data-bs-target="#year"]')).html($(this).text())
				})
			}
		}



		function rekayasa(input) {
			cdt = moment(input).format("YYYY-MM-DD")


			$(myModal._element).find(".final-date").html(moment(cdt).format("DD MMMM YYYY"))

			let d = moment(cdt).format("D")
			let m = moment(cdt).format("M")
			let y = moment(cdt).format("YYYY")
			let fd = moment(cdt).startOf('month').format('D'); //first day in this Mont
			let ld = moment(cdt).endOf('month').format('D'); //last day in this mont
			let dn = moment(cdt).startOf('month').format('ddd'); // name first day in this mon

			var coldate = 1
			switch (dn) {
				case 'Sun':
					coldate = 1;
					break;
				case 'Mon':
					coldate = 2;
					break;
				case 'Tue':
					coldate = 3;
					break;
				case 'Wed':
					coldate = 4;
					break;
				case 'Thu':
					coldate = 5;
					break;
				case 'Fri':
					coldate = 6;
					break;
				case 'Sat':
					coldate = 7;
			}
			var content = $(myModal._element).find(".modal-body")[0];
			var rowdate = $(content).find(".row.num-date")[0] //hor

			$(content).find(".tambah-row").remove()

			if ((35 - coldate + 1) < ld) { // jika tanggal lebih banyak dari kolom yang tersedia
				var trow = $(rowdate).clone() // penambahan row
				trow.addClass("tambah-row")
				$($(content).find("#home")).append(trow)
			}


			var coldate = coldate //ver
			var firstdayinthismont = $(rowdate).find(".col")[coldate - 1]

			$(firstdayinthismont).html(1) //firstdayinthismont
			$(firstdayinthismont).removeClass("bg-body-secondary")
			$(firstdayinthismont).removeClass("bg-primary")
			$(firstdayinthismont).addClass(checkdate(null, moment(cdt).startOf('month').format('YYYY-MM-DD')))
			$(firstdayinthismont).addClass("col-num-date");
			$(firstdayinthismont).attr('for-date',moment(cdt).startOf('month').format('YYYY-MM-DD'))

			var bi = 0 //before int
			$(firstdayinthismont).prevAll('.col').each(function() {
				bi++
				$(this).html(moment(cdt).startOf('month').subtract(bi, 'days').format("D").toString())
				$(this).removeClass("bg-body-secondary")
				$(this).removeClass("bg-primary")
				$(this).addClass(checkdate(moment(cdt).format("YYYY-MM-DD"), moment(cdt).startOf('month').subtract(bi, 'days').format("YYYY-MM-DD").toString()))
				$(this).addClass("col-num-date");
				$(this).attr('for-date',moment(cdt).startOf('month').subtract(bi, 'days').format("YYYY-MM-DD").toString())
			})


			var colnya = $($(content).find(".list-num")).find(".col")
			var startat = 7 + coldate
			var startafter = 0
			for (var ai = startat; ai < colnya.length; ai++) {
				startafter++
				const d1 = moment(cdt).format("YYYY-MM-DD");
				const d2 = moment(cdt).startOf('month').add(startafter, 'days').format("YYYY-MM-DD").toString();
				$(colnya[ai]).removeClass("bg-body-secondary")
				$(colnya[ai]).removeClass("bg-primary")

				$(colnya[ai]).html(moment(cdt).startOf('month').add(startafter, 'days').format("D").toString())
				$(colnya[ai]).addClass(checkdate(d1, d2))
				$(colnya[ai]).addClass("col-num-date");
				$(colnya[ai]).attr('for-date',moment(cdt).startOf('month').add(startafter, 'days').format("YYYY-MM-DD").toString())

			}
			$(content).find("select.month > option[selected=selected]").attr("selected", false)

			$(content).find('select.month option[value=' + moment(cdt).format("M") + ']').attr('selected', 'selected');
			$($(content).find("#year-tab")).html(y)

			$($(content).find("#year")).find("[data-toggle='tab']").on('click', function(e) {
				var tabInstance = new bootstrap.Tab($(content).find("#home-tab"));
				console.log("click")
				tabInstance.show()
			})

			var tabEl = $($(content).find('button[data-bs-target="#year"]'))[0]

			tabEl.addEventListener('shown.bs.tab', function(event) {
				rekayasatahun()
			})


			tabEl.addEventListener('hide.bs.tab', function(event) {
				var yearcol = $("")
				$($(content).find(".tab-pane#year")).html(yearcol)
			})


			function setatributemont(dsatu, ddua) {
				let h = null

				console.log(moment(dsatu).format("YYYY-MM-DD") , moment(ddua).format("YYYY-MM-DD"))


				if (moment(dsatu).format("YYYY-MM-DD") != moment(ddua).format("YYYY-MM-DD")) {
					var checkdatebefore = moment(dsatu).format("YYYY-MM-DD");
					var checkdateafter = moment(ddua).format("YYYY-MM-DD");
					//console.log(h)
					h = moment(ddua).format("YYYY-MM-DD");
			    }
				return h
			}

			function checkdate(dsatu, ddua) {
				let h = null
				if (ddua == cdt) {
					h = "bg-primary "
					return h;
				}
				if (moment(dsatu).format("M") != moment(ddua).format("M")) {
					h = "bg-body-secondary"
					return h;
			    }

				return h
			}























		}
	}






}(jQuery));