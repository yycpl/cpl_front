import React from 'react';

class FeedbackForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dd1: "default1",
        dd2: "default2",  
        fname: '',
        lname: '',
        emplID: '',
        branch:'',
        category:'',
        impact:'',
        priority:'',
        comments:'',
        dateStamp:''
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

          <label>
            Branch:
            <select name="branch" value={this.state.branch} onChange={this.handleChange}>
              <option value="bowness">Bowness</option>
              <option value="central">Central</option>
              <option value="countryHills">Country Hills</option>
              <option value="crowfoot">Crowfoot</option>
              <option value="fishCreek">Fish Creek</option>
              <option value="forestLawn">Forest Lawn</option>
              <option value="giuffreFamily">Giuffre Family</option>
              <option value="judithUmbach">Judith Umbach</option>
              <option value="louiseRiley">Louise Riley</option>
              <option value="memorialPark">Memorial Park</option>
              <option value="nichollsFamily">Nicholls Family</option>
              <option value="noseHill">Nose Hill</option>
              <option value="quarryPark">Quarry Park</option>
              <option value="rockyRidge">Rocky Ridge</option>
              <option value="saddletowne">Saddletowne</option>
              <option value="sageHill">Sage Hill</option>
              <option value="seton">Seton</option>
              <option value="shawnessy">Shawnessy</option>
              <option value="signalHill">Signal Hill</option>
              <option value="southwood">Southwood</option>
              <option value="villageSquare">Village Square</option>
            </select>
          </label><br></br>

          <label>
            Category:
            <select name="category" value={this.state.category} onChange={this.handleChange}>
              <option value="programs">Programs</option>
              <option value="services">Services</option>
              <option value="collections">Collections</option>
              <option value="bookableItems">Bookable Items</option>
              <option value="facilities">Faciliites</option>
              <option value="patrons">Patrons</option>
            </select>
          </label><br></br>

          <label>
            What is the impact?
            <select name="impact" value={this.state.impact} onChange={this.handleChange}>
              <option value="improve">Something we need to improve</option>
              <option value="more">Something we are doing well and should do more of</option>
              <option value="difficult">Something that can or does put us in a diffifult spot</option>
              <option value="takeon">Something that we should consider taking on</option>
            </select>
          </label><br></br>

          <label>
            Priority:
            <select name="priority" value={this.state.priority} onChange={this.handleChange}>
              <option value="not_not">Not urgent and not very important</option>
              <option value="urgent_not">Urgent to someone but not that important</option>
              <option value="not_important">Not urgent but very important</option>
              <option value="urgent_important">Urgent and important</option>
            </select>
          </label><br></br>

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