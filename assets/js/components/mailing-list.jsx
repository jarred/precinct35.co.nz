import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import ClassSet from 'classnames';

export default React.createClass({
  getInitialState(){
    return {
      state: 'ready'
    };
  },
  componentDidMount(){
  },
  render(){
    var spamStyle = {
      position: 'absolute',
      left: -5000
    }
    return <div className="mailing_list">
        <form
          action="//precinct35.us10.list-manage.com/subscribe/post?u=3380ffcd9a7ab08a1283bc5e6&amp;id=ab6da6b3a9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="mailing_list-form v-center"
          target="_blank"
          onSubmit={this.handleSubmit}>
        	<h2>Join our mailing list</h2>
          <input type="text" value="" placeholder="First name" name="FNAME" className="mailing_list-email" id="mce-FNAME" />
          <input type="text" value="" placeholder="Last name" name="LNAME" className="mailing_list-email" id="mce-LNAME" />
        	<input type="email" placeholder="email address" value="" name="EMAIL" className="mailing_list-email" id="mce-EMAIL" />
          <div style={spamStyle} aria-hidden="true">
            <input type="text" name="b_3380ffcd9a7ab08a1283bc5e6_ab6da6b3a9" tabIndex="-1" value="" />
          </div>
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="mailing_list-submit" />
      </form>
    </div>
  },
  handleSubmit(event){
    event.preventDefault();
  }
})
