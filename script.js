let temp = prompt(`Сколько градусов на улице?`);

if (temp <= 0) {
    alert(`Очень холодно`);
} else if (temp >= 5 && temp <= 18) {
    alert(`Хорошая погода`);
} else if (temp >= 20) {
    alert(`Очень жарко`);
}

