// array
// const {name, level} = student;
// const [first, second] = animals;

// object
const student = {
  name: 'Danbi',
  level: 1,
};

const { name, level } = student;
console.log(name, level);

const {name: studentName, level: studentLevel} = student;
console.log(studentName, studentLevel);

// 함수 
// color: ${props => props.color ? props.theme.white : #333}
// color: ${({color, theme}) => (color ? theme.white : #333)}

const animals = ['dog', 'cat']
// const first = animals[0];
// const second = animals[1];
// console.log(first, second);

const [first, second] = animals
console.log(first, second);
console.log();

//
const [value, setValue] = useState();
const value = useState(0)[0];
const setValue = useState(0)[1];

// object
const [date, setDate] = useState({
  start: null, end: null
});

const date = {start: null, end: null};
<Calendar
  start ={date.start}
  end={date.end}/>

const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);