


//it would be cool if we had something like this in BOFA app. I would be able to see my spendings and yearly data and etc. if we had this program in bofa app, the user would not had to put the data himself, it would have been automated

//**********BUDGET DATA CONTROLER */
var BudgetDataCtr = (function () {

    var Income = function(description, value, id) {
        this.description = description;
        this.value = value;
        this.id = id;
    }
    var Expense = function(description, value, id) {
        this.description = description;
        this.value = value;
        this.id = id;
    }

    var data = {
        jan: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        feb: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }

        },
        mar: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }

        },
        apr: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        may: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        jun: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        jul: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        aug: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        sept: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        oct: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        nov: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: []
                    }
                }
            }
        },
        dec: {
            budget: {
                allItems: {
                    inc:[],
                    exp:[]
                },
                totalItems: {
                    inc:0,
                    exp:0,
                    tot: 0,
                    perObj: {
                        totPer:-1,
                        persentages: [
                            // var perObj = {
                            //     id: data[currentMonth].budget.allItems.exp[i].id,
                            //     per: ((data[currentMonth].budget.allItems.exp.value) / (data[currentMonth].budget.totalItems.inc) * 100)
                            // }
                        ]
                    }
                }
            }
        },
        inc: 0,
        exp: 0,
        tot: 0,
        per: -1
    }

    return {
        addItem: function(month, type, description, value) {
            var ID, newItem;
            value = parseFloat(value);

            if (data[month].budget.allItems[type].length > 0) {
                //ID = id of last element + 1
                ID = data[month].budget.allItems[type][data[month].budget.allItems[type].length-1].id + 1;

            } else {
                ID = 0;
            }

            if (type === 'inc') {
                newItem = new Income(description, value, ID);

            } else if (type === 'exp') {
                newItem = new Expense(description, value, ID);
            }
            data[month].budget.allItems[type].push(newItem);
            return newItem;

        },
        getData: function() {
            return data;
        },
        getMonthData: function(month) {

            return {
                incArr: data[month].budget.allItems.inc,
                expArr: data[month].budget.allItems.exp
            }

        },
        monthBudgetCalculation: function(currentMonth) { // this function will only calculate the current month data. i am going to create a new funtion for yearly calculation. for yearly calculation im going to get data form each month
            var monthIncome = 0, monthExpense = 0, monthBudget = 0;

            

            for (var i = 0; i < data[currentMonth].budget.allItems.inc.length; i++) { // keep this
                    monthIncome += data[currentMonth].budget.allItems.inc[i].value;
            }
            for (var k = 0; k < data[currentMonth].budget.allItems.exp.length; k++) { // keep this
                    monthExpense += data[currentMonth].budget.allItems.exp[k].value;
            }

            monthBudget = monthIncome - monthExpense;
            data[currentMonth].budget.totalItems.inc = monthIncome;
            data[currentMonth].budget.totalItems.exp = monthExpense;
            data[currentMonth].budget.totalItems.tot =monthBudget;
                
            
            
            //return:
                //1. total income, expense and budget for that month
            return {
                monthInc: data[currentMonth].budget.totalItems.inc,
                monthExp: data[currentMonth].budget.totalItems.exp,
                monthTot: data[currentMonth].budget.totalItems.tot
            }
        },
        monthPercentageCalculation: function(currentMonth) {
            
            data[currentMonth].budget.totalItems.perObj.persentages.length = 0;
            var totPer = (data[currentMonth].budget.totalItems.exp / data[currentMonth].budget.totalItems.inc) * 100;

            for (var i = 0; i < data[currentMonth].budget.allItems.exp.length; i++) {
                var perObj = {
                    id: data[currentMonth].budget.allItems.exp[i].id,
                    per: ((data[currentMonth].budget.allItems.exp[i].value) / (data[currentMonth].budget.totalItems.inc) * 100)
                }
                data[currentMonth].budget.totalItems.perObj.totPer = totPer;
                data[currentMonth].budget.totalItems.perObj.persentages.push(perObj);
            }

            return {
                monthTotPer: totPer,
                itemsPer: data[currentMonth].budget.totalItems.perObj.persentages
            }

        //return:
            //tot percentage
            //a percentage obj that has the id and percentage nbr
        },
        yearBudgetCalculation: function() {

            var totInc, totExp, totBud;
            totInc = 0;
            totExp = 0;
            totBud = 0;

            for (var months in data) {
                if (months === 'inc') { //after december, "inc" comes up. 
                    break;
                }
                totInc += data[months].budget.totalItems.inc;
                totExp += data[months].budget.totalItems.exp;

            }
            totBud = totInc - totExp;

            data.inc = totInc;
            data.exp = totExp;
            data.tot = totBud;

            return {
                yearTotInc: totInc,
                yearTotExp: totExp,
                yearTotBud: totBud
            }

        },
        yearPercentageCalculation: function() {
            return ((data.exp / data.inc) * 100).toFixed(1);

        },
        deleteItem: function(month, type, id) {

            var ids, index;
            id = parseInt(id);

            ids = data[month].budget.allItems[type].map(curr => {
                return curr.id;
            });

            index = ids.indexOf(id);

            if(index !== -1) {
                data[month].budget.allItems[type].splice(index, 1);
            } else {
                console.log('item not deleted');
            }

            
        }
    }
   

})();
//^^^^^^^^^^^BUDGET DATA CONTROLER
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//************USER INTERFACE CONTOLER
var UIctr = (function() {

    var DOMstrings = {
        year: '.year-value',
        persentageOfYear: '.year-persentage-value',
        monthSelector: '.month-selector',
        monthSubmitButton: '#month-submit',
        
        monthBudgetPage: '.month-budget', 
        seletedMonthTitle: '.selected-month',
        addItem: '.add-item-btn',
        doneBtn: '.done-btn',
        typeSelect: '.type-selector',
        descriptionInput: '.description-input',
        valueInput: '.value-input',
        incomeList: '.income__list',
        expenseList: '.expense__list',
        monthIncContainer: '.month-income-value',
        monthExpContainer: '.month-expense-value',
        monthBudgetContainer: '.month-budget-value',
        monthExpPerContainer:'.month-expense-per-val',
        yearIncVal: '.total-income-value',
        yearExpVal: '.totalExpense-value',
        yearBudVal: '.total-budget-value',
        monthBudgetTitle: '#month-budget-title',
        monthIncomeTitle: '#month-inc-title',
        monthExpenseTitle: '#month-exp-title',
        monthTitleBox:'#month-title-box',
        yearTitle:'#year-title',
        yearExpenseTitle: '#year-exp-title',
        yearIncomeTitle: '#year-inc-title',
        yearBudgetTitle: '#year-budget-title'

    }

    var incomeHtml ='<div class="row item" id="inc-%id%"><div class="col-sm-6 col-12 item_description">%description%</div><div class="col-sm-3 col-5 item_value">%value%</div><div class="col-sm-1 item_delete_btn"><button class="btn btn-secondary btn-sm">Delete</button></div></div>';
    
    var expenseHtml = '<div class="row item" id="exp-%id%"><div class="col-sm-5 col-11 item_description">%description%</div><div class="col-sm-4 col-5 expense-list-container"><div class="item_value">%value%</div><div class="item__percentage"></div></div><div class="col-sm-1 item_delete_btn"><button class="btn btn-secondary btn-sm">Delete</button></div></div>';


    return {

        addItemList: function(typ, id, des, val) {
            var html, newHtml, element;

            if (typ === 'inc') {
                element = DOMstrings.incomeList;
                html = incomeHtml;

            } else if (typ === 'exp') {
                element = DOMstrings.expenseList;
                html = expenseHtml;
            }

            newHtml = html.replace('%id%',id);
            newHtml = newHtml.replace('%value%', val.toFixed(2));
            newHtml = newHtml.replace('%description%', des);
            

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);




        },
        monthPageVisibility: function(order, month) {  //order will be either "visible" OR "hidden"
            document.querySelector(DOMstrings.monthBudgetPage).style.visibility = order;

            //the code below is Disgusting but when i first started working on this project I did not see this problem coming, so 
            //I have to do this hard way. I am sorry if this code hurts your brain

            switch(month) {
                case "jan":
                    month = "January";
                    break;

                case "feb":
                    month = "February";
                    break;

                case "mar":
                        month = "March";
                        break;

                case "apr":
                        month = "April";
                        break;

                case "may":
                        month = "May";
                        break;
                
                case "jun":
                        month = "June";
                        break;

                case "jul":
                        month = "July";
                        break;

                case "aug":
                        month = "August";
                        break;

                case "sept":
                        month = "September";
                        break;

                case "oct":
                        month = "October";
                        break;

                case "nov":
                        month = "November";
                        break;

                case "dec":
                        month = "December";
                        break;
            }
            document.querySelector(DOMstrings.seletedMonthTitle).textContent = month

        },
        monthBudgetManipulation: function(monthInc, monthExp, monthBudget) {
            document.querySelector(DOMstrings.monthIncContainer).textContent = monthInc.toFixed(2);
            document.querySelector(DOMstrings.monthExpContainer).textContent = monthExp.toFixed(2);
            document.querySelector(DOMstrings.monthBudgetContainer).textContent = monthBudget.toFixed(2);

        },
        monthPercentageManipulation: function(totPer, perItems) {
            
            if (totPer <= 100) {
                document.querySelector(DOMstrings.monthExpPerContainer).textContent = Math.round(totPer) + '%';

                for (var i = 0; i < perItems.length; i++) {
                    if (perItems[i].id !== null && perItems[i].per !== null) {
                        document.querySelector('#exp-' + perItems[i].id + ' .item__percentage').textContent = Math.round(perItems[i].per) + '%';  
                    }
                    
                }

            } else {
                document.querySelector(DOMstrings.monthExpPerContainer).textContent = '--%';
                for (var i = 0; i < perItems.length; i++) {
                    if (perItems[i].id !== null && perItems[i].per !== null) {
                        document.querySelector('#exp-' + perItems[i].id + ' .item__percentage').textContent = '--%';  
                    }
                    
                }
            }

        },
        monthTextColorManipulation: function(totPer) {

            document.querySelector(DOMstrings.monthTitleBox).classList.remove('btn-success');
            document.querySelector(DOMstrings.monthTitleBox).classList.remove('btn-primary');
            document.querySelector(DOMstrings.monthTitleBox).classList.remove('btn-warning');
            document.querySelector(DOMstrings.monthTitleBox).classList.remove('btn-danger');
            document.querySelector(DOMstrings.monthTitleBox).classList.remove('btn-dark');

            document.querySelector(DOMstrings.monthBudgetTitle).classList.remove('text-success');
            document.querySelector(DOMstrings.monthBudgetTitle).classList.remove('text-primary');
            document.querySelector(DOMstrings.monthBudgetTitle).classList.remove('text-warning');
            document.querySelector(DOMstrings.monthBudgetTitle).classList.remove('text-danger');
            document.querySelector(DOMstrings.monthBudgetContainer).classList.remove('text-success');
            document.querySelector(DOMstrings.monthBudgetContainer).classList.remove('text-primary');
            document.querySelector(DOMstrings.monthBudgetContainer).classList.remove('text-warning');
            document.querySelector(DOMstrings.monthBudgetContainer).classList.remove('text-danger');

            document.querySelector(DOMstrings.monthIncomeTitle).classList.remove('text-success');
            document.querySelector(DOMstrings.monthIncomeTitle).classList.remove('text-primary');
            document.querySelector(DOMstrings.monthIncomeTitle).classList.remove('text-warning');
            document.querySelector(DOMstrings.monthIncomeTitle).classList.remove('text-danger');
            document.querySelector(DOMstrings.monthIncContainer).classList.remove('text-success');
            document.querySelector(DOMstrings.monthIncContainer).classList.remove('text-primary');
            document.querySelector(DOMstrings.monthIncContainer).classList.remove('text-warning');
            document.querySelector(DOMstrings.monthIncContainer).classList.remove('text-danger');

            document.querySelector(DOMstrings.monthExpenseTitle).classList.remove('text-success');
            document.querySelector(DOMstrings.monthExpenseTitle).classList.remove('text-primary');
            document.querySelector(DOMstrings.monthExpenseTitle).classList.remove('text-warning');
            document.querySelector(DOMstrings.monthExpenseTitle).classList.remove('text-danger');
            document.querySelector(DOMstrings.monthExpContainer).classList.remove('text-success');
            document.querySelector(DOMstrings.monthExpContainer).classList.remove('text-primary');
            document.querySelector(DOMstrings.monthExpContainer).classList.remove('text-warning');
            document.querySelector(DOMstrings.monthExpContainer).classList.remove('text-danger');
            document.querySelector(DOMstrings.monthExpPerContainer).classList.remove('text-success');
            document.querySelector(DOMstrings.monthExpPerContainer).classList.remove('text-primary');
            document.querySelector(DOMstrings.monthExpPerContainer).classList.remove('text-warning');
            document.querySelector(DOMstrings.monthExpPerContainer).classList.remove('text-danger');



            if (totPer <= 20 && totPer >= 0) {
                document.querySelector(DOMstrings.monthTitleBox).classList.add('btn-success');
                document.querySelector(DOMstrings.monthBudgetTitle).classList.add('text-success');
                document.querySelector(DOMstrings.monthIncomeTitle).classList.add('text-success');
                document.querySelector(DOMstrings.monthExpenseTitle).classList.add('text-success');
                document.querySelector(DOMstrings.monthBudgetContainer).classList.add('text-success');
                document.querySelector(DOMstrings.monthIncContainer).classList.add('text-success');
                document.querySelector(DOMstrings.monthExpContainer).classList.add('text-success');
                document.querySelector(DOMstrings.monthExpPerContainer).classList.add('text-success');


            } else if (totPer <= 40 && totPer > 20) {
                document.querySelector(DOMstrings.monthTitleBox).classList.add('btn-primary');
                document.querySelector(DOMstrings.monthBudgetTitle).classList.add('text-primary');
                document.querySelector(DOMstrings.monthIncomeTitle).classList.add('text-primary');
                document.querySelector(DOMstrings.monthExpenseTitle).classList.add('text-primary');

                document.querySelector(DOMstrings.monthBudgetContainer).classList.add('text-primary');
                document.querySelector(DOMstrings.monthIncContainer).classList.add('text-primary');
                document.querySelector(DOMstrings.monthExpContainer).classList.add('text-primary');
                document.querySelector(DOMstrings.monthExpPerContainer).classList.add('text-primary');


            } else if (totPer > 40 && totPer <= 50) {
                document.querySelector(DOMstrings.monthTitleBox).classList.add('btn-warning');
                document.querySelector(DOMstrings.monthBudgetTitle).classList.add('text-warning');
                document.querySelector(DOMstrings.monthIncomeTitle).classList.add('text-warning');
                document.querySelector(DOMstrings.monthExpenseTitle).classList.add('text-warning');

                document.querySelector(DOMstrings.monthBudgetContainer).classList.add('text-warning');
                document.querySelector(DOMstrings.monthIncContainer).classList.add('text-warning');
                document.querySelector(DOMstrings.monthExpContainer).classList.add('text-warning');
                document.querySelector(DOMstrings.monthExpPerContainer).classList.add('text-warning');


            } else if (totPer > 50 && totPer <= 100) {
                document.querySelector(DOMstrings.monthTitleBox).classList.add('btn-danger');

                document.querySelector(DOMstrings.monthBudgetTitle).classList.add('text-danger');
                document.querySelector(DOMstrings.monthIncomeTitle).classList.add('text-danger');
                document.querySelector(DOMstrings.monthExpenseTitle).classList.add('text-danger');

                document.querySelector(DOMstrings.monthBudgetContainer).classList.add('text-danger');
                document.querySelector(DOMstrings.monthIncContainer).classList.add('text-danger');
                document.querySelector(DOMstrings.monthExpContainer).classList.add('text-danger');
                document.querySelector(DOMstrings.monthExpPerContainer).classList.add('text-danger');

            } else {
                document.querySelector(DOMstrings.monthTitleBox).classList.add('btn-dark');
            }
            /* 
           monthTitles

           remove:
           text-success
           text-primary
           text-warning
           text-danger

            */

        },
        yearTextColorManipulation: function(yearTotPer) {

            document.querySelector(DOMstrings.yearTitle).classList.remove('bg-success');
            document.querySelector(DOMstrings.yearTitle).classList.remove('bg-primary');
            document.querySelector(DOMstrings.yearTitle).classList.remove('bg-warning');
            document.querySelector(DOMstrings.yearTitle).classList.remove('bg-danger');
            document.querySelector(DOMstrings.yearTitle).classList.remove('bg-dark');
            document.querySelector(DOMstrings.yearBudgetTitle).classList.remove('text-success');
            document.querySelector(DOMstrings.yearBudgetTitle).classList.remove('text-primary');
            document.querySelector(DOMstrings.yearBudgetTitle).classList.remove('text-warning');
            document.querySelector(DOMstrings.yearBudgetTitle).classList.remove('text-danger');
            document.querySelector(DOMstrings.yearBudVal).classList.remove('text-success');
            document.querySelector(DOMstrings.yearBudVal).classList.remove('text-primary');
            document.querySelector(DOMstrings.yearBudVal).classList.remove('text-warning');
            document.querySelector(DOMstrings.yearBudVal).classList.remove('text-danger');
            document.querySelector(DOMstrings.yearIncomeTitle).classList.remove('text-success');
            document.querySelector(DOMstrings.yearIncomeTitle).classList.remove('text-primary');
            document.querySelector(DOMstrings.yearIncomeTitle).classList.remove('text-warning');
            document.querySelector(DOMstrings.yearIncomeTitle).classList.remove('text-danger');
            document.querySelector(DOMstrings.yearIncVal).classList.remove('text-success');
            document.querySelector(DOMstrings.yearIncVal).classList.remove('text-primary');
            document.querySelector(DOMstrings.yearIncVal).classList.remove('text-warning');
            document.querySelector(DOMstrings.yearIncVal).classList.remove('text-danger');
            document.querySelector(DOMstrings.yearExpenseTitle).classList.remove('text-success');
            document.querySelector(DOMstrings.yearExpenseTitle).classList.remove('text-primary');
            document.querySelector(DOMstrings.yearExpenseTitle).classList.remove('text-warning');
            document.querySelector(DOMstrings.yearExpenseTitle).classList.remove('text-danger');
            document.querySelector(DOMstrings.yearExpVal).classList.remove('text-success');
            document.querySelector(DOMstrings.yearExpVal).classList.remove('text-primary');
            document.querySelector(DOMstrings.yearExpVal).classList.remove('text-warning');
            document.querySelector(DOMstrings.yearExpVal).classList.remove('text-danger');

            document.querySelector(DOMstrings.persentageOfYear).classList.remove('text-success');
            document.querySelector(DOMstrings.persentageOfYear).classList.remove('text-primary');
            document.querySelector(DOMstrings.persentageOfYear).classList.remove('text-warning');
            document.querySelector(DOMstrings.persentageOfYear).classList.remove('text-danger');



            if (yearTotPer <= 20 && yearTotPer >= 0) {
                document.querySelector(DOMstrings.yearTitle).classList.add('bg-success');
                document.querySelector(DOMstrings.yearBudgetTitle).classList.add('text-success');
                document.querySelector(DOMstrings.yearIncomeTitle).classList.add('text-success');
                document.querySelector(DOMstrings.yearExpenseTitle).classList.add('text-success');
                document.querySelector(DOMstrings.yearBudVal).classList.add('text-success');
                document.querySelector(DOMstrings.yearIncVal).classList.add('text-success');
                document.querySelector(DOMstrings.yearExpVal).classList.add('text-success');
                document.querySelector(DOMstrings.persentageOfYear).classList.add('text-success');


            } else if (yearTotPer <= 40 && yearTotPer > 20) {
                document.querySelector(DOMstrings.yearTitle).classList.add('bg-primary');
                document.querySelector(DOMstrings.yearBudgetTitle).classList.add('text-primary');
                document.querySelector(DOMstrings.yearIncomeTitle).classList.add('text-primary');
                document.querySelector(DOMstrings.yearExpenseTitle).classList.add('text-primary');

                document.querySelector(DOMstrings.yearBudVal).classList.add('text-primary');
                document.querySelector(DOMstrings.yearIncVal).classList.add('text-primary');
                document.querySelector(DOMstrings.yearExpVal).classList.add('text-primary');
                document.querySelector(DOMstrings.persentageOfYear).classList.add('text-primary');


            } else if (yearTotPer > 40 && yearTotPer <= 50) {
                document.querySelector(DOMstrings.yearTitle).classList.add('bg-warning');
                document.querySelector(DOMstrings.yearBudgetTitle).classList.add('text-warning');
                document.querySelector(DOMstrings.yearIncomeTitle).classList.add('text-warning');
                document.querySelector(DOMstrings.yearExpenseTitle).classList.add('text-warning');

                document.querySelector(DOMstrings.yearBudVal).classList.add('text-warning');
                document.querySelector(DOMstrings.yearIncVal).classList.add('text-warning');
                document.querySelector(DOMstrings.yearExpVal).classList.add('text-warning');
                document.querySelector(DOMstrings.persentageOfYear).classList.add('text-warning');


            } else if (yearTotPer > 50 && yearTotPer <= 100) {
                document.querySelector(DOMstrings.yearTitle).classList.add('bg-danger');

                document.querySelector(DOMstrings.yearBudgetTitle).classList.add('text-danger');
                document.querySelector(DOMstrings.yearIncomeTitle).classList.add('text-danger');
                document.querySelector(DOMstrings.yearExpenseTitle).classList.add('text-danger');

                document.querySelector(DOMstrings.yearBudVal).classList.add('text-danger');
                document.querySelector(DOMstrings.yearIncVal).classList.add('text-danger');
                document.querySelector(DOMstrings.yearExpVal).classList.add('text-danger');
                document.querySelector(DOMstrings.persentageOfYear).classList.add('text-danger');

            } else {
                document.querySelector(DOMstrings.yearTitle).classList.add('bg-dark');
            }

        },
        yearBudgetManipulation: function(totInc, totExp, totBudget) {

            document.querySelector(DOMstrings.yearIncVal).textContent = totInc.toFixed(2);
            document.querySelector(DOMstrings.yearExpVal).textContent = totExp.toFixed(2);
            document.querySelector(DOMstrings.yearBudVal).textContent = totBudget.toFixed(2);

        },
        deleteItemList: function(type, id) {
            document.querySelector('#'+ type + '-' + id).remove();

        },
        deleteAllItemList: function() {

            var allIncList = document.querySelector(DOMstrings.incomeList);
            var allExpList = document.querySelector(DOMstrings.expenseList);

            while(allIncList.firstChild) {
                allIncList.removeChild(allIncList.lastChild);
            }

            while(allExpList.firstChild) {
                allExpList.removeChild(allExpList.lastChild);
            }

        },
        resetMonthBudget: function () {

            document.querySelector(DOMstrings.monthIncContainer).textContent = "--";
            document.querySelector(DOMstrings.monthExpContainer).textContent = "--";
            document.querySelector(DOMstrings.monthBudgetContainer).textContent = "--";
            document.querySelector(DOMstrings.monthExpPerContainer).textContent = "--%";


        },
        addAllLisingsBack: function(incomeLists, expenseLists) {

            for (var i = 0; i < incomeLists.length; i++) {
                this.addItemList("inc", incomeLists[i].id, incomeLists[i].description, incomeLists[i].value);
            }

            for (var k = 0; k <expenseLists.length; k++) {
                this.addItemList("exp", expenseLists[k].id, expenseLists[k].description, expenseLists[k].value);
            }
        },
        yearPercentageManipulation: function(yearPer) {

            if (yearPer <= 100) {
                document.querySelector(DOMstrings.persentageOfYear).textContent = Math.round(yearPer) + '%';

            } else {
                document.querySelector(DOMstrings.persentageOfYear).textContent = '--%';
            }

        },
        getDOMstrings: function() {
            return DOMstrings;
        },
        getMonth: function() {
            return document.querySelector(DOMstrings.monthSelector).value;
        },
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.typeSelect).value,
                description: document.querySelector(DOMstrings.descriptionInput).value,
                value: document.querySelector(DOMstrings.valueInput).value

            }
        },
        yearDate: function (year) {

            document.querySelector(DOMstrings.year).textContent = year;
        }
    }

})();
//^^^^^^^^^^ USER INTERFACE CONTROLER

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//***********APP CONTOLER */
var contoler = (function(BudgetControl, UIcontrol) {

    //get dom strings
    var dom = UIcontrol.getDOMstrings();
    var month;

    function setEventListeners() {

        //submit month clicked
        document.querySelector(dom.monthSubmitButton).addEventListener('click', handleMonthSubmit);

        //add item clicked
        document.querySelector(dom.addItem).addEventListener('click', handleAddItem);
        //ENTER pressed 
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                handleAddItem();
            }
        })

        //description box clicked
        document.querySelector(dom.descriptionInput).addEventListener('click', function() {
            document.querySelector(dom.descriptionInput).value = '';
        });

        //delete button clicked
        document.querySelector(dom.monthBudgetPage).addEventListener('click',function(event) {
            handleDeleteItem(event);
        });

        //done button clicked
        document.querySelector(dom.doneBtn).addEventListener('click', handleDone);
        
    }
    function handleMonthSubmit() {

        //delete all the item lists from UI (NOT FROM BudgetControl)
        UIcontrol.deleteAllItemList();

        //set type value to "inc"
        document.querySelector(dom.typeSelect).value = "inc";

        //reset the monthly income and expense boxes
        UIcontrol.resetMonthBudget();
        
        //get month input
        month = UIcontrol.getMonth();

        //make the month page visible AND display the name of the month
        UIcontrol.monthPageVisibility("visible", month);

        // there might be list for that moth, add them back because when we change moths, we delete listings from UI

        //get income data for that month (array)
        var listings = BudgetControl.getMonthData(month);
        var incomeListings = listings.incArr;
        //get expense data for that month (array)
        var expenseListings = listings.expArr;

        //send those listing arrays to UI and add them all to the UI
        UIcontrol.addAllLisingsBack(incomeListings, expenseListings);

        //make month budget visible in UI --> monthBudgetUpdate();
        monthBudgetUpdate(month);

        // make month percentage visible in UI --> monthUpdatePercentage();
        monthUpdatePercentage(month);


    }
    function handleAddItem() {
        //get input
        var input = UIcontrol.getInput();

        if (input.value > 0) {
            //reset the input box and value box and put the focus on the description box
            document.querySelector(dom.descriptionInput).value = '';
            document.querySelector(dom.valueInput).value = '';
            document.querySelector(dom.descriptionInput).focus();

            
            //add this to the budget data
            var item = BudgetControl.addItem(month, input.type, input.description, input.value);
        
            
            // add this item to UI
            UIcontrol.addItemList(input.type, item.id, item.description, item.value);

            //update BUDGET and UI contoler "monthBudgetUpdate();"
            monthBudgetUpdate(month);
            
            //update BUDGET and UI persentage "monthUpdatePercentage();"
            monthUpdatePercentage(month);
                        


            //update BUDGET and UI contoler for the year "yearBudgetUpdate();"
            yearBudgetUpdate();

            //update year percentage for BUDGET and UI controler 
            yearPersentageUpdate();
        }
        
    }

    function handleDeleteItem(event) {
        var itemID = event.target.parentElement.parentElement.id;

        if (itemID) {       //itemID will be something like "exp-0"
            var id, type, splitItem;
            splitItem = itemID.split('-'); //splitItem will be somehting like ["inc", "1"]
            type = splitItem[0];            //type will be either "inc" OR "exp"
            id = splitItem[1];              //id will be a number

            if (type === 'inc' || type === 'exp') {


                //delete item from budget data
                //send --> month, type, id
                BudgetControl.deleteItem(month, type, id);

                //monthBudgetUpdate();
                monthBudgetUpdate(month);

                //monthUpdatePercentage();
                monthUpdatePercentage(month);

                // delete item from UI
                UIcontrol.deleteItemList(type, id); //--> this comes after monthUpdatePercentage(); because a bug occurs otherwise

                
                //yearBudgetUpdate();
                yearBudgetUpdate();

                //yearPersentageUpdate();
                yearPersentageUpdate();
            }
        }
    }

    function monthBudgetUpdate(currentMonth) {

        //do budget calculation
        var calculatedData = BudgetControl.monthBudgetCalculation(currentMonth);
            //return:
                //1. total income, expense and budget for that month

        // update UI budget output
        UIcontrol.monthBudgetManipulation(calculatedData.monthInc, calculatedData.monthExp, calculatedData.monthTot)

    }

    function monthUpdatePercentage(currentMonth) {
        
        //do percentage calculation
        var perData = BudgetControl.monthPercentageCalculation(currentMonth);
        //return:
            //tot percentage
            //a percentage obj that has the id and percentage nbr
        
        var totalPercentage = perData.monthTotPer;
        var percentages = perData.itemsPer; //array that has percentage objects {id: ##, per:##}
        
        //update UI percentage
        UIcontrol.monthPercentageManipulation(totalPercentage, percentages);

        //change the color of text depending on the value of total expense percentages (totalPercentage)
        UIcontrol.monthTextColorManipulation(totalPercentage);

    }

    function yearBudgetUpdate() {

        //do budget year calculation
        var yearBudData = BudgetControl.yearBudgetCalculation();

        //update the year budget UI
        UIcontrol.yearBudgetManipulation(yearBudData.yearTotInc, yearBudData.yearTotExp, yearBudData.yearTotBud)

    }

    function yearPersentageUpdate() {

        //do percentage calculation 
        var yearExpPerVal = BudgetControl.yearPercentageCalculation();

        //update UI percentage 
        UIcontrol.yearPercentageManipulation(yearExpPerVal);

         //change the color of text depending on the value of total expense percentages (totalPercentage)
         UIcontrol.yearTextColorManipulation(yearExpPerVal);

    }
    function handleDone() {

        //If the expense percentage is higher than 50%, alert a warning messege
        var financialStability = BudgetControl.getData();
        if (financialStability[month].budget.totalItems.perObj.totPer >= 50 || financialStability.per >= 50) {
            alert("Your expense persentage is above national avarage. For finacial planing, go to www.IhaveShoppingAddiction.com ");
        }

        //delete all the item lists from UI (NOT FROM BudgetControl)
        UIcontrol.deleteAllItemList();

        //reset the monthly income and expense boxes
        UIcontrol.resetMonthBudget();


        //make the page invisible --> monthPageVisibility();
        UIcontrol.monthPageVisibility("hidden");

        //set the Month selector value to ""
        document.querySelector(dom.monthSelector).value = "";
        document.querySelector(dom.typeSelect).value = "inc";
        document.querySelector(dom.monthSelector).focus();

    }


   




    return {
        
        init: function() {

            setEventListeners();
            UIcontrol.monthPageVisibility("hidden");
            window.scrollTo(0, 0);

            var date = new Date();
            var year = date.getFullYear();

            UIcontrol.yearDate(year);
            //set year
            //budget 0 for all
            //hide month html

            
        }

    }

})(BudgetDataCtr, UIctr);

contoler.init();