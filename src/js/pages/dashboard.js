import CheckUserAuth from './auth/check-user-auth';
import Stories from '../network/stories';

const Dashboard = {
  async init() {
    CheckUserAuth.checkLoginState();
    await this._initialData();
    // this._initialListener();
  },

  async _initialData() {
    const preloaderWrapper = document.getElementById('preloaderWrapper');
    preloaderWrapper.style.visibility = 'visible';
    try {
      const response = await Stories.getAllStories();
      const responseRecords = response.data;
      this._listStory = responseRecords.listStory;
      this._populateListStoryCard(this._listStory);
    } catch (error) {
      console.error(error);
    } finally {
      preloaderWrapper.style.visibility = 'hidden';
    }
  },

  _formatDate(isoDateString) {
    const isoDate = new Date(isoDateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return isoDate.toLocaleString('en-US', options);
  },

  _populateListStoryCard(listStory = []) {
    if (!Array.isArray(listStory)) {
      throw new Error(`Parameter listStory should be an array. The value is ${listStory}`);
    }

    const recordBodyCard = document.querySelector('#story-list');
    recordBodyCard.innerHTML = '';

    if (listStory.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }

    listStory.forEach((item, idx) => {
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listStory[idx]);
    });
  },

  _templateBodyCard(index, storyRecord) {
    const formattedDate = this._formatDate(storyRecord.createdAt);
    return `
      <card-story
        id="${storyRecord.id}"
        photoUrl="${storyRecord.photoUrl}"
        alt="${storyRecord.name}"
        class="poster"
        name="${storyRecord.name}"
        formattedDate="${formattedDate}"
        description="${storyRecord.description}"
      ></card-story>
    `;
  },

  _templateEmptyBodyCard() {
    return `
      <div class="text-center">Tidak ada list story</div>
    `;
  },
};

export default Dashboard;
