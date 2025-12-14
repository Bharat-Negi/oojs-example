let emp = [
    {
        'name' : 'Bharat',
        'age' : 42
    },
    {
        'name' : 'Pinky',
        'age' : 30
    },
    {
        'name' : 'Rohan',
        'age' : 25
    },
    {
        'name' : 'Aahana',
        'age' : 7
    }
]

// filter below 26 json value (name : age);
const result = emp.filter((value)=>{
    return value.age > 26;
})
console.log(result);

// map json value (name : age);
const app = document.getElementById('app');
emp.map(({name, age})=>{
    const dataShow = `${name} : ${age}`;
    console.log('Data ===> ', dataShow);
    app.innerHTML += dataShow + "<br/>";
})
