import React, {useState, useEffect} from 'react'
import FormSearch from './FormSearch'
import NewsData from './NewsData';
import firebase from '../../util/firebase'
const News = () => {

    const [textSearch, setTextSearch] = useState('')
    const [listNews, setListNews] = useState([]); 
    useEffect(() => {
        const dataNews = firebase.database().ref("News")
        dataNews.on('value', (snapshot) => {
            let unmounted = false;
            const list = snapshot.val();
            const data = []
            for (let id in list) {
                data.push({ id, ...list[id] })
            }
            if (!unmounted) {

                setListNews(data)
            }
            return () => {
                unmounted = true
            }
        })
    }, [])
    const searchText = (text) => {
         setTextSearch(text)
    }

    const result = [];
    listNews.filter((element, index) => element.title.indexOf(textSearch) !== -1)
    .map((element, index) =>{
        result.push(element)
    });
    console.log(result)
    
    return (
        <div className="mt-5">
            <FormSearch  getTextSearch={(text) => searchText(text)}/>
            <table className="table ">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">#</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Nội dung</th>
                        <th scope="col">Thời gian tạo</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, index) => (
                            <NewsData key={index} index={index} item={item}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default News
