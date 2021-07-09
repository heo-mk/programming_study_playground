// useState, useEffect 여러개 사용하기
function Form() {
  // 1. name state 변수사용
  const [name, setName] = useState('Mary');

  // 2. Effect 사용해 form 데이터 저장하기
  useEffect(function persistForm() {
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });

  // 3. surname이라는 state 변수 사용하기
  const [surname, setSurname] = useState('Poppins');

  // 4. Effect를 사용해서 제목을 업데이트 해준다.
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });
};






