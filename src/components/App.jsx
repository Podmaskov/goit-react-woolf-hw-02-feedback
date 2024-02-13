import React, { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import styles from './styles.module.css';

const OPTIONS = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelFeedback = event => {
    this.setState(prevState => ({
      [event.target.value]: ++prevState[event.target.value],
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good * 100) / total) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.handelFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!!this.countTotalFeedback() && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}

          {!this.countTotalFeedback() && (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
