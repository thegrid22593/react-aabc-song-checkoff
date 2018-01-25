import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');

class UserSignUpContinued extends React.Component {
   constructor(props) {
      super();

      this.state = {
         newUser: {
            firstName: '',
            lastName: '',
            singingPart: '',
            isPartLeader: null,
         },
      };
   }

   handleChange(e) {
      let change = {};
      change[e.target.name] = e.target.value;
      console.log('change', change);
      this.setState(change);
   }

   render() {
      return (
         <div class="user-sign-up-more-info-form">
            <h2>Please Fill In More Information About Yourself.</h2>
            <form>
               <label for="first-name">First Name</label>
               <input
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  id="first-name"
                  name="first-name"
               />
               <label for="last-name">Last Name</label>
               <input
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  id="last-name"
                  name="last-name"
               />
               <label class="singing-part-label">Singing Part</label>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="user-singing-part"
                  value="First Tenor"
               />
               <span>First Tenor</span>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="user-singing-part"
                  value="Second Tenor"
               />
               <span>Second Tenor</span>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="user-singing-part"
                  value="Baritone"
               />
               <span>Baritone</span>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="user-singing-part"
                  value="Bass"
               />
               <span>Bass</span>
               <label for="is-partleader">Partleader?</label>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  value="true"
                  name="is-partleader"
               />{' '}
               Yes
               <button type="button" onclick={this.updateUserInfo}>
                  Save
               </button>
            </form>
         </div>
      );
   }
}

module.exports = UserSignUpContinued;
