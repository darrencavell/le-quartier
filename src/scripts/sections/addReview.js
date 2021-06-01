/* eslint-disable indent */

import Button from '../components/button';
import Input from '../components/input';
import Alert from '../components/alert';
import { Paragraph } from '../components/typography';
import API from '../globals/endpoint';

import '../../styles/sections/addReview.css';

const AddReview = {
  async render() {
    return `
      <div class="add-review-wrapper">
        <div class="add-review-form">
          ${Paragraph({ className: 'add-review-label', text: 'Full Name' })}
          ${Input({ id: 'add-review-name', placeholder: 'Full Name' })}
        </div>
        <div class="add-review-form">
          ${Paragraph({ className: 'add-review-label', text: 'Review' })}
          ${Input({ id: 'add-review-data', placeholder: 'Review' })}
        </div>
      </div>
      ${Button({
        className: 'add-review-button',
        id: 'add-review-button',
        children: 'Submit',
      })}
      ${Alert({ text: 'Thank you for inserting your review, this message will be dismiss in 3 seconds.', id: 'add-review-alert' })}
    `;
  },
  async componentDidMount(props) {
    const { id } = props;

    const button = document.getElementById('add-review-button');
    const name = document.getElementById('add-review-name');
    const review = document.getElementById('add-review-data');

    button.addEventListener('click', async () => {
      const response = await API.INSERT_REVIEW({ id, name: name.value, review: review.value });

      if (response.error === false) {
        const alert = document.getElementById('add-review-alert');
        alert.style.visibility = 'visible';
        alert.style.display = 'block';
        setTimeout(() => {
          name.value = '';
          review.value = '';
          alert.style.visibility = 'hidden';
          alert.style.display = 'none';
        }, 3000);
      }
    });
  },
};

export default AddReview;
