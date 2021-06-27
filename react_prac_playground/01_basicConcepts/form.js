//html
<form>
  <lable>
    Name: 
    <input type="text" name="name"/>
  </lable>
  <input type="submit" value="submit"/>
</form>

// controlled component
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}