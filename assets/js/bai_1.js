function total() {

    // console.log(onChangSelectA);

    var benchmark = document.getElementById("benchmark").value;
    var first = checkDiemLiet(document.getElementById("first").value);
    var second = checkDiemLiet(document.getElementById("second").value);
    var thirt = checkDiemLiet(document.getElementById("third").value);
    let selectKhuVuc = document.getElementById('area')
    let selectDoiTuong = document.getElementById('subject')
    let valueSelectKhuVuc = onChangSelect(selectKhuVuc.options[selectKhuVuc.selectedIndex].value)
    let valueSelectDoiTuong = onChangSelect(Number(selectDoiTuong.options[selectDoiTuong.selectedIndex].value))
    let totalDiem
    if (Number(first) !== 0 && Number(second) !== 0 && Number(thirt) !== 0) {
        totalDiem = Number(first) + Number(second) + Number(thirt)

    } else {
        totalDiem = 0
    }

    if (totalDiem !== 0) {

        document.getElementById('kq').innerHTML = totalDiem + valueSelectDoiTuong + valueSelectKhuVuc
    } else {
        document.getElementById('kq').innerHTML = "liệt tan nát r"
    }



    // let select = document.getElementById('area').options[select.selectedIndex].value



    // onChangSelect()

}

// function onChangSelectA(e) {

//     // console.log(valueSelect);
// }
// onChangSelect()

function onChangSelect(e) {
    // console.log(typeof (e), 'value');
    let array
    // let select = document.getElementById('select')

    if (!isNaN(e)) {
        // console.log(e === 1, 'e')
        if (e == 1) {
            array = 2.5
        } else if (e * 1 == 2) {
            array = 1.5
        } else {
            array = 1
        }
    } else {
        // console.log(e, 'eA')
        if (e == "A") {
            array = 2
        } else if (e == "B") {
            array = 1
        } else {
            array = 0.5
        }
    }
    return array


    // let valueSelect = select.options[select.selectedIndex].value
    // console.log(valueSelect);
}
function checkDiemLiet(value) {
    if (value === 0) {
        return 0
    }
    return value
}
// function getValueSelect(event) {
//     const valueInput = event.target.value
//     console.log(valueInput, 'valueInput');
//     switch (valueInput) {
//         case "A":
//             return 2

//             break;
//         case "B":
//             return 1
//             break;
//         case "C":
//             return 0.5
//             break;
//         case 1:
//             return 2.5
//             break;
//         case 2:
//             return 1.5
//             break;
//         case 3:
//             return 1
//             break;
//         default:
//             return 0
//             break;
//     }
// }