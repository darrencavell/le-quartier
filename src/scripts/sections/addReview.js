/* eslint-disable indent */

import Button from '../components/button';
import Input from '../components/input';
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
    `;
  },
  async componentDidMount(props) {
    const { id } = props;

    const button = document.getElementById('add-review-button');
    const name = document.getElementById('add-review-name').value;
    const review = document.getElementById('add-review-data').value;

    button.addEventListener('click', async () => {
      console.log('asd')
      await API.INSERT_REVIEW({ id, name, review });
    });
  },
};

export default AddReview;
