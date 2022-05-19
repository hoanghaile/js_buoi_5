function total() {
    let resutf
    let text = document.getElementById('text').value
    let number = Number(document.getElementById('number').value)
    console.log(number)
    if (number) {
        if (number <= 50) {
            resuft = number * 500
        }
        else if (number <= 100) {
            resuft = 50 * 500 + ((number - 50) * 650)
        } else if (number <= 200) {
            resuft = 50 * 500 + 50 * 650 + ((number - 100) * 850)
        } else if (number <= 350) {
            resuft = 50 * 500 + 50 * 650 + 100 * 850 + ((number - 150) * 850)
        }
        else {
            resuft = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ((number - 350) * 1300)
        }
    }
    document.getElementById('kq').innerHTML = resuft
}