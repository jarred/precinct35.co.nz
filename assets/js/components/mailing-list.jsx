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
          action="//atomic.us12.list-manage.com/subscribe/post?u=aa09d0e5a44742b7c1c444765&amp;id=a3e9d7942c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="mailing_list-form v-center"
          target="_blank"
          onSubmit={this.handleSubmit}>
        	<h2>Join our mailing list</h2>
        	<input type="email" placeholder="enter your email address" value="" name="EMAIL" className="mailing_list-email" id="mce-EMAIL" />
          <div style={spamStyle} aria-hidden="true">
            <input type="text" name="b_aa09d0e5a44742b7c1c444765_a3e9d7942c" tabIndex="-1" value="" />
          </div>
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="mailing_list-submit" />
      </form>
    </div>;
  },
  handleSubmit(event){
    event.preventDefault();
  }
})
