import React from 'react';
import BranchDropdown from './selects/BranchDropdown';
import Category1 from './selects/Category1';
import Priority from './selects/Priority'

class FeedbackForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          fname: '',
          lname: '',
          emplID: '',
          branch: 'central',
          category1: '',
          category2: '',
          category3: '',
          priority: '',
          comments: '',
          dateStamp: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
      this.setState({
        dateStamp: new Date()
      });

      alert('Thank you for submitting your feedback!');
      event.preventDefault();
    }

    render() {
      let branch = this.state.branch;
      let category1 = this.state.category1;
      let priority = this.state.priority;

      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input name="fname" type="text" value={this.state.fname} onChange={this.handleChange} />
          </label><br></br>

          <label>
            Last Name:
            <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange} />
          </label><br></br>

          <label>
            Employee ID:
            <input name="emplID" type="text" value={this.state.emplID} onChange={this.handleChange} />
          </label><br></br>


          <BranchDropdown
            branch = { branch }
            handleChange = { this.handleChange }
          />

          <Category1
            branch = { category1 }
            handleChange = { this.handleChange }
          />

          <Priority
            branch = { priority }
            handleChange = { this.handleChange }
          />

          <label>
            Feedback:
            <textarea name="comments" value={this.state.comments} onChange={this.handleChange} />
          </label><br></br>

          <input name="submit" type="submit" value="Submit"/><input type="reset" value="Reset" />
        </form>
      );
    }
  }

export default FeedbackForm;
