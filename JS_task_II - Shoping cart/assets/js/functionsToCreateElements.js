
function quantityDropMenu(quantityDiv, selectId, price){
    let select = document.createElement('select');
    select.setAttribute('id', selectId);

    let noneOption = document.createElement('option');
    noneOption.setAttribute('selected', 'selected');
    noneOption.setAttribute('value', '');
    noneOption.innerHTML = '';

    let zeroOption = document.createElement('option');
    zeroOption.setAttribute('value', '0');
    zeroOption.setAttribute('price', '');
    zeroOption.innerHTML = '0';

    let firstOption = document.createElement('option');
    firstOption.setAttribute('value', '1');
    firstOption.setAttribute('price', price);
    firstOption.innerHTML = '1';

    let secondOption = document.createElement('option');
    secondOption.setAttribute('value', '2');
    secondOption.setAttribute('price', price);
    secondOption.innerHTML = '2';

    let thirdOption = document.createElement('option');
    thirdOption.setAttribute('value', '3');
    thirdOption.setAttribute('price', price);
    thirdOption.innerHTML = '3';

    let fourthOption = document.createElement('option');
    fourthOption.setAttribute('value', '4');
    fourthOption.setAttribute('price', price);
    fourthOption.innerHTML = '4';

    select.append(noneOption);
    select.append(zeroOption);
    select.append(firstOption);
    select.append(secondOption);
    select.append(thirdOption);
    select.append(fourthOption);

    
    quantityDiv.append(select);
}

export{
    quantityDropMenu,
    }