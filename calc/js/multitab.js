/**
 * 
 *
 *
 */

var languageCode;

var num_of_tabs = 1;

var is_first_time__common_calcs = true; 
var status__show_common_calcs = false; 


//var calc_totals;

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

localStorage.calc_totals = JSON.stringify(calc_totals);  


document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode

    console.log(e.keyCode);

    if ( (e.keyCode == 65) || (e.keyCode == 97) ) // key: a
    {
        $("#calc-results-message").toggle();     
        $(".show-multi-tab-info").toggle();     
    }
};


window.onload = function () {

    // get lang:
    param_lang = getUrlParameter('lang');
    console.log("multitab.js: param_lang:" + param_lang); 
    languageCode = param_lang;

	// init tabs:
    var div = document.getElementById('example-tabs');
    var exampleTabs = new SimpleTabs(div);

    //localStorage.calc_totals = JSON.stringify(calc_totals);

    load_common_values();

	setInterval(function() {

		//load_common_values();

	}, 3000);


    $('#button__download').unbind('click').bind( "click", function( event ) {

        console.log("downloading csv");
        setTimeout(download_bookings(localStorage['login__account_id'], "items_export.xml", $('#order_id_from').val(), $('#order_id_to').val() ), 300);

    });

};


// download:

function download_bookings(account_id, file_name, item_id_from, item_id_to)
{
    // defaults:
    var campaign_id = "";
    var date_created_from = "";
    var date_created_to = "";

    param_lang = getUrlParameter('lang');
    
    // load data:
    // $.get('api/calc.php?action=calc__export&' +
    //     'account_id=' + account_id + 
    //     '&campaign_id=' + campaign_id + 
    //     '&file_name=' + file_name +
    //     '&date_created_from=' + date_created_from +
    //     '&date_created_to=' + date_created_to +        
    //     '&item_id_from=' + item_id_from +
    //     '&item_id_to=' + item_id_to + 
    //     '&' + get_random_int(11111, 99999), 
    //     {}, function(data){ callbackLoadData(data);}, "text");    


    data_post = { values: localStorage.calc_totals, time: "2pm" }; // localStorage.calc_totals;

    $.post('api/calc.php?action=calc__export&' +
        'account_id=' + account_id + 
        '&campaign_id=' + campaign_id + 
        '&file_name=' + file_name +
        '&date_created_from=' + date_created_from +
        '&date_created_to=' + date_created_to +        
        '&item_id_from=' + item_id_from +
        '&item_id_to=' + item_id_to + 
        '&lang=' + param_lang +
        '&' + get_random_int(11111, 99999), 
        data_post, function(data){ callbackLoadData(data);}, "text");    
         

    function callbackLoadData(data)
    {
        // get data:
        // data = adjust_json_data(data);
        // download_data = $.parseJSON(data); 

        document.getElementById('download_link').click();

        // window.open(url, 'Download');
        // window.location = "data:text/csv;base64,77u/" + btoa(output_full); 
    }
}



function add_tab()
{

    calc_totals = JSON.parse(localStorage.calc_totals);

    console.log("add_tab");
    console.log(calc_totals['1'].params.field__city);    
    console.log("---");
    console.log(calc_totals['1'].params.field__province);    
    console.log("---", languageCode);    
    //console.log(localStorage.calc_totals);

    var message1 = "Please calculate the minimal support for the principal applicant, before adding a adult dependant";
    if (languageCode == "fr") message1 = "Calculez le soutien minimal pour le demandeur principal avant d’ajouter un personne à charge majeure. ";

   
    if (is_first_time__common_calcs)
    {
        alert(message1);
    }
    else
    {
        num_of_tabs++;

        // $(".tab-1").removeClass("active");
        // $(".tab-page").removeClass("active-page");

        // $(".tab-2").addClass("active");
        // $("#tab-2").addClass("active-page");    


        $(".tab-" + num_of_tabs).show();
        //$("#tab-2").show();        

        // tab id: "tab-frame-2"
        //window.postMessage('update_location','*');    
    }


}

function remove_tab(tab_num)
{
    console.log("remove_tab: " . tab_num);

    var message1 = "Are you sure, you want to remove this tab and everything in it?";
    if (languageCode == "fr") message1 = "Êtes-vous sûr.e de vouloir supprimer cet onglet et tous les renseignements qu’il comporte?";

  
    //if (confirm('Are you sure, you want to remove tab for dependant ' + (tab_num-1) + ' and everything in it?') )
    if (confirm(message1) )
    {

        $(".tab-" + tab_num).hide();

        num_of_tabs--;

        remove_tab__common_values(tab_num);
        //load_common_values();

    }

  
}


function remove_tab__common_values(tab_num)
{

        //tab_num--;


        calc_totals = JSON.parse(localStorage.calc_totals);


        console.log("remove_tab__common_values: before: calc_totals", calc_totals);

        calc_totals[tab_num].total_1.startup = 0;
        calc_totals[tab_num].total_1.monthly = 0;
        calc_totals[tab_num].total_1.annually = 0;

        calc_totals[tab_num].total_2.startup = 0;
        calc_totals[tab_num].total_2.monthly = 0;
        calc_totals[tab_num].total_2.annually = 0;

        calc_totals[tab_num].total_3.startup = 0;
        calc_totals[tab_num].total_3.monthly = 0;
        calc_totals[tab_num].total_3.annually = 0;

        calc_totals[tab_num].total_4.startup = 0;
        calc_totals[tab_num].total_4.monthly = 0;
        calc_totals[tab_num].total_4.annually = 0;

        console.log("remove_tab__common_values: after: calc_totals", calc_totals);

        localStorage.calc_totals = JSON.stringify(calc_totals);


        // for (i=1; i<=10; i++)
        // {
        //     calc_totals[0].total_1.startup += calc_totals[i].total_1.startup;
        //     calc_totals[0].total_1.monthly += calc_totals[i].total_1.monthly;
        //     calc_totals[0].total_1.annually += calc_totals[i].total_1.annually;

        //     calc_totals[0].total_2.startup += calc_totals[i].total_2.startup;
        //     calc_totals[0].total_2.monthly += calc_totals[i].total_2.monthly;
        //     calc_totals[0].total_2.annually += calc_totals[i].total_2.annually;

        //     calc_totals[0].total_3.startup += calc_totals[i].total_3.startup;
        //     calc_totals[0].total_3.monthly += calc_totals[i].total_3.monthly;
        //     calc_totals[0].total_3.annually += calc_totals[i].total_3.annually;

        //     calc_totals[0].total_4.startup += calc_totals[i].total_4.startup;
        //     calc_totals[0].total_4.monthly += calc_totals[i].total_4.monthly;
        //     calc_totals[0].total_4.annually += calc_totals[i].total_4.annually;        
        // }


        load_common_values();


}

function load_common_values()
{
	console.log("load_common_values");

	calc_totals = JSON.parse(localStorage.calc_totals);

	if (calc_totals[1].total_1.startup != "")
	{

		console.log("calc_totals", calc_totals);

		calc_totals[0].total_1.startup = 0;
		calc_totals[0].total_1.monthly = 0;
		calc_totals[0].total_1.annually = 0;

		calc_totals[0].total_2.startup = 0;
		calc_totals[0].total_2.monthly = 0;
		calc_totals[0].total_2.annually = 0;

		calc_totals[0].total_3.startup = 0;
		calc_totals[0].total_3.monthly = 0;
		calc_totals[0].total_3.annually = 0;

		calc_totals[0].total_4.startup = 0;
		calc_totals[0].total_4.monthly = 0;
		calc_totals[0].total_4.annually = 0;


		for (i=1; i<=10; i++)
		{
			calc_totals[0].total_1.startup += calc_totals[i].total_1.startup;
			calc_totals[0].total_1.monthly += calc_totals[i].total_1.monthly;
			calc_totals[0].total_1.annually += calc_totals[i].total_1.annually;

			calc_totals[0].total_2.startup += calc_totals[i].total_2.startup;
			calc_totals[0].total_2.monthly += calc_totals[i].total_2.monthly;
			calc_totals[0].total_2.annually += calc_totals[i].total_2.annually;

			calc_totals[0].total_3.startup += calc_totals[i].total_3.startup;
			calc_totals[0].total_3.monthly += calc_totals[i].total_3.monthly;
			calc_totals[0].total_3.annually += calc_totals[i].total_3.annually;

			calc_totals[0].total_4.startup += calc_totals[i].total_4.startup;
			calc_totals[0].total_4.monthly += calc_totals[i].total_4.monthly;
			calc_totals[0].total_4.annually += calc_totals[i].total_4.annually;		
		}

        var grand_total_1 = parseFloat(calc_totals[0].total_1.annually) + parseFloat(calc_totals[0].total_1.startup);
        var grand_total_2 = parseFloat(calc_totals[0].total_2.annually) + parseFloat(calc_totals[0].total_2.startup);
        var grand_total_3 = parseFloat(calc_totals[0].total_3.annually) + parseFloat(calc_totals[0].total_3.startup);
        var grand_total_4 = parseFloat(calc_totals[0].total_4.annually) + parseFloat(calc_totals[0].total_4.startup);


        $("#value_100_4").html(format_amount(grand_total_1));
        $("#value_101_4").html(format_amount(grand_total_2));
        $("#value_102_4").html(format_amount(grand_total_3));
        $("#value_103_4").html(format_amount(grand_total_4));





		$("#value_100_1").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_1.startup != "") ? " " + format_amount(calc_totals[1].total_1.startup) : "" ) +
								( (calc_totals[2].total_1.startup != "") ? " + " + format_amount(calc_totals[2].total_1.startup) : "" ) +
								( (calc_totals[3].total_1.startup != "") ? " + " + format_amount(calc_totals[3].total_1.startup) : "" ) +
								( (calc_totals[4].total_1.startup != "") ? " + " + format_amount(calc_totals[4].total_1.startup) : "" ) +
								( (calc_totals[5].total_1.startup != "") ? " + " + format_amount(calc_totals[5].total_1.startup) : "" ) +
								( (calc_totals[6].total_1.startup != "") ? " + " + format_amount(calc_totals[6].total_1.startup) : "" ) +
								( (calc_totals[7].total_1.startup != "") ? " + " + format_amount(calc_totals[7].total_1.startup) : "" ) +
								( (calc_totals[8].total_1.startup != "") ? " + " + format_amount(calc_totals[8].total_1.startup) : "" ) +
								( (calc_totals[9].total_1.startup != "") ? " + " + format_amount(calc_totals[9].total_1.startup) : "" ) +
								( (calc_totals[10].total_1.startup != "") ? " + " + format_amount(calc_totals[10].total_1.startup) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_1.startup)
							);

		$("#value_100_2").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_1.monthly != "") ? " " + format_amount(calc_totals[1].total_1.monthly) : "" ) +
								( (calc_totals[2].total_1.monthly != "") ? " + " + format_amount(calc_totals[2].total_1.monthly) : "" ) +
								( (calc_totals[3].total_1.monthly != "") ? " + " + format_amount(calc_totals[3].total_1.monthly) : "" ) +
								( (calc_totals[4].total_1.monthly != "") ? " + " + format_amount(calc_totals[4].total_1.monthly) : "" ) +
								( (calc_totals[5].total_1.monthly != "") ? " + " + format_amount(calc_totals[5].total_1.monthly) : "" ) +
								( (calc_totals[6].total_1.monthly != "") ? " + " + format_amount(calc_totals[6].total_1.monthly) : "" ) +
								( (calc_totals[7].total_1.monthly != "") ? " + " + format_amount(calc_totals[7].total_1.monthly) : "" ) +
								( (calc_totals[8].total_1.monthly != "") ? " + " + format_amount(calc_totals[8].total_1.monthly) : "" ) +
								( (calc_totals[9].total_1.monthly != "") ? " + " + format_amount(calc_totals[9].total_1.monthly) : "" ) +
								( (calc_totals[10].total_1.monthly != "") ? " + " + format_amount(calc_totals[10].total_1.monthly) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_1.monthly)
							);

		$("#value_100_3").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_1.annually != "") ? " " + format_amount(calc_totals[1].total_1.annually) : "" ) +
								( (calc_totals[2].total_1.annually != "") ? " + " + format_amount(calc_totals[2].total_1.annually) : "" ) +
								( (calc_totals[3].total_1.annually != "") ? " + " + format_amount(calc_totals[3].total_1.annually) : "" ) +
								( (calc_totals[4].total_1.annually != "") ? " + " + format_amount(calc_totals[4].total_1.annually) : "" ) +
								( (calc_totals[5].total_1.annually != "") ? " + " + format_amount(calc_totals[5].total_1.annually) : "" ) +
								( (calc_totals[6].total_1.annually != "") ? " + " + format_amount(calc_totals[6].total_1.annually) : "" ) +
								( (calc_totals[7].total_1.annually != "") ? " + " + format_amount(calc_totals[7].total_1.annually) : "" ) +
								( (calc_totals[8].total_1.annually != "") ? " + " + format_amount(calc_totals[8].total_1.annually) : "" ) +
								( (calc_totals[9].total_1.annually != "") ? " + " + format_amount(calc_totals[9].total_1.annually) : "" ) +
								( (calc_totals[10].total_1.annually != "") ? " + " + format_amount(calc_totals[10].total_1.annually) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_1.annually)
							);

		// $("#value_100_2").html( format_amount(calc_totals[0].total_1.monthly) + " + " + 
		// 						format_amount(calc_totals[1].total_1.monthly));

		// $("#value_100_3").html( format_amount(calc_totals[0].total_1.annually) + " + " + 
		// 						format_amount(calc_totals[1].total_1.annually));

		$("#value_101_1").html( format_amount(calc_totals[0].total_2.startup) );
		$("#value_101_2").html( format_amount(calc_totals[0].total_2.monthly) );
		$("#value_101_3").html( format_amount(calc_totals[0].total_2.annually) );

		$("#value_101_1").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_2.startup != "") ? " " + format_amount(calc_totals[1].total_2.startup) : "" ) +			
								( (calc_totals[2].total_2.startup != "") ? " + " + format_amount(calc_totals[2].total_2.startup) : "" ) +
								( (calc_totals[3].total_2.startup != "") ? " + " + format_amount(calc_totals[3].total_2.startup) : "" ) +
								( (calc_totals[4].total_2.startup != "") ? " + " + format_amount(calc_totals[4].total_2.startup) : "" ) +
								( (calc_totals[5].total_2.startup != "") ? " + " + format_amount(calc_totals[5].total_2.startup) : "" ) +
								( (calc_totals[6].total_2.startup != "") ? " + " + format_amount(calc_totals[6].total_2.startup) : "" ) +
								( (calc_totals[7].total_2.startup != "") ? " + " + format_amount(calc_totals[7].total_2.startup) : "" ) +
								( (calc_totals[8].total_2.startup != "") ? " + " + format_amount(calc_totals[8].total_2.startup) : "" ) +
								( (calc_totals[9].total_2.startup != "") ? " + " + format_amount(calc_totals[9].total_2.startup) : "" ) +
								( (calc_totals[10].total_2.startup != "") ? " + " + format_amount(calc_totals[10].total_2.startup) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_2.startup)
							);

		$("#value_101_2").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_2.monthly != "") ? " " + format_amount(calc_totals[1].total_2.monthly) : "" ) +			
								( (calc_totals[2].total_2.monthly != "") ? " + " + format_amount(calc_totals[2].total_2.monthly) : "" ) +
								( (calc_totals[3].total_2.monthly != "") ? " + " + format_amount(calc_totals[3].total_2.monthly) : "" ) +
								( (calc_totals[4].total_2.monthly != "") ? " + " + format_amount(calc_totals[4].total_2.monthly) : "" ) +
								( (calc_totals[5].total_2.monthly != "") ? " + " + format_amount(calc_totals[5].total_2.monthly) : "" ) +
								( (calc_totals[6].total_2.monthly != "") ? " + " + format_amount(calc_totals[6].total_2.monthly) : "" ) +
								( (calc_totals[7].total_2.monthly != "") ? " + " + format_amount(calc_totals[7].total_2.monthly) : "" ) +
								( (calc_totals[8].total_2.monthly != "") ? " + " + format_amount(calc_totals[8].total_2.monthly) : "" ) +
								( (calc_totals[9].total_2.monthly != "") ? " + " + format_amount(calc_totals[9].total_2.monthly) : "" ) +
								( (calc_totals[10].total_2.monthly != "") ? " + " + format_amount(calc_totals[10].total_2.monthly) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_2.monthly)
							);

		$("#value_101_3").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_2.annually != "") ? " " + format_amount(calc_totals[1].total_2.annually) : "" ) +			
								( (calc_totals[2].total_2.annually != "") ? " + " + format_amount(calc_totals[2].total_2.annually) : "" ) +
								( (calc_totals[3].total_2.annually != "") ? " + " + format_amount(calc_totals[3].total_2.annually) : "" ) +
								( (calc_totals[4].total_2.annually != "") ? " + " + format_amount(calc_totals[4].total_2.annually) : "" ) +
								( (calc_totals[5].total_2.annually != "") ? " + " + format_amount(calc_totals[5].total_2.annually) : "" ) +
								( (calc_totals[6].total_2.annually != "") ? " + " + format_amount(calc_totals[6].total_2.annually) : "" ) +
								( (calc_totals[7].total_2.annually != "") ? " + " + format_amount(calc_totals[7].total_2.annually) : "" ) +
								( (calc_totals[8].total_2.annually != "") ? " + " + format_amount(calc_totals[8].total_2.annually) : "" ) +
								( (calc_totals[9].total_2.annually != "") ? " + " + format_amount(calc_totals[9].total_2.annually) : "" ) +
								( (calc_totals[10].total_2.annually != "") ? " + " + format_amount(calc_totals[10].total_2.annually) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_2.annually)
							);




		$("#value_102_1").html( format_amount(calc_totals[0].total_3.startup) );
		$("#value_102_2").html( format_amount(calc_totals[0].total_3.monthly) );
		$("#value_102_3").html( format_amount(calc_totals[0].total_3.annually) );

		$("#value_102_1").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_3.startup != "") ? " " + format_amount(calc_totals[1].total_3.startup) : "" ) +			
								( (calc_totals[2].total_3.startup != "") ? " + " + format_amount(calc_totals[2].total_3.startup) : "" ) +
								( (calc_totals[3].total_3.startup != "") ? " + " + format_amount(calc_totals[3].total_3.startup) : "" ) +
								( (calc_totals[4].total_3.startup != "") ? " + " + format_amount(calc_totals[4].total_3.startup) : "" ) +
								( (calc_totals[5].total_3.startup != "") ? " + " + format_amount(calc_totals[5].total_3.startup) : "" ) +
								( (calc_totals[6].total_3.startup != "") ? " + " + format_amount(calc_totals[6].total_3.startup) : "" ) +
								( (calc_totals[7].total_3.startup != "") ? " + " + format_amount(calc_totals[7].total_3.startup) : "" ) +
								( (calc_totals[8].total_3.startup != "") ? " + " + format_amount(calc_totals[8].total_3.startup) : "" ) +
								( (calc_totals[9].total_3.startup != "") ? " + " + format_amount(calc_totals[9].total_3.startup) : "" ) +
								( (calc_totals[10].total_3.startup != "") ? " + " + format_amount(calc_totals[10].total_3.startup) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_3.startup)
							);

		$("#value_102_2").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_3.monthly != "") ? " " + format_amount(calc_totals[1].total_3.monthly) : "" ) +			
								( (calc_totals[2].total_3.monthly != "") ? " + " + format_amount(calc_totals[2].total_3.monthly) : "" ) +
								( (calc_totals[3].total_3.monthly != "") ? " + " + format_amount(calc_totals[3].total_3.monthly) : "" ) +
								( (calc_totals[4].total_3.monthly != "") ? " + " + format_amount(calc_totals[4].total_3.monthly) : "" ) +
								( (calc_totals[5].total_3.monthly != "") ? " + " + format_amount(calc_totals[5].total_3.monthly) : "" ) +
								( (calc_totals[6].total_3.monthly != "") ? " + " + format_amount(calc_totals[6].total_3.monthly) : "" ) +
								( (calc_totals[7].total_3.monthly != "") ? " + " + format_amount(calc_totals[7].total_3.monthly) : "" ) +
								( (calc_totals[8].total_3.monthly != "") ? " + " + format_amount(calc_totals[8].total_3.monthly) : "" ) +
								( (calc_totals[9].total_3.monthly != "") ? " + " + format_amount(calc_totals[9].total_3.monthly) : "" ) +
								( (calc_totals[10].total_3.monthly != "") ? " + " + format_amount(calc_totals[10].total_3.monthly) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_3.monthly)
							);

		$("#value_102_3").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_3.annually != "") ? " " + format_amount(calc_totals[1].total_3.annually) : "" ) +			
								( (calc_totals[2].total_3.annually != "") ? " + " + format_amount(calc_totals[2].total_3.annually) : "" ) +
								( (calc_totals[3].total_3.annually != "") ? " + " + format_amount(calc_totals[3].total_3.annually) : "" ) +
								( (calc_totals[4].total_3.annually != "") ? " + " + format_amount(calc_totals[4].total_3.annually) : "" ) +
								( (calc_totals[5].total_3.annually != "") ? " + " + format_amount(calc_totals[5].total_3.annually) : "" ) +
								( (calc_totals[6].total_3.annually != "") ? " + " + format_amount(calc_totals[6].total_3.annually) : "" ) +
								( (calc_totals[7].total_3.annually != "") ? " + " + format_amount(calc_totals[7].total_3.annually) : "" ) +
								( (calc_totals[8].total_3.annually != "") ? " + " + format_amount(calc_totals[8].total_3.annually) : "" ) +
								( (calc_totals[9].total_3.annually != "") ? " + " + format_amount(calc_totals[9].total_3.annually) : "" ) +
								( (calc_totals[10].total_3.annually != "") ? " + " + format_amount(calc_totals[10].total_3.annually) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_3.annually)
							);



		$("#value_103_1").html( format_amount(calc_totals[0].total_4.startup) );
		$("#value_103_2").html( format_amount(calc_totals[0].total_4.monthly) );
		$("#value_103_3").html( format_amount(calc_totals[0].total_4.annually) );		


		$("#value_103_1").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_4.startup != "") ? " " + format_amount(calc_totals[1].total_4.startup) : "" ) +			
								( (calc_totals[2].total_4.startup != "") ? " + " + format_amount(calc_totals[2].total_4.startup) : "" ) +
								( (calc_totals[3].total_4.startup != "") ? " + " + format_amount(calc_totals[3].total_4.startup) : "" ) +
								( (calc_totals[4].total_4.startup != "") ? " + " + format_amount(calc_totals[4].total_4.startup) : "" ) +
								( (calc_totals[5].total_4.startup != "") ? " + " + format_amount(calc_totals[5].total_4.startup) : "" ) +
								( (calc_totals[6].total_4.startup != "") ? " + " + format_amount(calc_totals[6].total_4.startup) : "" ) +
								( (calc_totals[7].total_4.startup != "") ? " + " + format_amount(calc_totals[7].total_4.startup) : "" ) +
								( (calc_totals[8].total_4.startup != "") ? " + " + format_amount(calc_totals[8].total_4.startup) : "" ) +
								( (calc_totals[9].total_4.startup != "") ? " + " + format_amount(calc_totals[9].total_4.startup) : "" ) +
								( (calc_totals[10].total_4.startup != "") ? " + " + format_amount(calc_totals[10].total_4.startup) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_4.startup)
							);

		$("#value_103_2").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_4.monthly != "") ? " " + format_amount(calc_totals[1].total_4.monthly) : "" ) +			
								( (calc_totals[2].total_4.monthly != "") ? " + " + format_amount(calc_totals[2].total_4.monthly) : "" ) +
								( (calc_totals[3].total_4.monthly != "") ? " + " + format_amount(calc_totals[3].total_4.monthly) : "" ) +
								( (calc_totals[4].total_4.monthly != "") ? " + " + format_amount(calc_totals[4].total_4.monthly) : "" ) +
								( (calc_totals[5].total_4.monthly != "") ? " + " + format_amount(calc_totals[5].total_4.monthly) : "" ) +
								( (calc_totals[6].total_4.monthly != "") ? " + " + format_amount(calc_totals[6].total_4.monthly) : "" ) +
								( (calc_totals[7].total_4.monthly != "") ? " + " + format_amount(calc_totals[7].total_4.monthly) : "" ) +
								( (calc_totals[8].total_4.monthly != "") ? " + " + format_amount(calc_totals[8].total_4.monthly) : "" ) +
								( (calc_totals[9].total_4.monthly != "") ? " + " + format_amount(calc_totals[9].total_4.monthly) : "" ) +
								( (calc_totals[10].total_4.monthly != "") ? " + " + format_amount(calc_totals[10].total_4.monthly) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_4.monthly)
							);

		$("#value_103_3").html( "<span class='show-multi-tab-info'>" + 
								( (calc_totals[1].total_4.annually != "") ? " " + format_amount(calc_totals[1].total_4.annually) : "" ) +			
								( (calc_totals[2].total_4.annually != "") ? " + " + format_amount(calc_totals[2].total_4.annually) : "" ) +
								( (calc_totals[3].total_4.annually != "") ? " + " + format_amount(calc_totals[3].total_4.annually) : "" ) +
								( (calc_totals[4].total_4.annually != "") ? " + " + format_amount(calc_totals[4].total_4.annually) : "" ) +
								( (calc_totals[5].total_4.annually != "") ? " + " + format_amount(calc_totals[5].total_4.annually) : "" ) +
								( (calc_totals[6].total_4.annually != "") ? " + " + format_amount(calc_totals[6].total_4.annually) : "" ) +
								( (calc_totals[7].total_4.annually != "") ? " + " + format_amount(calc_totals[7].total_4.annually) : "" ) +
								( (calc_totals[8].total_4.annually != "") ? " + " + format_amount(calc_totals[8].total_4.annually) : "" ) +
								( (calc_totals[9].total_4.annually != "") ? " + " + format_amount(calc_totals[9].total_4.annually) : "" ) +
								( (calc_totals[10].total_4.annually != "") ? " + " + format_amount(calc_totals[10].total_4.annually) : "" ) +
								" = </span>" + 
								format_amount(calc_totals[0].total_4.annually)
							);



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
        start_year = calc_totals[1].params.item_date_year;

        var start_month = 1;    
        start_month = calc_totals[1].params.item_date_month;

        //start_month++; if (start_month > 12) start_month = 1; // start with next month

        var start_day = 16;   
        start_day = calc_totals[1].params.item_date_day;

        var daily_rate = calc_totals[0].total_4.monthly / 365 * 12;

        var days_in_start_month = days_in_month(start_month, start_year);
        if (!days_in_start_month) days_in_start_month = 30;

        var regular_month = calc_totals[0].total_4.monthly;
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

            current_month_value = calc_totals[0].total_4.monthly;
            if ( (month_counter==1) ) current_month_value = first_month;
            if ( (month_counter==13) ) current_month_value = last_month;

            $("#value_monthly_breakdown__month_" + month_counter + "__value").html(
                " " + format_amount(current_month_value)
            );            


            if (month_counter == 1)
            {
                calc_totals[0].monthly_breakdown_1.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_1.value = format_amount(current_month_value);            
            }
            else if (month_counter == 2)
            {
                calc_totals[0].monthly_breakdown_2.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_2.value = format_amount(current_month_value);            
            }
            else if (month_counter == 3)
            {
                calc_totals[0].monthly_breakdown_3.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_3.value = format_amount(current_month_value);            
            }
            else if (month_counter == 4)
            {
                calc_totals[0].monthly_breakdown_4.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_4.value = format_amount(current_month_value);            
            }
            else if (month_counter == 5)
            {
                calc_totals[0].monthly_breakdown_5.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_5.value = format_amount(current_month_value);            
            }
            else if (month_counter == 6)
            {
                calc_totals[0].monthly_breakdown_6.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_6.value = format_amount(current_month_value);            
            }
            else if (month_counter == 7)
            {
                calc_totals[0].monthly_breakdown_7.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_7.value = format_amount(current_month_value);            
            }
            else if (month_counter == 8)
            {
                calc_totals[0].monthly_breakdown_8.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_8.value = format_amount(current_month_value);            
            }
            else if (month_counter == 9)
            {
                calc_totals[0].monthly_breakdown_9.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_9.value = format_amount(current_month_value);            
            }
            else if (month_counter == 10)
            {
                calc_totals[0].monthly_breakdown_10.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_10.value = format_amount(current_month_value);            
            }
            else if (month_counter == 11)
            {
                calc_totals[0].monthly_breakdown_11.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_11.value = format_amount(current_month_value);            
            }
            else if (month_counter == 12)
            {
                calc_totals[0].monthly_breakdown_12.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_12.value = format_amount(current_month_value);            
            }
            else if (month_counter == 13)
            {
                calc_totals[0].monthly_breakdown_13.name = monthNames[current_month-1] + " " + current_year;
                calc_totals[0].monthly_breakdown_13.value = format_amount(current_month_value);            
            }



            current_month++;
            if (current_month>12) 
            {
                current_month = 1;
                current_year++;
            }
        }


        // $("#value_monthly_breakdown__month_1__value").html(
        //     " " + format_amount(first_month)
        // );

        // $("#value_monthly_breakdown__month_2__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_3__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_4__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_5__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_6__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_7__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_8__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_9__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_10__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_11__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_12__value").html(
        //     format_amount(calc_totals[0].total_4.monthly)
        // );

        // $("#value_monthly_breakdown__month_13__value").html(
        //     format_amount(last_month)
        // );


        //start_day = 16;

        $("#value_monthly_breakdown__details").html(
            "Daily Rate: " + format_amount(daily_rate) + "  &nbsp&nbsp&nbsp&nbsp   " + "Start day: " + (start_day) + "Start month: " + (start_month) + " " + monthNames[start_month-1] 
        );

        //
        



        
        // $("#value_monthly_breakdown__month_3__value").html(
        //     "11"
        // );  

        // $("#value_monthly_breakdown__month_4__value").html(
        //     format_amount("99")
        // );        



        localStorage.calc_totals = JSON.stringify(calc_totals);


        if (is_first_time__common_calcs)
        {
            $(".show-multi-tab-info").hide();     
            is_first_time__common_calcs = false;   
            status__show_common_calcs = false;    
        } 
        else
        {
            if (status__show_common_calcs)
                $(".show-multi-tab-info").show();
            else
                $(".show-multi-tab-info").hide();
        }



	}

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

function get_random_int(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

