import axios from 'axios';

const pixabayApi = (searchValue, page) => {
    const apiKey = '23968448-11f2d292972b337bbc3d525d1';
    const baseUrl = 'https://pixabay.com/api/';

    return axios(
        `${baseUrl}?q=${searchValue}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    );
};

export default pixabayApi;
