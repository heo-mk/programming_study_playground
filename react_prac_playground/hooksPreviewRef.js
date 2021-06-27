const [file, setFile] = useState('');
const [previewURL, setPreviewURL] = useState('');
const [preview, setPreview] = useState(null);
const fileRef = useRef();

useEffect(() => {
  if (file !== '') // 처음 파일을 등록하지 않았을 때를 방지.
    setPreview(<img className="img_preview" src={previewURL}></img>);
  return () => {
  }
}, [previewURL])

const handleFileOnChange = (event) => {
  event.preventDefault();
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.onloadend = (e) => {
    setFile(file);
    setPreviewURL(reader.result);
  }
  if (file) {
    reader.readAsDataURL(file);
  }
  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  }

  return (
    <>
      <div className = 'preview-rapping'>
        {preview}
      </div>
      <aside className = 'side'>
        <input ref={fileRef} hidden = {true} id = "file" type = 'file' onChange={handleFileOnChange}></input>
        <header className='side-header'>
          <Typography align="center" variant='overline' display='block' gutterButtom>
            Title text
          </Typography>
        </header>
        <div style={{padding:10}}>
          <button onClick={handleFileButtonClick}>Upload</button>
        </div>
      </aside>
    </>  
  )


}