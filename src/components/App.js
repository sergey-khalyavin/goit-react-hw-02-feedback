import React, { Component } from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

import '../base.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = typeBtn => {
    this.setState(state => {
      return {
        [typeBtn]: state[typeBtn] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateState}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
