import React from 'react';
import BranchDropdown from './selects/BranchDropdown';
import Category1 from './selects/Category1';
import Category2 from './selects/Category2';
import Impact from './selects/Impact';
import Priority from './selects/Priority';

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
          impact: 'improve',
          priority: 'not',
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

      if ( target.name === 'category1' && this.state.category2 !== "") {
        this.setState({category2: ""})
      }
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
      let category2 = this.state.category2;
      let impact = this.state.impact;
      let priority = this.state.priority;

      console.log(branch)
      console.log(category1)
      console.log(category2)
      console.log(impact)
      console.log(priority)

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
            category1 = { category1 }
            handleChange = { this.handleChange }
          />

          {category1 === "" ? "" :
            <Category2
              category1 = { category1 }
              category2 = { category2 }
              handleChange = { this.handleChange }
            />
          }

          <Impact
            impact = { impact }
            handleChange = { this.handleChange }
          />

          <Priority
            priority = { priority }
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
