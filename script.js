function inputChange(){
    
    parameters_list.innerHTML = '';
    var url_area = document.getElementById('url_area').value;
    var url = new URL(url_area);
    var params = new URLSearchParams(url.search);
    var check_count = 1;
    for(let param of params){
        parameters_list.insertAdjacentHTML('beforeend','<tr data-row-id="u0" class="mdc-data-table__row"><td class="mdc-data-table__cell mdc-data-table__cell--checkbox"><div class="mdc-checkbox mdc-data-table__row-checkbox"><input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u0" id="check_' + check_count + '"><div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" /></svg><div class="mdc-checkbox__mixedmark"></div></div><div class="mdc-checkbox__ripple"></div></div></td><th class="mdc-data-table__cell" scope="row">' + param[0] + '</th><td class="mdc-data-table__cell">' + param[1] + '</td></tr>');
        check_count += 1;
    } 
}
