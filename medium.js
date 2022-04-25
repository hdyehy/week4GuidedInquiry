const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const uMonth = prompt(`Please enter a number (1-12) and I'll tell you the corresponding month! : `);

function calendar(m) {
    const rm = m - 1;

    return months[rm];
}
const ans = calendar(uMonth);



if (uMonth >= 1 && uMonth <= 12) {
    alert(`${uMonth} is ${ans}!`);
} else {
    alert('Please enter a number 1-12')
}