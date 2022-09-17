let gender;
let activityCoefficient;
let age;
let weight;
let growth;
const form = document.forms.main;
const steps = document.querySelectorAll('.step');

document.querySelector('.calculator-gender__items').addEventListener('click', (event) => {
    document.querySelectorAll('.calculator-gender__item').forEach((item) => {
        item.classList.remove('active');
    });
    if (event.target.parentElement.closest('.calculator-gender__item')) {
        event.target.parentElement.classList.add('active');
    }
});

document.querySelector('#step-1-btn').addEventListener('click', (event) => {
    event.preventDefault();
    gender = form.gender.value;
    steps[0].style.display = 'none';
    steps[1].style.display = 'block';
    console.log(gender);
});


document.querySelector('.calculator-activity__items').addEventListener('click', (event) => {
    document.querySelectorAll('.calculator-activity__item').forEach((item) => {
        item.classList.remove('active');
    });
    if (event.target.parentElement.closest('.calculator-activity__item')) {
        event.target.parentElement.classList.add('active');
    }
});

document.querySelector('#step-2-btn').addEventListener('click', (event) => {
    event.preventDefault();
    activityCoefficient = form.activity.value;
    steps[1].style.display = 'none';
    steps[2].style.display = 'block';
    console.log(activityCoefficient);
});

function check(param) {
    if (param.validity.rangeOverflow || param.validity.rangeUnderflow) {
        alert('Вы ввели недопустимое значение');
        return true;
    }
    return false;
}

form.age.addEventListener('blur', (e) => {
    if (!check(e.target)) {
        age = e.target.value;
        console.log(age);
    }
});

form.growth.addEventListener('blur', (e) => {
    if (!check(e.target)) {
        growth = e.target.value;
        console.log(growth);
    }
});

form.weight.addEventListener('blur', (e) => {
    if (!check(e.target)) {
        weight = e.target.value;
        console.log(weight);
    }
});


function getDailyCalories() {
    if (gender === 'man') {
        return Math.round((10 * weight) + (6.25 * growth) - (5 * age) + 5 * activityCoefficient);
    } else {
        return Math.round((10 * weight) + (6.25 * growth) - (5 * age) - 161 * activityCoefficient);
    }
}

document.querySelector('#step-result').addEventListener('click', (e) => {
    e.preventDefault();
    steps[2].style.display = 'none';
    document.querySelector('.calculator-result').style.display = 'block';
    const index = (weight / ((growth / 100) ** 2)).toFixed(2);
    document.querySelector('#imt-value').innerHTML = index;
    const calories = getDailyCalories();
    document.querySelector('#nc').innerHTML = calories;
});