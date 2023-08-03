/*
* RSTP - Minimum Financial Support Calculator
*
*/


//

var param_tab;
var param_lang;


// globals:

var data_lookup = null;
var child_index = null;

var calc_array = null;

var field__child_age_list = null;

var field__number_of_children__prev = "";

var subtotal_sponsorship_cost__onetime = 0;
var subtotal_sponsorship_cost__monthly = 0;

var calc_array__housing_orig = 0;

var age_of_majority_top_up = 0;

var calc_totals;



if (localStorage.getItem('calc_totals') !== null) 
{
    console.log(`calc_totals exists`);

    calc_totals = JSON.parse(localStorage.calc_totals);
} 
else 
{
    console.log(`calc_totals not found`);





var calc_totals = [
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }

    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }

    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }             
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }             
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }                
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }               
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }               
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }          
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }                
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }            
    },
    { 
        total_1: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_2: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_3: {
            startup: "",
            monthly: "",
            annually: ""
        },
        total_4: {
            startup: "",
            monthly: "",
            annually: ""
        },
        section_1_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_7: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_1_line_8: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_5: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_2_line_6: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_1: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_2: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_3: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        section_3_line_4: {
            onetime: "",
            monthly: "",
            inkind: "",
            onetime_adjusted: "",
            monthly_adjusted: ""
        },
        params: {
            field__province: "",
            field__city: "",
            field__family_size: "",
            field__family_composition: "",
            field__number_of_children: "",
            field__is_pregnant: "",
            field__has_dietary_needs: "",
            field__total_monthly_income: "",
            item_date_month: "",
            item_date_day: "",
            item_date_year: "",
            field__child_age_1: "",
            field__child_age_2: "",
            field__child_age_3: "",
            field__child_age_4: "",
            field__child_age_5: "",
            field__child_age_6: "",
            field__child_age_7: "",
            field__child_age_8: "",
            field__child_age_9: "",
            field__child_age_10: ""
        },
        monthly_breakdown_1: {
            name: "",
            value: ""
        },
        monthly_breakdown_2: {
            name: "",
            value: ""
        },
        monthly_breakdown_3: {
            name: "",
            value: ""
        },
        monthly_breakdown_4: {
            name: "",
            value: ""
        },
        monthly_breakdown_5: {
            name: "",
            value: ""
        },
        monthly_breakdown_6: {
            name: "",
            value: ""
        },
        monthly_breakdown_7: {
            name: "",
            value: ""
        },
        monthly_breakdown_8: {
            name: "",
            value: ""
        },
        monthly_breakdown_9: {
            name: "",
            value: ""
        },
        monthly_breakdown_10: {
            name: "",
            value: ""
        },
        monthly_breakdown_11: {
            name: "",
            value: ""
        },
        monthly_breakdown_12: {
            name: "",
            value: ""
        },
        monthly_breakdown_13: {
            name: "",
            value: ""
        }              
    }


];   

}




var languageCode;


// langs:

var translations = {
    "Missing fields:": "Champs manquants :",
    "Composition Of Adults": "Situation des adultes",
    "Family Size": "Taille de la famille",
    "Over age of majority": "A atteint l’âge de la majorité",
    "For children over the age for majority, apply separately using the button at the top for 'Add Over-Age Dedpenant Child'": "Un calcul distinct doit être effectué pour les enfants ayant atteint l’âge de la majorité. Cet enfant ne sera pas pris en compte dans le présent calcul.",
    "The child is over the age of majority, please open a separate tab.": "Cet enfant a atteint l’âge de la majorité; veuillez ajouter un nouvel onglet.",
    "": "",
    "": ""
};

//    "Children over the majority age, need to be applied separately. Will not be part of this calculation.": "Un calcul distinct doit être effectué pour les enfants ayant atteint l’âge de la majorité. Cet enfant ne sera pas pris en compte dans le présent calcul.",


function ___e(text_entry)
{
    var return_value = text_entry;

    if (languageCode == "fr")
        return_value = translations[text_entry];
    else
        return_value = text_entry;

    console.log(return_value);
    return return_value;
}

//___e("YEAR")


document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode

    console.log(e.keyCode);

    param_mode = getUrlParameter('mode');

    if ( (e.keyCode == 65) || (e.keyCode == 97) ) // key: a
    {
        $("#calc-results-message").toggle();     
        $(".show-multi-tab-info").toggle();     
    }

    if (param_mode == 'childtab')
    {
        if ( (e.keyCode == 65) || (e.keyCode == 97) ) // key: a
        {   
            $(".hide-for-childtab").toggle();     
        }
    }

};


function toggle_top_results()
{
    //$("#calc-results-message").toggle(); 
    $(".show-multi-tab-info").toggle();
}

// init page:

$(document).ready(function() {

    // if (is_deployment_app()) 
    // {
    //     document.addEventListener("deviceready", onDeviceReady, false);
    // } 
    // else 
    {
        onDeviceReady();
    }

});

function reset_selectors() 
{
    console.log("reset_selectors");
    
    // try { $('#field__province').select2(); } catch(err) { console.log(err) } 
    // try { $('#field__province').select2('destroy'); } catch(err) { console.log(err) } 

    // try { $('#field__city__on').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__city__al').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__city__bc').select2('destroy'); } catch(err) { console.log(err) } 

    // try { $('#field__city__al').select2('destroy'); } catch(err) { console.log(err) }        
    // try { $('#field__city__mn').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__city__nb').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__city__nl').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__city__ns').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__city__pe').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__city__sa').select2('destroy'); } catch(err) { console.log(err) } 

    // try { $('#field__family_size').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__family_composition').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__number_of_children').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__is_pregnant').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__number_of_seniors').select2('destroy'); } catch(err) { console.log(err) } 
    // try { $('#field__number_of_disabled').select2('destroy'); } catch(err) { console.log(err) } 
}

function onDeviceReady() 
{ 

    param_lang = getUrlParameter('lang');
    console.log("param_lang:" + param_lang); 
    languageCode = param_lang;

    param_tab = getUrlParameter('tab');   
    if (is_null(param_tab)) param_tab = 1;

/*
    // fix dropdowns that uses the select2 library:
    setTimeout(function(){

        reset_selectors();

        // $('#field__province').select2();
        // $('#field__province').select2('destroy');

        // $('#field__city__on').select2('destroy');
        // $('#field__city__al').select2('destroy');
        // $('#field__city__bc').select2('destroy');

        // try { $('#field__city__al').select2('destroy'); } catch(err) { console.log(err) }        
        // try { $('#field__city__mn').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__city__nb').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__city__nl').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__city__ns').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__city__pe').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__city__sa').select2('destroy'); } catch(err) { console.log(err) } 

        // try { $('#field__family_size').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__family_composition').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__number_of_children').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__is_pregnant').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__number_of_seniors').select2('destroy'); } catch(err) { console.log(err) } 
        // try { $('#field__number_of_disabled').select2('destroy'); } catch(err) { console.log(err) } 

    }, 1900);

    setTimeout(function(){

        reset_selectors();

    }, 5000);
*/

    // fix display for numeric fields:
    document.getElementById("field__total_monthly_income").onblur = function (){    

        //number-format the user input

        value_adjusted = parseFloat(this.value.replace(/,/g, ""))
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // if (languageCode == "fr")
        // {
        //     value_adjusted = parseFloat(this.value.replace(/,/g, ""))
        //                     .toFixed(2)
        //                     .toString()
        //                     .replace(/\B(?=(\d{3})+(?!\d))/g, " ");            
        // }

        //console.log(this.value);
        if (is_null(value_adjusted)) value_adjusted = "0";
        this.value = value_adjusted;

        //set the numeric value to a number input
        //document.getElementById("number").value = this.value.replace(/,/g, "")
    }


    // init array:

    calc_array = new Array(25);

    for (var i = 0; i < calc_array.length; i++) {
      calc_array[i] = new Array(6);
    }

    //calc_array[1][1] = "aaaa";

    console.log("calc_array: ", calc_array);


/*
    var file = "data/sine.csv";

    console.log("1");

    $.get(file, function(csv) {

        console.log("2", csv);

        var data = $.csv.toArrays(csv, {
          onParseValue: $.csv.hooks.castToScalar
        });

        console.log(data);

        // plot(data);
        // $('#result').empty();
        // $('#result').html(JSON.stringify(data, null, 2));
    });
*/

// $.ajax({
//     url: "pathto/filename.csv",
//     async: false,
//     success: function (csvd) {
//         data = $.csv.toArrays(csvd);
//     },
//     dataType: "text",
//     complete: function () {
//         // call a function on complete 
//     }
// });


}


// switch modes:

function show_form()
{
    $("#calc-form").show();
    $("#calc-results").hide();
    $('html,body').scrollTop(0);
}

function show_results()
{
    perform_calc();

    // $("#calc-form").hide();
    // $("#calc-results").show();
    // $('html,body').scrollTop(0);
}

function clear_all()
{

    window.parent.postMessage('clear_all','*');
    //window.location.reload();

/*    
    //perform_calc();

    $("#field__city__").val("");

    $("#field__family_size").val("");
    $("#field__family_composition").val("");
    $("#field__number_of_children").val("");

    $("#field__total_monthly_income").val("");

    $("#field__is_pregnant").val("");
    $("#field__number_of_disabled").val("");
    $("#field__number_of_seniors").val("");


    $("#field__child_age_1").val("");
    $("#field__child_age_2").val("");
    $("#field__child_age_3").val("");
    $("#field__child_age_4").val("");
    $("#field__child_age_5").val("");
    $("#field__child_age_6").val("");
    $("#field__child_age_7").val("");
    $("#field__child_age_8").val("");
    $("#field__child_age_9").val("");
    $("#field__child_age_10").val("");


    $('html,body').scrollTop(0);
*/    
}


// this runs when the user click on "calculate", and takes you to the resukts page:
function perform_calc()
{
    var log_string = "";
    var user_message = "";

    log_string += "<br>USER INPUTS: " + "<br>";

    // get inputs:

    field__province = $("#field__province").val();
    field__city = $("#field__city__" + field__province).val();

    field__family_size = $("#field__family_size").val();
    field__family_composition = $("#field__family_composition").val();

    if (field__family_composition == "single-under22") 
    {
        field__family_composition = "single";
        field__family_composition__single = "single-under22";
    }

    field__number_of_children = $("#field__number_of_children").val();

    field__total_monthly_income = $("#field__total_monthly_income").val();
    field__total_monthly_income = field__total_monthly_income.replace(/\,/g, "");
    if (is_null(field__total_monthly_income)) field__total_monthly_income = 0;

    field__has_dietary_needs = $("#field__has_dietary_needs").val();
    field__is_live_with_parent = $("#field__is_live_with_parent").val();
    field__is_pregnant = $("#field__is_pregnant").val();
    field__number_of_disabled = $("#field__number_of_disabled").val();
    field__number_of_seniors = $("#field__number_of_seniors").val();

    field__item_date_day = $("#item_date_day").val();
    field__item_date_month = $("#item_date_month").val();
    field__item_date_year = $("#item_date_year").val();
   
    field__child_age_list = [];
    field__child_age_list[1] = $("#field__child_age_1").val();
    field__child_age_list[2] = $("#field__child_age_2").val();
    field__child_age_list[3] = $("#field__child_age_3").val();
    field__child_age_list[4] = $("#field__child_age_4").val();
    field__child_age_list[5] = $("#field__child_age_5").val();
    field__child_age_list[6] = $("#field__child_age_6").val();
    field__child_age_list[7] = $("#field__child_age_7").val();
    field__child_age_list[8] = $("#field__child_age_8").val();
    field__child_age_list[9] = $("#field__child_age_9").val();
    field__child_age_list[10] = $("#field__child_age_10").val();

    // clear rest of kids:
    for (iiiii=(field__number_of_children+1); iiiii<=10; iiiii++)
    {
        field__child_age_list[iiiii] = "";
        $("#field__child_age_" + iiiii).val();
    }


    // treat hamilton the same as toronto:
    if (field__city == "hamilton") field__city = "toronto";
        

    // show/hide deisbility question based on province:

    if ( (field__province == "bc") || (field__province == "sa") || (field__province == "mn") )
    {
        $("#section-intake-disability").show();
    }
    else
    {
        $("#section-intake-disability").hide();
    }

    // find children above age of majority:

    var age_of_majority = get_age_of_majority(field__province);    
    var has_child_over_age = false;

    console.log("checking age_of_majority", $("#field__child_age_1").val(), "__", age_of_majority, "__" );

    for (i__child_age_check = 1; i__child_age_check <= 10; i__child_age_check++)
    {
        if (parseFloat(field__child_age_list[i__child_age_check]) >= age_of_majority) 
        {
            log_string += "child over " + age_of_majority + "(" + field__child_age_list[i__child_age_check] + ")<br>";       
            user_message += "One child is " + field__child_age_list[i__child_age_check] + ", not included because over " + age_of_majority + " - should use the calculator separately for this person<br>";       
            field__number_of_children--;
            field__child_age_list[i__child_age_check] = "";
            has_child_over_age = true;   
        }
        else
        {

        }        
    }



    //// find people in specific ranges:

    has_child_over_4 = false;
    num_of_kids_over_4 = 0;
    num_of_kids_under_4 = 0;
    has_kids_under_age_of_majority = 0;
    num_of_kids_between_12_and_17 = 0;
    num_of_kids_over_18__age_of_majority = 0;
    num_of_newborn_kids = 0;
    num_of_adult_parents = 0;
    num_of_senior_parents = 0;
    num_of_non_senior_parents = 0;
    extra_tarnsportation_rate_per_adult = 0;
    extra_tarnsportation_rate_per_senior = 0;
    age_of_majority_top_up = 0;


    // find num_of_adult_parents:

    if (field__family_composition == "single")
    {
        num_of_adult_parents = 1;
        num_of_non_senior_parents = 1;
        num_of_senior_parents = 0;
    }
    else if (field__family_composition == "senior")
    {
        num_of_adult_parents = 1;
        num_of_non_senior_parents = 0;
        num_of_senior_parents = 1;        
    }
    else if (field__family_composition == "couple")
    {
        num_of_adult_parents = 2;
        num_of_non_senior_parents = 2;
        num_of_senior_parents = 0;        
    }
    else if (field__family_composition == "couple1senior")
    {
        num_of_adult_parents = 2;
        num_of_non_senior_parents = 1;
        num_of_senior_parents = 1;        
    }
    else if (field__family_composition == "2seniors")
    {
        num_of_adult_parents = 2;
        num_of_non_senior_parents = 0;
        num_of_senior_parents = 2;        
    } 


    // find children in ranges:

    for (iiii=1; iiii<field__child_age_list.length; iiii++)
    {       
        if ( ( parseFloat(field__child_age_list[iiii]) == NaN ) || ( field__child_age_list[iiii] == "" ) )
        {

        }               
        else
        {
            if ( parseFloat(field__child_age_list[iiii]) >= 4 ) 
            {
                has_child_over_4 = true;
                num_of_kids_over_4++;
            }
            else 
            {
                num_of_kids_under_4++;
            }

            if ( ( parseFloat(field__child_age_list[iiii]) >= 12 ) && ( parseFloat(field__child_age_list[iiii]) <= 17 ) )
            {
                num_of_kids_between_12_and_17++;
            }

            if ( ( parseFloat(field__child_age_list[iiii]) >= 18 ) && ( parseFloat(field__child_age_list[iiii]) < age_of_majority ) )
            {
                num_of_kids_over_18__age_of_majority++;
            }    

            if ( parseFloat(field__child_age_list[iiii]) < age_of_majority )
            {
                has_kids_under_age_of_majority = true;
            }

            if ( parseFloat(field__child_age_list[iiii]) == 0 ) 
            {
                num_of_newborn_kids++;
            }            
                    
        }        
        //console.log("field__child_age_list", iiii, field__child_age_list[iiii], has_child_over_4);            
    }    

    log_string += "kids under 4: " + num_of_kids_under_4 + "<br>";    
    log_string += "kids 4 and up: " + num_of_kids_over_4 + "<br>"; 
    log_string += "total number of kids: " + field__number_of_children + "<br>";

    if (num_of_kids_under_4 > 0)
        user_message += num_of_kids_under_4 + " kid(s) are under school age (under 4), so not included in school allowence.<br>";  
     
    console.log("field__child_age_list:", field__child_age_list);



    
    
    // validate inputs:

    var error_message = "";

    if ( (is_null(field__family_size)) || (field__family_size == "0") ) error_message += " - " + ___e("Family Size") + " ";
    if (is_null(field__family_composition)) error_message += " - " + ___e("Composition Of Adults") + " ";

    if (not_null(error_message)) 
    {
        var error_message_intro = ___e("Missing fields:");
        log_string += error_message_intro + " " + error_message + "<br>"; 
        alert(error_message_intro + " " + error_message);
    }
    else
    {
        // print summary:
        var short_details = "Province:" + field__province + " City:" + field__city + " Family:" + field__family_composition + " Number of children:" + field__number_of_children + " Income:" + field__total_monthly_income + " Pregnant:" +  field__is_pregnant + " Disabled:" + field__number_of_disabled + " Child ages:" + field__child_age_list[1] + " " + field__child_age_list[2] + " " + field__child_age_list[3] + " " + field__child_age_list[4] + " " + field__child_age_list[5] + " " + field__child_age_list[6] + " " + field__child_age_list[7] + " " + field__child_age_list[8] + " " + field__child_age_list[9] + " " + field__child_age_list[10];

        log_string += short_details + "<br>"; 

        $("#result-selections-details-short").html(short_details);
        console.log(short_details);


        // get data:

        file_name = "../../data/" + field__province + "_" + field__city + "_" + field__family_composition + ".csv";
        console.log("input file:: ", file_name);
        log_string += "<br>DATA FILE: " + file_name + "<br>"; 

        $.get(file_name, function(csv) {

            console.log("data file: ", csv);
            //log_string += "data file: " + "<br>";// + JSON.stringify(csv) + "<br>"; 

            data_lookup = $.csv.toArrays(csv, {
              onParseValue: $.csv.hooks.castToScalar
            });

            for (ii=0; ii<data_lookup.length; ii++)
            {
                //log_string += JSON.stringify(data_lookup[ii]) + "<br>";
            }


            // find child_index - select which line to the data file to use:

            child_index = parseInt(field__number_of_children)+1;
            child_index_4andup = parseInt(num_of_kids_over_4)+1;
            console.log("child_index for ", field__number_of_children, " children");
            console.log("initial child_index: ", child_index, " child_index_4andup: ", child_index_4andup);

            for (ii=0; ii<data_lookup.length; ii++)
            {
                if (string_starts_with(data_lookup[ii]['0'], field__number_of_children + "_"))
                {                
                    log_string += "candidate data: " + shorten_string( JSON.stringify(data_lookup[ii]) ) + "<br>";
                    
                    // get conditions:

                    var numberPattern = /\d+/g;
                    var child_index_values = ( String(data_lookup[ii]['0']) ).match( numberPattern );  
                    var child_condition_1 = {
                            "num_of_children": 0,
                            "child_age_min": 0,
                            "child_age_max": 0,
                            "num_of_children__actual": 0
                        };
                    var child_condition_2 = {
                            "num_of_children": 0,
                            "child_age_min": 0,
                            "child_age_max": 0,
                            "num_of_children__actual": 0
                        };                         
                    var child_condition_3 = {
                            "num_of_children": 0,
                            "child_age_min": 0,
                            "child_age_max": 0,
                            "num_of_children__actual": 0
                        };

                    if (child_index_values.length > 1)
                    {
                        child_condition_1 = {
                            "num_of_children": child_index_values[1],
                            "child_age_min": child_index_values[2],
                            "child_age_max": child_index_values[3],
                            "num_of_children__actual": 0
                        };
                    }
                    else
                    {
                        child_index = ii;
                    }

                    if (child_index_values.length > 4)
                        child_condition_2 = {
                            "num_of_children": child_index_values[4],
                            "child_age_min": child_index_values[5],
                            "child_age_max": child_index_values[6],
                            "num_of_children__actual": 0
                        };
                    else
                        child_condition_2["condition_passed"] = true;

                    if (child_index_values.length > 7)
                        child_condition_3 = {
                            "num_of_children": child_index_values[7],
                            "child_age_min": child_index_values[8],
                            "child_age_max": child_index_values[9],
                            "num_of_children__actual": 0
                        };
                     else
                        child_condition_3["condition_passed"] = true;

                    console.log("child_index", data_lookup[ii]['0'], child_index_values);
                    console.log("child_conditions", child_condition_1, child_condition_2, child_condition_3);
                    console.log("field__child_age_list", field__child_age_list);

                    for (iii=1; iii<field__child_age_list.length; iii++)
                    {                        
                        console.log("field__child_age_list", iii, field__child_age_list[iii]);

                        if ( ( parseFloat(child_condition_1["child_age_min"]) <= parseFloat(field__child_age_list[iii]) ) &&
                             ( parseFloat(child_condition_1["child_age_max"]) >= parseFloat(field__child_age_list[iii]) )  )
                        {
                            child_condition_1["num_of_children__actual"]++;
                            console.log("found!!! (" + child_condition_1["child_age_min"] + " " + child_condition_1["child_age_max"] + ")");
                        }

                        if ( ( parseFloat(child_condition_2["child_age_min"]) <= parseFloat(field__child_age_list[iii]) ) &&
                             ( parseFloat(child_condition_2["child_age_max"]) >= parseFloat(field__child_age_list[iii]) )  )
                        {
                            child_condition_2["num_of_children__actual"]++;
                            console.log("found!!! (" + child_condition_2["child_age_min"] + " " + child_condition_2["child_age_max"] + ")");
                        } 

                        if ( ( parseFloat(child_condition_3["child_age_min"]) <= parseFloat(field__child_age_list[iii]) ) &&
                             ( parseFloat(child_condition_3["child_age_max"]) >= parseFloat(field__child_age_list[iii]) )  )
                        {
                            child_condition_3["num_of_children__actual"]++;
                            console.log("found!!! (" + child_condition_3["child_age_min"] + " " + child_condition_3["child_age_max"] + ")");
                        }                         
                    }

                    console.log("child_conditions", child_condition_1, child_condition_2, child_condition_3);   

                    if (child_condition_1["num_of_children__actual"] == child_condition_1["num_of_children"]) child_condition_1["condition_passed"] = true;      
                    if (child_condition_2["num_of_children__actual"] == child_condition_2["num_of_children"]) child_condition_2["condition_passed"] = true;  
                    if (child_condition_3["num_of_children__actual"] == child_condition_3["num_of_children"]) child_condition_3["condition_passed"] = true; 

                    if (    (child_condition_1["condition_passed"] == true) && 
                            (child_condition_2["condition_passed"] == true) &&
                            (child_condition_3["condition_passed"] == true)
                        )
                    {
                        console.log("child_conditions", "selected", child_condition_1, child_condition_2, child_condition_3);
                        child_index = ii;

                        log_string += " . . . | child_condition_1: " + JSON.stringify(child_condition_1)  + "<br>";
                        log_string += " . . . | child_condition_2: " + JSON.stringify(child_condition_2)  + "<br>";
                        log_string += " . . . | child_condition_3: " + JSON.stringify(child_condition_3)  + "<br>";
                    }                               
                }            
            }


            // repeat for only kids 4 and up (need to refactor this..)

            if (num_of_kids_over_4 != field__number_of_children)
            {

            log_string += "<br>for kids 4 and over: <br>";
            console.log("looking for values for kids 4 and over ", num_of_kids_over_4, field__number_of_children);

            for (ii=0; ii<data_lookup.length; ii++)
            {
                if (string_starts_with(data_lookup[ii]['0'], num_of_kids_over_4 + "_"))
                {                
                    log_string += "candidate data: " + shorten_string( JSON.stringify(data_lookup[ii]) ) + "<br>";
                    
                    // get conditions:

                    var numberPattern = /\d+/g;
                    var child_index_values = ( String(data_lookup[ii]['0']) ).match( numberPattern );  
                    var child_condition_1 = {
                            "num_of_children": 0,
                            "child_age_min": 0,
                            "child_age_max": 0,
                            "num_of_children__actual": 0
                        };
                    var child_condition_2 = {
                            "num_of_children": 0,
                            "child_age_min": 0,
                            "child_age_max": 0,
                            "num_of_children__actual": 0
                        };                         
                    var child_condition_3 = {
                            "num_of_children": 0,
                            "child_age_min": 0,
                            "child_age_max": 0,
                            "num_of_children__actual": 0
                        };

                    if (child_index_values.length > 1)
                    {
                        child_condition_1 = {
                            "num_of_children": child_index_values[1],
                            "child_age_min": child_index_values[2],
                            "child_age_max": child_index_values[3],
                            "num_of_children__actual": 0
                        }
                    }
                    else
                    {
                        child_index = ii;
                    }

                    if (child_index_values.length > 4)
                        child_condition_2 = {
                            "num_of_children": child_index_values[4],
                            "child_age_min": child_index_values[5],
                            "child_age_max": child_index_values[6],
                            "num_of_children__actual": 0
                        };
                    else
                        child_condition_2["condition_passed"] = true;                        

                    if (child_index_values.length > 7)
                        child_condition_3 = {
                            "num_of_children": child_index_values[7],
                            "child_age_min": child_index_values[8],
                            "child_age_max": child_index_values[9],
                            "num_of_children__actual": 0
                        };
                    else
                        child_condition_3["condition_passed"] = true;                        

                    console.log("child_index_4andup", data_lookup[ii]['0'], child_index_values, child_condition_1, child_condition_2);

                    for (iii=1; iii<field__child_age_list.length; iii++)
                    {                        
                        console.log("field__child_age_list", iii, field__child_age_list[iii]);

                        if (parseFloat(field__child_age_list[iii]) >= 4)
                        {
                            if ( ( parseFloat(child_condition_1["child_age_min"]) <= parseFloat(field__child_age_list[iii]) ) &&
                                 ( parseFloat(child_condition_1["child_age_max"]) >= parseFloat(field__child_age_list[iii]) )  )
                            {
                                child_condition_1["num_of_children__actual"]++;
                                console.log("found!!! (" + child_condition_1["child_age_min"] + " " + child_condition_1["child_age_max"] + ")");
                            }

                            if ( ( parseFloat(child_condition_2["child_age_min"]) <= parseFloat(field__child_age_list[iii]) ) &&
                                 ( parseFloat(child_condition_2["child_age_max"]) >= parseFloat(field__child_age_list[iii]) )  )
                            {
                                child_condition_2["num_of_children__actual"]++;
                                console.log("found!!! (" + child_condition_2["child_age_min"] + " " + child_condition_2["child_age_max"] + ")");
                            } 

                            if ( ( parseFloat(child_condition_3["child_age_min"]) <= parseFloat(field__child_age_list[iii]) ) &&
                                 ( parseFloat(child_condition_3["child_age_max"]) >= parseFloat(field__child_age_list[iii]) )  )
                            {
                                child_condition_3["num_of_children__actual"]++;
                                console.log("found!!! (" + child_condition_3["child_age_min"] + " " + child_condition_3["child_age_max"] + ")");
                            }                     
                        }                        
                    }  

                    console.log("child_conditions", child_condition_1, child_condition_2, child_condition_3);   

                    if (child_condition_1["num_of_children__actual"] == child_condition_1["num_of_children"]) child_condition_1["condition_passed"] = true;      
                    if (child_condition_2["num_of_children__actual"] == child_condition_2["num_of_children"]) child_condition_2["condition_passed"] = true;  
                    if (child_condition_3["num_of_children__actual"] == child_condition_3["num_of_children"]) child_condition_3["condition_passed"] = true; 

                    if (    (child_condition_1["condition_passed"] == true) && 
                            (child_condition_2["condition_passed"] == true) &&
                            (child_condition_3["condition_passed"] == true)
                        )
                    {
                        console.log("child_conditions", "selected", child_condition_1, child_condition_2, child_condition_3);
                        child_index_4andup = ii;

                        log_string += " . . . | child_condition_1: " + JSON.stringify(child_condition_1)  + "<br>";
                        log_string += " . . . | child_condition_2: " + JSON.stringify(child_condition_2)  + "<br>";
                        log_string += " . . . | child_condition_3: " + JSON.stringify(child_condition_3)  + "<br>";
                    }  

                }            
            }
            }
            else
            {
                child_index_4andup = child_index;
            }


          


            //

            log_string += "<br>SELECTED DATA: " + "<br>";
            log_string += "overall using this line: " + data_lookup[child_index] + "<br>";
            log_string += "for school, using this line: " + data_lookup[child_index_4andup] + "<br>";

            log_string += "initial child_index: ", child_index, " child_index_4andup: ", child_index_4andup;

            console.log("Using this data:", "index:", child_index, "data line:", data_lookup[child_index], "full data:", data_lookup);

            // have no school startup cost if there is no kid at least 4 years old:
            // if (has_child_over_4 == false)
            // {
            //     data_lookup[child_index]['8'] = 0; 
            //     console.log("Removing school startup cost since no child is at least 4 years old.");           
            // }



            //// adjust values:

            log_string += "<br>ADJUSTING DATA: " + "<br>";

            if (field__province == 'on')
            {
                // transportation:
                extra_tarnsportation_rate_per_adult = 0; 
                if (field__city == "hamilton") { extra_tarnsportation_rate_per_adult = 110.00; extra_tarnsportation_rate_per_senior = 32.50; }
                else if (field__city == "kingston") { extra_tarnsportation_rate_per_adult = 76.00; extra_tarnsportation_rate_per_senior = 56.50; }
                else if (field__city == "kitchener") { extra_tarnsportation_rate_per_adult = 90.00; extra_tarnsportation_rate_per_senior = 73.00; }
                else if (field__city == "leamington") { extra_tarnsportation_rate_per_adult = 35.00; extra_tarnsportation_rate_per_senior = 30.00; }
                else if (field__city == "london") { extra_tarnsportation_rate_per_adult = 81.00; extra_tarnsportation_rate_per_senior = 52.00; }
                else if (field__city == "mississauga") { extra_tarnsportation_rate_per_adult = 135.00; extra_tarnsportation_rate_per_senior = 65.00; }
                else if (field__city == "ottawa") { extra_tarnsportation_rate_per_adult = 119.50; extra_tarnsportation_rate_per_senior = 45.50; }
                else if (field__city == "peterborough") { extra_tarnsportation_rate_per_adult = 60.00; extra_tarnsportation_rate_per_senior = 40.00; }
                else if (field__city == "saultestemarie") { extra_tarnsportation_rate_per_adult = 67.00; extra_tarnsportation_rate_per_senior = 57.00; }
                else if (field__city == "thunderbay") { extra_tarnsportation_rate_per_adult = 77.00; extra_tarnsportation_rate_per_senior = 55.00; }
                else if (field__city == "toronto") { extra_tarnsportation_rate_per_adult = 156.00; extra_tarnsportation_rate_per_senior = 128.15; }
                else if (field__city == "windsor") { extra_tarnsportation_rate_per_adult = 95.70; extra_tarnsportation_rate_per_senior = 48.40; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }
            }
            else if (field__province == 'al')
            {
                // adjust "Basic Needs Allowance":

                // if (num_of_kids_between_12_and_17 > 0)
                // {                
                //     data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + (num_of_kids_between_12_and_17 * 33);
                //     log_string += "Alberta - Basic Needs Allowance: adding for " + num_of_kids_between_12_and_17 + " kid(s) between 12-17. 33 per kid = " + (num_of_kids_between_12_and_17 * 33) + "<br>";
                //     user_message += "Alberta - Basic Needs Allowance: adding for " + num_of_kids_between_12_and_17 + " kid(s) between 12-17. " + num_of_kids_between_12_and_17 + " x 33 per kid = " + (num_of_kids_between_12_and_17 * 33) + "<br>";
                // }

                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                if (field__city == "brooks") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }
                else if (field__city == "calgary") { extra_tarnsportation_rate_per_adult = 106.00; extra_tarnsportation_rate_per_senior = 77.00; }
                else if (field__city == "edmonton") { extra_tarnsportation_rate_per_adult = 97.00; extra_tarnsportation_rate_per_senior = 15.50; }
                else if (field__city == "lethbridge") { extra_tarnsportation_rate_per_adult = 77.00; extra_tarnsportation_rate_per_senior = 28.00; }
                else if (field__city == "medicinehat") { extra_tarnsportation_rate_per_adult = 70.50; extra_tarnsportation_rate_per_senior = 43.75; }
                else if (field__city == "reddeer") { extra_tarnsportation_rate_per_adult = 70.00; extra_tarnsportation_rate_per_senior = 62.00; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }
            }
            else if (field__province == 'bc')
            {
                // adjust "Basic Needs Allowance":

                if (num_of_kids_over_18__age_of_majority > 0)
                {
                    // data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + (num_of_kids_over_18__age_of_majority * 150);
                    log_string += "BC - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";
                    user_message += "BC - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + " 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";
                }

                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                if (field__city == "abbotsford") { extra_tarnsportation_rate_per_adult = 52.00; extra_tarnsportation_rate_per_senior = 38.00; }
                else if (field__city == "kelona") { extra_tarnsportation_rate_per_adult = 70.00; extra_tarnsportation_rate_per_senior = 45.00; }
                else if (field__city == "nanaimo") { extra_tarnsportation_rate_per_adult = 65.00; extra_tarnsportation_rate_per_senior = 40.00; }
                else if (field__city == "vancouver") { extra_tarnsportation_rate_per_adult = 177.00; extra_tarnsportation_rate_per_senior = 56.00; }
                else if (field__city == "vernon") { extra_tarnsportation_rate_per_adult = 55.00; extra_tarnsportation_rate_per_senior = 40.00; }
                else if (field__city == "victoria") { extra_tarnsportation_rate_per_adult = 85.00; extra_tarnsportation_rate_per_senior = 45.00; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }

                // age of majority top up:
                age_of_majority_top_up = num_of_kids_over_18__age_of_majority * 150;
            }
            else if (field__province == 'mn')
            {
                // adjust "Basic Needs Allowance":

                if (field__number_of_disabled > 0)
                {                
                    data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + (field__number_of_disabled * 105);
                    log_string += "Manitoba - Basic Needs Allowance: adding for " + field__number_of_disabled + " disabled: 105 per disabled person = " + (field__number_of_disabled * 105) + "<br>";
                    user_message += "Manitoba - Basic Needs Allowance: adding for " + field__number_of_disabled + " disabled: 105 per disabled person = " + (field__number_of_disabled * 105) + "<br>";
                }

                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                if (field__city == "brandon") { extra_tarnsportation_rate_per_adult = 84.50; extra_tarnsportation_rate_per_senior = 85.00; }
                else if (field__city == "winnipeg") { extra_tarnsportation_rate_per_adult = 100.10; extra_tarnsportation_rate_per_senior = 50.00; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }
            }
            else if (field__province == 'nb')
            {
                // adjust "Basic Needs Allowance":

                if (num_of_kids_over_18__age_of_majority > 0)
                {
                    // data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + (num_of_kids_over_18__age_of_majority * 150);
                    log_string += "New Brunswick - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";
                    user_message += "New Brunswick - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";
                }

                if (has_kids_under_age_of_majority)
                {
                    data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + 75;
                    log_string += "New Brunswick - Basic Needs Allowance: adding 75 for family with children (under 19)<br>";
                    user_message += "New Brunswick - Basic Needs Allowance: adding 75 for family with children (under 19)<br>";
                }   

                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                if (field__city == "fredericton") { extra_tarnsportation_rate_per_adult = 80.00; extra_tarnsportation_rate_per_senior = 50.00; }
                else if (field__city == "moncton") { extra_tarnsportation_rate_per_adult = 65.00; extra_tarnsportation_rate_per_senior = 50.00; }
                else if (field__city == "saintjohn") { extra_tarnsportation_rate_per_adult = 77.00; extra_tarnsportation_rate_per_senior = 55.00; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }

                // age of majority top up:
                age_of_majority_top_up = num_of_kids_over_18__age_of_majority * 150;                
            }     
            else if (field__province == 'nl')
            {
                // adjust "Basic Needs Allowance":

                if (num_of_kids_over_18__age_of_majority > 0)
                {
                    // data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + (num_of_kids_over_18__age_of_majority * 150);
                    log_string += "Newfoundland - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";
                    user_message += "Newfoundland - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";
                }  

                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                fuel_supplement = 0;
                if (field__city == "stjohns") { extra_tarnsportation_rate_per_adult = 78.00; extra_tarnsportation_rate_per_senior = 53.00; fuel_supplement = 71.00; }
                else if (field__city == "nflisland") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; fuel_supplement = 71.00; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; fuel_supplement = 0; }

                // age of majority top up:
                age_of_majority_top_up = num_of_kids_over_18__age_of_majority * 150;

                console.log(data_lookup[child_index]);

                // adding to Shelter Allowance:
                data_lookup[child_index]['10'] = parseFloat( data_lookup[child_index]['10'] ) + parseFloat(fuel_supplement);    
                log_string += "Newfoundland - Shelter Allowance: adding fuel supplement for being on island: " + (fuel_supplement) + "<br>";
                user_message += "Newfoundland - Shelter Allowance: adding fuel supplement for being on island: " + (fuel_supplement) + "<br>";                           
            }             
            else if (field__province == 'ns')
            {
                // adjust "Basic Needs Allowance":

                if (num_of_kids_over_18__age_of_majority > 0)
                {
                    // data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + (num_of_kids_over_18__age_of_majority * 150);
                    log_string += "Nova Scotia - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";
                    user_message += "Nova Scotia - Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": 150 per kid = " + (num_of_kids_over_18__age_of_majority * 150) + "<br>";

                    var transportation_adjustment = 75;
                    if (field__city == "halifax") transportation_adjustment = 78;

                    data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + (num_of_kids_over_18__age_of_majority * 150);
                    log_string += "Nova Scotia - Basic Needs Allowance: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": " + transportation_adjustment + " transporttation cost/month per kid = " + (num_of_kids_over_18__age_of_majority * transportation_adjustment) + "<br>";
                    user_message += "Nova Scotia - Basic Needs Allowance: adding for " + num_of_kids_over_18__age_of_majority + " kid(s) between 18 and under " + age_of_majority + ": " + transportation_adjustment + " transporttation cost/month per kid = " + (num_of_kids_over_18__age_of_majority * transportation_adjustment) + "<br>";                  
                }     

                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                if (field__city == "halifax") { extra_tarnsportation_rate_per_adult = 78.00; extra_tarnsportation_rate_per_senior = 58.00; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }

                // age of majority top up:
                age_of_majority_top_up = num_of_kids_over_18__age_of_majority * 150;                
            } 
            else if (field__province == 'pe')
            {
                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                if (field__city == "charlottetown") { extra_tarnsportation_rate_per_adult = 58.50; extra_tarnsportation_rate_per_senior = 40.50; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }
            }             
            else if (field__province == 'sa')
            {

                // add additional $50 per disabled adult 
                if (parseFloat(field__number_of_disabled) > 0)
                {
                    data_lookup[child_index]['9'] = parseFloat(data_lookup[child_index]['9']) + ( parseFloat(field__number_of_disabled) * 50 );
                    log_string += "Saskatchewan - Basic Needs Allowance: adding for " + field__number_of_disabled + " disabled : 50 per person = " + (parseFloat(field__number_of_disabled) * 50) + "<br>";
                    user_message += "Saskatchewan - Basic Needs Allowance: adding for " + field__number_of_disabled + " disabled : 50 per person = " + (parseFloat(field__number_of_disabled) * 50) + "<br>";
                }   
                // transportation:
                extra_tarnsportation_rate_per_adult = 0;
                if (field__city == "moosejaw") { extra_tarnsportation_rate_per_adult = 65.00; extra_tarnsportation_rate_per_senior = 35.00; }
                else if (field__city == "princealbert") { extra_tarnsportation_rate_per_adult = 70.00; extra_tarnsportation_rate_per_senior = 30.00; }
                else if (field__city == "regina") { extra_tarnsportation_rate_per_adult = 88.00; extra_tarnsportation_rate_per_senior = 30.00; }
                else if (field__city == "saskatoon") { extra_tarnsportation_rate_per_adult = 83.00; extra_tarnsportation_rate_per_senior = 29.00; }
                else if (field__city == "other") { extra_tarnsportation_rate_per_adult = 75.00; extra_tarnsportation_rate_per_senior = 75.00; }             
            }



            // common:


            // extra transportation rate:

            if (parseFloat(extra_tarnsportation_rate_per_adult) < 75) extra_tarnsportation_rate_per_adult = 75.00;
            if (parseFloat(extra_tarnsportation_rate_per_senior) < 75) extra_tarnsportation_rate_per_senior = 75.00;
            
            extra_tarnsportation_rate_per_adult__total = (num_of_kids_over_18__age_of_majority+num_of_non_senior_parents) * extra_tarnsportation_rate_per_adult;
            extra_tarnsportation_rate_per_adult__total += (num_of_senior_parents) * extra_tarnsportation_rate_per_senior;
            //(num_of_kids_over_18__age_of_majority+num_of_adult_parents) * extra_tarnsportation_rate_per_adult;



            if (0) // do not overwrite ow, just get the value from the files
            {
                if ( (not_null(extra_tarnsportation_rate_per_adult__total)) && (extra_tarnsportation_rate_per_adult__total > 0) )
                {
                    data_lookup[child_index]['12'] = extra_tarnsportation_rate_per_adult__total; // overwrite number, not add!
                    log_string_to_add = "Transportation Allowance: adding for " + num_of_kids_over_18__age_of_majority + " adult kids + " + num_of_adult_parents + " parents, "  + num_of_non_senior_parents + " x " + extra_tarnsportation_rate_per_adult + " per non-senior parent + " + num_of_senior_parents + " x " + extra_tarnsportation_rate_per_senior + " per senior parent = " + extra_tarnsportation_rate_per_adult__total + " for " + field__city + ", " + field__province + "<br>";
                    log_string += log_string_to_add;
                    user_message += log_string_to_add;                  
                }
            }



            // age of majority top-up:

            //data_lookup[child_index][''] += age_of_majority_top_up;
            // log_string_to_add = "Age of Majority Top-Up: adding for " + num_of_kids_over_18__age_of_majority + " adult kids : " + "150" + " per person = " + age_of_majority_top_up + "<br>";
            // log_string += log_string_to_add;
            // user_message += log_string_to_add;



            //// display values:


            // startup:

            $("#value_2_1").html(format_amount(data_lookup[child_index]['1']));
            $("#value_3_1").html(format_amount(data_lookup[child_index]['2']));
            $("#value_4_1").html(format_amount(data_lookup[child_index]['3']));
            $("#value_5_1").html(format_amount(data_lookup[child_index]['4']));
            $("#value_6_1").html(format_amount(data_lookup[child_index]['5']));
            $("#value_7_1").html(format_amount(data_lookup[child_index]['6']));
            $("#value_8_1").html(format_amount(data_lookup[child_index]['7']));


            // school_startup_total:

            var double_school_startup = false;

            if (field__item_date_month == "1") double_school_startup = true; 
            if (field__item_date_month == "2") double_school_startup = true; 
            if (field__item_date_month == "3") double_school_startup = true; 
            if (field__item_date_month == "4") double_school_startup = true; 
            if (field__item_date_month == "5") double_school_startup = true; 

            if (field__item_date_month == "9") double_school_startup = true; 
            if (field__item_date_month == "10") double_school_startup = true; 
            if (field__item_date_month == "11") double_school_startup = true; 
            if (field__item_date_month == "12") double_school_startup = true; 

            // in case of a child tab, make it 150:
            param_mode = getUrlParameter('mode');
            if (param_mode == 'childtab')
            {
                data_lookup[child_index_4andup]['8'] = 150;
            }

            if ( double_school_startup )
            {
                data_lookup[child_index_4andup]['8'] = Number(data_lookup[child_index_4andup]['8']) * 2;

                user_message += "Doubling School Startup value for expected/actual arrival on month " + field__item_date_month + "<br>";   
            }

            $("#value_9_1").html( format_amount( data_lookup[child_index_4andup]['8'] ) );


            var total_startup = data_lookup[child_index]['1'] + data_lookup[child_index]['2'] + data_lookup[child_index]['3'] + data_lookup[child_index]['4'] + data_lookup[child_index]['5'] + data_lookup[child_index]['6'] + data_lookup[child_index]['7'] + data_lookup[child_index_4andup]['8'];

            calc_array[1][5] = data_lookup[child_index]['1'];
            calc_array[2][5] = data_lookup[child_index]['2'];
            calc_array[3][5] = data_lookup[child_index]['3'];
            calc_array[4][5] = data_lookup[child_index]['4'];
            calc_array[5][5] = data_lookup[child_index]['5'];
            calc_array[6][5] = data_lookup[child_index]['6'];
            calc_array[7][5] = data_lookup[child_index]['7'];
            calc_array[8][5] = data_lookup[child_index_4andup]['8'];

            calc_array[9][5] = total_startup;

            console.log("calc_array: ", calc_array);

            $("#value_10_1").html(format_amount(total_startup));


            // rap:

            $("#value_12_2").html(format_amount(data_lookup[child_index]['9']));
            $("#value_13_2").html(format_amount(data_lookup[child_index]['10']));
            $("#value_14_2").html(format_amount(data_lookup[child_index]['11']));
            $("#value_15_2").html(format_amount(data_lookup[child_index]['12']));
            $("#value_16_2").html(format_amount(data_lookup[child_index]['13']));

            console.log("tts: 1 ", data_lookup[child_index]['12'] );

            $("#value_18_2").html(format_amount( age_of_majority_top_up ));

            var total_rap = data_lookup[child_index]['9'] + data_lookup[child_index]['10'] + data_lookup[child_index]['11'] + data_lookup[child_index]['12'] + data_lookup[child_index]['13'] + age_of_majority_top_up;

            calc_array[10][6] = data_lookup[child_index]['9'];
            calc_array[11][6] = data_lookup[child_index]['10'];
            calc_array[12][6] = data_lookup[child_index]['11'];
            calc_array[13][6] = data_lookup[child_index]['12'];
            calc_array[14][6] = data_lookup[child_index]['13'];

            calc_array[15][6] = total_rap;        

            $("#value_17_2").html(format_amount(total_rap));
        


            // special:
     
            var total_special_allowances = "0";
            var total_special_allowances__onetime = "0";
            var total_special_allowances__monthly = "0";

            if (field__is_pregnant == "Yes")
            {
                $("#value_32_2").html(format_amount(data_lookup[child_index]['14']));
                $("#value_33_1").html(format_amount(data_lookup[child_index]['15']));
                $("#value_34_1").html(format_amount(data_lookup[child_index]['16']));
                //$("#value_35_2").html(format_amount(data_lookup[child_index]['17']));        

                total_special_allowances__onetime = data_lookup[child_index]['15'] + data_lookup[child_index]['16']; 
                total_special_allowances__monthly = data_lookup[child_index]['14']; // + data_lookup[child_index]['17'];            
                $("#value_37_1").html(format_amount(total_special_allowances__onetime));
                $("#value_37_2").html(format_amount(total_special_allowances__monthly));

                $(".section-result-newborn-allowance").removeClass("disabled");

                calc_array[16][6] = data_lookup[child_index]['14'];
                calc_array[17][5] = data_lookup[child_index]['15'];
                calc_array[18][5] = data_lookup[child_index]['16'];
                

                calc_array[21][5] = total_special_allowances__onetime;
                calc_array[21][6] = total_special_allowances__monthly;              
            }
            else
            {
                $("#value_32_2").html("");
                $("#value_33_1").html("");
                $("#value_34_1").html("");
                //$("#value_35_2").html("");   

                $("#value_37_1").html("");
                $("#value_37_2").html("");  


                if (num_of_newborn_kids > 0)
                {
                    $(".section-result-newborn-allowance").removeClass("disabled");

                    $("#value_34_1").html(format_amount(data_lookup[child_index]['16']));
                    calc_array[18][5] = data_lookup[child_index]['16'];
                    total_special_allowances__onetime += data_lookup[child_index]['16']; 
                }
                else
                {
                    $(".section-result-newborn-allowance").addClass("disabled");
                    // calc_array[19][6] = 0;
                    // data_lookup[child_index]['17'] = 0;
                    // $("#value_35_2").html(format_amount(data_lookup[child_index]['17']));        
                }                               
            }

            calc_array[19][6] = data_lookup[child_index]['17'];
            $("#value_35_2").html(format_amount(data_lookup[child_index]['17']));


            if (field__has_dietary_needs == "Yes")
            {
                $(".section-result-dietary-allowance").removeClass("disabled");
            }
            else
            {
                $(".section-result-dietary-allowance").addClass("disabled");
                calc_array[19][6] = 0;
                data_lookup[child_index]['17'] = 0;
                $("#value_35_2").html(format_amount(data_lookup[child_index]['17']));        
            }
            

            total_special_allowances__monthly = total_special_allowances__monthly + data_lookup[child_index]['17'];
            $("#value_37_2").html(format_amount(total_special_allowances__monthly));





            // subtotal sponsorship cost

            subtotal_sponsorship_cost__onetime = parseFloat(total_startup) + parseFloat(total_special_allowances__onetime);
            subtotal_sponsorship_cost__monthly = parseFloat(total_rap) + parseFloat(total_special_allowances__monthly);
            subtotal_sponsorship_cost__annually = parseFloat(subtotal_sponsorship_cost__monthly) * 12;

            $("#value_38_1").html(format_amount(subtotal_sponsorship_cost__onetime));
            $("#value_38_2").html(format_amount(subtotal_sponsorship_cost__monthly));
            $("#value_38_3").html(format_amount(subtotal_sponsorship_cost__annually));


        



            calc_totals = JSON.parse(localStorage.calc_totals);

            //obj = JSON.parse(localStorage.object);
            calc_totals[param_tab].total_1.startup = subtotal_sponsorship_cost__onetime;
            calc_totals[param_tab].total_1.monthly = subtotal_sponsorship_cost__monthly;
            calc_totals[param_tab].total_1.annually = subtotal_sponsorship_cost__annually;



            // copy input values:

            calc_totals[param_tab].params.field__province = field__province;
            calc_totals[param_tab].params.field__city = field__city;
            calc_totals[param_tab].params.field__family_size = field__family_size;
            calc_totals[param_tab].params.field__family_composition = field__family_composition;
            calc_totals[param_tab].params.field__number_of_children = field__number_of_children;
            calc_totals[param_tab].params.field__is_pregnant = field__is_pregnant;
            calc_totals[param_tab].params.field__has_dietary_needs = field__has_dietary_needs;
            // field__number_of_disabled
            // field__number_of_seniors
            calc_totals[param_tab].params.field__total_monthly_income = field__total_monthly_income;
            calc_totals[param_tab].params.item_date_month = field__item_date_month;
            calc_totals[param_tab].params.item_date_day = field__item_date_day;
            calc_totals[param_tab].params.item_date_year = field__item_date_year;
            calc_totals[param_tab].params.field__child_age_1 = field__child_age_list[1];
            calc_totals[param_tab].params.field__child_age_2 = field__child_age_list[2];
            calc_totals[param_tab].params.field__child_age_3 = field__child_age_list[3];
            calc_totals[param_tab].params.field__child_age_4 = field__child_age_list[4];
            calc_totals[param_tab].params.field__child_age_5 = field__child_age_list[5];
            calc_totals[param_tab].params.field__child_age_6 = field__child_age_list[6];
            calc_totals[param_tab].params.field__child_age_7 = field__child_age_list[7];
            calc_totals[param_tab].params.field__child_age_8 = field__child_age_list[8];
            calc_totals[param_tab].params.field__child_age_9 = field__child_age_list[9];
            calc_totals[param_tab].params.field__child_age_10 = field__child_age_list[10];



            console.log("calc_totals", calc_totals);

            localStorage.calc_totals = JSON.stringify(calc_totals);






            /*

            // deductions

            $("#value_52_2").html(format_amount(field__total_monthly_income));


            // total

            var total_sponsorship_cost__onetime = subtotal_sponsorship_cost__onetime;

            //var total_sponsorship_cost__monthly = parseFloat(subtotal_sponsorship_cost__monthly) - ( parseFloat(field__total_monthly_income) / 2);

            var total_sponsorship_cost__monthly_deductions = (parseFloat(field__total_monthly_income)) - (parseFloat(subtotal_sponsorship_cost__monthly) / 2);
            if ( (parseFloat(total_sponsorship_cost__monthly_deductions)) < 0 ) total_sponsorship_cost__monthly_deductions = 0;
            var total_sponsorship_cost__monthly = parseFloat(subtotal_sponsorship_cost__monthly) - parseFloat(total_sponsorship_cost__monthly_deductions);

            if ( parseFloat(total_sponsorship_cost__monthly) < 0 ) total_sponsorship_cost__monthly = 0;
            
            $("#value_53_2").html(format_amount(total_sponsorship_cost__monthly_deductions));

            $("#value_61_1").html(format_amount(total_sponsorship_cost__onetime));
            $("#value_61_2").html(format_amount(total_sponsorship_cost__monthly));


            $("#calc-results-message").html(user_message);

            */

            $("#calc-results-message").html(user_message);

            update_calc_data(); 



            $("#calc-form").hide();
            $("#calc-results").show();
            $('html,body').scrollTop(0);  





            // plot(data_lookup);
            // $('#result').empty();
            // $('#result').html(JSON.stringify(data_lookup, null, 2));

            window.parent.postMessage('update_calc','*');



            // log

            var ip_address = "";
            var country_code = "";
            var country_name = "";

            call_string = 'https://comicreply.com/api/members.php?action=member__new__subscribe__rstp' + 
                                                "&account_id=" + "31" + 
                                                "&campaign_id=" + "474" +

                                                "&request_message=" + log_string +
                                                // "&points=" . curl_escape($ch, $score) . 
                                                // "&keywords=" . curl_escape($ch, $wordlist) . 

                                                "&ip_address=" + ip_address +
                                                "&country_code=" + country_code +  
                                                "&country_name=" + country_name +
                                                                                                                                
                                                "&status=" + "New" +                                
                                                "&rand="; // + rand(10000, 99999);

            //$.get(call_string, {}, function(data){ callbackLoadData(data);}, "text");

            function callbackLoadData(data)
            {

            }

        });   

    }

}



// runs every time the user changes inputs in the form or the results page:
function update_data(element_source, element_target, element_type, element_num, array_1, array_2)
{
    console.info( arguments );

    // check if number of children changed, then clear:

    field__number_of_children = parseInt( $("#field__number_of_children").val() );
    if (field__number_of_children__prev != field__number_of_children)
    {
        for (i=1; i <= 10; i++)
        {
           $("#field__child_age_" + i).val(""); 
        }        
    }

    // set location info:

    field__province = $("#field__province").val();
    field__city = $("#field__city__" + field__province).val();

    console.log(field__province, field__city);

    $(".selector-city").hide();

    $("#city-desc-gta").hide();
    if (field__city == "toronto") $("#city-desc-gta").show();

    // treat hamilton the same as toronto:
    if (field__city == "hamilton") field__city = "toronto";


    

    //if (field__province == "bc")
    {
        $("#selector-city-" + field__province).show();
        $("#field__city__" + field__province).show();    
    }

    // show/hide deisbility question based on province:

    if ( (field__province == "bc") || (field__province == "sa") || (field__province == "mn") )
    {
        $("#section-intake-disability").show();
    }
    else
    {
        $("#section-intake-disability").hide();
    }    



    // validate child ages:

    var age_of_majority = get_age_of_majority(field__province);    
    var message__age_of_majority = ___e("Over age of majority");
    var message__age_of_majority__under22 = ___e("The child is over the age of majority, please open a separate tab.");

    var message__age_of_majority__general = ___e("For children over the age for majority, apply separately using the button at the top for 'Add Over-Age Dedpenant Child'");
   // var message__age_of_majority__general = ___e("Children over the majority age, need to be applied separately. Will not be part of this calculation.");

    var has_child_over_age = false;

    console.log("checking age_of_majority", $("#field__child_age_1").val(), "__", age_of_majority, "__" );

    for (i__child_age_check = 1; i__child_age_check <= 10; i__child_age_check++)
    {
        if (parseFloat($("#field__child_age_"+i__child_age_check).val()) >= age_of_majority) {

            if (parseFloat($("#field__child_age_"+i__child_age_check).val()) < 22) {
                $("#section__child_age_"+i__child_age_check+" .message__child_input").html(message__age_of_majority__under22).show(); 

                $("#section__child_age_"+i__child_age_check).css("background-color", "auto"); 
                $("#section__child_age_"+i__child_age_check).css("padding", "0px");                 
            } 
            else
            {
                $("#section__child_age_"+i__child_age_check+" .message__child_input").html(message__age_of_majority).show(); 

                $("#section__child_age_"+i__child_age_check).css("background-color", "#f1f1f1"); 
                $("#section__child_age_"+i__child_age_check).css("padding", "10px"); 


                // background-color: ;
                //     padding: 10px;                               
            }
            has_child_over_age = true;  

        }
        else
        {
            $("#section__child_age_"+i__child_age_check+" .message__child_input").html("").hide();
        }        
    }

    if (has_child_over_age) 
    {
        //$(".message__child_input__general").html(message__age_of_majority__general).show();
        $(".message__child_input__general").html("").hide();
    }
    else 
    {
        $(".message__child_input__general").html("").hide();
    }



    // set amount/percent:

    if (element_type == "amount")
    {
        //$("#" + element_source + " .percent").val("");
        if ( $("#" + element_source + " .amount").val() == "" ) $("#" + element_source + " .amount").val("0");
    }
    else if (element_type == "percent")
    {
        //$("#" + element_source + " .amount").val("");
        if ( $("#" + element_source + " .percent").val() == "" ) $("#" + element_source + " .percent").val("0");
    }



    // allowed inkind:

    // Shelter: 100%
    // Clothing:      70%
    // Furniture:      70%
    // Household      Needs: 50%
    // Linens      Includes: 100%
    // School      supplies: 50%
    // Food      staples: 50% 

    // translations:

    var inkind_values = { 
        "value_2_3": {"name": "Staple Allowance", "name_fr": "de l’allocation pour produits de première nécessité", "max_percent": 50}, 
        "value_3_3": {"name": "Basic Clothing Allowance", "name_fr": "de l’allocation pour les vêtements ordinaires", "max_percent": 70}, 
        "value_4_3": {"name": "Winter Clothing Allowance", "name_fr": "de l’allocation pour les vêtements d’hiver", "max_percent": 70}, 
        "value_5_3": {"name": "Basic Household Needs", "name_fr": "de l’allocation pour les articles ménagers de base", "max_percent": 50}, 
        "value_6_3": {"name": "Furniture Allowance", "name_fr": "de l’allocation pour les meubles", "max_percent": 70}, 
        "value_7_3": {"name": "Linens", "name_fr": "de l’allocation pour le linge de maison", "max_percent": 100}, 
        "value_8_3": {"name": "Utility Installation", "name_fr": "Allocation pour l’installation des services publics", "max_percent": 0},     
        "value_9_3": {"name": "School Start-Up Allowance", "name_fr": "de l’allocation scolaire initiale", "max_percent": 50}, 

        "value_12_3": {"name": "Basic Needs Allowance", "name_fr": "l’allocation pour les besoins essentiels", "max_percent": 50},
        "value_13_3": {"name": "Shelter Allowance", "name_fr": "de l’allocation de logement", "max_percent": 100}, 
        "value_16_3": {"name": "Housing Supplement", "name_fr": "du supplément au logement", "max_percent": 100}, 

        "value_32_3": {"name": "Maternity Food Allowance", "name_fr": "Maternity Food Allowance", "max_percent": 100}, 
        "value_33_3": {"name": "Maternity Clothing Allowance", "name_fr": "Maternity Clothing Allowance", "max_percent": 100}, 
        "value_34_3": {"name": "Newborn Allowance", "name_fr": "Newborn Allowance", "max_percent": 100}, 
        "value_35_3": {"name": "Dietary Allowance", "name_fr": "Dietary Allowance", "max_percent": 50}, 
    }; 

    for (key in inkind_values)
    {
        //console.log(key, inkind_values[key].max_percent);
        var error_message = "";

        if (element_source == key)
        {
            if (element_type == "percent")
            {
                if ( ( parseFloat( $("#" + element_source + " .percent").val() ) ) > inkind_values[key].max_percent )
                {
                    $("#" + element_source + " .percent").val(inkind_values[key].max_percent);
                    if (languageCode == "fr")
                        error_message += ("Un maximum de " + inkind_values[key].max_percent + " % " + inkind_values[key].name_fr + " peut être fourni en nature. \n\n");
                    else
                        error_message += ("Maximum " + inkind_values[key].max_percent + "% of " + inkind_values[key].name + " can be provided in-kind. \n\n");
                }                
            }
            else if (element_type == "amount")
            {
                var amount_temp = parseFloat(inkind_values[key].max_percent) / 100 * ( parseFloat( data_lookup[child_index][element_num] ) );
                console.log("amount_temp:", amount_temp, ( parseFloat( $("#" + element_source + " .amount").val() ) ));

                if (    ( parseFloat( $("#" + element_source + " .amount").val() ) ) > 
                        ( amount_temp )
                    )  
                {
                    $("#" + element_source + " .amount").val(amount_temp);

                    if (languageCode == "fr")
                        error_message += ("Un maximum de " + inkind_values[key].max_percent + " % " + "" + inkind_values[key].name_fr + " (" + format_amount(amount_temp) + ")" + " peut être fourni en nature. \n\n");
                    else
                        error_message += ("Maximum " + inkind_values[key].max_percent + "% " + "(" + format_amount(amount_temp) + ")" + " of " + inkind_values[key].name + " can be provided in-kind. \n\n");
                }                  
            }          
        }

        if (error_message != "") alert(error_message);
    }

    //data_lookup[child_index][element_num]



    // if ( 
    //         (element_source == "value_2_3") || 
    //         (element_source == "value_3_3") ||
    //         (element_source == "value_4_3") ||
    //         (element_source == "value_5_3") ||
    //         (element_source == "value_6_3") ||
    //         (element_source == "value_7_3") ||
    //         (element_source == "value_8_3") ||

    //         (element_source == "value_13_3") ||
    //         (element_source == "value_16_3") ||
    //         (element_source == "value_32_3") ||
    //         (element_source == "value_33_3") ||
    //         (element_source == "value_34_3") ||
    //         (element_source == "value_35_3")
    //     )
    // {
    //     if ( ( parseFloat( $("#" + element_source + " .percent").val() ) ) > 100 )
    //     {
    //         $("#" + element_source + " .percent").val("100");
    //         alert("Cannot enter more than 100%");
    //     }
    // }

    // if (element_source == "value_9_3")
    // {
    //     if ( ( parseFloat( $("#" + element_source + " .percent").val() ) ) > 50 )
    //     {
    //         $("#" + element_source + " .percent").val("50");
    //         alert("Maximum 50% of School Start-up Allowance can be provided in-kind.");
    //     }
    // }

    // if (element_source == "value_12_3")
    // {
    //     if ( ( parseFloat( $("#" + element_source + " .percent").val() ) ) > 50 )
    //     {
    //         $("#" + element_source + " .percent").val("50");
    //         alert("Maximum 50% of Basic Needs Allowance can be provided in-kind.");
    //     }
    // }

    //

    field__family_size = $("#field__family_size").val();
    field__number_of_children = $("#field__number_of_children").val();

    field__family_composition = $("#field__family_composition").val();

    if (field__family_composition == "single-under22") 
    {
        field__family_composition = "single";
        field__family_composition__single = "single-under22";
    }    

    if (element_source == "field__family_size")
    {
        if (field__family_composition == "single")
        {
            if (parseFloat(field__family_size) >= 1)
                $("#field__number_of_children").val( parseFloat(field__family_size) - 1);
            else
                $("#field__number_of_children").val( 1 );
        }
        else if (field__family_composition == "senior")
        {
            if (parseFloat(field__family_size) >= 1)
                $("#field__number_of_children").val( parseFloat(field__family_size) - 1);
            else
                $("#field__number_of_children").val( 1 );            
        }
        else if (field__family_composition == "couple")
        {
            if (parseFloat(field__family_size) >= 2)
            {
                $("#field__number_of_children").val( parseFloat(field__family_size) - 2);
            }
            else
            {
                $("#field__family_size").val( 2 );
                $("#field__number_of_children").val( 0 );            
            }
        }
        else if (field__family_composition == "couple1senior")
        {
            if (parseFloat(field__family_size) >= 2)
            {
                $("#field__number_of_children").val( parseFloat(field__family_size) - 2);
            }
            else
            {
                $("#field__family_size").val( 2 );
                $("#field__number_of_children").val( 0 );            
            }            
        }
        else if (field__family_composition == "2seniors")
        {
            if (parseFloat(field__family_size) >= 2)
            {
                $("#field__number_of_children").val( parseFloat(field__family_size) - 2);
            }
            else
            {
                $("#field__family_size").val( 2 );
                $("#field__number_of_children").val( 0 );            
            }            
        } 

        field__number_of_children = $("#field__number_of_children").val();                       
    }
    else if (element_source == "field__number_of_children")
    {
        if (field__family_composition == "single")
        {
            $("#field__family_size").val( parseFloat(field__number_of_children) + 1);
        }
        else if (field__family_composition == "senior")
        {
            $("#field__family_size").val( parseFloat(field__number_of_children) + 1);
        }
        else if (field__family_composition == "couple")
        {
            $("#field__family_size").val( parseFloat(field__number_of_children) + 2);
        }
        else if (field__family_composition == "couple1senior")
        {
            $("#field__family_size").val( parseFloat(field__number_of_children) + 2);
        }
        else if (field__family_composition == "2seniors")
        {
            $("#field__family_size").val( parseFloat(field__number_of_children) + 2);
        }      

        field__family_size = $("#field__family_size").val();
    }
    else  if (element_source == "field__family_composition")
    {
        if (field__family_composition == "single")
        {
            $("#field__number_of_children").val( parseFloat(field__family_size) - 1);
            $("#field__number_of_seniors").val( 0 );
        }
        else if (field__family_composition == "senior")
        {
            $("#field__number_of_children").val( parseFloat(field__family_size) - 1);
            $("#field__number_of_seniors").val( 1 );
        }
        else if (field__family_composition == "couple")
        {
            $("#field__number_of_children").val( parseFloat(field__family_size) - 2);
            $("#field__number_of_seniors").val( 0 );
        }
        else if (field__family_composition == "couple1senior")
        {
            $("#field__number_of_children").val( parseFloat(field__family_size) - 2);
            $("#field__number_of_seniors").val( 1 );
        }
        else if (field__family_composition == "2seniors")
        {
            $("#field__number_of_children").val( parseFloat(field__family_size) - 2);
            $("#field__number_of_seniors").val( 2 );
        }     

        field__number_of_children = parseInt( $("#field__number_of_children").val() ); 
        field__family_size = parseInt( $("#field__family_size").val() );                   
    }

        




    //// search page:

    field__number_of_children = parseInt( $("#field__number_of_children").val() );


    for (i=1; i <= 10; i++)
    {
       $("#section__child_age_" + i).hide(); 
    }

    for (i=1; i <= field__number_of_children; i++)
    {
       $("#section__child_age_" + i).show(); 
    }

    if (field__number_of_children > 0)
    {
        $(".section-children-details").show();
    }
    else
        $(".section-children-details").hide();


    // limit num of kids:
    var limit_num_of_kids = false;

    if (limit_num_of_kids)
    {
        if (field__province == "pe") 
        {
            $(".hidden-for-pei").hide();
            if (field__number_of_children > 6)
            {
                field__number_of_children = 6
                $("#field__number_of_children").val( field__number_of_children );
            }
        }
        else
        {
            $(".hidden-for-pei").show();
        } 
    }
    else
    {
        $(".hidden-for-pei").show();
    }


    //// results:

    // maternity:

    field__is_pregnant = $("#field__is_pregnant").val();

    if (field__is_pregnant == "Yes")
    {
        $(".section-result-maternity").removeClass("disabled");
    }
    else
        $(".section-result-maternity").addClass("disabled");

    // dietary needs:

    // field__has_dietary_needs = $("#field__has_dietary_needs").val();

    // if (field__has_dietary_needs == "Yes")
    // {
    //     $(".section-result-dietary-allowance").removeClass("disabled");
    // }
    // else
    // {
    //     $(".section-result-dietary-allowance").addClass("disabled");
    //     calc_array[19][6] = 0;
    //     data_lookup[child_index]['17'] = 0;
    //     $("#value_35_2").html(format_amount(data_lookup[child_index]['17']));        
    // }

    // calculations:

    if (data_lookup && child_index)
    {
        console.log( $("#" + element_source + " .amount").val() );

        //if (not_null( ($("#" + element_source + " .amount").val() )))
        if (element_type == "amount")
        {
            console.log("amount:|" + $("#" + element_source + " .amount").val() + "|");

            var new_amount = $("#" + element_source + " .amount").val();
            if (new_amount == "") new_amount = 0;

            new_value = parseFloat( data_lookup[child_index][element_num] ) - parseFloat( new_amount );

            new_percent = parseFloat( new_amount ) / parseFloat( data_lookup[child_index][element_num] ) * 100;

            if ( ( parseFloat( new_percent ) ) > 100 )
            {
                new_amount = ( parseFloat( data_lookup[child_index][element_num] ) );
                new_value = 0;

                $("#" + element_source + " .percent").val("100");
                $("#" + element_source + " .amount").val(new_amount);
                error_message += ("You entered a value higher than the original amount. \n\n");
                if (error_message != "") alert(error_message);
            }
            else
            {
                $("#" + element_source + " .percent").val(new_percent);                
            }          

            $("#" + element_target + "").html(format_amount( new_value ));            
            calc_array[array_1][array_2] = new_value;              
        }
        //else if (not_null( ($("#" + element_source + " .percent").val() )))
        else if (element_type == "percent")        
        {
            console.log("percent:|" + $("#" + element_source + " .percent").val() + "|");

            new_value = parseFloat( data_lookup[child_index][element_num] ) - ( parseFloat( data_lookup[child_index][element_num] ) * parseFloat($("#" + element_source + " .percent").val() / 100 ) );

            new_amount = ( parseFloat( data_lookup[child_index][element_num] ) * parseFloat($("#" + element_source + " .percent").val() / 100 ) );
            $("#" + element_source + " .amount").val(new_amount);

            $("#" + element_target + "").html( format_amount( new_value ) );
            calc_array[array_1][array_2] = new_value;
        }

        // special case:
        if (element_source == "value_13_3")
        {
            //if ($("#" + element_source + " .percent").val() == "100")
            if (  parseFloat( $("#" + element_source + " .percent").val() ) > 0)
            {
                //$("#value_16_2").html("0");
                //$("#value_16_2").html(format_amount(data_lookup[child_index]['13']));
                $("#value_16_3 .amount").val(data_lookup[child_index]['13']); // "0"
                $("#value_16_3 .percent").val("100"); // "0"
                $("#value_16_5").val("$0.00"); 

                //calc_array__housing_orig = calc_array[14][6]; 
                calc_array[14][6] = 0; 
                //calc_array[14][6]                             
            }
            else
            {
                //$("#value_16_2").html(format_amount(data_lookup[child_index]['13']));
                
                //calc_array[14][6] = calc_array__housing_orig;
                new_value_13 = parseFloat( data_lookup[child_index]['13'] ) - parseFloat( $("#value_16_3 .amount").val() );
                console.log("new_value_13", new_value_13, parseFloat( data_lookup[child_index]['13'] ), parseFloat( $("#value_16_3 .amount").val() ));

                calc_array[14][6] = new_value_13;
                $("#value_16_5").html(format_amount(calc_array[14][6]));
            }
        } 

        // $("#value_3_4").html(format_amount(data[child_index]['2']));
        // $("#value_4_4").html(format_amount(data[child_index]['3']));
        // $("#value_5_4").html(format_amount(data[child_index]['4']));
        // $("#value_6_4").html(format_amount(data[child_index]['5']));
        // $("#value_7_4").html(format_amount(data[child_index]['6']));
        // $("#value_8_4").html(format_amount(data[child_index]['7']));
        // $("#value_9_4").html(format_amount(data[child_index]['8']));   
    }  

    field__number_of_children__prev = field__number_of_children;

    update_calc_data();  
}


// update display of calculations (called from everywhere)
function update_calc_data()
{
    console.log("calc_array: ", calc_array);


    // update fields for child tabs

    if (param_tab > 1)  
    {
        if (field__is_live_with_parent == "Yes")
        {
            $("#value_13_3 .percent").prop('disabled', true);
            $("#value_13_3 .amount").prop('disabled', true);

            $("#value_16_3 .percent").prop('disabled', true);
            $("#value_16_3 .amount").prop('disabled', true);


            $("#value_13_3 .percent").val(localStorage['value_13_3__percent__1']);
            $("#value_13_3 .amount").val(localStorage['value_13_3__amount__1']);

            $("#value_16_3 .percent").val(localStorage['value_16_3__percent__1']);
            $("#value_16_3 .amount").val(localStorage['value_16_3__amount__1']);
            
        }
        else
        {
            $("#value_13_3 .percent").prop('disabled', false);
            $("#value_13_3 .amount").prop('disabled', false);

            $("#value_16_3 .percent").prop('disabled', false);
            $("#value_16_3 .amount").prop('disabled', false);


        }           
    } 
    

    //// update based on entered values in results table:

    $("#value_2_4").html( format_amount(calc_array[1][5]) );
    $("#value_3_4").html( format_amount(calc_array[2][5]) );
    $("#value_4_4").html( format_amount(calc_array[3][5]) );
    $("#value_5_4").html( format_amount(calc_array[4][5]) );
    $("#value_6_4").html( format_amount(calc_array[5][5]) );
    $("#value_7_4").html( format_amount(calc_array[6][5]) );
    $("#value_8_4").html( format_amount(calc_array[7][5]) );
    $("#value_9_4").html( format_amount(calc_array[8][5]) );

    total_startup = parseFloat(calc_array[1][5]) + parseFloat(calc_array[2][5]) + parseFloat(calc_array[3][5]) + parseFloat(calc_array[4][5]) + parseFloat(calc_array[5][5]) + parseFloat(calc_array[6][5]) + parseFloat(calc_array[7][5]) + parseFloat(calc_array[8][5]);
    $("#value_10_4").html( format_amount(total_startup) );



    $("#value_12_5").html( format_amount(calc_array[10][6]) );
    $("#value_13_5").html( format_amount(calc_array[11][6]) );
    $("#value_14_5").html( format_amount(calc_array[12][6]) );
    $("#value_15_5").html( format_amount(calc_array[13][6]) );
    $("#value_16_5").html( format_amount(calc_array[14][6]) );

    $("#value_18_5").html(format_amount( age_of_majority_top_up ));

    // special case:
    if ($("#value_13_3 .percent").val() == "100")
    {
        $("#value_16_5").html( "$0.00" );
    }

    total_rap = parseFloat(calc_array[10][6]) + parseFloat(calc_array[11][6]) + parseFloat(calc_array[12][6]) + parseFloat(calc_array[13][6]) + parseFloat(calc_array[14][6]) + age_of_majority_top_up;
    $("#value_17_5").html( format_amount(total_rap) );
 
    $("#value_35_5").html( format_amount(calc_array[19][6]) );

    if (field__is_pregnant == "Yes")
    {
        $("#value_32_5").html( format_amount(calc_array[16][6]) );
        $("#value_33_4").html( format_amount(calc_array[17][5]) );
        $("#value_34_4").html( format_amount(calc_array[18][5]) );
        
        total_special_allowances__onetime = parseFloat(calc_array[17][5]) + parseFloat(calc_array[18][5]);
        total_special_allowances__monthly = parseFloat(calc_array[16][6]) + parseFloat(calc_array[19][6]);

        $("#value_37_4").html( format_amount(total_special_allowances__onetime) );
        $("#value_37_5").html( format_amount(total_special_allowances__monthly) );        
    }
    else
    {
        total_special_allowances__onetime = 0;
        total_special_allowances__monthly = parseFloat(calc_array[19][6]);

        $("#value_32_5").html( "" );
        $("#value_33_4").html( "" );
        $("#value_34_4").html( "" );

        $("#value_37_4").html( "" );
        $("#value_37_5").html( "" );               
    }



    // subtotal estimate sponsorship cost

    var subtotal_sponsorship_cost__onetime__after_inkind = parseFloat(total_startup) + parseFloat(total_special_allowances__onetime);
    var subtotal_sponsorship_cost__monthly__after_inkind = parseFloat(total_rap) + parseFloat(total_special_allowances__monthly);

    // $("#value_38_1").html(format_amount(subtotal_sponsorship_cost__onetime));
    // $("#value_38_2").html(format_amount(subtotal_sponsorship_cost__monthly));

    console.log("subtotal_sponsorship_cost__onetime:", subtotal_sponsorship_cost__onetime);
    console.log("subtotal_sponsorship_cost__monthly:", subtotal_sponsorship_cost__monthly, total_rap, total_special_allowances__monthly);



    // total adjustments to income - "Deductions due to Family Monthly Income"

    field__total_monthly_income = $("#field__total_monthly_income").val();
    field__total_monthly_income = field__total_monthly_income.replace(/\,/g, "");
    if (is_null(field__total_monthly_income)) field__total_monthly_income = 0;    


    //var total_sponsorship_cost__onetime = subtotal_sponsorship_cost__onetime;

    //var total_sponsorship_cost__monthly = parseFloat(subtotal_sponsorship_cost__monthly) - ( parseFloat(field__total_monthly_income) / 2);

    var total_sponsorship_cost__monthly_deductions = (parseFloat(field__total_monthly_income)) - (parseFloat(subtotal_sponsorship_cost__monthly) / 2);
    if ( (parseFloat(total_sponsorship_cost__monthly_deductions)) < 0 ) total_sponsorship_cost__monthly_deductions = 0;

    // var total_sponsorship_cost__monthly = parseFloat(subtotal_sponsorship_cost__monthly) - parseFloat(total_sponsorship_cost__monthly_deductions);

    // if ( parseFloat(total_sponsorship_cost__monthly) < 0 ) total_sponsorship_cost__monthly = 0;
    
    total_sponsorship_cost__annually_deductions = parseFloat(total_sponsorship_cost__monthly_deductions) * 12;

    $("#value_53_2").html(format_amount(total_sponsorship_cost__monthly_deductions));    
    $("#value_53_3").html(format_amount(total_sponsorship_cost__annually_deductions)); 

    console.log("total_sponsorship_cost__monthly_deductions:", total_sponsorship_cost__monthly_deductions);  


    //obj = JSON.parse(localStorage.object);
    calc_totals[param_tab].total_2.startup = 0;
    calc_totals[param_tab].total_2.monthly = total_sponsorship_cost__monthly_deductions;
    calc_totals[param_tab].total_2.annually = total_sponsorship_cost__annually_deductions;

    console.log("calc_totals", calc_totals);

    localStorage.calc_totals = JSON.stringify(calc_totals);     


    // "Deductions due to In-Kind Support"

    var total_inkind_cost__onetime = 0 +
            parseFloat(get_num($("#value_2_3 .amount").val())) + 
            parseFloat(get_num($("#value_3_3 .amount").val())) + 
            parseFloat(get_num($("#value_4_3 .amount").val())) + 
            parseFloat(get_num($("#value_5_3 .amount").val())) + 
            parseFloat(get_num($("#value_6_3 .amount").val())) + 
            parseFloat(get_num($("#value_7_3 .amount").val())) + 
            parseFloat(get_num($("#value_8_3 .amount").val())) +
            parseFloat(get_num($("#value_9_3 .amount").val())) +

            parseFloat(get_num($("#value_33_3 .amount").val())) + 
            parseFloat(get_num($("#value_34_3 .amount").val())); 

    var total_inkind_cost__monthly = 0 +
            parseFloat(get_num($("#value_12_3 .amount").val())) + 
            parseFloat(get_num($("#value_13_3 .amount").val())) +
            parseFloat(get_num($("#value_16_3 .amount").val())) +
            
            parseFloat(get_num($("#value_32_3 .amount").val())) +
            parseFloat(get_num($("#value_35_3 .amount").val()));

    total_inkind_cost__annually = parseFloat(total_inkind_cost__monthly) * 12;

    //var total_inkind_cost__text = "<div></div>";

    // "Deductions due to In-Kind Support"
    $("#value_61_3_left").html(format_amount(total_inkind_cost__onetime));
    $("#value_61_3_right").html(format_amount(total_inkind_cost__monthly));
    $("#value_61_5a").html(format_amount(total_inkind_cost__annually));

    console.log("total_inkind_cost__onetime:", total_inkind_cost__onetime);
    console.log("total_inkind_cost__monthly:", total_inkind_cost__monthly);    
    


    //obj = JSON.parse(localStorage.object);
    calc_totals[param_tab].total_3.startup = total_inkind_cost__onetime;
    calc_totals[param_tab].total_3.monthly = total_inkind_cost__monthly;
    calc_totals[param_tab].total_3.annually = total_inkind_cost__annually;

    console.log("calc_totals", calc_totals);

    localStorage.calc_totals = JSON.stringify(calc_totals);



    // "Total Estimated Minimum Sponsorship Costs"

    var total_sponsorship_cost__onetime = parseFloat(subtotal_sponsorship_cost__onetime) - parseFloat(total_inkind_cost__onetime);

    var total_sponsorship_cost__monthly = parseFloat(subtotal_sponsorship_cost__monthly) - parseFloat(total_sponsorship_cost__monthly_deductions) - parseFloat(total_inkind_cost__monthly);

    if ( parseFloat(total_sponsorship_cost__monthly) < 0 ) total_sponsorship_cost__monthly = 0;

    total_sponsorship_cost__annually = parseFloat(total_sponsorship_cost__monthly) * 12;

    $("#value_61_4").html(format_amount(total_sponsorship_cost__onetime));
    $("#value_61_5").html(format_amount(total_sponsorship_cost__monthly)); 
    $("#value_61_6a").html(format_amount(total_sponsorship_cost__annually));

    console.log("total_sponsorship_cost__onetime:", total_sponsorship_cost__onetime, subtotal_sponsorship_cost__onetime, total_inkind_cost__onetime);
    console.log("total_sponsorship_cost__monthly:", total_sponsorship_cost__monthly); 


    //obj = JSON.parse(localStorage.object);
    calc_totals[param_tab].total_4.startup = total_sponsorship_cost__onetime;
    calc_totals[param_tab].total_4.monthly = total_sponsorship_cost__monthly;
    calc_totals[param_tab].total_4.annually = total_sponsorship_cost__annually;

    console.log("calc_totals", calc_totals);

    localStorage.calc_totals = JSON.stringify(calc_totals);



    localStorage['value_61_4__totals'] = total_sponsorship_cost__onetime;   


    $("#value_61_4__totals").html(format_amount(total_sponsorship_cost__onetime));
    $("#value_61_4__totals").html("nnn");


    // save values to be used in oter tabs:
    
    localStorage['value_13_3__percent__'+param_tab] = $("#value_13_3 .percent").val();
    localStorage['value_13_3__amount__'+param_tab] = $("#value_13_3 .amount").val();

    localStorage['value_16_3__percent__'+param_tab] = $("#value_16_3 .percent").val();
    localStorage['value_16_3__amount__'+param_tab] = $("#value_16_3 .amount").val();   



    // save all values in memory:

    //calc_totals[param_tab]['section_1_line_1'] = "";    

    //obj = JSON.parse(localStorage.object);

    calc_totals[param_tab].section_1_line_1.onetime = $("#value_2_1").html();
    calc_totals[param_tab].section_1_line_1.monthly = "";
    calc_totals[param_tab].section_1_line_1.inkind = $("#value_2_3 .amount").val();
    calc_totals[param_tab].section_1_line_1.onetime_adjusted = $("#value_2_4").html();;
    calc_totals[param_tab].section_1_line_1.monthly_adjusted = ""; 

    calc_totals[param_tab].section_1_line_2.onetime = $("#value_3_1").html();
    calc_totals[param_tab].section_1_line_2.monthly = "";
    calc_totals[param_tab].section_1_line_2.inkind = $("#value_3_3 .amount").val();
    calc_totals[param_tab].section_1_line_2.onetime_adjusted = $("#value_3_4").html();;
    calc_totals[param_tab].section_1_line_2.monthly_adjusted = ""; 

    calc_totals[param_tab].section_1_line_3.onetime = $("#value_4_1").html();
    calc_totals[param_tab].section_1_line_3.monthly = "";
    calc_totals[param_tab].section_1_line_3.inkind = $("#value_4_3 .amount").val();
    calc_totals[param_tab].section_1_line_3.onetime_adjusted = $("#value_4_4").html();;
    calc_totals[param_tab].section_1_line_3.monthly_adjusted = ""; 

    calc_totals[param_tab].section_1_line_4.onetime = $("#value_5_1").html();
    calc_totals[param_tab].section_1_line_4.monthly = "";
    calc_totals[param_tab].section_1_line_4.inkind = $("#value_5_3 .amount").val();
    calc_totals[param_tab].section_1_line_4.onetime_adjusted = $("#value_5_4").html();;
    calc_totals[param_tab].section_1_line_4.monthly_adjusted = ""; 

    calc_totals[param_tab].section_1_line_5.onetime = $("#value_6_1").html();
    calc_totals[param_tab].section_1_line_5.monthly = "";
    calc_totals[param_tab].section_1_line_5.inkind = $("#value_6_3 .amount").val();
    calc_totals[param_tab].section_1_line_5.onetime_adjusted = $("#value_6_4").html();;
    calc_totals[param_tab].section_1_line_5.monthly_adjusted = "";     

    calc_totals[param_tab].section_1_line_6.onetime = $("#value_7_1").html();
    calc_totals[param_tab].section_1_line_6.monthly = "";
    calc_totals[param_tab].section_1_line_6.inkind = $("#value_7_3 .amount").val();
    calc_totals[param_tab].section_1_line_6.onetime_adjusted = $("#value_7_4").html();;
    calc_totals[param_tab].section_1_line_6.monthly_adjusted = "";     

    calc_totals[param_tab].section_1_line_7.onetime = $("#value_8_1").html();
    calc_totals[param_tab].section_1_line_7.monthly = "";
    calc_totals[param_tab].section_1_line_7.inkind = $("#value_8_3 .amount").val();
    calc_totals[param_tab].section_1_line_7.onetime_adjusted = $("#value_8_4").html();;
    calc_totals[param_tab].section_1_line_7.monthly_adjusted = "";     

    calc_totals[param_tab].section_1_line_8.onetime = $("#value_9_1").html();
    calc_totals[param_tab].section_1_line_8.monthly = "";
    calc_totals[param_tab].section_1_line_8.inkind = $("#value_9_3 .amount").val();
    calc_totals[param_tab].section_1_line_8.onetime_adjusted = $("#value_9_4").html();;
    calc_totals[param_tab].section_1_line_8.monthly_adjusted = "";     





    calc_totals[param_tab].section_2_line_1.onetime = $("#value_12_1").html();
    calc_totals[param_tab].section_2_line_1.monthly = $("#value_12_2").html();
    calc_totals[param_tab].section_2_line_1.inkind = $("#value_12_3 .amount").val();
    calc_totals[param_tab].section_2_line_1.onetime_adjusted = $("#value_12_4").html();
    calc_totals[param_tab].section_2_line_1.monthly_adjusted = $("#value_12_5").html();

    calc_totals[param_tab].section_2_line_2.onetime = $("#value_13_1").html();
    calc_totals[param_tab].section_2_line_2.monthly = $("#value_13_2").html();
    calc_totals[param_tab].section_2_line_2.inkind = $("#value_13_3 .amount").val();
    calc_totals[param_tab].section_2_line_2.onetime_adjusted = $("#value_13_4").html();
    calc_totals[param_tab].section_2_line_2.monthly_adjusted = $("#value_13_5").html();

    calc_totals[param_tab].section_2_line_3.onetime = $("#value_16_1").html();
    calc_totals[param_tab].section_2_line_3.monthly = $("#value_16_2").html();
    calc_totals[param_tab].section_2_line_3.inkind = $("#value_16_3 .amount").val();
    calc_totals[param_tab].section_2_line_3.onetime_adjusted = $("#value_16_4").html();
    calc_totals[param_tab].section_2_line_3.monthly_adjusted = $("#value_16_5").html(); 

    calc_totals[param_tab].section_2_line_4.onetime = $("#value_14_1").html();
    calc_totals[param_tab].section_2_line_4.monthly = $("#value_14_2").html();
    calc_totals[param_tab].section_2_line_4.inkind = $("#value_14_3 .amount").val();
    calc_totals[param_tab].section_2_line_4.onetime_adjusted = $("#value_14_4").html();
    calc_totals[param_tab].section_2_line_4.monthly_adjusted = $("#value_14_5").html();

    calc_totals[param_tab].section_2_line_5.onetime = $("#value_15_1").html();
    calc_totals[param_tab].section_2_line_5.monthly = $("#value_15_2").html();
    calc_totals[param_tab].section_2_line_5.inkind = $("#value_15_3 .amount").val();
    calc_totals[param_tab].section_2_line_5.onetime_adjusted = $("#value_15_4").html();
    calc_totals[param_tab].section_2_line_5.monthly_adjusted = $("#value_15_5").html();    

    calc_totals[param_tab].section_2_line_6.onetime = $("#value_18_1").html();
    calc_totals[param_tab].section_2_line_6.monthly = $("#value_18_2").html();
    calc_totals[param_tab].section_2_line_6.inkind = $("#value_18_3 .amount").val();
    calc_totals[param_tab].section_2_line_6.onetime_adjusted = $("#value_18_4").html();
    calc_totals[param_tab].section_2_line_6.monthly_adjusted = $("#value_18_5").html();    





    calc_totals[param_tab].section_3_line_1.onetime = $("#value_32_1").html();
    calc_totals[param_tab].section_3_line_1.monthly = $("#value_32_2").html();
    // calc_totals[param_tab].section_3_line_1.inkind = $("#value_32_3 .amount").val();
    // calc_totals[param_tab].section_3_line_1.onetime_adjusted = $("#value_32_4").html();
    // calc_totals[param_tab].section_3_line_1.monthly_adjusted = $("#value_32_5").html(); 

/*
    calc_totals[param_tab].section_3_line_2.onetime = $("#value_34_1").html();
    calc_totals[param_tab].section_3_line_2.monthly = $("#value_34_2").html();
    // calc_totals[param_tab].section_3_line_2.inkind = $("#value_33_3 .amount").val();
    // calc_totals[param_tab].section_3_line_2.onetime_adjusted = $("#value_34_4").html();;
    // calc_totals[param_tab].section_3_line_2.monthly_adjusted = $("#value_35_5").html();


    calc_totals[param_tab].section_3_line_3.onetime = $("#value_35_1").html();
    calc_totals[param_tab].section_3_line_3.monthly = $("#value_35_2").html();
    // calc_totals[param_tab].section_3_line_3.inkind = $("#value_34_3 .amount").val();
    // calc_totals[param_tab].section_3_line_3.onetime_adjusted = $("#value_34_4").html();
    // calc_totals[param_tab].section_3_line_3.monthly_adjusted = $("#value_32_5").html();

    calc_totals[param_tab].section_3_line_4.onetime = $("#value_37_1").html();
    calc_totals[param_tab].section_3_line_4.monthly = $("#value_37_2").html();
    // calc_totals[param_tab].section_3_line_4.inkind = $("#value_35_3 .amount").val();
    // calc_totals[param_tab].section_3_line_4.onetime_adjusted = $("#value_35_4").html();;
    // calc_totals[param_tab].section_3_line_4.monthly_adjusted = $("#value_35_5").html(); 
*/

    // fix:

    calc_totals[param_tab].section_3_line_2.onetime = $("#value_33_1").html();
    calc_totals[param_tab].section_3_line_2.monthly = $("#value_33_2").html();

    calc_totals[param_tab].section_3_line_3.onetime = $("#value_34_1").html();
    calc_totals[param_tab].section_3_line_3.monthly = $("#value_34_2").html();

    calc_totals[param_tab].section_3_line_4.onetime = $("#value_35_1").html();
    calc_totals[param_tab].section_3_line_4.monthly = $("#value_35_2").html();




    // add culumn 4:

    var grand_total_1 = parseFloat(calc_totals[param_tab].total_1.annually) + parseFloat(calc_totals[param_tab].total_1.startup);
    var grand_total_2 = parseFloat(calc_totals[param_tab].total_2.annually) + parseFloat(calc_totals[param_tab].total_2.startup);
    var grand_total_3 = parseFloat(calc_totals[param_tab].total_3.annually) + parseFloat(calc_totals[param_tab].total_3.startup);
    var grand_total_4 = parseFloat(calc_totals[param_tab].total_4.annually) + parseFloat(calc_totals[param_tab].total_4.startup);


    $("#value_38_4").html(format_amount(grand_total_1));
    $("#value_53_4").html(format_amount(grand_total_2));
    $("#value_62_4").html(format_amount(grand_total_3));
    $("#value_62_5").html(format_amount(grand_total_4)); 




    //// display months:


    function days_in_month(month, year) 
    {
        // Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
        // but by using 0 as the day it will give us the last day of the prior
        // month. So passing in 1 as the month number will return the last day
        // of January, not February    
        return new Date(year, month, 0).getDate();
    }    

    // lookups:
  
    //const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];        
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    var monthNames_fr = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]; 

    if (languageCode == "fr") monthNames = monthNames_fr;


    var start_year = 1;   
    start_year = calc_totals[param_tab].params.item_date_year;

    var start_month = 1;   
    start_month = calc_totals[param_tab].params.item_date_month;

    //start_month++; if (start_month > 12) start_month = 1; // start with next month

    var start_day = 16;   
    start_day = calc_totals[param_tab].params.item_date_day;

    var daily_rate = calc_totals[param_tab].total_4.monthly / 365 * 12;

    var days_in_start_month = days_in_month(start_month, start_year);
    if (!days_in_start_month) days_in_start_month = 30;

    var regular_month = calc_totals[param_tab].total_4.monthly;
    //var first_month = (days_in_start_month - (start_day-1) ) * daily_rate;
    var first_month = ( (days_in_start_month - (start_day-1) ) / (days_in_start_month) ) * regular_month;
    var last_month = regular_month - first_month; // (start_day-1) * daily_rate;

    var display_day_start = start_day + ", ";

    // render:

    var current_month = start_month;
    var current_year = start_year;
    var current_month_value = "";

    for (var month_counter=1; month_counter<=13; month_counter++)
    {
        if (month_counter > 1) display_day_start = "";

        $("#value_monthly_breakdown__month_" + month_counter + "__name").html(  
            monthNames[current_month-1] + " " + display_day_start + current_year 
        );

        current_month_value = calc_totals[param_tab].total_4.monthly;
        if ( (month_counter==1) ) current_month_value = first_month;
        if ( (month_counter==13) ) current_month_value = last_month;

        $("#value_monthly_breakdown__month_" + month_counter + "__value").html(
            " " + format_amount(current_month_value)
        );            

        if (month_counter == 1)
        {
            calc_totals[param_tab].monthly_breakdown_1.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_1.value = format_amount(current_month_value);            
        }
        else if (month_counter == 2)
        {
            calc_totals[param_tab].monthly_breakdown_2.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_2.value = format_amount(current_month_value);            
        }
        else if (month_counter == 3)
        {
            calc_totals[param_tab].monthly_breakdown_3.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_3.value = format_amount(current_month_value);            
        }
        else if (month_counter == 4)
        {
            calc_totals[param_tab].monthly_breakdown_4.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_4.value = format_amount(current_month_value);            
        }
        else if (month_counter == 5)
        {
            calc_totals[param_tab].monthly_breakdown_5.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_5.value = format_amount(current_month_value);            
        }
        else if (month_counter == 6)
        {
            calc_totals[param_tab].monthly_breakdown_6.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_6.value = format_amount(current_month_value);            
        }
        else if (month_counter == 7)
        {
            calc_totals[param_tab].monthly_breakdown_7.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_7.value = format_amount(current_month_value);            
        }
        else if (month_counter == 8)
        {
            calc_totals[param_tab].monthly_breakdown_8.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_8.value = format_amount(current_month_value);            
        }
        else if (month_counter == 9)
        {
            calc_totals[param_tab].monthly_breakdown_9.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_9.value = format_amount(current_month_value);            
        }
        else if (month_counter == 10)
        {
            calc_totals[param_tab].monthly_breakdown_10.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_10.value = format_amount(current_month_value);            
        }
        else if (month_counter == 11)
        {
            calc_totals[param_tab].monthly_breakdown_11.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_11.value = format_amount(current_month_value);            
        }
        else if (month_counter == 12)
        {
            calc_totals[param_tab].monthly_breakdown_12.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_12.value = format_amount(current_month_value);            
        }
        else if (month_counter == 13)
        {
            calc_totals[param_tab].monthly_breakdown_13.name = monthNames[current_month-1] + " " + current_year;
            calc_totals[param_tab].monthly_breakdown_13.value = format_amount(current_month_value);            
        }




        // calc_totals[param_tab]["monthly_breakdown_" + month_counter].name = monthNames[current_month-1] + " " + current_year;
        // calc_totals[param_tab]["monthly_breakdown_" + month_counter].value = format_amount(current_month_value);


        current_month++;
        if (current_month>12) 
        {
            current_month = 1;
            current_year++;
        }
    }      



    console.log("calc_totals", calc_totals);

    localStorage.calc_totals = JSON.stringify(calc_totals);


    window.parent.postMessage('update_calc','*');

}


// lookups:

function get_age_of_majority(province)
{
    return(18);

    // old values:
    // // 19 in BC, NB, NFLD, and NS
    // if ( (province == "bc") || (province == "nb") || (province == "nl") || (province == "ns") )
    //     return(19);
    // else 
    //     return(18);
}

//// utilities:

function not_null(str) 
{
    if ( (str != undefined) && (str != "undefined") && (str != null) && (str != "null") && (str != "") && (str != NaN) && (str != "NaN") ) return true; else return false;
    //&& ( (data).val().length != 0)
}

function is_null(str) 
{
    return !not_null(str) ;
}

function format_amount(n)
{
    if (languageCode == "fr")
    {
        lang_code = "fr-IN";
        prefix = "";
        postfix = " $";
    }
    else
    {
        lang_code = "en-IN";
        prefix = "$";
        postfix = "";
    }

    var formatter = new Intl.NumberFormat(lang_code, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    n1 = formatter.format(n);

    formatted_val = prefix + n1 + postfix; // + parseFloat(n).toFixed(2).toLocaleString();
    return formatted_val;
}

function get_num(str) 
{
    if (is_null(str)) 
    {
        return "0";
    }
    else
    {
        var str_parsed = parseFloat(str);
        if (str_parsed == NaN) return "0";
        else return str;
    } 
}

function string_starts_with(str, word) 
{
    return String(str).indexOf(word, 0) === 0;
}

function shorten_string(str, size)
{
    if (is_null(size)) size=45;
    if(str.length > size) {
        str = str.substring(0,size)+"...";
    }    
    return str;
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
