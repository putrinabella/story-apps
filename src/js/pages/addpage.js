import CheckUserAuth from './auth/check-user-auth';
import Stories from '../network/stories';

const Add = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData(formData)) {
      const preloaderWrapper = document.getElementById('preloaderWrapper');
      if (preloaderWrapper) {
        preloaderWrapper.style.visibility = 'visible';
      }
      try {
        const response = await Stories.addNewStory(formData);
        if (response.status === 201) {
          window.alert('New Stories added successfully');
          this._goToDashboardPage();
        } else {
          window.alert(`${response.response.data.message}`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (preloaderWrapper) {
          preloaderWrapper.style.visibility = 'hidden';
        }
      }
    }
  },

  _getFormData() {
    // const nameInput = document.querySelector('#validationCustomRecordName');
    // const dateInput = document.querySelector('#validationCustomDate');
    const evidenceInput = document.querySelector('#validationCustomEvidence');
    const descriptionInput = document.querySelector('#validationCustomNotes');

    return {
      // name: nameInput.value,
      // date: new Date(dateInput.value),
      // evidence: evidenceInput.files ? evidenceInput.files[0] : null,
      photo: evidenceInput.files[0],
      description: descriptionInput.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === '' || item === undefined || item === null,
    );

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/index.html';
  },
};

export default Add;
