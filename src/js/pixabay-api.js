import axios from 'axios';

export default async function getImagesByQuery(query, page) {
    // Ця функція повинна приймати два параметри query (пошукове слово, яке є рядком) та page (номер сторінки, яка є числом), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
    try {
        axios.defaults.baseURL = 'https://pixabay.com/api/';
        const response = await axios.get('', {
            params: {
                per_page: 15,
                page: 1,
                key: '50295834-c918df4fa87d72bde5e1e5104',
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            }
        });
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error, response.status);
        
    }
}