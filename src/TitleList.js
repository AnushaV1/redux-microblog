import React, {useState, useEffect} from "react";
import {useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTitlesFromAPI } from './actions/titles';
import { sendVoteToAPI } from './actions/posts';

function TitleList() {
    const [isLoading, setIsLoading] = useState(true);
    const titles = useSelector(state => state.titles);
    const dispatch = useDispatch();


    useEffect(
        function () {
            async function getTitle() {
                await dispatch(fetchTitlesFromAPI());
                setIsLoading(false);
            }
            if (isLoading) {
				getTitle();
			}
        }, [dispatch, isLoading]
    )

if(!isLoading && titles.length === 0) {
    return <b>No posts</b>
} 


if(isLoading) {
return (
    <div className="fa-3x"><i className="fas fa-spinner fa-pulse"></i></div>
)
}

const vote = (direction, id) =>{
    dispatch(sendVoteToAPI(id, direction))

}
return (
    <div className='row'>
        {titles.map((title) => (
            <div key={title.id} className='col'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='card-title'>
                            <Link to={'/' + title.id}>{title.title}</Link>
                        </div>
                        <div className='card-text'>
                            <i>{title.description}</i>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <small>{title.votes} votes</small>
                        <i
                            className='fas fa-thumbs-up text-success ml-2'
                            onClick={() => vote('up', title.id)}
                        />
                        <i
                            className='fas fa-thumbs-down text-danger ml-2'
                            onClick={() => vote('down', title.id)}
                        />
                    </div>
                </div>
            </div>
        ))}
    </div>
);
}

export default TitleList;